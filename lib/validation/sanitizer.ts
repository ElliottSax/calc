import { z } from 'zod'

// HTML sanitization to prevent XSS
export function sanitizeHTML(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .replace(/`/g, '&#96;')
    .replace(/=/g, '&#61;')
}

// Remove all HTML tags
export function stripHTML(input: string): string {
  return input.replace(/<[^>]*>/g, '')
}

// SQL injection prevention
export function escapeSQLString(input: string): string {
  return input
    .replace(/'/g, "''")
    .replace(/\\/g, '\\\\')
    .replace(/\0/g, '\\0')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\x1a/g, '\\Z')
}

// Validate and sanitize email
export function sanitizeEmail(email: string): string {
  const trimmed = email.trim().toLowerCase()
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(trimmed)) {
    throw new Error('Invalid email format')
  }

  return trimmed
}

// Validate and sanitize URL
export function sanitizeURL(url: string): string {
  try {
    const parsed = new URL(url)

    // Only allow http and https protocols
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      throw new Error('Invalid URL protocol')
    }

    return parsed.toString()
  } catch {
    throw new Error('Invalid URL format')
  }
}

// Sanitize phone number
export function sanitizePhoneNumber(phone: string): string {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, '')

  // Validate length (assuming US phone numbers)
  if (digits.length < 10 || digits.length > 11) {
    throw new Error('Invalid phone number length')
  }

  return digits
}

// Sanitize numeric input
export function sanitizeNumber(
  input: string | number,
  min?: number,
  max?: number
): number {
  const num = typeof input === 'string' ? parseFloat(input) : input

  if (isNaN(num)) {
    throw new Error('Invalid number')
  }

  if (min !== undefined && num < min) {
    throw new Error(`Number must be at least ${min}`)
  }

  if (max !== undefined && num > max) {
    throw new Error(`Number must be at most ${max}`)
  }

  return num
}

// Sanitize alphanumeric strings
export function sanitizeAlphanumeric(input: string): string {
  return input.replace(/[^a-zA-Z0-9]/g, '')
}

// Sanitize usernames
export function sanitizeUsername(username: string): string {
  const sanitized = username
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]/g, '')

  if (sanitized.length < 3 || sanitized.length > 30) {
    throw new Error('Username must be between 3 and 30 characters')
  }

  return sanitized
}

// Zod schemas for common validations
export const validationSchemas = {
  // Calculator input schema
  calculatorInput: z.object({
    initialInvestment: z.number()
      .min(0, 'Initial investment must be positive')
      .max(10000000, 'Initial investment too large'),
    monthlyContribution: z.number()
      .min(0, 'Monthly contribution must be positive')
      .max(100000, 'Monthly contribution too large'),
    annualDividendYield: z.number()
      .min(0, 'Dividend yield must be positive')
      .max(100, 'Dividend yield must be a percentage'),
    dividendGrowthRate: z.number()
      .min(-20, 'Dividend growth rate too negative')
      .max(50, 'Dividend growth rate too high'),
    sharePrice: z.number()
      .min(0.01, 'Share price must be positive')
      .max(100000, 'Share price too high'),
    years: z.number()
      .int('Years must be a whole number')
      .min(1, 'Minimum 1 year')
      .max(50, 'Maximum 50 years'),
  }),

  // Newsletter signup schema
  newsletterSignup: z.object({
    email: z.string()
      .email('Invalid email address')
      .max(255, 'Email too long'),
    firstName: z.string()
      .min(1, 'First name required')
      .max(50, 'First name too long')
      .optional(),
    lastName: z.string()
      .max(50, 'Last name too long')
      .optional(),
    interests: z.array(z.string()).optional(),
  }),

  // Contact form schema
  contactForm: z.object({
    name: z.string()
      .min(2, 'Name must be at least 2 characters')
      .max(100, 'Name too long'),
    email: z.string()
      .email('Invalid email address'),
    subject: z.string()
      .min(5, 'Subject must be at least 5 characters')
      .max(200, 'Subject too long'),
    message: z.string()
      .min(10, 'Message must be at least 10 characters')
      .max(5000, 'Message too long'),
    phone: z.string()
      .regex(/^\+?[\d\s-()]+$/, 'Invalid phone number')
      .optional(),
  }),

  // User registration schema
  userRegistration: z.object({
    username: z.string()
      .min(3, 'Username must be at least 3 characters')
      .max(30, 'Username too long')
      .regex(/^[a-zA-Z0-9_-]+$/, 'Username can only contain letters, numbers, hyphens, and underscores'),
    email: z.string()
      .email('Invalid email address'),
    password: z.string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[0-9]/, 'Password must contain at least one number')
      .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
    confirmPassword: z.string(),
    termsAccepted: z.boolean()
      .refine(val => val === true, 'You must accept the terms and conditions'),
  }).refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  }),

  // Affiliate tracking schema
  affiliateTracking: z.object({
    platform: z.string()
      .min(1, 'Platform required'),
    action: z.enum(['click', 'signup', 'deposit', 'trade']),
    value: z.number()
      .min(0)
      .optional(),
    userId: z.string()
      .optional(),
    metadata: z.record(z.any())
      .optional(),
  }),

  // Search query schema
  searchQuery: z.object({
    q: z.string()
      .min(2, 'Query too short')
      .max(100, 'Query too long')
      .transform(val => sanitizeHTML(val)),
    category: z.enum(['all', 'calculators', 'articles', 'brokers'])
      .optional(),
    sort: z.enum(['relevance', 'date', 'popularity'])
      .optional(),
    page: z.number()
      .int()
      .min(1)
      .optional(),
    limit: z.number()
      .int()
      .min(1)
      .max(100)
      .optional(),
  }),
}

// Validation wrapper function
export async function validateInput<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): Promise<T> {
  try {
    return await schema.parseAsync(data)
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error(
        `Validation failed: ${error.errors.map(e => e.message).join(', ')}`
      )
    }
    throw error
  }
}

// Request body validator middleware
export async function validateRequestBody<T>(
  request: Request,
  schema: z.ZodSchema<T>
): Promise<T> {
  try {
    const body = await request.json()
    return await validateInput(schema, body)
  } catch (error) {
    throw new Error(`Invalid request body: ${error}`)
  }
}

// Query params validator
export function validateQueryParams<T>(
  searchParams: URLSearchParams,
  schema: z.ZodSchema<T>
): T {
  const params: Record<string, any> = {}

  searchParams.forEach((value, key) => {
    // Handle arrays (multiple values with same key)
    if (params[key]) {
      if (Array.isArray(params[key])) {
        params[key].push(value)
      } else {
        params[key] = [params[key], value]
      }
    } else {
      params[key] = value
    }
  })

  return schema.parse(params)
}

// File upload validation
export function validateFileUpload(
  file: File,
  options: {
    maxSize?: number // in bytes
    allowedTypes?: string[]
    allowedExtensions?: string[]
  } = {}
): void {
  const {
    maxSize = 5 * 1024 * 1024, // 5MB default
    allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'],
    allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.pdf'],
  } = options

  // Check file size
  if (file.size > maxSize) {
    throw new Error(`File size exceeds ${maxSize / 1024 / 1024}MB limit`)
  }

  // Check file type
  if (allowedTypes.length > 0 && !allowedTypes.includes(file.type)) {
    throw new Error(`File type ${file.type} not allowed`)
  }

  // Check file extension
  const extension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase()
  if (allowedExtensions.length > 0 && !allowedExtensions.includes(extension)) {
    throw new Error(`File extension ${extension} not allowed`)
  }
}
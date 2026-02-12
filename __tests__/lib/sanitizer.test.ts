import { describe, it, expect } from 'vitest'
import {
  sanitizeHTML,
  stripHTML,
  escapeSQLString,
  sanitizeEmail,
  sanitizeURL,
  sanitizePhoneNumber,
  sanitizeNumber,
  sanitizeAlphanumeric,
  sanitizeUsername,
  validationSchemas,
} from '@/lib/validation/sanitizer'

describe('sanitizeHTML', () => {
  it('escapes script tags', () => {
    const result = sanitizeHTML('<script>alert("xss")</script>')
    expect(result).not.toContain('<script>')
    expect(result).not.toContain('</script>')
  })

  it('escapes event handlers', () => {
    const result = sanitizeHTML('<img onerror="alert(1)">')
    expect(result).not.toContain('<img')
    expect(result).toContain('&lt;')
  })

  it('escapes angle brackets', () => {
    expect(sanitizeHTML('<div>')).toContain('&lt;')
    expect(sanitizeHTML('<div>')).toContain('&gt;')
  })

  it('escapes quotes', () => {
    expect(sanitizeHTML('"hello"')).toContain('&quot;')
    expect(sanitizeHTML("'hello'")).toContain('&#x27;')
  })

  it('escapes backticks', () => {
    expect(sanitizeHTML('`code`')).toContain('&#96;')
  })

  it('escapes equals signs', () => {
    expect(sanitizeHTML('a=b')).toContain('&#61;')
  })

  it('returns empty string for empty input', () => {
    expect(sanitizeHTML('')).toBe('')
  })
})

describe('stripHTML', () => {
  it('removes HTML tags but keeps content', () => {
    expect(stripHTML('<p>Hello <b>world</b></p>')).toBe('Hello world')
  })

  it('removes self-closing tags', () => {
    expect(stripHTML('before<br/>after')).toBe('beforeafter')
  })

  it('returns plain text unchanged', () => {
    expect(stripHTML('no tags here')).toBe('no tags here')
  })
})

describe('escapeSQLString', () => {
  it('escapes single quotes', () => {
    expect(escapeSQLString("O'Brien")).toBe("O''Brien")
  })

  it('escapes backslashes', () => {
    expect(escapeSQLString('path\\to')).toBe('path\\\\to')
  })

  it('escapes null bytes', () => {
    expect(escapeSQLString('null\0byte')).toBe('null\\0byte')
  })

  it('escapes newlines', () => {
    expect(escapeSQLString('line\nbreak')).toBe('line\\nbreak')
  })

  it('handles typical SQL injection string', () => {
    const result = escapeSQLString("'; DROP TABLE users; --")
    expect(result).not.toContain("';")
    expect(result).toContain("''")
  })
})

describe('sanitizeEmail', () => {
  it('accepts valid email and lowercases it', () => {
    expect(sanitizeEmail('User@Example.COM')).toBe('user@example.com')
  })

  it('trims whitespace', () => {
    expect(sanitizeEmail('  test@test.com  ')).toBe('test@test.com')
  })

  it('throws on invalid email - missing @', () => {
    expect(() => sanitizeEmail('invalid-email')).toThrow('Invalid email format')
  })

  it('throws on invalid email - missing domain', () => {
    expect(() => sanitizeEmail('user@')).toThrow('Invalid email format')
  })

  it('throws on empty string', () => {
    expect(() => sanitizeEmail('')).toThrow('Invalid email format')
  })
})

describe('sanitizeURL', () => {
  it('accepts valid https URL', () => {
    expect(sanitizeURL('https://example.com/path')).toBe('https://example.com/path')
  })

  it('accepts valid http URL', () => {
    expect(sanitizeURL('http://example.com')).toContain('http')
  })

  it('rejects javascript: protocol', () => {
    expect(() => sanitizeURL('javascript:alert(1)')).toThrow()
  })

  it('rejects data: protocol', () => {
    expect(() => sanitizeURL('data:text/html,<h1>hi</h1>')).toThrow()
  })

  it('rejects invalid URL', () => {
    expect(() => sanitizeURL('not a url')).toThrow()
  })
})

describe('sanitizePhoneNumber', () => {
  it('extracts digits from formatted number', () => {
    expect(sanitizePhoneNumber('(555) 123-4567')).toBe('5551234567')
  })

  it('accepts 10-digit number', () => {
    expect(sanitizePhoneNumber('5551234567')).toBe('5551234567')
  })

  it('accepts 11-digit number (with country code)', () => {
    expect(sanitizePhoneNumber('15551234567')).toBe('15551234567')
  })

  it('throws for too-short number', () => {
    expect(() => sanitizePhoneNumber('12345')).toThrow('Invalid phone number length')
  })

  it('throws for too-long number', () => {
    expect(() => sanitizePhoneNumber('123456789012')).toThrow('Invalid phone number length')
  })
})

describe('sanitizeNumber', () => {
  it('parses string to number', () => {
    expect(sanitizeNumber('42')).toBe(42)
  })

  it('passes through numeric input', () => {
    expect(sanitizeNumber(3.14)).toBe(3.14)
  })

  it('throws for NaN', () => {
    expect(() => sanitizeNumber('not-a-number')).toThrow('Invalid number')
  })

  it('throws when below min', () => {
    expect(() => sanitizeNumber(5, 10)).toThrow('at least 10')
  })

  it('throws when above max', () => {
    expect(() => sanitizeNumber(100, undefined, 50)).toThrow('at most 50')
  })

  it('accepts value within bounds', () => {
    expect(sanitizeNumber(25, 0, 100)).toBe(25)
  })
})

describe('sanitizeAlphanumeric', () => {
  it('removes special characters', () => {
    expect(sanitizeAlphanumeric('hello-world!')).toBe('helloworld')
  })

  it('keeps letters and digits', () => {
    expect(sanitizeAlphanumeric('abc123')).toBe('abc123')
  })

  it('removes spaces', () => {
    expect(sanitizeAlphanumeric('hello world')).toBe('helloworld')
  })
})

describe('sanitizeUsername', () => {
  it('lowercases and trims', () => {
    expect(sanitizeUsername(' UserName ')).toBe('username')
  })

  it('keeps hyphens and underscores', () => {
    expect(sanitizeUsername('user-name_1')).toBe('user-name_1')
  })

  it('removes disallowed characters', () => {
    expect(sanitizeUsername('user@name!')).toBe('username')
  })

  it('throws for username too short', () => {
    expect(() => sanitizeUsername('ab')).toThrow('between 3 and 30')
  })

  it('throws for username too long', () => {
    expect(() => sanitizeUsername('a'.repeat(31))).toThrow('between 3 and 30')
  })
})

describe('Zod schemas', () => {
  describe('calculatorInput', () => {
    it('accepts valid input', () => {
      const result = validationSchemas.calculatorInput.safeParse({
        initialInvestment: 10000,
        monthlyContribution: 500,
        annualDividendYield: 4,
        dividendGrowthRate: 7,
        sharePrice: 100,
        years: 10,
      })
      expect(result.success).toBe(true)
    })

    it('rejects negative initial investment', () => {
      const result = validationSchemas.calculatorInput.safeParse({
        initialInvestment: -100,
        monthlyContribution: 500,
        annualDividendYield: 4,
        dividendGrowthRate: 7,
        sharePrice: 100,
        years: 10,
      })
      expect(result.success).toBe(false)
    })

    it('rejects years > 50', () => {
      const result = validationSchemas.calculatorInput.safeParse({
        initialInvestment: 10000,
        monthlyContribution: 500,
        annualDividendYield: 4,
        dividendGrowthRate: 7,
        sharePrice: 100,
        years: 51,
      })
      expect(result.success).toBe(false)
    })
  })

  describe('newsletterSignup', () => {
    it('accepts valid email with optional fields', () => {
      const result = validationSchemas.newsletterSignup.safeParse({
        email: 'test@example.com',
      })
      expect(result.success).toBe(true)
    })

    it('rejects invalid email', () => {
      const result = validationSchemas.newsletterSignup.safeParse({
        email: 'not-an-email',
      })
      expect(result.success).toBe(false)
    })

    it('accepts optional firstName', () => {
      const result = validationSchemas.newsletterSignup.safeParse({
        email: 'test@example.com',
        firstName: 'John',
      })
      expect(result.success).toBe(true)
    })
  })

  describe('userRegistration', () => {
    const validReg = {
      username: 'testuser',
      email: 'test@example.com',
      password: 'Str0ng!Pass',
      confirmPassword: 'Str0ng!Pass',
      termsAccepted: true,
    }

    it('accepts valid registration', () => {
      const result = validationSchemas.userRegistration.safeParse(validReg)
      expect(result.success).toBe(true)
    })

    it('rejects mismatched passwords', () => {
      const result = validationSchemas.userRegistration.safeParse({
        ...validReg,
        confirmPassword: 'Different1!',
      })
      expect(result.success).toBe(false)
    })

    it('rejects weak password (no uppercase)', () => {
      const result = validationSchemas.userRegistration.safeParse({
        ...validReg,
        password: 'weak1pass!',
        confirmPassword: 'weak1pass!',
      })
      expect(result.success).toBe(false)
    })

    it('rejects when terms not accepted', () => {
      const result = validationSchemas.userRegistration.safeParse({
        ...validReg,
        termsAccepted: false,
      })
      expect(result.success).toBe(false)
    })

    it('rejects username with special characters', () => {
      const result = validationSchemas.userRegistration.safeParse({
        ...validReg,
        username: 'user@name!',
      })
      expect(result.success).toBe(false)
    })
  })
})

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import crypto from 'crypto';

/**
 * POST /api/email/capture
 * Capture email addresses for dividendengines.com
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, source } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Hash email for privacy
    const emailHash = crypto
      .createHash('sha256')
      .update(email.toLowerCase())
      .digest('hex');

    // Check if email already exists for this site
    const existingEmail = await prisma.emailSubscriber.findUnique({
      where: {
        email_site: {
          email: email.toLowerCase(),
          site: 'calc',
        },
      },
    });

    if (existingEmail) {
      return NextResponse.json({
        success: true,
        message: 'Email already subscribed',
        isNew: false,
      });
    }

    // Create new subscriber
    const subscriber = await prisma.emailSubscriber.create({
      data: {
        email: email.toLowerCase(),
        emailHash,
        site: 'calc',
        source: source || 'footer',
        consentedAt: new Date(),
        sessionId: request.cookies.get('session_id')?.value || `session_${Date.now()}`,
        ipAddress: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you for subscribing!',
      isNew: true,
      timestamp: subscriber.createdAt,
    });
  } catch (error) {
    console.error('Email capture error:', error);
    return NextResponse.json(
      { error: 'Failed to capture email' },
      { status: 500 }
    );
  }
}

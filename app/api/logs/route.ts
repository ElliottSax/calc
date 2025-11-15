import { NextRequest, NextResponse } from 'next/server'
import { logger } from '@/lib/logger'

export async function POST(request: NextRequest) {
  try {
    const { logs } = await request.json()
    
    if (!Array.isArray(logs)) {
      return NextResponse.json(
        { error: 'Invalid log format' },
        { status: 400 }
      )
    }
    
    // Process browser logs on the server
    logs.forEach(log => {
      const logData = {
        ...log.data,
        browser: true,
        timestamp: log.timestamp,
        domain: log.domain || 'browser'
      }
      
      switch (log.level) {
        case 'debug':
          logger.debug(logData, log.message)
          break
        case 'info':
          logger.info(logData, log.message)
          break
        case 'warn':
          logger.warn(logData, log.message)
          break
        case 'error':
          logger.error(logData, log.message)
          break
      }
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    logger.error({ error }, 'Failed to process browser logs')
    return NextResponse.json(
      { error: 'Failed to process logs' },
      { status: 500 }
    )
  }
}
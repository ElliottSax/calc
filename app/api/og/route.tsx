/**
 * Dynamic Open Graph image generator
 * Creates custom social sharing images for different content types
 */

import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    const title = searchParams.get('title') || 'Dividend Calculator Hub'
    const description = searchParams.get('description') || 'Free dividend calculators and investment tools'
    const type = searchParams.get('type') as 'stock' | 'article' | 'calculator' || 'default'
    const symbol = searchParams.get('symbol')
    const yieldValue = searchParams.get('yield')
    const price = searchParams.get('price')
    
    // Dynamic styling based on type
    const getBackgroundGradient = () => {
      switch (type) {
        case 'stock':
          return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        case 'article':
          return 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        case 'calculator':
          return 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
        default:
          return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }
    }
    
    const getIcon = () => {
      switch (type) {
        case 'stock':
          return '📈'
        case 'article':
          return '📖'
        case 'calculator':
          return '🔧'
        default:
          return '💰'
      }
    }
    
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: getBackgroundGradient(),
            fontSize: 32,
            fontWeight: 600,
            color: 'white',
            position: 'relative'
          }}
        >
          {/* Background Pattern */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              opacity: 0.3
            }}
          />
          
          {/* Content Container */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              maxWidth: '900px',
              margin: '0 40px',
              textAlign: 'center',
              zIndex: 1
            }}
          >
            {/* Icon */}
            <div
              style={{
                fontSize: 80,
                marginBottom: 20
              }}
            >
              {getIcon()}
            </div>
            
            {/* Title */}
            <div
              style={{
                fontSize: 48,
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: 20,
                maxWidth: '800px'
              }}
            >
              {title}
            </div>
            
            {/* Stock-specific info */}
            {type === 'stock' && symbol && (
              <div
                style={{
                  display: 'flex',
                  gap: 40,
                  marginBottom: 20,
                  fontSize: 24,
                  fontWeight: 500
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span>Symbol:</span>
                  <span style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    padding: '8px 16px',
                    borderRadius: 8
                  }}>
                    {symbol}
                  </span>
                </div>
                {yieldValue && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span>Yield:</span>
                    <span style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      padding: '8px 16px',
                      borderRadius: 8
                    }}>
                      {parseFloat(yieldValue).toFixed(2)}%
                    </span>
                  </div>
                )}
                {price && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span>Price:</span>
                    <span style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      padding: '8px 16px',
                      borderRadius: 8
                    }}>
                      ${parseFloat(price).toFixed(2)}
                    </span>
                  </div>
                )}
              </div>
            )}
            
            {/* Description */}
            {description && (
              <div
                style={{
                  fontSize: 24,
                  lineHeight: 1.4,
                  opacity: 0.9,
                  maxWidth: '700px',
                  marginBottom: 30
                }}
              >
                {description}
              </div>
            )}
            
            {/* Footer */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                fontSize: 20,
                opacity: 0.8
              }}
            >
              <span>📊</span>
              <span>DividendCalculatorHub.com</span>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e) {
    console.log(`Failed to generate OG image: ${e}`)
    
    // Fallback image
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1e293b',
            fontSize: 32,
            fontWeight: 600,
            color: 'white',
          }}
        >
          <div style={{ fontSize: 80, marginBottom: 20 }}>💰</div>
          <div>Dividend Calculator Hub</div>
          <div style={{ fontSize: 24, opacity: 0.8, marginTop: 10 }}>
            Free dividend calculators and investment tools
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  }
}
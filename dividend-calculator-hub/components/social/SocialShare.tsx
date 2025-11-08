"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  Share2, 
  Twitter, 
  Facebook, 
  Linkedin, 
  Mail, 
  Link2, 
  Copy,
  Check
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface SocialShareProps {
  title: string
  description?: string
  url?: string
  hashtags?: string[]
  className?: string
}

export function SocialShare({ 
  title, 
  description = '', 
  url,
  hashtags = [],
  className = ''
}: SocialShareProps) {
  const [copied, setCopied] = useState(false)
  
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '')
  const shareText = description || title
  const hashtagString = hashtags.join(',') || 'DividendInvesting,PassiveIncome,StockMarket'
  
  const socialLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}&hashtags=${hashtagString}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(shareText + '\n\n' + shareUrl)}`
  }
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      
      // Track copy event
      if (typeof gtag !== 'undefined') {
        gtag('event', 'share', {
          method: 'copy_link',
          content_type: 'url',
          content_id: shareUrl
        })
      }
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }
  
  const handleShare = (platform: string, url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer,width=600,height=400')
    
    // Track share event
    if (typeof gtag !== 'undefined') {
      gtag('event', 'share', {
        method: platform,
        content_type: 'article',
        content_id: shareUrl
      })
    }
  }
  
  // Native Web Share API support
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url: shareUrl
        })
        
        if (typeof gtag !== 'undefined') {
          gtag('event', 'share', {
            method: 'native',
            content_type: 'article',
            content_id: shareUrl
          })
        }
      } catch (err) {
        console.error('Native share failed:', err)
      }
    }
  }
  
  return (
    <div className={className}>
      {/* Native share button for mobile */}
      {typeof navigator !== 'undefined' && navigator.share && (
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleNativeShare}
          className="mr-2"
        >
          <Share2 className="h-4 w-4 mr-2" />
          Share
        </Button>
      )}
      
      {/* Social share dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem 
            onClick={() => handleShare('twitter', socialLinks.twitter)}
            className="cursor-pointer"
          >
            <Twitter className="h-4 w-4 mr-2 text-blue-400" />
            Twitter
          </DropdownMenuItem>
          
          <DropdownMenuItem 
            onClick={() => handleShare('facebook', socialLinks.facebook)}
            className="cursor-pointer"
          >
            <Facebook className="h-4 w-4 mr-2 text-blue-600" />
            Facebook
          </DropdownMenuItem>
          
          <DropdownMenuItem 
            onClick={() => handleShare('linkedin', socialLinks.linkedin)}
            className="cursor-pointer"
          >
            <Linkedin className="h-4 w-4 mr-2 text-blue-700" />
            LinkedIn
          </DropdownMenuItem>
          
          <DropdownMenuItem 
            onClick={() => window.location.href = socialLinks.email}
            className="cursor-pointer"
          >
            <Mail className="h-4 w-4 mr-2 text-gray-600" />
            Email
          </DropdownMenuItem>
          
          <DropdownMenuItem 
            onClick={copyToClipboard}
            className="cursor-pointer"
          >
            {copied ? (
              <Check className="h-4 w-4 mr-2 text-green-600" />
            ) : (
              <Copy className="h-4 w-4 mr-2 text-gray-600" />
            )}
            {copied ? 'Copied!' : 'Copy Link'}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

/**
 * Quick share buttons for specific platforms
 */
interface QuickShareProps {
  title: string
  url?: string
  className?: string
}

export function TwitterShare({ title, url, className = '' }: QuickShareProps) {
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '')
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}&hashtags=DividendInvesting,PassiveIncome`
  
  return (
    <Button 
      variant="outline" 
      size="sm"
      className={`text-blue-400 border-blue-400 hover:bg-blue-50 ${className}`}
      onClick={() => window.open(twitterUrl, '_blank', 'width=600,height=400')}
    >
      <Twitter className="h-4 w-4 mr-2" />
      Tweet
    </Button>
  )
}

export function LinkedInShare({ title, url, className = '' }: QuickShareProps) {
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '')
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`
  
  return (
    <Button 
      variant="outline" 
      size="sm"
      className={`text-blue-700 border-blue-700 hover:bg-blue-50 ${className}`}
      onClick={() => window.open(linkedinUrl, '_blank', 'width=600,height=400')}
    >
      <Linkedin className="h-4 w-4 mr-2" />
      Share
    </Button>
  )
}
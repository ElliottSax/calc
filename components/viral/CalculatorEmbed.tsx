"use client"

import { useState } from 'react'
import { Copy, Check, Code, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export function CalculatorEmbedGenerator() {
  const [embedSize, setEmbedSize] = useState<'small' | 'medium' | 'large'>('medium')
  const [embedTheme, setEmbedTheme] = useState<'light' | 'dark' | 'auto'>('light')
  const [copied, setCopied] = useState(false)

  const embedCode = generateEmbedCode(embedSize, embedTheme)
  const iframeCode = generateIframeCode(embedSize, embedTheme)

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold">Embed Our Calculator</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          Add a free dividend calculator to your website
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Badge variant="outline" className="text-sm">100% Free</Badge>
          <Badge variant="outline" className="text-sm">Mobile Responsive</Badge>
          <Badge variant="outline" className="text-sm">No Registration</Badge>
          <Badge variant="outline" className="text-sm">Instant Setup</Badge>
        </div>
      </div>

      {/* Configuration */}
      <Card>
        <CardHeader>
          <CardTitle>Customize Your Embed</CardTitle>
          <CardDescription>
            Choose the size and theme that fits your website
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label htmlFor="size">Calculator Size</Label>
              <Select value={embedSize} onValueChange={(value: any) => setEmbedSize(value)}>
                <SelectTrigger id="size">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">Small (400px)</SelectItem>
                  <SelectItem value="medium">Medium (600px) - Recommended</SelectItem>
                  <SelectItem value="large">Large (100% width)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label htmlFor="theme">Color Theme</Label>
              <Select value={embedTheme} onValueChange={(value: any) => setEmbedTheme(value)}>
                <SelectTrigger id="theme">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="auto">Auto (Match Visitor)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Preview */}
          <div className="space-y-3">
            <Label>Preview</Label>
            <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4 bg-slate-50 dark:bg-slate-900">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
                <div className="text-center text-slate-400 py-12">
                  <Code className="w-12 h-12 mx-auto mb-3" />
                  <p className="text-sm">Calculator preview will appear here</p>
                  <p className="text-xs mt-2">
                    Size: {getSizeLabel(embedSize)} | Theme: {embedTheme}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Embed Code */}
      <Card>
        <CardHeader>
          <CardTitle>Embed Code</CardTitle>
          <CardDescription>
            Copy and paste this code into your website
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="script">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="script">
                JavaScript Embed (Recommended)
              </TabsTrigger>
              <TabsTrigger value="iframe">
                iFrame Embed
              </TabsTrigger>
            </TabsList>

            <TabsContent value="script" className="space-y-4">
              <div className="relative">
                <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{embedCode}</code>
                </pre>
                <Button
                  onClick={() => copyToClipboard(embedCode)}
                  size="sm"
                  variant="outline"
                  className="absolute top-2 right-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Code
                    </>
                  )}
                </Button>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  How to Use
                </h4>
                <ol className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li>1. Paste the code where you want the calculator to appear</li>
                  <li>2. The calculator will load automatically</li>
                  <li>3. It's responsive and works on all devices</li>
                </ol>
              </div>
            </TabsContent>

            <TabsContent value="iframe" className="space-y-4">
              <div className="relative">
                <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{iframeCode}</code>
                </pre>
                <Button
                  onClick={() => copyToClipboard(iframeCode)}
                  size="sm"
                  variant="outline"
                  className="absolute top-2 right-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Code
                    </>
                  )}
                </Button>
              </div>

              <div className="bg-amber-50 dark:bg-amber-950 border-l-4 border-amber-600 p-4 rounded-r-lg">
                <h4 className="font-semibold mb-2">Note on iFrame</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  iFrame embeds work everywhere but may have limitations with responsiveness.
                  We recommend the JavaScript embed for better performance.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Benefits Section */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="font-semibold mb-2">Boost Engagement</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Interactive calculators keep visitors on your site 3x longer
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 text-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <ExternalLink className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-semibold mb-2">Add Value</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Provide real tools to your audience without building them yourself
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 text-center">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="font-semibold mb-2">Easy Setup</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Copy, paste, done. No coding knowledge required
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Terms */}
      <Card className="bg-slate-50 dark:bg-slate-900">
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-3">Terms of Use</h3>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li>✓ Free to use on any website</li>
            <li>✓ Keep the "Powered by" attribution link</li>
            <li>✓ No modifications to the embed code</li>
            <li>✓ Works on blogs, news sites, financial portals, etc.</li>
            <li>✓ Unlimited page views and usage</li>
          </ul>
          <p className="text-xs text-slate-500 mt-4">
            By using this embed, you agree to display the calculator as-is with attribution.
            We may update the calculator features over time to improve functionality.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

/**
 * Generate JavaScript embed code
 */
function generateEmbedCode(size: string, theme: string): string {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://yourdomain.com'
  const width = size === 'small' ? '400px' : size === 'medium' ? '600px' : '100%'
  const height = size === 'small' ? '600px' : size === 'medium' ? '800px' : '1000px'

  return `<!-- Dividend Calculator Embed -->
<div id="dividend-calculator-embed" style="max-width: ${width}; margin: 0 auto;"></div>
<script>
  (function() {
    var script = document.createElement('script');
    script.src = '${siteUrl}/embed/calculator.js?theme=${theme}&size=${size}';
    script.async = true;
    document.getElementById('dividend-calculator-embed').appendChild(script);
  })();
</script>
<!-- End Dividend Calculator Embed -->`
}

/**
 * Generate iFrame embed code
 */
function generateIframeCode(size: string, theme: string): string {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://yourdomain.com'
  const width = size === 'small' ? '400' : size === 'medium' ? '600' : '100%'
  const height = size === 'small' ? '600' : size === 'medium' ? '800' : '1000'

  return `<iframe
  src="${siteUrl}/embed/calculator?theme=${theme}"
  width="${width}"
  height="${height}"
  frameborder="0"
  style="border: none; max-width: 100%;"
  title="Dividend Reinvestment Calculator"
></iframe>`
}

function getSizeLabel(size: string): string {
  switch (size) {
    case 'small':
      return '400px'
    case 'medium':
      return '600px'
    case 'large':
      return '100% width'
    default:
      return 'Medium'
  }
}

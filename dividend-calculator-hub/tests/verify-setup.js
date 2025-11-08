#!/usr/bin/env node
/**
 * Quick setup verification script
 * Run with: node tests/verify-setup.js
 */

const fs = require('fs')
const path = require('path')

class SetupVerifier {
  constructor() {
    this.results = []
    this.projectRoot = process.cwd()
  }
  
  verify() {
    console.log('🔍 Verifying project setup...')
    console.log('=' .repeat(50))
    
    this.checkFiles()
    this.checkDependencies()
    this.checkConfiguration()
    this.generateReport()
  }
  
  checkFiles() {
    const requiredFiles = [
      'package.json',
      'next.config.js',
      'tailwind.config.ts',
      'tsconfig.json',
      '.env.local.example',
      'TESTING.md',
      'app/layout.tsx',
      'app/page.tsx',
      'components/calculators/DripCalculator.tsx',
      'lib/testing/mock-api.ts',
      'tests/setup/test-procedures.md'
    ]
    
    console.log('📁 Checking required files...')
    
    requiredFiles.forEach(file => {
      const filePath = path.join(this.projectRoot, file)
      const exists = fs.existsSync(filePath)
      
      this.results.push({
        type: 'file',
        name: file,
        exists,
        status: exists ? '✅' : '❌'
      })
      
      console.log(`  ${exists ? '✅' : '❌'} ${file}`)
    })
  }
  
  checkDependencies() {
    console.log('\n📦 Checking key dependencies...')
    
    try {
      const packageJson = JSON.parse(
        fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8')
      )
      
      const keyDeps = [
        'next',
        'react',
        'typescript',
        '@supabase/supabase-js',
        'big.js',
        'lucide-react',
        'tailwindcss'
      ]
      
      keyDeps.forEach(dep => {
        const inDeps = packageJson.dependencies?.[dep]
        const inDevDeps = packageJson.devDependencies?.[dep]
        const installed = !!(inDeps || inDevDeps)
        
        this.results.push({
          type: 'dependency',
          name: dep,
          installed,
          version: inDeps || inDevDeps || 'Not found'
        })
        
        console.log(`  ${installed ? '✅' : '❌'} ${dep} ${installed ? `(${inDeps || inDevDeps})` : ''}`)
      })
      
    } catch (error) {
      console.log('  ❌ Error reading package.json:', error.message)
    }
  }
  
  checkConfiguration() {
    console.log('\n⚙️  Checking configuration...')
    
    // Check if .env.local exists
    const envLocal = fs.existsSync(path.join(this.projectRoot, '.env.local'))
    console.log(`  ${envLocal ? '✅' : '⚠️ '} .env.local ${envLocal ? 'exists' : 'not found (copy from .env.local.example)'}`)
    
    // Check TypeScript config
    try {
      const tsconfig = JSON.parse(
        fs.readFileSync(path.join(this.projectRoot, 'tsconfig.json'), 'utf8')
      )
      const hasNext = tsconfig.compilerOptions?.types?.includes('next') || tsconfig.extends?.includes('next')
      console.log(`  ${hasNext ? '✅' : '⚠️ '} TypeScript configured for Next.js`)
    } catch (error) {
      console.log(`  ❌ TypeScript config error: ${error.message}`)
    }
    
    // Check Tailwind config
    const tailwindExists = fs.existsSync(path.join(this.projectRoot, 'tailwind.config.ts'))
    console.log(`  ${tailwindExists ? '✅' : '❌'} Tailwind CSS config`)
    
    this.results.push({
      type: 'config',
      envLocal,
      tailwindExists
    })
  }
  
  generateReport() {
    console.log('\n' + '=' .repeat(50))
    console.log('📈 SETUP VERIFICATION REPORT')
    console.log('=' .repeat(50))
    
    const fileResults = this.results.filter(r => r.type === 'file')
    const depResults = this.results.filter(r => r.type === 'dependency')
    const configResults = this.results.filter(r => r.type === 'config')
    
    const filesOk = fileResults.filter(r => r.exists).length
    const depsOk = depResults.filter(r => r.installed).length
    
    console.log(`\n📊 Summary:`)
    console.log(`  Files: ${filesOk}/${fileResults.length} present`)
    console.log(`  Dependencies: ${depsOk}/${depResults.length} installed`)
    console.log(`  Configuration: ${configResults[0]?.envLocal ? 'Ready' : 'Needs .env.local'}`)
    
    const overall = filesOk === fileResults.length && depsOk === depResults.length
    console.log(`\n${overall ? '✅' : '❌'} Overall Status: ${overall ? 'READY FOR TESTING' : 'SETUP REQUIRED'}`)
    
    if (!overall) {
      console.log('\n💡 Next Steps:')
      
      if (filesOk < fileResults.length) {
        console.log('  1. Ensure all required files are present')
      }
      
      if (depsOk < depResults.length) {
        console.log('  2. Install missing dependencies: npm install')
      }
      
      if (!configResults[0]?.envLocal) {
        console.log('  3. Copy .env.local.example to .env.local')
      }
      
      console.log('  4. Run: npm run dev')
      console.log('  5. Follow testing procedures in TESTING.md')
    } else {
      console.log('\n🎉 Ready to start testing!')
      console.log('\nNext commands:')
      console.log('  npm run dev        # Start development server')
      console.log('  npm run validate   # Check types and linting')
      console.log('  npm run build      # Test production build')
    }
  }
}

// Run verification
if (require.main === module) {
  const verifier = new SetupVerifier()
  verifier.verify()
}

module.exports = SetupVerifier
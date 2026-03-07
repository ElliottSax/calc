#!/usr/bin/env python3
"""
Fix TypeScript errors in Calc project
- Remove invalid lucide-react imports
- Fix InlineBrokerCTA prop issues
- Clean up unused imports
"""

import re
from pathlib import Path

# Invalid lucide-react imports that need to be removed
INVALID_IMPORTS = [
    'I', 'O', 'With', 'Color', 'BrokerRow', 'FeatureCard',
    'Float', 'M', 'Vie', 'L', 'Exxon', 'Morgan', 'T', 'P',
    'G', 'Walmart', 'J', 'Score', 'StockCard'
]

# Files with TypeScript errors
ERROR_FILES = [
    'app/blog/JEPQ-vs-JEPI-comparison/page.tsx',
    'app/blog/VOO-vs-SCHD-comparison/page.tsx',
    'app/blog/best-ai-dividend-stocks-2026/page.tsx',
    'app/blog/dividend-investing-mistakes-to-avoid/page.tsx',
    'app/blog/highest-paying-dividend-stocks/page.tsx',
    'app/blog/how-to-choose-dividend-broker/page.tsx',
    'app/blog/is-3m-good-dividend-stock/page.tsx',
    'app/blog/is-abbvie-good-dividend-stock/page.tsx',
    'app/blog/is-apple-good-dividend-stock/page.tsx',
    'app/blog/is-coca-cola-good-dividend-stock/page.tsx',
    'app/blog/is-exxon-mobil-good-dividend-stock/page.tsx',
    'app/blog/is-jpmorgan-good-dividend-stock/page.tsx',
    'app/blog/is-microsoft-good-dividend-stock/page.tsx',
    'app/blog/is-pepsi-good-dividend-stock/page.tsx',
    'app/blog/is-procter-gamble-good-dividend-stock/page.tsx',
    'app/blog/is-walmart-good-dividend-stock/page.tsx',
    'app/blog/johnson-and-johnson-dividend-analysis/page.tsx',
    'app/blog/safest-dividend-stocks-2026/page.tsx',
    'app/blog/top-dividend-aristocrats-2026/page.tsx',
]

def fix_invalid_imports(filepath):
    """Remove invalid lucide-react imports from file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        original = content

        # Find import statements from lucide-react
        import_pattern = r"import\s+\{([^}]+)\}\s+from\s+['\"]lucide-react['\"]"

        def clean_imports(match):
            imports = match.group(1)
            # Split by comma, clean whitespace
            import_list = [imp.strip() for imp in imports.split(',')]
            # Remove invalid imports
            valid_imports = [imp for imp in import_list if imp not in INVALID_IMPORTS]

            if not valid_imports:
                # Remove entire import line if no valid imports remain
                return ''

            # Reconstruct import statement
            return f"import {{ {', '.join(valid_imports)} }} from 'lucide-react'"

        content = re.sub(import_pattern, clean_imports, content)

        # Remove empty lines left by removed imports
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)

        if content != original:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True

        return False
    except Exception as e:
        print(f"Error fixing {filepath}: {e}")
        return False

def fix_inline_broker_cta_props(filepath):
    """Add missing finalPortfolioValue prop to InlineBrokerCTA components"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        original = content

        # Find InlineBrokerCTA components missing finalPortfolioValue
        # Pattern: <InlineBrokerCTA variant="featured" calculatorType="..." />
        pattern = r'<InlineBrokerCTA\s+variant="featured"\s+calculatorType="([^"]+)"\s*/>'

        def add_prop(match):
            calc_type = match.group(1)
            # Add finalPortfolioValue prop with a default value
            return f'<InlineBrokerCTA variant="featured" calculatorType="{calc_type}" finalPortfolioValue={{0}} />'

        content = re.sub(pattern, add_prop, content)

        if content != original:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True

        return False
    except Exception as e:
        print(f"Error fixing {filepath}: {e}")
        return False

def main():
    print("╔════════════════════════════════════════════════════════════════╗")
    print("║         TYPESCRIPT ERROR FIXES - CALC PROJECT                 ║")
    print("╚════════════════════════════════════════════════════════════════╝\n")

    base_path = Path('/mnt/e/projects/calc')

    # Fix blog pages with invalid imports
    print("Fixing invalid lucide-react imports...")
    fixed_imports = 0
    for file_path in ERROR_FILES:
        full_path = base_path / file_path
        if full_path.exists():
            if fix_invalid_imports(full_path):
                fixed_imports += 1
                print(f"  ✅ {file_path}")
        else:
            print(f"  ⚠️  Not found: {file_path}")

    print(f"\n✅ Fixed {fixed_imports} files with invalid imports")

    # Fix calculator components with missing props
    print("\nFixing InlineBrokerCTA missing props...")
    calculator_files = [
        'components/calculators/FourZeroOneKCalculator.tsx',
        'components/calculators/IRACalculator.tsx',
        'components/calculators/InvestmentReturnCalculator.tsx',
        'components/calculators/SavingsCalculator.tsx',
    ]

    fixed_props = 0
    for file_path in calculator_files:
        full_path = base_path / file_path
        if full_path.exists():
            if fix_inline_broker_cta_props(full_path):
                fixed_props += 1
                print(f"  ✅ {file_path}")

    print(f"\n✅ Fixed {fixed_props} calculator components")

    print("\n" + "="*70)
    print("✅ TYPESCRIPT ERROR FIXES COMPLETE")
    print("="*70)
    print(f"Total files fixed: {fixed_imports + fixed_props}")
    print("\nNext steps:")
    print("1. Run: cd /mnt/e/projects/calc && npm run type-check")
    print("2. Manually fix chart formatter type errors (Recharts)")
    print("3. Fix implicit 'any' types in FourZeroOneKCalculator")

if __name__ == '__main__':
    main()

import { CalculatorSignup } from '@/components/email/CalculatorSignup'

export default function CalculatorsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <CalculatorSignup />
    </>
  )
}

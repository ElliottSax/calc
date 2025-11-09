interface StructuredDataProps {
  data: any
  type?: string
}

export function StructuredData({ data, type = 'application/ld+json' }: StructuredDataProps) {
  return (
    <script
      type={type}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
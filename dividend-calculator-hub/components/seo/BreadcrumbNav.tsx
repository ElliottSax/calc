"use client"

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[]
}

export function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  return (
    <nav 
      aria-label="Breadcrumb" 
      className="flex items-center space-x-2 text-sm text-gray-600 mb-6"
    >
      {items.map((item, index) => (
        <div key={item.url} className="flex items-center">
          {index > 0 && (
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
          )}
          
          {index === items.length - 1 ? (
            <span className="font-medium text-gray-900">
              {item.name}
            </span>
          ) : (
            <Link 
              href={item.url}
              className="hover:text-blue-600 transition-colors flex items-center"
            >
              {index === 0 && <Home className="h-3 w-3 mr-1" />}
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}
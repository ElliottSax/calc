import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Retail Investor',
    location: 'Austin, TX',
    quote: 'The DRIP calculator helped me visualize my long-term growth. I increased my dividend investing from 10% to 25% of my portfolio after seeing the compound interest projections.',
    rating: 5,
    image: '👩‍💼'
  },
  {
    name: 'Michael Chen',
    role: 'Financial Analyst',
    location: 'San Francisco, CA',
    quote: 'I recommend these calculators to all my clients. The 401(k) calculator with employer match is especially useful for retirement planning. Clear, accurate, and easy to understand.',
    rating: 5,
    image: '👨‍💼'
  },
  {
    name: 'Jennifer Rodriguez',
    role: 'Early Retiree',
    location: 'Miami, FL',
    quote: 'Used the dividend calculator to plan my retirement at 52. The projections were spot-on. I\'m now living off $4,200/month in dividend income thanks to the planning these tools enabled.',
    rating: 5,
    image: '👩‍🦰'
  },
  {
    name: 'David Park',
    role: 'Software Engineer',
    location: 'Seattle, WA',
    quote: 'The compound interest calculator convinced me to start investing early. At 28, I can see exactly how starting now vs waiting 5 years makes a $300K+ difference. Game changer.',
    rating: 5,
    image: '👨‍💻'
  },
  {
    name: 'Lisa Thompson',
    role: 'Teacher',
    location: 'Boston, MA',
    quote: 'Finally understand the difference between Traditional and Roth IRA! The calculator made it crystal clear which option saves me more money based on my tax bracket. Switched to Roth and already saving.',
    rating: 5,
    image: '👩‍🏫'
  },
  {
    name: 'Robert Williams',
    role: 'Small Business Owner',
    location: 'Denver, CO',
    quote: 'The savings goal calculator keeps me accountable. Set a $50K goal for a down payment and I'm ahead of schedule. Love the visual progress tracking and personalized recommendations.',
    rating: 5,
    image: '👨‍💼'
  }
]

export function Testimonials() {
  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Trusted by 47,000+ Investors</h2>
        <p className="text-gray-600 dark:text-gray-400">
          See what our users say about our calculators
        </p>
        <div className="flex items-center justify-center gap-1 mt-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="ml-2 text-lg font-semibold">4.8/5</span>
          <span className="ml-2 text-gray-600">(2,847 reviews)</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {testimonial.role} • {testimonial.location}
                  </p>
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="h-4 w-4 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export function CompactTestimonials() {
  return (
    <div className="grid md:grid-cols-3 gap-4 py-6">
      {testimonials.slice(0, 3).map((testimonial, index) => (
        <Card key={index} className="bg-gray-50 dark:bg-gray-800">
          <CardContent className="p-4">
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              "{testimonial.quote.slice(0, 120)}..."
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              <strong>{testimonial.name}</strong> • {testimonial.role}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  BookOpen, 
  GraduationCap, 
  TrendingUp, 
  DollarSign,
  BarChart3,
  Calculator,
  Users,
  Award,
  PlayCircle,
  FileText,
  CheckCircle
} from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { getLearningPaths, getCourses, LearningPath, Course } from '@/lib/learn/learning-data'
import { StructuredData } from '@/components/seo/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://calc-bay-one.vercel.app'

export const metadata: Metadata = {
  title: 'Dividend University | Free Dividend Investing Education',
  description: 'Master dividend investing with our comprehensive learning center. Free courses, guides, and resources for building wealth through dividend stocks.',
  keywords: 'dividend investing education, dividend university, free investing courses, dividend investing guide',
  openGraph: {
    title: 'Dividend University | Free Dividend Investing Education',
    description: 'Master dividend investing with our comprehensive learning center.',
    type: 'website',
    url: `${baseUrl}/learn`
  },
  alternates: {
    canonical: `${baseUrl}/learn`
  }
}

export default function LearnPage() {
  const learningPaths = getLearningPaths()
  const featuredCourses = getCourses().filter(course => course.featured)
  
  // Educational organization schema
  const educationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Dividend University",
    "description": "Free dividend investing education and courses",
    "url": `${baseUrl}/learn`,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dividend Investing Courses",
      "itemListElement": featuredCourses.map(course => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Course",
          "name": course.title,
          "description": course.description,
          "provider": {
            "@type": "Organization",
            "name": "Dividend Calculator Hub"
          }
        }
      }))
    }
  }

  return (
    <>
      <StructuredData data={educationSchema} />
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <GraduationCap className="h-12 w-12 text-blue-600" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Dividend University
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Master the art of dividend investing with our comprehensive, free education center. 
              From beginner fundamentals to advanced strategies, build the knowledge to create 
              lasting wealth through dividend stocks.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="#learning-paths">
                  Start Learning
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#courses">
                  Browse Courses
                </Link>
              </Button>
            </div>
          </section>

          {/* Stats Section */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-3">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold">25,000+</div>
              <div className="text-sm text-gray-600">Students</div>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-3">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm text-gray-600">Lessons</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-3">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm text-gray-600">Free</div>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 p-3 rounded-full w-fit mx-auto mb-3">
                <Calculator className="h-6 w-6 text-orange-600" />
              </div>
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm text-gray-600">Calculators</div>
            </div>
          </section>

          {/* Learning Paths */}
          <section id="learning-paths" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Choose Your Learning Path
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {learningPaths.map((path) => (
                <LearningPathCard key={path.id} path={path} />
              ))}
            </div>
          </section>

          {/* Featured Courses */}
          <section id="courses" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Featured Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" size="lg" asChild>
                <Link href="/learn/courses">
                  View All Courses
                </Link>
              </Button>
            </div>
          </section>

          {/* Tools Section */}
          <section className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Interactive Learning Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ToolCard 
                icon={Calculator}
                title="DRIP Calculator"
                description="Model dividend reinvestment growth"
                href="/?calculator=drip"
              />
              <ToolCard 
                icon={TrendingUp}
                title="Yield Calculator"
                description="Calculate dividend yields and income"
                href="/?calculator=yield"
              />
              <ToolCard 
                icon={BarChart3}
                title="Portfolio Analyzer"
                description="Analyze your dividend portfolio"
                href="/tools/portfolio"
              />
              <ToolCard 
                icon={DollarSign}
                title="Dividend Tracker"
                description="Track your dividend income"
                href="/tools/tracker"
              />
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="text-center bg-blue-600 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">
              Stay Ahead with Weekly Insights
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get our latest courses, market analysis, and dividend opportunities delivered to your inbox
            </p>
            <div className="flex max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <Button className="rounded-l-none bg-white text-blue-600 hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

function LearningPathCard({ path }: { path: LearningPath }) {
  return (
    <Card className="h-full hover:shadow-lg transition-all">
      <CardHeader>
        <div className={`p-3 rounded-full w-fit mb-4 ${path.color}`}>
          <path.icon className="h-8 w-8" />
        </div>
        <CardTitle className="text-xl">{path.title}</CardTitle>
        <p className="text-gray-600">{path.description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">{path.courses} courses</span>
          <Badge variant={path.level === 'Beginner' ? 'secondary' : 
                         path.level === 'Intermediate' ? 'default' : 'destructive'}>
            {path.level}
          </Badge>
        </div>
        <div className="space-y-2">
          {path.topics.slice(0, 3).map((topic, index) => (
            <div key={index} className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
              {topic}
            </div>
          ))}
        </div>
        <Button className="w-full" asChild>
          <Link href={`/learn/paths/${path.id}`}>
            Start Path
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/learn/courses/${course.id}`}>
      <Card className="h-full hover:shadow-lg transition-all hover:scale-[1.02]">
        <CardHeader>
          <div className="flex items-start justify-between mb-2">
            <Badge variant={course.type === 'video' ? 'default' : 'secondary'}>
              {course.type === 'video' ? (
                <><PlayCircle className="h-3 w-3 mr-1" />Video</>
              ) : (
                <><FileText className="h-3 w-3 mr-1" />Article</>
              )}
            </Badge>
            <span className="text-sm text-gray-600">{course.duration}</span>
          </div>
          <CardTitle className="line-clamp-2">{course.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 line-clamp-3 mb-4">
            {course.description}
          </p>
          <div className="flex items-center justify-between">
            <Badge variant="outline">
              {course.level}
            </Badge>
            <div className="flex items-center text-sm text-gray-500">
              <Users className="h-4 w-4 mr-1" />
              {course.students.toLocaleString()}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

function ToolCard({ icon: Icon, title, description, href }: any) {
  return (
    <Link href={href}>
      <Card className="text-center hover:shadow-lg transition-all hover:scale-[1.02]">
        <CardContent className="p-6">
          <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
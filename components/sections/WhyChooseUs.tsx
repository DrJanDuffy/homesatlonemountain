import { Shield, TrendingUp, Users, Award, Clock, Home } from '@/components/ui/Icons'
import { assetPaths } from '@/lib/site-config'

const features = [
  {
    icon: Shield,
    title: 'Lone Mountain Expertise',
    description: '30+ years serving Lone Mountain and Northwest Las Vegas with proven results.',
  },
  {
    icon: TrendingUp,
    title: 'Lone Mountain Market Knowledge',
    description: 'Deep understanding of Lone Mountain real estate trends and neighborhood insights.',
  },
  {
    icon: Users,
    title: 'Personalized Service',
    description: 'Dedicated attention to every client buying or selling in Lone Mountain.',
  },
  {
    icon: Award,
    title: 'Proven Results',
    description: '500+ successful Lone Mountain and Las Vegas transactions.',
  },
  {
    icon: Clock,
    title: 'Responsive',
    description: 'Quick response times for all Lone Mountain property inquiries.',
  },
  {
    icon: Home,
    title: 'Full Service',
    description: 'Complete support from Lone Mountain home search to closing and beyond.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <img
            src={assetPaths.agentPhoto.replace(/\s/g, '%20')}
            alt="Dr. Jan Duffy, Lone Mountain Real Estate Expert"
            className="mx-auto mb-4 w-24 h-24 rounded-full object-cover border-2 border-luxury-gold shadow-lg"
            width={96}
            height={96}
          />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-luxury-navy mb-4">
            Why Choose Dr. Jan Duffy for Lone Mountain Real Estate
          </h2>
          <p className="text-xl text-luxury-charcoal max-w-3xl mx-auto">
            Your trusted Lone Mountain real estate expert with 30+ years of Northwest Las Vegas experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-luxury-cream transition-colors"
              >
                <div className="bg-luxury-cream rounded-full p-4 mb-4">
                  <Icon className="h-8 w-8 text-luxury-gold" />
                </div>
                <h3 className="text-xl font-bold text-luxury-navy mb-2">{feature.title}</h3>
                <p className="text-luxury-charcoal">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

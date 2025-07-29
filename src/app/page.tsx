import Navigation from '@/components/Navigation/Navigation'
import Hero from '@/components/Hero/Hero'
import WhyAura from '@/components/WhyAura/WhyAura'
import TeamSection from '@/components/TeamSection/TeamSection'
import TechStack from '@/components/TechStack/TechStack'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <WhyAura />
      <TeamSection />
      <TechStack />
      <Footer />
    </main>
  )
}

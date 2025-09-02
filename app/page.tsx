import CompanionsList from '@/components/CompanionsList'
import CompanionCard from '@/components/CompanionCard'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>

      <section className="home-section">
        <CompanionCard 
          id="123"
          name="Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="science"
          duration={45}
        />
        <CompanionCard 
          id="456"
          name="Crypto Wizard"      
          topic="Investing in Crypto Currencies"
          subject="finance"
          duration={30}
        />
        <CompanionCard 
          id="789"
          name="Astronaut A.I"
          topic="Space Exploration"
          subject="science"
          duration={45}
        />
      </section>

      <section className="home-section">
        <CompanionsList 
           title="Recently Completed Sessions"
           companions={recentSessions}
           classNames="w2/3 max-lg:w-full"
        />
        <CTA />   
        </section>
    </main>
  )
}

export default Page
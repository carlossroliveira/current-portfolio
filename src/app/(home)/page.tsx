import Divider from '../components/Divider'
import Skills from '../sections/Skills'
import WelcomeSection from '../sections/WelcomeSection'

export default function HomePage() {
  return (
    <div className="bg-gray-700 px-4">
      <WelcomeSection />

      <Divider className="mt-10" />

      <Skills />

      <Divider className="mt-10" />
    </div>
  )
}

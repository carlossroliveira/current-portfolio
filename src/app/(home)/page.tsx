import Divider from '../components/Divider'
import WelcomeSection from '../sections/WelcomeSection'

export default function HomePage() {
  return (
    <div className="bg-gray-700 h-screen px-4">
      <WelcomeSection />

      <Divider className="mt-10" />
    </div>
  )
}

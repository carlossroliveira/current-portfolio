import Divider from '../components/Divider'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'
import WelcomeSection from '../sections/WelcomeSection'

export default function HomePage() {
  return (
    <div className="bg-gray-700 px-4">
      <WelcomeSection />

      <Divider className="mt-10" />

      <Skills />

      <Divider className="mt-10 mb-10" />

      <Projects />

      <Divider className="mt-10 mb-10" />

      <h1>Nova Sessão</h1>
    </div>
  )
}

import { ScrollToTopButton } from './ScrollToTopButton'
import {
  CopyrightInfo,
  MadeWithLove,
  OpenSourceInfo,
  VersionStatus,
} from './footer-sections'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="hidden lg:flex flex-col items-center justify-between gap-8">
          <div className="flex items-center justify-between w-full mb-8">
            <CopyrightInfo currentYear={currentYear} />
            <MadeWithLove />
            <ScrollToTopButton />
          </div>
          <div className="flex items-center justify-between w-full pt-8">
            <OpenSourceInfo />
            <VersionStatus />
          </div>
        </div>

        <div className="lg:hidden flex flex-col items-center text-center space-y-10 py-8">
          <div className="flex flex-col items-center space-y-2">
            <CopyrightInfo currentYear={currentYear} />
          </div>

          <div className="relative flex items-center justify-center w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-danger/10 to-rose/10 rounded-full blur-lg opacity-50" />
            <div className="relative z-10 inline-flex items-center gap-2 text-gray-300 bg-gray-800/50 px-6 py-3 rounded-full backdrop-blur-sm border border-gray-700/50">
              <MadeWithLove />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-md">
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
              <OpenSourceInfo />
            </div>

            <div className="flex flex-col items-center sm:items-end text-center sm:text-right space-y-4">
              <VersionStatus />
              <ScrollToTopButton />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

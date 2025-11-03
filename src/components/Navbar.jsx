import { useState } from 'react'
import { Rocket, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="font-semibold text-gray-900">Vibe Coding</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a className="hover:text-gray-900" href="#features">Features</a>
            <a className="hover:text-gray-900" href="#how">How it works</a>
            <a className="hover:text-gray-900" href="#cta">Get started</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#cta" className="inline-flex items-center rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Sign in</a>
            <a href="#cta" className="inline-flex items-center rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-800">Launch Studio</a>
          </div>

          <button aria-label="Open Menu" onClick={() => setOpen(true)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="relative ml-auto h-full w-80 bg-white shadow-xl">
            <div className="flex items-center justify-between px-4 h-16 border-b">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
                  <Rocket className="h-5 w-5" />
                </span>
                <span className="font-semibold text-gray-900">Vibe Coding</span>
              </div>
              <button aria-label="Close Menu" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="p-4 grid gap-2 text-gray-700">
              <a onClick={() => setOpen(false)} href="#features" className="rounded-md px-3 py-2 hover:bg-gray-50">Features</a>
              <a onClick={() => setOpen(false)} href="#how" className="rounded-md px-3 py-2 hover:bg-gray-50">How it works</a>
              <a onClick={() => setOpen(false)} href="#cta" className="rounded-md px-3 py-2 hover:bg-gray-50">Get started</a>
              <div className="h-px bg-gray-200 my-2" />
              <a onClick={() => setOpen(false)} href="#cta" className="rounded-md px-3 py-2 border border-gray-200 text-center">Sign in</a>
              <a onClick={() => setOpen(false)} href="#cta" className="rounded-md px-3 py-2 bg-gray-900 text-white text-center">Launch Studio</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

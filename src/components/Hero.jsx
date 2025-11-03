import { Rocket, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              <Sparkles className="h-3.5 w-3.5" />
              Now with live preview
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Build full apps with an AI pair‑programmer
            </h1>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Design, code, and deploy beautiful experiences in minutes. Our AI agent sets up your backend, UI, and database while you focus on the big ideas.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-white font-medium hover:bg-gray-800">
                <Rocket className="mr-2 h-5 w-5" />
                Start building
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 text-gray-800 font-medium hover:bg-gray-50">
                Explore features
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-indigo-200/40 to-purple-200/40 rounded-2xl blur-2xl" aria-hidden />
            <div className="relative rounded-2xl border bg-white shadow-sm overflow-hidden">
              <div className="p-4 border-b bg-gray-50">
                <div className="h-3 w-3 rounded-full bg-red-400 inline-block mr-2" />
                <div className="h-3 w-3 rounded-full bg-yellow-400 inline-block mr-2" />
                <div className="h-3 w-3 rounded-full bg-green-400 inline-block" />
              </div>
              <div className="p-6 grid gap-3">
                <div className="h-3 w-40 rounded bg-gray-200" />
                <div className="h-3 w-56 rounded bg-gray-200" />
                <div className="h-48 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500/80" />
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-16 rounded bg-gray-100" />
                  <div className="h-16 rounded bg-gray-100" />
                  <div className="h-16 rounded bg-gray-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

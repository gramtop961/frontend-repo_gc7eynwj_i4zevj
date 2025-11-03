import { Code2, Shield, Zap, Layout } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Instant Setup',
    desc: 'Spin up frontend and backend with one click. No boilerplate, no hassle.'
  },
  {
    icon: Code2,
    title: 'Clean Code',
    desc: 'Production-ready files generated with best practices and modern tooling.'
  },
  {
    icon: Layout,
    title: 'Beautiful UI',
    desc: 'Pre-styled components with Tailwind and delightful micro-interactions.'
  },
  {
    icon: Shield,
    title: 'Safe Sandbox',
    desc: 'Work in an isolated environment with preview links you can share.'
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Everything you need to move fast</h2>
          <p className="mt-3 text-gray-600">Craft, iterate, and ship without ever leaving your browser.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
              <div className="mt-4 h-1 w-0 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-24 transition-[width] duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

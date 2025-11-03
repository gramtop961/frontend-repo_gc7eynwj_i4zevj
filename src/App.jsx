import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="how" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="rounded-xl border bg-white p-6 shadow-sm">
                  <div className="h-10 w-10 rounded-full bg-gray-900 text-white inline-flex items-center justify-center font-semibold">{step}</div>
                  <h3 className="mt-4 text-lg font-semibold">{step === 1 ? 'Describe your idea' : step === 2 ? 'Generate full stack' : 'Ship and iterate'}</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {step === 1 && 'Tell the AI what you want to build and what matters.'}
                    {step === 2 && 'We scaffold backend APIs, database models, and a polished UI.'}
                    {step === 3 && 'Preview instantly, share links, and make changes with a prompt.'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="py-20">
          <div className="max-w-3xl mx-auto text-center px-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Ready to build something great?</h2>
            <p className="mt-3 text-gray-600">Launch an AI-assisted workspace and start shipping within minutes.</p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-white font-medium hover:bg-gray-800">Launch Studio</a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 text-gray-800 font-medium hover:bg-gray-50">Learn more</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App

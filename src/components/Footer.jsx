export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Vibe Coding. All rights reserved.</p>
          <nav className="flex items-center gap-6">
            <a className="hover:text-gray-900" href="#">Privacy</a>
            <a className="hover:text-gray-900" href="#">Terms</a>
            <a className="hover:text-gray-900" href="#">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

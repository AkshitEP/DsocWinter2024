import Link from 'next/link'
import { Code2, Server, Layers, Brain } from 'lucide-react'

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="flex items-center h-16 space-x-4 sm:space-x-8">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600 mr-2">❄️</span>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">Winter DSOC</span>
          </Link>
          <div className="flex space-x-4 sm:space-x-8 text-sm sm:text-base">
            <NavLink href="/" exact>Overall</NavLink>
            <NavLink href="/appdev"><Code2 className="mr-1" size={16} /> AppDev</NavLink>
            <NavLink href="/backend"><Server className="mr-1" size={16} /> Backend</NavLink>
            <NavLink href="/frontend"><Layers className="mr-1" size={16} /> Frontend</NavLink>
            <NavLink href="/aiml"><Brain className="mr-1" size={16} /> AI/ML</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

const NavLink = ({ href, children, exact = false }) => {
  const isActive = typeof window !== 'undefined' && (exact ? window.location.pathname === href : window.location.pathname.startsWith(href))
  return (
    <Link
      href={href}
      className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm sm:text-base font-medium transition-colors duration-200 whitespace-nowrap ${
        isActive
          ? 'border-blue-500 text-blue-600'
          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
      }`}
    >
      {children}
    </Link>
  )
}

export default Navigation


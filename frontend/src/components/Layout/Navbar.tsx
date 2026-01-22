import { Sparkles } from 'lucide-react';

interface NavbarProps {
  onGetStarted?: () => void;
  onViewProjects?: () => void;
}

export default function Navbar({ onGetStarted, onViewProjects }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-75 animate-pulse"></div>
              <Sparkles className="relative w-6 h-6 text-cyan-400" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              VisionForge
            </span>
            <span className="px-2 py-0.5 text-xs font-semibold text-cyan-400 border border-cyan-400/30 rounded-md bg-cyan-400/10">
              BETA
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#examples" className="text-gray-300 hover:text-white transition-colors">
              Examples
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
            {onViewProjects && (
              <button
                onClick={onViewProjects}
                className="px-4 py-2 rounded-lg border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-colors font-medium"
              >
                My Projects
              </button>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden sm:block text-gray-300 hover:text-white transition-colors">
              Sign in
            </button>
            <button
              onClick={onGetStarted}
              className="relative group px-6 py-2 rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-100 group-hover:opacity-90 transition-opacity"></div>
              <span className="relative text-white font-semibold">Get Started</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

import { ArrowRight, Zap } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 via-gray-950 to-gray-950"></div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 mb-8 animate-fade-in">
          <Zap className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-cyan-400 font-medium">Powered by Google Veo 3</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in-up">
          <span className="block text-white mb-2">THE NEW ERA OF</span>
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 blur-2xl opacity-50"></span>
            <span className="relative bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              VIDEO CREATION
            </span>
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
          Transform your ideas into stunning explainer videos with AI.
          No cameras, no editing skills—just your creativity.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up animation-delay-400">
          <button
            onClick={onGetStarted}
            className="group relative px-8 py-4 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>
            <div className="relative flex items-center space-x-2 text-white font-semibold">
              <span>Start Creating</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          <button className="px-8 py-4 rounded-xl border border-gray-700 text-white font-semibold hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300">
            Watch Demo
          </button>
        </div>

        <div className="text-sm text-gray-500 animate-fade-in-up animation-delay-600">
          No credit card required • 7-days free trial
        </div>

        <div className="mt-20 relative animate-fade-in-up animation-delay-800">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-10"></div>
          <div className="relative rounded-2xl overflow-hidden border border-gray-800/50 bg-gray-900/50 backdrop-blur-sm">
            <div className="aspect-video bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-block p-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-4">
                  <Zap className="w-12 h-12 text-cyan-400" />
                </div>
                <p className="text-gray-400">Your video preview will appear here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

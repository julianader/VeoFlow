import { useNavigate } from 'react-router-dom';
import { Play } from 'lucide-react';

export default function Hero() {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('authToken');

  return (
    <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Create Professional Explainer Videos in Minutes
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Transform your ideas into stunning AI-generated videos. No production experience needed.
            </p>
            <button
              onClick={() => navigate(isAuthenticated ? '/projects' : '/register')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 flex items-center gap-2"
            >
              <Play size={20} />
              Get Started Free
            </button>
          </div>
          <div className="bg-blue-500 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <Play size={64} className="mx-auto mb-4" />
              <p>Demo Video Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
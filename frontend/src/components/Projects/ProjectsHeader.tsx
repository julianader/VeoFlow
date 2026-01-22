import { ArrowLeft } from 'lucide-react';

interface ProjectsHeaderProps {
  projectCount: number;
  onBack: () => void;
}

export default function ProjectsHeader({ projectCount, onBack }: ProjectsHeaderProps) {
  return (
    <div className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-xl sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
            <div className="h-6 w-px bg-gray-800"></div>
            <h1 className="text-xl font-semibold text-white">My Projects</h1>
          </div>
          <div className="text-sm text-gray-400">
            {projectCount} project{projectCount !== 1 ? 's' : ''}
          </div>
        </div>
      </div>
    </div>
  );
}

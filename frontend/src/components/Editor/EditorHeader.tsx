import { ArrowLeft, Download, Share2, Save, Play, Folder } from 'lucide-react';

interface EditorHeaderProps {
  projectName: string;
  lastSaved: string;
  onBack: () => void;
  onSave: () => void;
  onViewProjects?: () => void;
}

export default function EditorHeader({ projectName, lastSaved, onBack, onSave, onViewProjects }: EditorHeaderProps) {
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

            {onViewProjects && (
              <>
                <button
                  onClick={onViewProjects}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                >
                  <Folder className="w-4 h-4" />
                  <span className="text-sm">My Projects</span>
                </button>
                <div className="h-6 w-px bg-gray-800"></div>
              </>
            )}

            <div>
              <h1 className="text-xl font-semibold text-white">{projectName}</h1>
              <p className="text-sm text-gray-500">Last saved: {lastSaved}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onSave}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 text-white hover:bg-gray-800 transition-colors"
            >
              <Save className="w-4 h-4" />
              <span className="hidden sm:inline">Save</span>
            </button>

            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 text-white hover:bg-gray-800 transition-colors">
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">Share</span>
            </button>

            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium hover:opacity-90 transition-opacity">
              <Play className="w-4 h-4" />
              <span className="hidden sm:inline">Preview</span>
            </button>

            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Export</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

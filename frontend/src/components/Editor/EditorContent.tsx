import { Play } from 'lucide-react';

export default function EditorContent() {
  return (
    <div className="bg-gray-900/50 rounded-2xl border border-gray-800 overflow-hidden">
      <div className="aspect-video bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex p-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-4">
            <Play className="w-12 h-12 text-cyan-400" />
          </div>
          <p className="text-gray-400 text-lg">Video preview will appear here</p>
          <p className="text-gray-500 text-sm mt-2">Add scenes to start creating your video</p>
        </div>
      </div>
    </div>
  );
}

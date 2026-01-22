import { GripVertical, Trash2, Play, MoreVertical, Clock } from 'lucide-react';
import { Scene } from '../../types';

interface SceneCardProps {
  scene: Scene;
  onDelete: (id: string) => void;
  onPlay: (id: string) => void;
}

export default function SceneCard({ scene, onDelete, onPlay }: SceneCardProps) {
  const statusColors = {
    pending: 'bg-gray-600',
    generating: 'bg-blue-500 animate-pulse',
    complete: 'bg-green-500',
    error: 'bg-red-500',
  };

  const statusText = {
    pending: 'Pending',
    generating: 'Generating...',
    complete: 'Complete',
    error: 'Error',
  };

  return (
    <div className="group relative bg-gray-900 rounded-xl border border-gray-800 overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
      <div className="flex items-center gap-3 p-4">
        <div className="cursor-move text-gray-600 hover:text-gray-400">
          <GripVertical className="w-5 h-5" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <div className={`w-2 h-2 rounded-full ${statusColors[scene.status]}`}></div>
            <span className="text-xs font-medium text-gray-400">
              {statusText[scene.status]}
            </span>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Clock className="w-3 h-3" />
              <span>{scene.duration}s</span>
            </div>
          </div>

          <p className="text-sm text-gray-300 line-clamp-2 mb-2">
            {scene.prompt}
          </p>

          <div className="flex items-center gap-2">
            <span className="px-2 py-1 rounded-md bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-xs text-cyan-400">
              {scene.style}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {scene.status === 'complete' && (
            <button
              onClick={() => onPlay(scene.id)}
              className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
            >
              <Play className="w-4 h-4" />
            </button>
          )}

          <button className="p-2 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors">
            <MoreVertical className="w-4 h-4" />
          </button>

          <button
            onClick={() => onDelete(scene.id)}
            className="p-2 rounded-lg hover:bg-red-500/10 text-gray-400 hover:text-red-400 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {scene.status === 'generating' && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800">
          <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 animate-progress"></div>
        </div>
      )}
    </div>
  );
}

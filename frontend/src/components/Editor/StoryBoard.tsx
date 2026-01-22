import { Plus } from 'lucide-react';
import { Scene } from '../../types';
import SceneCard from './SceneCard';

interface StoryboardProps {
  scenes: Scene[];
  onAddScene: () => void;
  onDeleteScene: (id: string) => void;
  onPlayScene: (id: string) => void;
}

export default function Storyboard({ scenes, onAddScene, onDeleteScene, onPlayScene }: StoryboardProps) {
  const totalDuration = scenes.reduce((acc, scene) => acc + scene.duration, 0);

  return (
    <div className="bg-gray-950 rounded-2xl border border-gray-800 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-white mb-1">Storyboard</h3>
          <p className="text-sm text-gray-400">
            {scenes.length} scenes • {totalDuration}s total
          </p>
        </div>

        <button
          onClick={onAddScene}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity"
        >
          <Plus className="w-4 h-4" />
          Add Scene
        </button>
      </div>

      <div className="space-y-3">
        {scenes.length === 0 ? (
          <div className="text-center py-12">
            <div className="inline-flex p-4 rounded-full bg-gray-900 border border-gray-800 mb-4">
              <Plus className="w-8 h-8 text-gray-600" />
            </div>
            <p className="text-gray-400 mb-4">No scenes yet. Start by adding your first scene.</p>
            <button
              onClick={onAddScene}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity"
            >
              <Plus className="w-4 h-4" />
              Create First Scene
            </button>
          </div>
        ) : (
          scenes.map((scene) => (
            <SceneCard
              key={scene.id}
              scene={scene}
              onDelete={onDeleteScene}
              onPlay={onPlayScene}
            />
          ))
        )}
      </div>
    </div>
  );
}

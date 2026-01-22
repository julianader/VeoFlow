import { Check } from 'lucide-react';
import { StylePreset } from '../../types';

interface StylePresetsProps {
  presets: StylePreset[];
  selectedPreset: string;
  onSelectPreset: (id: string) => void;
}

export default function StylePresets({ presets, selectedPreset, onSelectPreset }: StylePresetsProps) {
  return (
    <div className="bg-gray-950 rounded-2xl border border-gray-800 p-6">
      <h3 className="text-xl font-semibold text-white mb-4">Style Presets</h3>

      <div className="grid grid-cols-2 gap-4">
        {presets.map((preset) => (
          <button
            key={preset.id}
            onClick={() => onSelectPreset(preset.id)}
            className={`relative group text-left p-4 rounded-xl border-2 transition-all duration-300 ${
              selectedPreset === preset.id
                ? 'border-cyan-500 bg-cyan-500/10'
                : 'border-gray-800 bg-gray-900 hover:border-gray-700'
            }`}
          >
            <div className="aspect-video rounded-lg bg-gradient-to-br from-cyan-900/30 via-blue-900/30 to-purple-900/30 mb-3 flex items-center justify-center overflow-hidden">
              <div className="text-4xl">{preset.thumbnail}</div>
            </div>

            <div className="flex items-start justify-between gap-2">
              <div>
                <h4 className="font-semibold text-white text-sm mb-1">{preset.name}</h4>
                <p className="text-xs text-gray-400 line-clamp-2">{preset.description}</p>
              </div>

              {selectedPreset === preset.id && (
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-500 flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

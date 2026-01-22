import { Mic, Music, Settings } from 'lucide-react';

interface VideoSettingsProps {
  voiceOverEnabled: boolean;
  onToggleVoiceOver: (enabled: boolean) => void;
}

export default function VideoSettings({ voiceOverEnabled, onToggleVoiceOver }: VideoSettingsProps) {
  return (
    <div className="bg-gray-950 rounded-2xl border border-gray-800 p-6">
      <h3 className="text-xl font-semibold text-white mb-6">Video Settings</h3>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
              <Mic className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">AI Voice-Over</p>
              <p className="text-xs text-gray-400">Add narration to your video</p>
            </div>
          </div>
          <button
            onClick={() => onToggleVoiceOver(!voiceOverEnabled)}
            className={`relative w-12 h-6 rounded-full transition-colors ${
              voiceOverEnabled ? 'bg-cyan-500' : 'bg-gray-700'
            }`}
          >
            <div
              className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                voiceOverEnabled ? 'translate-x-6' : 'translate-x-0'
              }`}
            ></div>
          </button>
        </div>

        {voiceOverEnabled && (
          <div className="pl-11 space-y-4 animate-fade-in">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Voice Type
              </label>
              <select className="w-full px-3 py-2 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-cyan-500">
                <option>Professional Male</option>
                <option>Professional Female</option>
                <option>Casual Male</option>
                <option>Casual Female</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Narration Text
              </label>
              <textarea
                className="w-full px-3 py-2 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-cyan-500 resize-none"
                rows={3}
                placeholder="Enter your narration script..."
              />
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10">
              <Music className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Background Music</p>
              <p className="text-xs text-gray-400">Add audio bed to your video</p>
            </div>
          </div>
          <button className="relative w-12 h-6 rounded-full bg-gray-700">
            <div className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white"></div>
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10">
              <Settings className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Quality Mode</p>
              <p className="text-xs text-gray-400">Balance speed vs quality</p>
            </div>
          </div>
          <select className="px-3 py-1.5 bg-gray-900 border border-gray-800 rounded-lg text-sm text-white focus:outline-none focus:border-cyan-500">
            <option>Fast</option>
            <option>Balanced</option>
            <option>High Quality</option>
          </select>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';

import { Scene, StylePreset, Project } from '../types';
import { useProjects } from '../hooks/useProjects';
import EditorHeader from '../components/Editor/EditorHeader';
import EditorContent from '../components/Editor/EditorContent';
import StoryBoard from '../components/Editor/StoryBoard';
import StylePresets from '../components/Editor/StylePresets';
import VideoSettings from '../components/Editor/VideoSettings';
import NewSceneModal from '../components/Editor/NewSceneModal';
import SaveProjectDialog from '../components/Editor/SaveProjectDialog';

interface EditorPageProps {
  onBack: () => void;
  onViewProjects?: () => void;
  editingProject?: Project | null;
}

const mockPresets: StylePreset[] = [
  { id: '1', name: 'Cinematic', description: 'Hollywood-style dramatic scenes', thumbnail: '🎬' },
  { id: '2', name: 'Documentary', description: 'Professional real-world footage', thumbnail: '📹' },
  { id: '3', name: 'Animated', description: 'Cartoon and motion graphics', thumbnail: '🎨' },
  { id: '4', name: 'Tech Demo', description: 'Clean, modern technology showcase', thumbnail: '💻' },
  { id: '5', name: 'Educational', description: 'Clear instructional style', thumbnail: '📚' },
  { id: '6', name: 'Commercial', description: 'Product and brand advertising', thumbnail: '🎯' },
];

export default function EditorPage({ onBack, onViewProjects, editingProject }: EditorPageProps) {
  const { saveProject } = useProjects();
  const [scenes, setScenes] = useState<Scene[]>([]);
  const [selectedPreset, setSelectedPreset] = useState('1');
  const [voiceOverEnabled, setVoiceOverEnabled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName, setProjectName] = useState('Untitled Project');
  const [isSaveDialogOpen, setIsSaveDialogOpen] = useState(false);
  const [lastSaved, setLastSaved] = useState<string>('never');
  const [projectId, setProjectId] = useState<string | null>(null);

  // Load editing project data if provided
  useEffect(() => {
    if (editingProject) {
      setProjectName(editingProject.name);
      setScenes(editingProject.scenes);
      setSelectedPreset(editingProject.selectedPreset);
      setVoiceOverEnabled(editingProject.voiceOverEnabled);
      setProjectId(editingProject.id);
      setLastSaved(formatSaveTime(editingProject.updatedAt));
    }
  }, [editingProject]);

  const formatSaveTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);

    if (diffMins < 1) return 'just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays}d ago`;
  };

  const totalDuration = scenes.reduce((acc, scene) => acc + scene.duration, 0);

  const handleAddScene = (prompt: string, duration: number, style: string) => {
    const newScene: Scene = {
      id: Date.now().toString(),
      prompt,
      duration,
      style,
      status: Math.random() > 0.5 ? 'generating' : 'complete',
    };
    setScenes([...scenes, newScene]);
  };

  const handleDeleteScene = (id: string) => {
    setScenes(scenes.filter((scene) => scene.id !== id));
  };

  const handlePlayScene = (id: string) => {
    console.log('Playing scene:', id);
  };

  const handleSaveProject = (name: string) => {
    const project: Project = {
      id: projectId || Date.now().toString(),
      name,
      scenes,
      totalDuration,
      selectedPreset,
      voiceOverEnabled,
      createdAt: editingProject?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    saveProject(project);
    setProjectName(name);
    setProjectId(project.id);
    setLastSaved('just now');
    setIsSaveDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <EditorHeader
        projectName={projectName}
        lastSaved={lastSaved}
        onBack={onBack}
        onSave={() => setIsSaveDialogOpen(true)}
        onViewProjects={onViewProjects}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <EditorContent />

            <StoryBoard
              scenes={scenes}
              onAddScene={() => setIsModalOpen(true)}
              onDeleteScene={handleDeleteScene}
              onPlayScene={handlePlayScene}
            />
          </div>

          <div className="space-y-6">
            <StylePresets
              presets={mockPresets}
              selectedPreset={selectedPreset}
              onSelectPreset={setSelectedPreset}
            />

            <VideoSettings
              voiceOverEnabled={voiceOverEnabled}
              onToggleVoiceOver={setVoiceOverEnabled}
            />
          </div>
        </div>
      </div>

      <NewSceneModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddScene={handleAddScene}
      />

      {isSaveDialogOpen && (
        <SaveProjectDialog
          initialName={projectName}
          onSave={handleSaveProject}
          onClose={() => setIsSaveDialogOpen(false)}
        />
      )}
    </div>
  );
}

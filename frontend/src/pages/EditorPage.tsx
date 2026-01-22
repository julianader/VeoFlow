import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import EditorHeader from '../components/Editor/EditorHeader';
import EditorContent from '../components/Editor/EditorContent';
import { useProjects } from '../hooks/useProjects';
import type { Project } from '../types';

export default function EditorPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const { getProject } = useProjects();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (projectId) {
      loadProject();
    }
  }, [projectId]);

  const loadProject = async () => {
    setLoading(true);
    const data = await getProject(projectId!);
    setProject(data);
    setLoading(false);
  };

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!project) {
    return <div className="flex items-center justify-center h-screen">Project not found</div>;
  }

  return (
    <div className="h-screen flex flex-col bg-gray-900">
      <EditorHeader project={project} />
      <EditorContent project={project} />
    </div>
  );
}
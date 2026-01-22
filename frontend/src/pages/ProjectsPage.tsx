import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectsHeader from '../components/Projects/ProjectsHeader';
import ProjectsGrid from '../components/Projects/ProjectsGrid';
import ProjectsEmptyState from '../components/Projects/ProjectsEmptyState';
import { useProjects } from '../hooks/useProjects';
import type { Project } from '../types';

export default function ProjectsPage() {
  const navigate = useNavigate();
  const { projects, loading, fetchProjects } = useProjects();
  const [showNewProjectDialog, setShowNewProjectDialog] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleCreateProject = (title: string) => {
    setShowNewProjectDialog(false);
    navigate(`/editor/${title}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ProjectsHeader onNewProject={() => setShowNewProjectDialog(true)} />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        {projects.length === 0 && !loading ? (
          <ProjectsEmptyState onCreateProject={() => setShowNewProjectDialog(true)} />
        ) : (
          <ProjectsGrid projects={projects} isLoading={loading} />
        )}
      </main>
    </div>
  );
}
import { Project } from '../types';
import { useProjects } from '../hooks/useProjects';
import ProjectsHeader from '../components/Projects/ProjectsHeader';
import ProjectsGrid from '../components/Projects/ProjectsGrid';
import ProjectsEmptyState from '../components/Projects/ProjectsEmptyState';

interface ProjectsPageProps {
  onBack: () => void;
  onEditProject: (project: Project) => void;
}

export default function ProjectsPage({ onBack, onEditProject }: ProjectsPageProps) {
  const { projects, deleteProject, duplicateProject } = useProjects();

  const handleDuplicate = (id: string) => {
    duplicateProject(id);
  };

  const handleDelete = (id: string) => {
    deleteProject(id);
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <ProjectsHeader projectCount={projects.length} onBack={onBack} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {projects.length === 0 ? (
          <ProjectsEmptyState onCreateFirst={onBack} />
        ) : (
          <ProjectsGrid
            projects={projects}
            onEditProject={onEditProject}
            onDuplicate={handleDuplicate}
            onDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
}

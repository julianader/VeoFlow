import { useState, useEffect } from 'react';
import { Project } from '../types';

const PROJECTS_STORAGE_KEY = 'visionforge_projects';

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load projects from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(PROJECTS_STORAGE_KEY);
    if (stored) {
      try {
        setProjects(JSON.parse(stored));
      } catch (error) {
        console.error('Failed to load projects:', error);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save projects to localStorage whenever they change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(projects));
    }
  }, [projects, isLoaded]);

  const saveProject = (project: Project) => {
    setProjects((prevProjects) => {
      const existingIndex = prevProjects.findIndex((p) => p.id === project.id);
      if (existingIndex >= 0) {
        // Update existing project
        const updated = [...prevProjects];
        updated[existingIndex] = {
          ...project,
          updatedAt: new Date().toISOString(),
        };
        return updated;
      } else {
        // Create new project
        return [
          ...prevProjects,
          {
            ...project,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
        ];
      }
    });
  };

  const deleteProject = (id: string) => {
    setProjects((prevProjects) => prevProjects.filter((p) => p.id !== id));
  };

  const duplicateProject = (id: string) => {
    const projectToDuplicate = projects.find((p) => p.id === id);
    if (projectToDuplicate) {
      const newProject: Project = {
        ...projectToDuplicate,
        id: Date.now().toString(),
        name: `${projectToDuplicate.name} (Copy)`,
      };
      saveProject(newProject);
      return newProject;
    }
  };

  const getProject = (id: string) => {
    return projects.find((p) => p.id === id);
  };

  return {
    projects,
    isLoaded,
    saveProject,
    deleteProject,
    duplicateProject,
    getProject,
  };
};

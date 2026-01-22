import { useState, useCallback, useEffect } from 'react';
import { Project, Scene, ApiResponse } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const token = localStorage.getItem('authToken');

  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  // Fetch all projects
  const fetchProjects = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/projects`, {
        headers,
      });
      if (!response.ok) throw new Error('Failed to fetch projects');
      const data: ApiResponse<Project[]> = await response.json();
      setProjects(data.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [token]);

  // Create project
  const createProject = useCallback(async (title: string, description: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/projects`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ title, description }),
      });
      if (!response.ok) throw new Error('Failed to create project');
      const data: ApiResponse<Project> = await response.json();
      setProjects((prev) => [data.data, ...prev]);
      return data.data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return null;
    } finally {
      setLoading(false);
    }
  }, [token]);

  // Delete project
  const deleteProject = useCallback(async (projectId: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/projects/${projectId}`, {
        method: 'DELETE',
        headers,
      });
      if (!response.ok) throw new Error('Failed to delete project');
      setProjects((prev) => prev.filter((p) => p._id !== projectId));
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return false;
    } finally {
      setLoading(false);
    }
  }, [token]);

  // Update project
  const updateProject = useCallback(async (projectId: string, updates: Partial<Project>) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/projects/${projectId}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(updates),
      });
      if (!response.ok) throw new Error('Failed to update project');
      const data: ApiResponse<Project> = await response.json();
      setProjects((prev) =>
        prev.map((p) => (p._id === projectId ? data.data : p))
      );
      return data.data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return null;
    } finally {
      setLoading(false);
    }
  }, [token]);

  // Get single project
  const getProject = useCallback(async (projectId: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/projects/${projectId}`, {
        headers,
      });
      if (!response.ok) throw new Error('Failed to fetch project');
      const data: ApiResponse<Project> = await response.json();
      return data.data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return null;
    } finally {
      setLoading(false);
    }
  }, [token]);

  // Add scene to project
  const addScene = useCallback(async (projectId: string, scene: Partial<Scene>) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/projects/${projectId}/scenes`, {
        method: 'POST',
        headers,
        body: JSON.stringify(scene),
      });
      if (!response.ok) throw new Error('Failed to add scene');
      const data: ApiResponse<Scene> = await response.json();
      return data.data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return null;
    } finally {
      setLoading(false);
    }
  }, [token]);

  return {
    projects,
    loading,
    error,
    fetchProjects,
    createProject,
    deleteProject,
    updateProject,
    getProject,
    addScene,
  };
};
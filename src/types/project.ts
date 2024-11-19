export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'residential' | 'commercial' | 'industrial';
  stats: {
    completedProjects: number;
    sustainabilityScore: number;
    clientSatisfaction: number;
    awards: number;
  };
}

export interface ProjectState {
  projects: Project[];
  loading: boolean;
  error: Error | null;
  setProjects: (projects: Project[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: Error | null) => void;
}
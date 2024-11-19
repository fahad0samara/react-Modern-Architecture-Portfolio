import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useProjectStore } from '../store/projectStore';
import { Project } from '../types/project';
import { ArrowRight, Award, Leaf, ThumbsUp } from 'lucide-react';

const projectData: Project[] = [
  {
    id: '1',
    title: 'French Country Villa',
    description: 'Luxurious countryside retreat with sustainable materials',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
    category: 'residential',
    stats: {
      completedProjects: 15,
      sustainabilityScore: 95,
      clientSatisfaction: 98,
      awards: 3
    }
  },
  {
    id: '2',
    title: 'Floating Retreat',
    description: 'Modern waterfront living space with panoramic views',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
    category: 'residential',
    stats: {
      completedProjects: 12,
      sustainabilityScore: 90,
      clientSatisfaction: 96,
      awards: 2
    }
  },
  {
    id: '3',
    title: 'Urban Eco Office',
    description: 'Sustainable commercial space in the heart of the city',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
    category: 'commercial',
    stats: {
      completedProjects: 18,
      sustainabilityScore: 92,
      clientSatisfaction: 97,
      awards: 4
    }
  },
  {
    id: '4',
    title: 'Mountain Lodge',
    description: 'Luxury retreat nestled in the mountains',
    imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233',
    category: 'residential',
    stats: {
      completedProjects: 20,
      sustainabilityScore: 88,
      clientSatisfaction: 99,
      awards: 5
    }
  }
];

function ProjectCard({ project }: { project: Project }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <img
        src={project.imageUrl}
        alt={project.title}
        className="h-[400px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-0 p-6 text-white w-full">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-white/80">{project.description}</p>
          </div>
          <span className="px-3 py-1 bg-primary/90 rounded-full text-sm">
            {project.category}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="flex items-center">
            <Award className="w-4 h-4 mr-2" />
            <span className="text-sm">{project.stats.awards} Awards</span>
          </div>
          <div className="flex items-center">
            <Leaf className="w-4 h-4 mr-2" />
            <span className="text-sm">{project.stats.sustainabilityScore}%</span>
          </div>
          <div className="flex items-center">
            <ThumbsUp className="w-4 h-4 mr-2" />
            <span className="text-sm">{project.stats.clientSatisfaction}%</span>
          </div>
        </div>

        <button 
          onClick={() => {
            // In a real app, this would use a router
            console.log(`Viewing project: ${project.id}`);
          }}
          className="btn btn-primary group/btn w-full"
        >
          View Project
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

export default function Projects() {
  const { projects, setProjects } = useProjectStore();
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        setProjects(projectData);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      }
    };

    fetchProjects();
  }, [setProjects]);

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Latest Projects</h2>
        
        <div className="flex justify-center mb-12 space-x-4">
          {['all', 'residential', 'commercial', 'industrial'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
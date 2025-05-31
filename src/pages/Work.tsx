
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';

const Work = () => {
  const allProjects = [
    {
      id: 1,
      title: 'Tesla Interface',
      category: 'Automotive UI',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      description: 'Revolutionary dashboard interface for next-gen vehicles.'
    },
    {
      id: 2,
      title: 'Meta Reality',
      category: 'VR Experience',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop',
      description: 'Immersive virtual reality platform for social interaction.'
    },
    {
      id: 3,
      title: 'Apple Vision',
      category: 'Product Launch',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop',
      description: 'Interactive product showcase for revolutionary technology.'
    },
    {
      id: 4,
      title: 'Spotify Pulse',
      category: 'Music Platform',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop',
      description: 'AI-powered music discovery and streaming experience.'
    },
    {
      id: 5,
      title: 'Netflix Studio',
      category: 'Entertainment',
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&h=600&fit=crop',
      description: 'Content creation platform for streaming services.'
    },
    {
      id: 6,
      title: 'Google AI',
      category: 'Machine Learning',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop',
      description: 'Advanced AI interface for data visualization.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-dark-bg min-h-screen pt-32"
    >
      <div className="section-padding pb-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="section-title text-gradient mb-6">Our Work</h1>
            <p className="text-xl text-dark-muted max-w-2xl mx-auto">
              Discover our portfolio of cutting-edge digital experiences and innovative solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;

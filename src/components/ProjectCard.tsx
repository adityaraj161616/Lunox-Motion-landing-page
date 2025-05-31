
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-500"
      data-cursor-hover
    >
      <div className="aspect-[4/3] overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          whileHover={{ scale: 1.1 }}
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-dark-bg/80 flex items-center justify-center"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-dark-muted mb-4">{project.description}</p>
            <motion.button
              whileHover={{ x: 5 }}
              className="flex items-center space-x-2 text-primary font-medium"
            >
              <span>View Project</span>
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
            <p className="text-primary text-sm font-medium">{project.category}</p>
          </div>
          
          <motion.div
            whileHover={{ x: 5 }}
            className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ArrowRight size={20} />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
        className="absolute bottom-0 left-0 h-0.5 bg-primary origin-left w-full"
      />
    </motion.div>
  );
};

export default ProjectCard;

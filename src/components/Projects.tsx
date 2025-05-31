
import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 1, 1, 0.6]);

  const projects = [
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
    }
  ];

  return (
    <section ref={ref} className="relative py-32 section-padding overflow-hidden">
      {/* Background Video */}
      <motion.div
        style={{ scale, opacity }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/2278095/2278095-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-dark-bg/75" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="section-title text-gradient mb-6">Featured Work</h2>
          <p className="text-xl text-dark-muted max-w-2xl mx-auto">
            Explore our latest projects that push the boundaries of digital innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="magnetic-button"
            data-cursor-hover
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

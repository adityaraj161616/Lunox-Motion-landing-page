
import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.5]);

  const services = [
    {
      title: 'Digital Strategy',
      description: 'Strategic planning and digital transformation consulting for modern businesses.',
      index: '01'
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that creates meaningful and delightful digital experiences.',
      index: '02'
    },
    {
      title: 'Web Development',
      description: 'Custom web solutions built with cutting-edge technologies and frameworks.',
      index: '03'
    },
    {
      title: 'Brand Identity',
      description: 'Comprehensive brand development that tells your unique story.',
      index: '04'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

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
            src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-dark-bg/80" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="section-title text-gradient mb-6">Our Expertise</h2>
          <p className="text-xl text-dark-muted max-w-2xl mx-auto">
            We offer comprehensive digital solutions that drive growth and innovation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
              data-cursor-hover
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-primary text-sm font-medium">{service.index}</span>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-2 h-2 bg-primary rounded-full"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-dark-muted leading-relaxed">
                {service.description}
              </p>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                className="absolute bottom-0 left-0 h-0.5 bg-primary origin-left"
                style={{ width: '100%' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

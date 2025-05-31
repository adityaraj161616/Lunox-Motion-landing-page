import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

// Define your headline words and highlight if needed
const headlineWords = [
  { text: "Crafting", highlight: false },
  { text: "Excellence", highlight: true }, // Only "Excellence" is highlighted now
  { text: "For", highlight: false },
  { text: "Tomorrow", highlight: false },
];

const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  // Cinematic scroll effects for video
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const videoOpacity = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  
  // Hero text fade out on scroll
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  useEffect(() => {
    // Auto-play video with error handling and fallback
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log('Video autoplay prevented:', error);
          // Fallback: Show static background
        });
      }
    }
  }, []);

  // Staggered animation variants for professional text reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.22,
        duration: 0.8,
        ease: "easeOut"
      },
    },
  };

  // Animate each word from below
  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      filter: "blur(6px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 1.2,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 1.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Background Video with Fallback */}
      <motion.div
        style={{ scale: videoScale, opacity: videoOpacity }}
        className="absolute inset-0 w-full h-full z-0"
        initial={{ scale: 1.1, opacity: 0.7 }}
        animate={{ scale: 1.05, opacity: 0.85 }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080' fill='%23000000'%3E%3Crect width='100%25' height='100%25' fill='%23000000'/%3E%3C/svg%3E"
        >
          <source
            src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{ 
            background: [
              "radial-gradient(circle at 20% 20%, #5be9b9 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, #5be9b9 0%, transparent 50%)",
              "radial-gradient(circle at 40% 60%, #5be9b9 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Hero Content with Scroll-Responsive Animations */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-10 text-center section-padding w-full max-w-6xl mx-auto"
      >
        {/* Main Headline with Staggered Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mb-8"
        >
          <div className="hero-text leading-none flex flex-wrap justify-center gap-3">
            {headlineWords.map((word, idx) => (
              <motion.span
                key={idx}
                variants={wordVariants}
                className={`block font-bold tracking-tight drop-shadow-lg text-4xl md:text-6xl ${
                  word.highlight ? "text-primary" : "text-white"
                }`}
                style={{ display: "inline-block" }}
              >
                {word.text}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Professional Subtitle */}
        <motion.div
          variants={subtitleVariants}
          initial="hidden"
          animate={controls}
          className="mb-12"
        >
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md">
            We design and develop cutting-edge digital experiences that push the boundaries of technology and creativity.
          </p>
        </motion.div>

        {/* Premium CTA Button with Advanced Hover Effects */}
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(91, 233, 185, 0.4)",
              y: -2
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden bg-primary text-primary-foreground px-12 py-6 rounded-full font-semibold text-lg transition-all duration-500 shadow-2xl"
            data-cursor-hover
          >
            <span className="relative z-10 flex items-center gap-3">
              Start Your Project
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.div>
            </span>
            
            {/* Dynamic glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 rounded-full"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            
            {/* Pulsing background effect */}
            <motion.div
              className="absolute inset-0 bg-primary/10 rounded-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.button>
        </motion.div>

        {/* Elegant Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-gray-300 cursor-pointer"
            whileHover={{ scale: 1.1, color: "#5be9b9" }}
          >
            <span className="text-sm mb-3 font-light tracking-wide">Discover More</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-gray-300 to-transparent mb-2" />
            <ArrowDown size={18} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
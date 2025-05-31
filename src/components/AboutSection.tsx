
import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.7]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

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
            src="https://videos.pexels.com/video-files/3196036/3196036-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-dark-bg/70" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <motion.h2 
              style={{ y }}
              className="section-title text-gradient mb-8"
            >
              Crafting Tomorrow's
              <br />
              Digital Landscape
            </motion.h2>
            <motion.p 
              style={{ y: useTransform(scrollYProgress, [0, 1], [30, -30]) }}
              className="text-lg text-white leading-relaxed mb-6"
            >
              At Lunox Studio, we don't just build websites—we architect digital experiences 
              that captivate, engage, and convert. Our team of visionary designers and 
              developers pushes the boundaries of what's possible in the digital realm.
            </motion.p>
            <motion.p 
              style={{ y: useTransform(scrollYProgress, [0, 1], [20, -20]) }}
              className="text-lg text-dark-muted leading-relaxed"
            >
              From interactive installations to immersive web experiences, we bring 
              your boldest ideas to life with precision, creativity, and cutting-edge technology.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-transparent rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=800&fit=crop"
                alt="Creative workspace"
                className="w-full h-full object-cover mix-blend-luminosity"
              />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-24 h-24 border border-primary/30 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

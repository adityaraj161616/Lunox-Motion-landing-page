
import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import ContactForm from './ContactForm';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.8]);

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
            src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4"
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
          <h2 className="section-title text-gradient mb-6">Let's Create Together</h2>
          <p className="text-xl text-dark-muted max-w-2xl mx-auto">
            Ready to bring your vision to life? We'd love to hear about your project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">Get In Touch</h3>
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Contact Information</h4>
              <div className="space-y-3 text-dark-muted">
                <p>hello@lunoxstudio.com</p>
                <p>+1 (555) 123-4567</p>
                <p>123 Innovation Street<br />New York, NY 10001</p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Office Hours</h4>
              <div className="space-y-2 text-dark-muted">
                <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                <p>Saturday: 10:00 AM - 2:00 PM EST</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {['Twitter', 'Instagram', 'LinkedIn', 'Dribbble'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ y: -2 }}
                    className="text-dark-muted hover:text-primary transition-colors"
                    data-cursor-hover
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

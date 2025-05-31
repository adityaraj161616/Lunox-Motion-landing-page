
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-bg border-t border-white/10">
      <div className="section-padding py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-4 gap-12"
          >
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold text-white mb-4">Lunox Studio</h3>
              <p className="text-dark-muted leading-relaxed mb-6">
                We craft premium digital experiences that captivate audiences and drive results. 
                Let's build something extraordinary together.
              </p>
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

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {['Digital Strategy', 'UI/UX Design', 'Web Development', 'Brand Identity'].map((service) => (
                  <li key={service}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-dark-muted hover:text-white transition-colors"
                      data-cursor-hover
                    >
                      {service}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-dark-muted">
                <p>hello@lunoxstudio.com</p>
                <p>+1 (555) 123-4567</p>
                <p>New York, NY</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-between pt-12 mt-12 border-t border-white/10"
          >
            <p className="text-dark-muted text-sm">
              © 2024 Lunox Studio. All rights reserved.
            </p>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-primary hover:text-white transition-colors"
              data-cursor-hover
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp size={16} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

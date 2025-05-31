
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
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
            <h1 className="section-title text-gradient mb-6">Let's Create Together</h1>
            <p className="text-xl text-dark-muted max-w-2xl mx-auto">
              Ready to bring your vision to life? We'd love to hear about your project.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                <div className="space-y-3 text-dark-muted">
                  <p>hello@lunoxstudio.com</p>
                  <p>+1 (555) 123-4567</p>
                  <p>123 Innovation Street<br />New York, NY 10001</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Office Hours</h3>
                <div className="space-y-2 text-dark-muted">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p>Saturday: 10:00 AM - 2:00 PM EST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
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
      </div>
    </motion.div>
  );
};

export default Contact;

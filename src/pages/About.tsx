
import { motion } from 'framer-motion';

const About = () => {
  const team = [
    {
      name: 'Alexandra Chen',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop'
    },
    {
      name: 'Sarah Kim',
      role: 'UX Designer',
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop'
    },
    {
      name: 'David Park',
      role: 'Tech Lead',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop'
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
            <h1 className="section-title text-gradient mb-6">About Lunox</h1>
            <p className="text-xl text-dark-muted max-w-3xl mx-auto leading-relaxed">
              We are a collective of visionary designers, developers, and strategists 
              who believe in the power of digital innovation to transform businesses and lives.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-16 items-center mb-32"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-dark-muted leading-relaxed mb-6">
                At Lunox Studio, we don't just create digital products—we craft experiences 
                that resonate, engage, and inspire. Our mission is to push the boundaries 
                of what's possible in the digital realm.
              </p>
              <p className="text-lg text-dark-muted leading-relaxed">
                Every project is an opportunity to innovate, to challenge conventions, 
                and to create something truly extraordinary that drives meaningful impact.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-transparent rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=600&fit=crop"
                  alt="Our workspace"
                  className="w-full h-full object-cover mix-blend-luminosity"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-16">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group text-center"
                >
                  <div className="aspect-square mb-4 overflow-hidden rounded-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-primary text-sm">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;

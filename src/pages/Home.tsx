
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import ContactSection from '@/components/ContactSection';

const Home = () => {
  return (
    <div className="bg-dark-bg">
      <Hero />
      <AboutSection />
      <Services />
      <Projects />
      <ContactSection />
    </div>
  );
};

export default Home;

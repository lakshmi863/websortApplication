import HeroSection from '../components/Home/HeroSection';
import AboutSection from '../components/Home/AboutSection';
import IoTSection from '../components/Home/IoTSection';
import ExploreSection from '../components/Home/ExploreSection';
import WhyWeStandOut from '../components/Home/WhyWeStandOut';
import Achievements from '../components/Home/Achievements';
import ContactForm from '../components/Home/ContactForm';
import WaitSection from '../components/Home/WaitSection';

const Home = () => {
  return (
    <div > 
      <HeroSection />
      <AboutSection /> 
      <IoTSection />
      <ExploreSection />
      <WhyWeStandOut />
      <Achievements />
      <ContactForm />
      <WaitSection />
    </div>
  );
};

export default Home;

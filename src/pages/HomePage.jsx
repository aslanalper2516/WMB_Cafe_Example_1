import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import About from '../components/About';
import Franchise from '../components/Franchise';
import Footer from '../components/Footer';
import LanguageWrapper from '../components/LanguageWrapper';

export default function HomePage() {
  return (
    <LanguageWrapper>
      <Navigation />
      <Hero />
      <Menu />
      <About />
      <Franchise />
      <Footer />
    </LanguageWrapper>
  );
}






import Header from '../app/components/Header';
import HeroSection from '../app/components/HeroSection';
import FeaturesSection from '../app/components/FeaturesSection';
import CustomerStoriesSection from '../app/components/CustomerStoriesSection';
import IntegrationsSection from '../app/components/IntegrationsSection';
import DownloadSection from '../app/components/DownloadSection';
import Footer from '../app/components/Footer';
import NotionHeroBento from './components/NotionHeroBento';
import NotionShowcase from './components/NotionShowcase';
import FindAnything from './components/FindAnything';

const Home = () => (
  <main>
    <Header />
    <HeroSection />
    <FeaturesSection />
    <NotionHeroBento/>
    <NotionShowcase/>
    <CustomerStoriesSection />
    <FindAnything/>
    <IntegrationsSection />
    <DownloadSection />
    <Footer />
  </main>
);

export default Home;

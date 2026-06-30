import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import IntelStrip from '../components/IntelStrip';
import HeroSection from '../sections/HeroSection';
import ProblemSection from '../sections/ProblemSection';
import OfferSection from '../sections/OfferSection';
import VideoSection from '../sections/VideoSection';
import PeopleSection from '../sections/PeopleSection';
import CTASection from '../sections/CTASection';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Floodsensing.AI — Real-Time Flood Intelligence</title>
        <meta
          name="description"
          content="AI-powered real-time flood prediction and prevention platform for governments, utilities, and infrastructure operators worldwide."
        />
        <meta property="og:title" content="Floodsensing.AI" />
        <meta
          property="og:description"
          content="Predict and Prevent Flooding With Real-Time Intelligence"
        />
        <meta property="og:image" content="/og-image.png" />
      </Helmet>

      <Navbar />

      <main>
        <HeroSection />
        <ProblemSection />
        <IntelStrip />
        <OfferSection />
        <VideoSection />
        <PeopleSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}

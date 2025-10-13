import Hero from "./Components/Hero/Hero";
import ExploreCategories from "./Components/ExploreCategories/ExploreCategories";
import AboutSection from "./Components/AboutSection/AboutSection";
import IndustriesSection from "./Components/IndustriesSection/IndustriesSection";
import PortfolioSection from "./Components/PortfolioSection/PortfolioSection";
import ProcessSection from "./Components/ProcessSection/ProcessSection";
import TechnologiesSection from "./Components/TechnologiesSection/TechnologiesSection";

const Home = () => {
  return (
    <div className="border border-amber-300">
      <Hero/>
      <AboutSection/>
      <ExploreCategories />
      <IndustriesSection/>
      <PortfolioSection/>
      <ProcessSection/>
      <TechnologiesSection/>
    </div>
  );
};

export default Home;

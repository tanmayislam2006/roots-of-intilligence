import Hero from "./Components/Hero/Hero";
import ExploreCategories from "./Components/ExploreCategories/ExploreCategories";
import AboutSection from "./Components/AboutSection/AboutSection";
import IndustriesSection from "./Components/IndustriesSection/IndustriesSection";
import PortfolioSection from "./Components/PortfolioSection/PortfolioSection";
import ProcessSection from "./Components/ProcessSection/ProcessSection";

const Home = () => {
  return (
    <div className="border border-amber-300">
      <Hero/>
      <AboutSection/>
      <ExploreCategories />
      <IndustriesSection/>
      <PortfolioSection/>
      <ProcessSection/>
    </div>
  );
};

export default Home;

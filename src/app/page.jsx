import Hero from "./Components/Hero/Hero";
import ExploreCategories from "./Components/ExploreCategories/ExploreCategories";
import AboutSection from "./Components/AboutSection/AboutSection";

const Home = () => {
  return (
    <div className="border border-amber-300">
      <Hero/>
      <AboutSection/>
      <ExploreCategories />
    </div>
  );
};

export default Home;

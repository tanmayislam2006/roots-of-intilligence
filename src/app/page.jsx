import Hero from "./Components/Hero/Hero";
import ExploreCategories from "./Components/ExploreCategories/ExploreCategories";

const Home = () => {
  return (
    <div className="border border-amber-300">
      <Hero></Hero>
      <ExploreCategories />
    </div>
  );
};

export default Home;

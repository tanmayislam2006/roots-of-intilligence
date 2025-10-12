import React from "react";

const ExploreCategories = () => {
  return (
    <div className="py-24 bg-secondary">
      <div className="container mx-auto ">
        <div className="">
          <h2 className="text-4xl font-bold  mb-8">
            Explore <span className="block">Our Categories</span>
          </h2>
          <p className="max-w-md mt-4 mb-12">
            Look into yourself, get something in return as your AchievementLook
            into yourself, get something Return as your achievement
          </p>
          {/* primary button  */}
          <button className="bg-primary text-white px-6 py-3 rounded-full transition-colors">
            Explore Categories
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreCategories;

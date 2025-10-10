import React from "react";

const Hero = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold">
        Grow your Skills to Advance Your Career path.
      </h1>
      <p className="mt-4 text-lg">
        Educating, Inspiring, & Transforming Young Women. A Tuition-Free Private
        Middle School.
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        Get Started
      </button>
      <button className="mt-6 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
        Learn More
      </button>
    </div>
  );
};

export default Hero;

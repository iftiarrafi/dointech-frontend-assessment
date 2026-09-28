import { useState } from "react";
import categoryPills from "../data/category";
import CourseCard from "./CourseCard";
export default function CoursesDiscovery() {
  const [activeCategory, setActiveCategory] = useState("Featured");
  return (
    <section id="courses" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          Discover Your Passion,
          <br />
          Build Your Skills
        </h2>
        <p className="text-gray-500 text-sm mt-4 leading-relaxed">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-2 mt-8 max-w-5xl mx-auto">
        {categoryPills.map((pill) => (
          <button
            key={pill}
            onClick={() => setActiveCategory(pill)}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
              activeCategory === pill
                ? "bg-[#d2f800] text-black font-bold shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {pill}
          </button>
        ))}
      </div>

      {/* Course Cards Grid */}

      <CourseCard />
    </section>
  );
}

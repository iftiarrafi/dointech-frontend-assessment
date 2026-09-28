import { useState , useEffect } from "react";
import Banner from "../components/Banner";
import TestimonialSection from "../components/TestimonialSection";
import CTABanner from "../components/CTABanner";
import FeaturesSection from "../components/FeaturesSection";
import CoursesDiscovery from "../components/CoursesDiscovery";
import DiverseLearningPathSection from "../components/DiverseLearningPathSection";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
        document.title = "ByteSpace New";
      }, []);

  return (
    <div className="w-full bg-white text-gray-900 font-sans selection:bg-[#d2f800] selection:text-black">
      <section className="relative overflow-hidden bg-[#003BE2] text-white">
        {/* Grid Background Overlay */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none z-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px), 
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        {/* 3D Ornaments Background Overlay */}
        <img
          src="logos/3dornament.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 opacity-90"
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 pt-28 pb-8">
          <h1 className="font-ag-headline text-[72px] text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>
          <p className="mt-6 text-blue-100 text-sm sm:text-base max-w-xl mx-auto font-normal">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          {/* Search Box */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 max-w-xl mx-auto flex items-center bg-white rounded-full p-1.5 shadow-2xl"
          >
            <div className="flex items-center w-full px-4 text-gray-400">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Course, topic, creator"
                className="w-full bg-transparent text-gray-900 placeholder-gray-400 text-sm focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-[#d2f800] hover:bg-[#c2e800] text-black font-semibold px-8 py-2.5 rounded-full text-sm transition-all shrink-0"
            >
              Search
            </button>
          </form>
        </div>

        {/* Hero Interactive Visuals */}
        <div className="relative z-10 max-w-5xl mx-auto h-[380px] sm:h-[460px] mt-4">
          {/* Big Lime Backdrop Arch */}
          <div className="absolute bottom-[-50%] left-1/2 -translate-x-1/2 w-[550px] sm:w-[700px] h-[550px] sm:h-[700px] bg-[#d2f800] rounded-full" />

          {/* Student Center Image */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-[270px] sm:w-[360px] h-[330px] sm:h-[420px] rounded-t-full overflow-hidden">
            <img
              src="/Image.png"
              alt="Learner"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Floating UI/UX Card Left */}
          <div className="hidden sm:block absolute left-12 top-16 z-20 bg-white text-gray-900 rounded-2xl px-5 py-3.5 shadow-xl">
      
            <img src="logos/uiuxcard.png" alt="" />
          </div>

          {/* Floating Progress Card Right */}
          <div className="absolute right-8 top-16 z-20 bg-white text-gray-900 rounded-2xl p-4 shadow-xl w-48 sm:w-56">
            <img src="logos/ProgressCard.png" alt="" />
          </div>

          {/* Floating Happy Students Bottom Left */}
          <div className="absolute left-3 sm:left-1 bottom-6 z-20">
            <img src="/AutoLayoutVertical.png" alt="Happy Students" />
          </div>
        </div>
      </section>

      {/* SECTION 2: LOGO BANNER                                   */}
      <section className="bg-[#F8F9FB] border-y border-gray-100 py-7 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center sm:justify-between gap-8 text-gray-400 font-bold text-lg opacity-80">
          <Banner />
        </div>
      </section>

      {/* SECTION 3: COURSES DISCOVERY                             */}
      <CoursesDiscovery />

      {/* SECTION 4: DIVERSE LEARNING PATHS                        */}
      <DiverseLearningPathSection />

      {/* SECTION 5: FEATURES & CREATOR MANAGEMENT                 */}
      <FeaturesSection />

      {/* SECTION 6: CREATOR BANNER & TESTIMONIALS                 */}

      {/* Creator Blue Grid CTA Banner */}
      <CTABanner />

      {/* Testimonials Section */}
      <TestimonialSection />
    </div>
  );
}

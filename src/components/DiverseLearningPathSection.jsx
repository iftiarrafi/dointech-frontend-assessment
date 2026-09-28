import learningPaths from "../data/learning"
export default function DiverseLearningPathSection() {
    return (
        <section className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-2xl mx-auto leading-relaxed">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there's something for everyone. Unleash your potential and
            explore our carefully curated categories.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-10">
            {learningPaths.map((item) => (
              <div
                key={item.name}
                className="bg-white border border-gray-200 hover:border-[#d2f800] rounded-2xl p-6 transition-all shadow-sm hover:shadow-md cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full bg-[#d2f800] text-black font-bold text-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-xs font-semibold text-gray-800">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
};

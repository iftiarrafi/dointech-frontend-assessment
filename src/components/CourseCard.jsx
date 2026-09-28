import coursesData2 from "../data/courses";
import testimonials from "../data/testimonial";
export default function CourseCard() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {coursesData2.map((course) => (
          <div
            key={course.id}
            className="bg-white border border-gray-100 rounded-3xl p-3 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-44 rounded-2xl overflow-hidden bg-gray-100">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 flex justify-between gap-1 text-[10px] font-medium text-gray-700">
                <span className="bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  {course.lessons}
                </span>
                <span className="bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  {course.time}
                </span>
                <span className="bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  {course.comments}
                </span>
              </div>
            </div>

            <div className="p-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-bold text-gray-900 text-base">
                  {course.title}
                </h3>
                <span className="text-xs font-semibold text-gray-500 shrink-0">
                  {course.rating} <span className="text-yellow-400">★</span>
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-1">
                by <span className="text-blue-600">{course.author}</span>
              </p>

              <div className="flex items-center justify-between mt-4">
                <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium">
                  📊 {course.level}
                </span>
                <div className="flex -space-x-1.5 items-center">
                  {testimonials.map((t, idx) => (
                    <img
                      key={idx}
                      src={t.image}
                      alt=""
                      className="w-6 h-6 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                  <span className="w-6 h-6 rounded-full bg-[#d2f800] text-black font-bold text-[9px] flex items-center justify-center border border-white">
                    26+
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
                <p className="text-blue-600 font-extrabold text-lg">
                  {course.price}
                  <span className="text-xs font-normal text-gray-400">
                    /lifetime
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

import testimonials from "../data/testimonial";
export default function TestimonialSection() {
    return (
        <>
            <section className="py-20 px-6 bg-gradient-to-blue from-yellow-50/60 via-white to-blue-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Discover What Our
              <br />
              Community Is Saying
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <h3 className="font-bold text-gray-900 mt-4">{t.name}</h3>
                <p className="text-xs font-semibold text-blue-600 mt-0.5">
                  {t.role}
                </p>
                <p className="text-gray-600 text-xs mt-4 leading-relaxed flex-1">
                  {t.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
        </>
    )
};

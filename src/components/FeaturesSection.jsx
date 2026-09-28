export default function FeaturesSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-yellow-50/40 via-white to-blue-50/40">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Feature 1: Professional Growth */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>
            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-8">
              <div>
                <p className="text-3xl font-extrabold text-blue-600">12K</p>
                <p className="text-xs text-gray-500 mt-1">Students</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-blue-600">70+</p>
                <p className="text-xs text-gray-500 mt-1">Courses</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-blue-600">16</p>
                <p className="text-xs text-gray-500 mt-1">Creators</p>
              </div>
            </div>
          </div>

          {/* Graphic 1 */}
          <div className="relative max-w-md mx-auto lg:max-w-none w-full flex justify-center">
            <img
              src="/logos/Frame11.png"
              alt="Professional Growth Feature"
              className="w-full h-auto object-contain max-h-[480px]"
            />
          </div>
        </div>

        {/* Feature 2: Create & Manage Courses */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Graphic 2 */}
          <div className="relative order-2 lg:order-1 max-w-md mx-auto lg:max-w-none w-full flex justify-center">
            <img
              src="/logos/Frame12.png"
              alt="Create & Manage Courses"
              className="w-full h-auto object-contain max-h-[480px]"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Create & Manage
              <br />
              Courses Easily.
            </h2>
            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              <strong>ByteSpace</strong> supports individuals or entities in the
              creation, publication, and administration of educational courses.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-gray-700 font-medium">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs shrink-0">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
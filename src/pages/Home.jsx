import { useState, useMemo } from 'react';

// Sample Course Data
const coursesData = [
  {
    id: 1,
    title: 'Learn Figma from Basic',
    category: 'UI/UX Design',
    author: 'purepearl studio',
    level: 'Beginner',
    rating: '4.5',
    price: '$25',
    lessons: '17 Lessons',
    time: '2 hours 16 mins',
    comments: '59 Comments',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: 'Build Digital Asset',
    category: 'Creative Marketing',
    author: 'purepearl studio',
    level: 'Beginner',
    rating: '4.5',
    price: '$25',
    lessons: '17 Lessons',
    time: '2 hours 16 mins',
    comments: '59 Comments',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    title: 'the Power of Big Data',
    category: 'Data Science',
    author: 'purepearl studio',
    level: 'Beginner',
    rating: '4.5',
    price: '$25',
    lessons: '17 Lessons',
    time: '2 hours 16 mins',
    comments: '59 Comments',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    title: 'Balancing Productivity an...',
    category: 'Productivity',
    author: 'purepearl studio',
    level: 'Beginner',
    rating: '4.5',
    price: '$25',
    lessons: '17 Lessons',
    time: '2 hours 16 mins',
    comments: '59 Comments',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    title: 'Mastering Money Manage...',
    category: 'Business',
    author: 'purepearl studio',
    level: 'Beginner',
    rating: '4.5',
    price: '$25',
    lessons: '17 Lessons',
    time: '2 hours 16 mins',
    comments: '59 Comments',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    title: 'From Idea to Startup Succ...',
    category: 'Freelance & Entrepreneurship',
    author: 'purepearl studio',
    level: 'Beginner',
    rating: '4.5',
    price: '$25',
    lessons: '17 Lessons',
    time: '2 hours 16 mins',
    comments: '59 Comments',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80',
  },
];

const categoryPills = [
  'Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation',
  'Social Media', 'UI/UX Design', 'Creative Marketing', 'Digital Illustration',
  'Film & Video', 'Crafts', 'Freelance & Entrepreneurship', 'Graphic Design',
  'Photography', 'Productivity', 'Web Development', 'Data Science', 'Cooking', '+ More'
];

const learningPaths = [
  { name: 'Design', icon: '✎' },
  { name: 'Development', icon: '⌘' },
  { name: 'IT & Software', icon: '💻' },
  { name: 'Business', icon: '🏢' },
  { name: 'Marketing', icon: '📡' },
  { name: 'Photography', icon: '📷' },
];

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote: '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."'
  },
  {
    name: 'James L.',
    role: 'Lifelong Learner',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    quote: '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."'
  },
  {
    name: 'Alex B.',
    role: 'Inspired Creator',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    quote: '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."'
  }
];

export default function Home({ setCurrentPage }) {
  const [activeCategory, setActiveCategory] = useState('Featured');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      const matchCat = activeCategory === 'Featured' || course.category === activeCategory;
      const matchQuery = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || course.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="w-full bg-white text-gray-900 font-sans selection:bg-[#d2f800] selection:text-black">
      
      {/* ========================================================= */}
      {/* SECTION 1: HERO & NAVBAR (Blue Grid)                      */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-[#0047FF] text-white">
        {/* Grid Background Overlay */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px), 
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />

        {/* Top Navigation */}

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 pt-10 pb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            Get Access to Hundreds<br />Courses Available
          </h1>
          <p className="mt-6 text-blue-100 text-sm sm:text-base max-w-xl mx-auto font-normal">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* Search Box */}
          <form onSubmit={(e) => e.preventDefault()} className="mt-8 max-w-xl mx-auto flex items-center bg-white rounded-full p-1.5 shadow-2xl">
            <div className="flex items-center w-full px-4 text-gray-400">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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
        <div className="relative max-w-5xl mx-auto h-[380px] sm:h-[460px] mt-4">
          {/* Big Lime Backdrop Arch */}
          <div className="absolute bottom-[-50%] left-1/2 -translate-x-1/2 w-[550px] sm:w-[700px] h-[550px] sm:h-[700px] bg-[#d2f800] rounded-full" />

          {/* Student Center Image */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-[270px] sm:w-[360px] h-[330px] sm:h-[420px] rounded-t-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" 
              alt="Learner" 
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Floating UI/UX Card Left */}
          <div className="hidden sm:block absolute left-12 top-16 z-20 bg-white text-gray-900 rounded-2xl px-5 py-3.5 shadow-xl">
            <p className="font-bold text-sm">UI/UX Design</p>
            <p className="text-xs text-gray-500">200 Courses • 1000+ Students</p>
          </div>

          {/* Floating Progress Card Right */}
          <div className="absolute right-8 top-16 z-20 bg-white text-gray-900 rounded-2xl p-4 shadow-xl w-48 sm:w-56">
            <p className="text-xs text-gray-500 font-medium">Learning Progress</p>
            <p className="text-4xl font-extrabold text-gray-900 my-1">55%</p>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#d2f800] w-[55%] rounded-full" />
            </div>
          </div>

          {/* Floating Happy Students Bottom Left */}
          <div className="absolute left-6 sm:left-16 bottom-6 z-20 bg-white text-gray-900 rounded-2xl p-3.5 shadow-xl">
            <p className="font-bold text-xs">Happy Students</p>
            <p className="text-[11px] text-gray-500 flex items-center gap-1 mt-0.5">
              <span>4.5 (240)</span>
              <span className="text-yellow-400">★</span>
            </p>
            <div className="flex -space-x-2 mt-2 items-center">
              {testimonials.map((t, idx) => (
                <img key={idx} src={t.image} alt="" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
              ))}
              <span className="w-6 h-6 rounded-full bg-[#d2f800] text-black font-bold text-[9px] flex items-center justify-center border border-white">
                2K+
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: LOGO BANNER                                   */}
      {/* ========================================================= */}
      <section className="bg-[#F8F9FB] border-y border-gray-100 py-7 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center sm:justify-between gap-8 text-gray-400 font-bold text-lg opacity-80">
          <span className="flex items-center gap-2"><span className="text-xl">🌊</span> Logoipsum</span>
          <span className="flex items-center gap-2"><span className="text-xl">⚙️</span> Logoipsum</span>
          <span className="flex items-center gap-2"><span className="text-xl">⚡</span> Logoipsum</span>
          <span className="flex items-center gap-2"><span className="text-xl">❖</span> Logoipsum</span>
          <span className="flex items-center gap-2"><span className="text-xl">🌐</span> Logoipsum</span>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: COURSES DISCOVERY                             */}
      {/* ========================================================= */}
      <section id="courses" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Discover Your Passion,<br />Build Your Skills
          </h2>
          <p className="text-gray-500 text-sm mt-4 leading-relaxed">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
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
                  ? 'bg-[#d2f800] text-black font-bold shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {pill}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {filteredCourses.map((course) => (
            <div 
              key={course.id} 
              className="bg-white border border-gray-100 rounded-3xl p-3 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-44 rounded-2xl overflow-hidden bg-gray-100">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex justify-between gap-1 text-[10px] font-medium text-gray-700">
                  <span className="bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full">{course.lessons}</span>
                  <span className="bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full">{course.time}</span>
                  <span className="bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full">{course.comments}</span>
                </div>
              </div>

              <div className="p-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-gray-900 text-base">{course.title}</h3>
                  <span className="text-xs font-semibold text-gray-500 shrink-0">
                    {course.rating} <span className="text-yellow-400">★</span>
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1">by <span className="text-blue-600">{course.author}</span></p>

                <div className="flex items-center justify-between mt-4">
                  <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium">
                    📊 {course.level}
                  </span>
                  <div className="flex -space-x-1.5 items-center">
                    {testimonials.map((t, idx) => (
                      <img key={idx} src={t.image} alt="" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
                    ))}
                    <span className="w-6 h-6 rounded-full bg-[#d2f800] text-black font-bold text-[9px] flex items-center justify-center border border-white">
                      26+
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
                  <p className="text-blue-600 font-extrabold text-lg">
                    {course.price}<span className="text-xs font-normal text-gray-400">/lifetime</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: DIVERSE LEARNING PATHS                        */}
      {/* ========================================================= */}
      <section className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-2xl mx-auto leading-relaxed">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
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
                <span className="text-xs font-semibold text-gray-800">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: FEATURES & CREATOR MANAGEMENT                 */}
      {/* ========================================================= */}
      <section className="py-20 px-6 bg-gradient-to-b from-yellow-50/40 via-white to-blue-50/40">
        <div className="max-w-6xl mx-auto space-y-24">
          
          {/* Feature 1: Professional Growth */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                Your Path to Professional<br />Growth Starts Here!
              </h2>
              <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
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

            <div className="relative max-w-md mx-auto lg:max-w-none w-full">
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-white p-2">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
                  alt="Student with laptop" 
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-5 right-4 bg-white p-4 rounded-2xl shadow-xl w-48 border border-gray-100">
                <p className="text-xs text-gray-500">Learning Progress</p>
                <p className="text-3xl font-extrabold text-gray-900 mt-1">55%</p>
                <div className="w-full h-1.5 bg-gray-100 rounded-full mt-2">
                  <div className="h-full bg-[#d2f800] w-[55%] rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Create & Manage Courses */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1 max-w-md mx-auto lg:max-w-none w-full">
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-white p-2">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
                  alt="Female creator" 
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>

              {/* Floating Revenue Card */}
              <div className="absolute top-4 left-4 bg-blue-600 text-white p-3.5 rounded-2xl shadow-lg text-xs">
                <p className="opacity-80">Total Revenue</p>
                <p className="text-lg font-bold">$120.29</p>
              </div>

              <div className="absolute bottom-4 left-4 bg-blue-700 text-white p-3.5 rounded-2xl shadow-lg text-xs">
                <p className="opacity-80">Year to Date</p>
                <p className="text-lg font-bold">$1,200.38</p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                Create & Manage<br />Courses Easily.
              </h2>
              <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                <strong>ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-gray-700 font-medium">
                {['Share Your Expertise', 'Monetize Your Passion', 'Flexibility and Autonomy', 'Build a Community'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
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

      {/* ========================================================= */}
      {/* SECTION 6: CREATOR BANNER & TESTIMONIALS                 */}
      {/* ========================================================= */}
      
      {/* Creator Blue Grid CTA Banner */}
      <section id="creators" className="relative overflow-hidden bg-[#0047FF] text-white py-20 px-6 text-center">
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px), 
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Unlock Your Potential as a<br />Creator with ByteSpace
          </h2>
          <p className="text-blue-100 text-xs sm:text-sm mt-6 leading-relaxed">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>

          <button 
            onClick={() => setCurrentPage('register')}
            className="mt-8 bg-[#d2f800] hover:bg-[#c2e800] text-black font-bold px-8 py-3 rounded-full text-sm transition-all shadow-lg"
          >
            Join as Creator
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-yellow-50/60 via-white to-blue-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Discover What Our<br />Community Is Saying
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                <h3 className="font-bold text-gray-900 mt-4">{t.name}</h3>
                <p className="text-xs font-semibold text-blue-600 mt-0.5">{t.role}</p>
                <p className="text-gray-600 text-xs mt-4 leading-relaxed flex-1">{t.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
import { useNavigate } from "react-router-dom";

export default function CTABanner() {
  const navigate = useNavigate();
  return (
    <>
      <section
        id="creators"
        className="relative overflow-hidden bg-[#0047FF] text-white py-20 px-6 text-center"
      >
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px), 
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Unlock Your Potential as a<br />
            Creator with ByteSpace
          </h2>
          <p className="text-blue-100 text-xs sm:text-sm mt-6 leading-relaxed">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>

          <button
            onClick={() => navigate("/register")}
            className="mt-8 bg-[#d2f800] hover:bg-[#c2e800] text-black font-bold px-8 py-3 rounded-full text-sm transition-all shadow-lg"
          >
            Join as Creator
          </button>
        </div>
      </section>
    </>
  );
}

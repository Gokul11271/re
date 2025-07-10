import BlurText from "./BlurText";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-[#FDF7F4] text-center px-4 relative overflow-hidden"
    >
      {/* Glowing Background */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[700px] h-[700px] bg-gradient-to-br from-[#FFF0DC]/60 to-[#A86523]/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl">
        <BlurText
          text="Bridal Blouse & Hand Embroidery Specialist"
          animateBy="words"
          direction="top"
          delay={80}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#A86523] to-[#543A14] bg-clip-text text-transparent mb-6 drop-shadow-xl"
        />

        <BlurText
          text="We make your special days even more beautiful with our detailed and premium tailoring."
          animateBy="words"
          delay={60}
          className="text-base sm:text-lg md:text-xl text-[#543A14] mb-8"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gradient-to-r from-[#A86523] to-[#543A14] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Book Your Appointment
        </motion.button>
      </div>

      {/* Scroll Icon */}
      <div className="absolute bottom-10 text-[#A86523] animate-bounce">
        <svg width="24" height="24" fill="currentColor" className="mx-auto">
          <path d="M12 16l-6-6h12l-6 6z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

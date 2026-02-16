import { motion } from "framer-motion";
import heroVideo from "@/assets/hero-video.mp4";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative container mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl font-bold text-background leading-[0.95] mb-8">
            <span className="text-gradient-honey">Western</span> Apiaries
          </h1>

          <p className="font-body text-lg md:text-xl text-background/90 mb-4 max-w-2xl leading-relaxed">
            <strong>Western Apiaries</strong> is a leading bee keeping solutions provider partnering with individuals, communities and organizations to ensure sustainable commercial bee keeping practices.
          </p>

          <p className="font-body text-lg md:text-xl text-background/90 mb-10 max-w-2xl leading-relaxed">
            We also champion for organic bee farming, agroecology and climate smart bee keeping practices.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="tel:0704123059"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              Call Us Now...
            </a>
            <a
              href="#contact"
              className="border border-background/30 text-background px-8 py-4 rounded-full font-body font-semibold hover:bg-background/10 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-5 h-8 rounded-full border-2 border-background/40 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-background/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

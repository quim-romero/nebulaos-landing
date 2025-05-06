import { motion } from "framer-motion";
import Button from "../components/Button";
import Container from "../components/Container";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <Container className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold leading-tight text-light tracking-tight max-w-4xl mx-auto"
        >
          More than productivity. <br className="hidden sm:block" />
          <span className="text-primary">Absolute control.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="mt-10"
        >
          <Button>Explore NebulaOS</Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;

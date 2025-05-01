import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-4xl md:text-6xl font-bold leading-tight text-light tracking-tight max-w-4xl"
      >
        More than productivity. <br className="hidden sm:block" />
        <span className="text-primary">Absolute control.</span>
      </motion.h1>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
        className="mt-10 px-6 py-3 rounded-full bg-primary text-dark text-sm font-semibold hover:scale-105 hover:bg-secondary transition-transform duration-300"
      >
        Explore NebulaOS
      </motion.button>
    </section>
  )
}

export default Hero

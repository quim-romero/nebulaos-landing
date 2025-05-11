import { motion } from 'framer-motion'
import Container from '../components/Container'
import { FiZap, FiShield, FiCommand, FiLayers } from 'react-icons/fi'

const features = [
  {
    icon: <FiZap size={24} />,
    title: 'Instant Commands',
    description: 'Trigger actions, shortcuts, and workflows instantly using intelligent commands.',
  },
  {
    icon: <FiShield size={24} />,
    title: 'Secure by Design',
    description: 'NebulaOS uses encrypted sync and privacy-first architecture by default.',
  },
  {
    icon: <FiCommand size={24} />,
    title: 'Custom Workflows',
    description: 'Build your own productivity flows without writing a single line of code.',
  },
  {
    icon: <FiLayers size={24} />,
    title: 'Modular UI',
    description: 'Organize your workspace with stackable, drag-and-drop components.',
  },
]

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.2,
      ease: 'easeOut',
    },
  }),
}

const Features = () => {
  return (
    <section
      id="features"
      className="py-28 bg-light text-dark dark:bg-dark dark:text-light transition-colors duration-300"
    >
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Built for <span className="text-primary">Performance</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="p-6 border border-muted/20 rounded-xl hover:shadow-xl hover:border-primary transition-all 
                         bg-white text-dark dark:bg-[#1d1d22] dark:text-light"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={i}
              variants={itemVariants}
            >
              <div className="text-primary mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-muted dark:text-muted/80">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Features

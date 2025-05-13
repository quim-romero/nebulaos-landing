import { motion } from 'framer-motion'
import { FiCpu, FiCloudLightning } from 'react-icons/fi'
import Container from '../components/Container'

const features = [
  {
    icon: <FiCpu size={28} />,
    title: 'AI-native architecture',
    description:
      'Designed from scratch to integrate intelligent workflows into every task.',
  },
  {
    icon: <FiCloudLightning size={28} />,
    title: 'Cloud-synced performance',
    description: 'Real-time sync with zero friction across devices and teams.',
  },
]

const fadeIn = (direction = 'left', delay = 0) => ({
  hidden: {
    opacity: 0,
    x: direction === 'left' ? -50 : 50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: 'easeOut',
    },
  },
})

const WhatIs = () => {
  return (
    <section
      id="what"
      className="py-24 bg-white text-dark dark:bg-dark dark:text-light transition-colors duration-300"
    >
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          What is <span className="text-primary">NebulaOS</span>?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 justify-center max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn(index % 2 === 0 ? 'left' : 'right', index * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 text-primary hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted dark:text-muted/80 max-w-md">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default WhatIs

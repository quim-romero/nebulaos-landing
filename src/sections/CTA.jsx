import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '../components/Container'
import Button from '../components/Button'

const CTA = () => {
  const [open, setOpen] = useState(false)

  return (
    <section className="py-32 relative bg-gradient-to-br from-[#16161A] to-[#1e1e22] text-light">
      <Container className="text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          Ready to <span className="text-primary">join the future</span>?
        </motion.h2>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-block backdrop-blur-md bg-white/5 border border-white/10 rounded-xl px-8 py-4 transition-all duration-300 hover:bg-white/10"
        >
          <Button onClick={() => setOpen(true)}>Join NebulaOS</Button>
        </motion.div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-dark p-8 rounded-xl max-w-sm text-center relative border border-muted/20"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 text-muted hover:text-light"
              >
                ×
              </button>
              <h3 className="text-xl font-semibold mb-4">NebulaOS Access</h3>
              <p className="text-sm text-muted">
                This is a fictional demo, but you’re welcome to imagine the possibilities.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default CTA

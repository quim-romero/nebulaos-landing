import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../components/Container";
import Button from "../components/Button";

const Demo = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState(">>> Ready.");

  const handleCommand = () => {
    setConsoleOutput(">>> Launching productivity core...");
    setTimeout(() => {
      setConsoleOutput('>>> Nebula AI response: "Focus mode activated."');
    }, 1500);
  };

  return (
    <section
      id="demo"
      className="py-28 bg-light text-dark dark:bg-[#1a1a1e] dark:text-light transition-colors duration-300"
    >
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Interactive <span className="text-primary">Demo</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Simulated Environment */}
          <div className="bg-white dark:bg-dark border border-muted/20 rounded-xl p-6 shadow-inner transition-colors">
            <h3 className="text-lg font-semibold mb-4">NebulaOS Console</h3>
            <div className="bg-gray-100 dark:bg-black text-green-600 dark:text-green-400 font-mono p-4 rounded h-32 text-sm transition-colors border border-muted/20">
              {consoleOutput}
            </div>

            <Button className="mt-4" onClick={handleCommand}>
              Run Command
            </Button>
          </div>

          <div className="bg-white dark:bg-dark border border-muted/20 rounded-xl p-6 shadow-inner text-sm transition-colors">
            <h3 className="text-lg font-semibold mb-4">Info Panel</h3>
            <p className="mb-4 text-muted dark:text-muted/80">
              Curious about NebulaOS’s AI core? Click below to open the system
              panel.
            </p>
            <Button variant="secondary" onClick={() => setModalOpen(true)}>
              Open Modal
            </Button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 dark:bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-[#111] p-8 rounded-xl max-w-md text-left text-dark dark:text-light border border-muted/20 transition-colors"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-3 right-3 text-muted hover:text-light"
              >
                ×
              </button>
              <h4 className="text-xl font-bold mb-4">NebulaOS AI Core</h4>
              <p className="text-sm text-muted dark:text-muted/80">
                The AI Core is designed to anticipate actions, reduce friction,
                and enhance creative flow by learning your patterns and habits.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Demo;

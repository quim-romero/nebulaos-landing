import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Container from "./Container";

const navItems = [
  { label: "What", href: "#what" },
  { label: "Features", href: "#features" },
  { label: "Demo", href: "#demo" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          scrolled ? "bg-black/60 backdrop-blur-md" : ""
        }`}
      >
        <Container className="flex items-center justify-between py-4">
          <a href="/" className="text-xl font-bold tracking-wide">
            <span className="text-black dark:text-light">Nebula</span>
            <span className="text-primary">OS</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-muted">
            {navItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="hover:text-light transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-black dark:text-light text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </Container>
      </motion.header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 right-0 w-3/4 h-full bg-dark z-40 px-8 py-20 flex flex-col gap-6 text-light md:hidden"
          >
            {navItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={handleNavClick}
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                {label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

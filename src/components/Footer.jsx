import { FiGithub, FiTwitter, FiGlobe } from 'react-icons/fi'
import Container from './Container'

const Footer = () => {
  return (
    <footer className="bg-[#111] text-muted text-sm pt-16 pb-12">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div>
          <div className="font-bold text-light mb-1">
            Nebula<span className="text-primary">OS</span>
          </div>
          <p className="max-w-sm">
            NebulaOS is a fictional product designed and built to push the limits of frontend storytelling and interaction.
          </p>
        </div>

        <div className="flex gap-6 text-xl">
          <a href="#" className="hover:text-light transition-colors">
            <FiGithub />
          </a>
          <a href="#" className="hover:text-light transition-colors">
            <FiTwitter />
          </a>
          <a href="#" className="hover:text-light transition-colors">
            <FiGlobe />
          </a>
        </div>
      </Container>

      <Container>
        <div className="mt-8 text-xs text-muted/70 text-center border-t border-muted/10 pt-6">
          © {new Date().getFullYear()} NebulaOS. This interface is part of a frontend concept project.
        </div>
      </Container>
    </footer>
  )
}

export default Footer

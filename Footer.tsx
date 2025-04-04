import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">
              <span className="text-amber">Studio</span> Arquitetura
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Projetamos espaços que inspiram, transformando visões em realidade com atenção aos detalhes e inovação.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-amber transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-amber transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:contato@studioarquitetura.com"
                className="text-gray-500 hover:text-amber transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Links Rápidos</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-amber transition-colors">Home</Link> 
              <Link to="/projetos" className="text-muted-foreground hover:text-amber transition-colors">Projetos</Link>
              <Link to="/sobre" className="text-muted-foreground hover:text-amber transition-colors">Sobre Nós</Link>
              <Link to="/contato" className="text-muted-foreground hover:text-amber transition-colors">Contato</Link>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Serviços</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/projetos" className="text-muted-foreground hover:text-amber transition-colors">Projetos Residenciais</Link>
              <Link to="/projetos" className="text-muted-foreground hover:text-amber transition-colors">Projetos Comerciais</Link>
              <Link to="/projetos" className="text-muted-foreground hover:text-amber transition-colors">Interiores</Link>
              <Link to="/projetos" className="text-muted-foreground hover:text-amber transition-colors">Consultoria</Link>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-amber mt-0.5" />
                <span className="text-sm text-muted-foreground">Av. Paulista, 1000, São Paulo, SP, Brasil</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-amber" />
                <span className="text-sm text-muted-foreground">+55 (11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-amber" />
                <span className="text-sm text-muted-foreground">contato@studioarquitetura.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Studio Arquitetura. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0 text-sm text-muted-foreground">
            <a href="#" className="hover:text-amber transition-colors">Política de Privacidade</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-amber transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
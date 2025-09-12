import { Instagram, MessageCircle, Mail } from 'lucide-react';
import logoRecon from '@/assets/logoRecon.png';

export const Footer = () => {
  const handleWhatsApp = () => {
    const message = "Olá! Gostaria de entrar em contato com a Loja Recon.";
    window.open(`https://wa.me/5581999097261?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
           <div>
             <div className="mb-4">
               <img 
                 src={logoRecon} 
                 alt="RECON" 
                 className="h-8 object-contain filter brightness-0 invert"
               />
             </div>
             <h3 className="font-brand text-2xl font-bold mb-4"></h3>
            <p className="font-body text-primary-foreground/80 leading-relaxed">
              Catedral da Reconciliação | IECB<br />
              Venha como está e seja reconciliado 🤍<br />
              • Cultos: Quarta (20h) e Domingo (08h, 10h, 16h e 18h)<br />
              • Endereço: R. Alfredo Marcondes, 499 | Recife - PE
            </p>
          </div>

          <div>
            <h4 className="font-brand text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              
              <a
                href="https://instagram.com/parareconciliar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
                @parareconciliar
              </a>
            </div>
          </div>

          
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="font-body text-primary-foreground/60">
            © 2025 Loja Recon. Todos os direitos reservados. | Criado por CB Branding.
          </p>
        </div>
      </div>
    </footer>
  );
};
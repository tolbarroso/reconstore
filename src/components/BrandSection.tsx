import { Heart, Cross, Sparkles } from 'lucide-react';
import reconLogo from '@/assets/logoRecon.png';

export const BrandSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-card">
      <div className="max-w-6xl mx-auto">
         <div className="text-center mb-16">
           <div className="mb-6">
             <img 
               src={reconLogo} 
               alt="RECON" 
               className="mx-auto h-12 md:h-16 object-contain"
             />
           </div>
           <h2 className="font-brand text-4xl md:text-5xl font-bold mb-6 text-foreground">
             RECON
           </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mais que uma marca de roupas, somos um movimento que acredita no poder da moda 
            como expressão da fé. Cada peça carrega uma mensagem de esperança, 
            transformação e identidade cristã autêntica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
              <Heart className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-brand text-xl font-semibold mb-4 text-foreground">
              Propósito
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              Cada design nasce de uma inspiração divina, criado para tocar corações 
              e despertar conversas sobre fé e esperança.
            </p>
          </div>

          <div className="text-center p-8 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
              <Cross className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-brand text-xl font-semibold mb-4 text-foreground">
              Identidade
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              Vista sua fé com autenticidade. Nossos produtos celebram a identidade 
              cristã com estilo contemporâneo e significado profundo.
            </p>
          </div>

          <div className="text-center p-8 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
              <Sparkles className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-brand text-xl font-semibold mb-4 text-foreground">
              Qualidade
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              Comprometimento com excelência em cada detalhe. Tecidos premium, 
              acabamento perfeito e durabilidade que honra seu investimento.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <blockquote className="font-body text-2xl italic text-muted-foreground max-w-2xl mx-auto">
            "Revesti-vos de toda a armadura de Deus, para poderdes ficar firmes contra as ciladas do diabo; porque a nossa luta não é contra o sangue e a carne, e sim contra os principados e potestades, contra os dominadores deste mundo tenebroso, contra as forças espirituais do mal, nas regiões celestes."
            <cite className="block mt-4 text-lg not-italic font-semibold text-accent">
              Efésios 6:11-12
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { FloatingCart } from '@/components/FloatingCart';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';
import { ShieldCheck, Package, Star, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    loading,
    filteredProducts,
  } = logic;

  return (
    <EcommerceTemplate showCart={true}>
      {/* HERO SECTION - Impacto visual máximo */}
      <section 
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(/hero-bracelet.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="mb-6 flex flex-wrap justify-center gap-3">
            <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold pulse-red">
              ⚡ EDICIÓN LIMITADA
            </span>
            <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-bold">
              🔥 +700 VENDIDOS
            </span>
            <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold">
              ⏰ ALTA DEMANDA
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 neon-glow-red">
            El Brazalete del<br />Upside Down
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto">
            Lleva contigo un pedazo de Hawkins.<br />
            <span className="text-primary font-bold">Hecho para fans reales.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 neon-glow-red"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              🛒 Comprar Ahora
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-foreground/30 text-foreground hover:bg-foreground/10 text-lg px-8 py-6"
              onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
            >
              📖 Conoce la Historia
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6 text-sm text-foreground/70">
            <div className="flex items-center gap-2">
              ⭐ 4.6/5 (1000+ reviews)
            </div>
            <div className="hidden sm:block w-px h-4 bg-foreground/30"></div>
            <div className="flex items-center gap-2">
              🚚 Envío rápido a todo México
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS CLAVE */}
      <section className="py-16 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="text-center p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="font-bold text-foreground mb-2">Diseño Exclusivo</h3>
              <p className="text-sm text-muted-foreground">Inspirado en la serie</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <div className="text-4xl mb-3">🔗</div>
              <h3 className="font-bold text-foreground mb-2">Charms Intercambiables</h3>
              <p className="text-sm text-muted-foreground">Colecciona y combina</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <div className="text-4xl mb-3">💎</div>
              <h3 className="font-bold text-foreground mb-2">Plata Tipo 925</h3>
              <p className="text-sm text-muted-foreground">Alta calidad</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold text-foreground mb-2">Ajustable - Unisex</h3>
              <p className="text-sm text-muted-foreground">Para todos</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <div className="text-4xl mb-3">🎁</div>
              <h3 className="font-bold text-foreground mb-2">Regalo Perfecto</h3>
              <p className="text-sm text-muted-foreground">Para fans</p>
            </div>
          </div>
        </div>
      </section>

      {/* STORYTELLING SECTION */}
      <section id="story" className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 neon-glow-red">
            Una Historia en Cada Charm
          </h2>
          
          <div className="prose prose-invert prose-lg mx-auto text-foreground/80 leading-relaxed">
            <p className="text-lg mb-6">
              Este brazalete está inspirado en los <span className="text-primary font-bold">símbolos más icónicos de Stranger Things</span>: 
              el Demogorgon, el portal del Upside Down, las luces de Navidad y la bicicleta.
            </p>
            <p className="text-lg">
              Cada charm representa una parte de la historia que <span className="text-secondary font-bold">marcó a millones de fans</span> alrededor del mundo. 
              Lleva contigo un recuerdo de Hawkins, Indiana.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">+700</div>
              <div className="text-sm text-muted-foreground">Brazaletes vendidos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-1">4.6★</div>
              <div className="text-sm text-muted-foreground">Calificación</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-1">5</div>
              <div className="text-sm text-muted-foreground">Charms coleccionables</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Fans satisfechos</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRUEBA SOCIAL - TESTIMONIOS */}
      <section className="py-16 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            ⭐ Lo que dicen nuestros fans
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-muted/30 p-6 rounded-lg border border-primary/20">
              <div className="flex items-center gap-1 mb-3 text-primary">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-foreground/90 mb-4 italic">
                "Me sentí como si tuviera un recuerdo oficial de Hawkins. ¡Los detalles son increíbles!"
              </p>
              <p className="text-sm text-muted-foreground">— Ana M., CDMX</p>
            </div>

            <div className="bg-muted/30 p-6 rounded-lg border border-secondary/20">
              <div className="flex items-center gap-1 mb-3 text-primary">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-foreground/90 mb-4 italic">
                "Compré el set completo. Llegó rápido y la calidad es mejor de lo que esperaba."
              </p>
              <p className="text-sm text-muted-foreground">— Carlos R., Guadalajara</p>
            </div>

            <div className="bg-muted/30 p-6 rounded-lg border border-accent/20">
              <div className="flex items-center gap-1 mb-3 text-primary">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-foreground/90 mb-4 italic">
                "El regalo perfecto para mi hermana fan de ST. ¡Le encantó!"
              </p>
              <p className="text-sm text-muted-foreground">— Luis G., Monterrey</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTOS SECTION */}
      <section id="products" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 neon-glow-red">
              🛍️ Elige tu Colección
            </h2>
            <p className="text-lg text-muted-foreground">
              Compra el brazalete base o arma tu colección completa
            </p>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-muted rounded-lg h-80 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No hay productos disponibles en este momento.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* GARANTÍAS Y CONFIANZA */}
      <section className="py-16 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            🛡️ Compra con Confianza
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Pago Seguro</h3>
              <p className="text-sm text-muted-foreground">
                Protección 100% en tu compra
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <Package className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Envío a Todo México</h3>
              <p className="text-sm text-muted-foreground">
                Entrega rápida y segura
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <RefreshCw className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Garantía 30 Días</h3>
              <p className="text-sm text-muted-foreground">
                Satisfacción garantizada
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            ❓ Preguntas Frecuentes
          </h2>
          
          <div className="space-y-4">
            <details className="bg-card p-6 rounded-lg border border-border group">
              <summary className="font-bold text-foreground cursor-pointer list-none flex justify-between items-center">
                ¿El brazalete es ajustable?
                <span className="text-primary">+</span>
              </summary>
              <p className="text-muted-foreground mt-4">
                Sí, el brazalete tiene un diseño ajustable de 16-20cm que se adapta a cualquier muñeca. Es unisex.
              </p>
            </details>

            <details className="bg-card p-6 rounded-lg border border-border group">
              <summary className="font-bold text-foreground cursor-pointer list-none flex justify-between items-center">
                ¿Los charms se venden por separado?
                <span className="text-primary">+</span>
              </summary>
              <p className="text-muted-foreground mt-4">
                ¡Sí! Puedes comprar el brazalete base y después agregar los charms que más te gusten. O comprar el set completo con descuento.
              </p>
            </details>

            <details className="bg-card p-6 rounded-lg border border-border group">
              <summary className="font-bold text-foreground cursor-pointer list-none flex justify-between items-center">
                ¿Cuánto tarda el envío?
                <span className="text-primary">+</span>
              </summary>
              <p className="text-muted-foreground mt-4">
                El envío tarda entre 3-7 días hábiles dentro de México. Recibirás un número de rastreo.
              </p>
            </details>

            <details className="bg-card p-6 rounded-lg border border-border group">
              <summary className="font-bold text-foreground cursor-pointer list-none flex justify-between items-center">
                ¿Es plata real?
                <span className="text-primary">+</span>
              </summary>
              <p className="text-muted-foreground mt-4">
                Nuestros productos tienen acabado tipo plata 925, material hipoalergénico de alta calidad con baño de plata.
              </p>
            </details>

            <details className="bg-card p-6 rounded-lg border border-border group">
              <summary className="font-bold text-foreground cursor-pointer list-none flex justify-between items-center">
                ¿Tienen garantía?
                <span className="text-primary">+</span>
              </summary>
              <p className="text-muted-foreground mt-4">
                Sí, todos nuestros productos tienen garantía de satisfacción de 30 días. Si no te gusta, te devolvemos tu dinero.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            ⚡ No te quedes sin el tuyo
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            Stock limitado. Los fans reales no esperan.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white text-lg px-12 py-6 neon-glow-red"
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            🛒 Comprar Ahora
          </Button>
        </div>
      </section>

      <FloatingCart />
    </EcommerceTemplate>
  );
};
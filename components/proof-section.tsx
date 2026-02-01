import Image from "next/image"

export function ProofSection() {
  return (
    <section className="py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-4">
              <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                Testimonios Reales
              </p>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
              Mensajes reales de personas que ya están fabricando y vendiendo con nuestros planos
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -top-3 left-4 z-10">
                <span className="bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full">
                  Daniel G. - Buenos Aires
                </span>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20 max-w-sm">
                <Image
                  src="/gallery/rack-daniel.jpg"
                  alt="Testimonio de Daniel G. - Captura de WhatsApp"
                  width={400}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
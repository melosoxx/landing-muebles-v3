import { Button } from "@/components/ui/button"
import { Check, Clock, Download, RefreshCcw, Zap } from "lucide-react"

const bonuses = [
  {
    icon: Zap,
    title: "Acceso inmediato",
    description: "Descarga todos los planos en menos de 2 minutos",
  },
  {
    icon: RefreshCcw,
    title: "Actualizaciones gratis",
    description: "Nuevos planos y diseños agregados mensualmente",
  },
  {
    icon: Download,
    title: "Formatos múltiples",
    description: "PDF de alta calidad, listo para imprimir o ver en tablet",
  },
]

export function OfferSection() {
  return (
    <section id="oferta" className="py-20 md:py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/20 rounded-full mb-6 animate-pulse">
              <Clock className="w-4 h-4 text-destructive" />
              <p className="text-sm font-semibold text-destructive">⚠️ Oferta por tiempo limitado</p>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Comenzá sin riesgos hoy mismo</h2>
            <p className="text-xl md:text-2xl text-secondary-foreground/80 max-w-3xl mx-auto">
              Probá el pack completo durante 7 días. Si no es lo que esperabas, te devolvemos tu dinero sin preguntas.
            </p>
          </div>

          <div className="bg-card text-card-foreground rounded-3xl shadow-2xl overflow-hidden border-4 border-primary">
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                
                
                
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg">
                  <Check className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="font-semibold">+300 planos profesionales de muebles industriales</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg">
                  <Check className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="font-semibold">Medidas exactas y especificaciones técnicas completas</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg">
                  <Check className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="font-semibold">Listas de materiales para cada proyecto</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg">
                  <Check className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="font-semibold">Actualizaciones gratuitas de por vida</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {bonuses.map((bonus, index) => (
                  <div key={index} className="text-center p-4 border border-border rounded-lg">
                    <bonus.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-sm mb-1">{bonus.title}</p>
                    <p className="text-xs text-muted-foreground">{bonus.description}</p>
                  </div>
                ))}
              </div>

              <a
                href="https://wwhustle.com/cart/51610450329883:1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="default"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-xs leading-7 border-0 px-0 py-8 mx-0 my-0 tracking-tight font-light"
                >
                  DESCARGAR ACCESO INMEDIATO
                </Button>
              </a>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Compra segura - Acceso de por vida
              </p>
              <p className="text-center text-xs text-muted-foreground mt-2">
                Garantía de devolución de 7 días - Acceso instantáneo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

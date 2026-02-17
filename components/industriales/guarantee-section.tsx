import { Shield, Clock, CheckCircle2 } from "lucide-react"

const guaranteePoints = [
  {
    icon: Clock,
    title: "7 días de garantía",
    description: "Probá el pack completo sin riesgos",
  },
  {
    icon: Shield,
    title: "100% de tu dinero de vuelta",
    description: "Si no estás satisfecho, te lo devolvemos",
  },
  {
    icon: CheckCircle2,
    title: "Sin preguntas",
    description: "Proceso simple y rápido de devolución",
  },
]

export function GuaranteeSection() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="w-24 h-24 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-12 h-12" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Garantía de 7 días sin riesgos</h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto">
              Estamos tan seguros de que este pack transformará tu negocio, que te damos 7 días completos para probarlo.
              Si no es lo que esperabas, te devolvemos el 100% de tu dinero.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {guaranteePoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <point.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                <p className="text-primary-foreground/80">{point.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
            <p className="text-2xl font-bold mb-4">No tienes nada que perder y todo por ganar</p>
            <p className="text-lg text-primary-foreground/90">
              Descarga el pack, revisá los planos, fabricá tus primeros muebles. Si no cumplimos lo prometido, te
              devolvemos tu dinero sin hacer preguntas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

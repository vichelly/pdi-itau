import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function DevelopmentPlan() {
  const steps = [
    { title: "Fundamentos da AWS e Computação em Nuvem", duration: "Semana 1-2" },
    { title: "Serviços principais da AWS (EC2, S3, RDS, etc.)", duration: "Semana 3-4" },
    { title: "Segurança, Arquitetura e Preços da AWS", duration: "Semana 5-6" },
    { title: "Revisão e prática com exames simulados", duration: "Semana 7-8" },
    { title: "Revisão final e realização do exame", duration: "Semana 9-12" },
  ]

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Plano de Desenvolvimento Pessoal</h2>
        <Card>
          <CardHeader>
            <CardTitle>Preparação para AWS Certified Cloud Practitioner</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Meu objetivo é obter a certificação AWS Certified Cloud Practitioner nos próximos 3 meses. Aqui está meu
              plano de estudos:
            </p>
            <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3">
              {steps.map((step, index) => (
                <div key={index} className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <CheckCircle className="w-3 h-3 text-blue-800 dark:text-blue-300" />
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {step.duration}
                  </time>
                </div>
              ))}
            </div>
            <p className="mt-4">
              Recursos de estudo: Documentação oficial da AWS, cursos online (A Cloud Guru, AWS Skill Builder), práticas
              hands-on com AWS Free Tier.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}


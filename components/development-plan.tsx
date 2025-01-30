import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Briefcase } from "lucide-react"

export default function DevelopmentPlan() {
  const steps = [
    { title: "Certified - AWS practitioner", duration: "realizar curso voltado para a prova e simulados" },
    { title: "", duration: "" },
  ]

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Plano de Desenvolvimento Pessoal</h2>
        <Card>
          <CardHeader>
            <CardTitle className="flex"> <h2>Objetivo <span className="text-orange-500" >Ituber</span></h2> </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 font-bold text-blue-600 flex items-center">
            <Briefcase className="mr-2 h-5 w-5 text-blue-600" />Efetivação como Engenheiro de Software
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
          </CardContent>
        </Card>
      </div>
    </section>
  )
}


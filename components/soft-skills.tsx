import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Users, Lightbulb, TrendingUp } from "lucide-react"

export default function SoftSkills() {
  const skills = [
    {
      icon: MessageSquare,
      title: "Comunicação",
      description: "Aprimorar habilidades de comunicação verbal e escrita.",
      plan: [
        "Participar de um curso de oratória",
        "Praticar apresentações técnicas mensalmente",
        "Escrever artigos técnicos para o blog da empresa",
      ],
    },
    {
      icon: Users,
      title: "Trabalho em Equipe",
      description: "Fortalecer a capacidade de colaboração e liderança em projetos.",
      plan: [
        "Assumir papel de líder em um projeto interdepartamental",
        "Organizar sessões de brainstorming mensais",
        "Participar de um workshop sobre metodologias ágeis",
      ],
    },
    {
      icon: Lightbulb,
      title: "Resolução de Problemas",
      description: "Desenvolver abordagens criativas para desafios complexos.",
      plan: [
        "Resolver um problema complexo por semana usando técnicas de pensamento lateral",
        "Participar de hackathons internos ou externos",
        "Estudar casos de sucesso de inovação em outras empresas",
      ],
    },
    {
      icon: TrendingUp,
      title: "Adaptabilidade",
      description: "Melhorar a capacidade de se adaptar a novas tecnologias e mudanças.",
      plan: [
        "Aprender uma nova tecnologia a cada trimestre",
        "Participar de rotações de função dentro da empresa",
        "Praticar mindfulness para aumentar a flexibilidade mental",
      ],
    },
  ]

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-muted">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Plano de Desenvolvimento de Habilidades Interpessoais</h2>
        <Card>
          <CardHeader>
            <CardTitle>Metas e Ações para Crescimento Pessoal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3">
              {skills.map((skill, index) => (
                <div key={index} className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <skill.icon className="w-3 h-3 text-blue-800 dark:text-blue-300" />
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.title}
                  </h3>
                  <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">{skill.description}</p>
                  <ul className="space-y-1 list-disc list-inside text-gray-500 dark:text-gray-400">
                    {skill.plan.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}


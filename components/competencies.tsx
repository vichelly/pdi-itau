import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Competencies() {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-muted">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Competências e Formação</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Competências Técnicas</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Desenvolvimento Web (HTML, CSS, JavaScript)</li>
                <li>React e Next.js</li>
                <li>Node.js</li>
                <li>AWS Cloud Services</li>
                {/* Adicione mais competências conforme necessário */}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Formação Acadêmica</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <strong>Graduação em [Seu Curso]</strong>
                  <br />
                  [Sua Universidade], [Ano de Conclusão]
                </li>
                {/* Adicione mais formações se aplicável */}
              </ul>
            </CardContent>
          </Card>
        </div>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Certificações</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>[Nome da Certificação] - [Instituição], [Ano]</li>
              {/* Adicione mais certificações conforme necessário */}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Competencies() {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-muted">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Competências e Formação</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Competências Técnicas em aperfeiçoamento</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Desenvolvimento Web (HTML, CSS, JavaScript)</li>
                <li>React e Next.js</li>
                <li>Angular</li>
                <li>Node.js</li>
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
                  <strong>Graduação em Ciência da Computação</strong>
                  <br />
                  Fei, conclusão dez 2025
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
              <li>Professional Scrum Product Owner™ I (PSPO I) - Scrum.org</li>
            </ul>
            <ul className="list-disc pl-5 space-y-2">
              <li>Practitioner Generative AI - Itaú Unibanco</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}


import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Introduction() {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Olá, eu sou [Seu Nome]</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 relative rounded-full overflow-hidden">
            <Image src="/placeholder.svg" alt="Sua foto" layout="fill" objectFit="cover" />
          </div>
          <p className="text-lg text-muted-foreground flex-1">
            Sou um profissional apaixonado por tecnologia e desenvolvimento pessoal. Com experiência em [suas áreas de
            expertise], estou sempre buscando novos desafios e oportunidades para crescer. Bem-vindo ao meu portfólio,
            onde compartilho minha jornada profissional e meus objetivos futuros.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}


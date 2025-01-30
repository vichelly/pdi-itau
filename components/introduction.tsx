import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gamepad2, Film, ShoppingBasketIcon as Basketball, Dumbbell, Linkedin } from 'lucide-react'

export default function Introduction() {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8">
      <Card className="max-w-4xl mx-auto overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-orange-700 to-orange-400 text-white">
          <CardTitle className="text-3xl font-bold">Olá, eu sou Vitor Lucas Fujita Felício</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-orange-500 shadow-lg">
              <Image
                src="/img/profile.jpg"
                alt="Foto de Vitor Lucas Fujita Felício"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-orange-600 dark:text-orange-400">Curiosidades sobre mim:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Gamepad2 className="mr-2 h-5 w-5 text-blue-600" />
                    <span className="text-gray-700 dark:text-gray-300">Amo jogar video game</span>
                  </li>
                  <li className="flex items-center">
                    <Film className="mr-2 h-5 w-5 text-blue-600" />
                    <span className="text-gray-700 dark:text-gray-300">Trilogia favorita: Senhor dos Anéis</span>
                  </li>
                  <li className="flex items-center">
                    <Basketball className="mr-2 h-5 w-5 text-blue-600" />
                    <span className="text-gray-700 dark:text-gray-300">Pratico basquete nas horas vagas</span>
                  </li>
                  <li className="flex items-center">
                    <Dumbbell className="mr-2 h-5 w-5 text-blue-600" />
                    <span className="text-gray-700 dark:text-gray-300">Frequento a academia regularmente</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4">
                <Link 
                  href="https://www.linkedin.com/in/vitor-lucas-fujita-felício" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Conecte-se no LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

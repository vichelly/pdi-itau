"use client"

import { useState, type FormEventHandler } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function FeedbackForm() {
  const [feedback, setFeedback] = useState("")
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    setMessage(null)

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ feedback }),
      })

      if (response.ok) {
        setFeedback("") // Clear the feedback
        setMessage({ type: "success", text: "Feedback enviado. Obrigado por sua contribuição! " })
      } else {
        throw new Error("Falha ao enviar feedback")
      }
    } catch (error) {
      setMessage({ type: "error", text: "Não foi possível enviar o feedback. Tente novamente mais tarde." })
    }

    // Clear the message after 3 seconds
    setTimeout(() => setMessage(null), 3000)
  }

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Seu Feedback é Importante</CardTitle>
        </CardHeader>
        <CardContent>
          {message && (
            <div
              className={`mb-4 p-3 rounded-md border ${
                message.type === "success"
                  ? "bg-green-100 border-green-400 text-green-700"
                  : "bg-red-100 border-red-400 text-red-700"
              }`}
            >
              {message.text}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="feedback">O que posso melhorar?</Label>
                <Textarea
                  id="feedback"
                  placeholder="Compartilhe suas sugestões aqui..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>
              <Button type="submit">Enviar Feedback</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}

"use client"

import { FormEventHandler, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function FeedbackForm() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit:FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ feedback }),
    });
  };

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Seu Feedback é Importante</CardTitle>
        </CardHeader>
        <CardContent>
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


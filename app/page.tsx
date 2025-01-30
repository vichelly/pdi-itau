import Introduction from "@/components/introduction"
import Competencies from "@/components/competencies"
import DevelopmentPlan from "@/components/development-plan"
import SoftSkills from "@/components/soft-skills"
import FeedbackForm from "@/components/feedback-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Introduction />
      <Competencies />
      <DevelopmentPlan />
      <SoftSkills />
      <FeedbackForm />
    </main>
  )
}


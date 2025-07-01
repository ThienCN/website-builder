import { BuilderProvider } from "@/contexts/BuilderContext"
import { Route, Routes } from "react-router-dom"
import { Templates } from "@/pages/templates"
import { TemplateContent } from "@/pages/template-content"

function App() {
  return (
    <BuilderProvider>
      <Routes>
        <Route path="/" element={<Templates />} />
        <Route path="/content" element={<TemplateContent />} />
      </Routes>
    </BuilderProvider>
  )
}

export default App

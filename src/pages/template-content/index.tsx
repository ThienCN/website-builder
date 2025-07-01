import { Canvas } from "@/pages/template-content/components/Canvas"
import { PropertiesPanel } from "@/pages/template-content/components/PropertiesPanel"
import { Toolbox } from "@/pages/template-content/components/ToolBox"
import { Header } from "@/pages/template-content/components/Header"
import { ChangeTemplateModal } from "@/pages/template-content/components/ChangeTemplateModal"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ExportModal } from "./components/ExportModal"

export const TemplateContent = () => {
  const [isExportModalOpen, setExportModalOpen] = useState(false)
  const [isTemplateModalOpen, setTemplateModalOpen] = useState(false)
  const navigate = useNavigate()

  const handleConfirmChangeTemplate = () => {
    setTemplateModalOpen(false)
    navigate("/")
  }

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <div className="flex flex-1 h-full">
        <Toolbox />
        <main className="flex-1 flex flex-col">
          <Header
            setTemplateModalOpen={setTemplateModalOpen}
            setExportModalOpen={setExportModalOpen}
          />
          <Canvas />
        </main>
        <PropertiesPanel />
      </div>
      {isTemplateModalOpen && (
        <ChangeTemplateModal
          setOpen={setTemplateModalOpen}
          handleConfirm={handleConfirmChangeTemplate}
        />
      )}
      {isExportModalOpen && (
        <ExportModal onClose={() => setExportModalOpen(false)} />
      )}
    </div>
  )
}

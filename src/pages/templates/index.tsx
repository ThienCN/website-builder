import { useBuilder } from "@/hooks/useBuilder"
import { templates } from "@/mock-data/templates"
import type { Template } from "@/types/Builder"
import { useNavigate } from "react-router-dom"

export const Templates = () => {
  const { loadTemplate } = useBuilder()
  const navigate = useNavigate()

  const handleSelectClick = (template: Template) => {
    loadTemplate(template)
    navigate("/content")
  }

  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <h1 className="text-3xl font-bold text-gray-800">
        Choose a template to start
      </h1>
      <div className="p-6 flex gap-6">
        {templates.map((template) => (
          <div
            key={template.name}
            onClick={() => handleSelectClick(template)}
            className="border rounded-lg overflow-hidden cursor-pointer group hover:shadow-xl hover:border-blue-500 transition-all duration-200"
          >
            <img
              src={template.previewImage}
              alt={`${template.name} preview`}
              className="w-full h-auto object-cover bg-gray-200 max-h-[500px]"
            />
            <div className="p-4 bg-gray-50">
              <h3 className="font-semibold text-lg text-gray-700 group-hover:text-blue-600">
                {template.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

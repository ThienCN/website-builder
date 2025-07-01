import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Image } from "@/components/ui/image"
import { Paragraph } from "@/components/ui/paragraph"
import { Space } from "@/components/ui/space"
import { useBuilder } from "@/hooks/useBuilder"
import type { Component } from "@/types/Builder"
import { Trash2 } from "lucide-react"

const componentMap = { Heading, Paragraph, Button, Space, Image }

export const ComponentWrapper = ({ component }: { component: Component }) => {
  const { setSelectedComponentId, selectedComponentId, deleteComponent } =
    useBuilder()
  const isSelected = selectedComponentId === component.id
  const ComponentToRender = componentMap[component.type]

  const handleSelect = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setSelectedComponentId(component.id)
  }

  return (
    <div
      className="relative group p-2 flex items-center justify-center"
      onClick={handleSelect}
    >
      <div
        className={`w-full border-2 ${isSelected ? "border-blue-500" : "border-transparent group-hover:border-blue-300"} border-dashed rounded-lg`}
      >
        {ComponentToRender && <ComponentToRender {...component} />}
      </div>
      {isSelected && (
        <div className="absolute -top-1 -right-1 flex items-center bg-white shadow-lg rounded-full">
          <button
            onClick={(e) => {
              e.stopPropagation()
              deleteComponent(component.id)
            }}
            className="p-2 text-red-500 hover:text-red-700 focus:outline-none cursor-pointer w-2.25 h-2.25"
            aria-label="Delete component"
          >
            <Trash2 size={19} />
          </button>
        </div>
      )}
    </div>
  )
}

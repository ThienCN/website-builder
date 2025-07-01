import { useBuilder } from "@/hooks/useBuilder"
import type { ComponentType } from "@/types/Builder"
import { ImageIcon } from "lucide-react"
import type { JSX } from "react"

export const Toolbox = () => {
  const { addComponent } = useBuilder()
  const componentTypes: { name: ComponentType; icon: JSX.Element }[] = [
    { name: "Heading", icon: <span className="font-bold text-xl">H1</span> },
    { name: "Paragraph", icon: <span className="font-bold text-lg">P</span> },
    {
      name: "Button",
      icon: (
        <span className="text-xs border border-current px-1 py-0.5 rounded">
          Btn
        </span>
      ),
    },
    { name: "Image", icon: <ImageIcon size={20} /> },
    { name: "Space", icon: <div className="h-5 w-px bg-current"></div> },
  ]
  return (
    <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Toolbox</h2>
      <div className="grid grid-cols-2 gap-2">
        {componentTypes.map(({ name, icon }) => (
          <button
            key={name}
            onClick={() => addComponent(name)}
            className="flex flex-col cursor-pointer items-center justify-center p-3 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md hover:border-blue-500 hover:bg-blue-50 transition-all duration-150 text-gray-600 h-20"
          >
            <div className="h-6 flex items-center justify-center">{icon}</div>
            <span className="text-xs font-medium mt-2">{name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

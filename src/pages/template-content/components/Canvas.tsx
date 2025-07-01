import { ComponentWrapper } from "@/pages/template-content/components/ComponentWrapper"
import { useBuilder } from "@/hooks/useBuilder"

export const Canvas = () => {
  const { components, setSelectedComponentId, pageSettings } = useBuilder()

  const { maxWidth, backgroundColor } = pageSettings

  return (
    <div
      className="flex-1 p-8 bg-gray-100 overflow-y-auto"
      onClick={() => setSelectedComponentId(null)}
    >
      <div
        style={{
          maxWidth: `${maxWidth}px`,
          backgroundColor: backgroundColor,
        }}
        className="mx-auto shadow-lg rounded-lg min-h-full p-4 transition-all duration-300"
      >
        {components.length > 0 ? (
          components.map((component) => (
            <ComponentWrapper key={component.id} component={component} />
          ))
        ) : (
          <div className="text-center text-gray-400 py-20">
            <p>Canvas is empty.</p>
            <p className="text-sm">Choose a template to get started.</p>
          </div>
        )}
      </div>
    </div>
  )
}

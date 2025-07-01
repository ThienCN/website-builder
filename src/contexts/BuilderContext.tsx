import { getComponentSettings } from "@/helpers/getComponentSettings"
import type {
  Component,
  PageSettings,
  Template,
  ComponentType,
} from "@/types/Builder"
import { createContext, useCallback, useMemo, useState } from "react"

type BuilderContextType = {
  loadTemplate: (template: Template) => void
  pageSettings: PageSettings
  updatePageSettings: (newSettings: Partial<PageSettings>) => void
  components: Component[]
  setComponents: (components: Component[]) => void
  addComponent: (type: ComponentType) => void
  updateComponent: (id: string, newProps: Partial<Component>) => void
  selectedComponentId: string | null
  setSelectedComponentId: (id: string | null) => void
  deleteComponent: (id: string) => void
}

const BuilderContext = createContext<BuilderContextType | null>(null)

const BuilderProvider = ({ children }: { children: React.ReactNode }) => {
  const [components, setComponents] = useState<Component[]>([])
  const [pageSettings, setPageSettings] = useState<PageSettings>({
    backgroundColor: "#ffffff",
    maxWidth: "900",
  })
  const [selectedComponentId, setSelectedComponentId] = useState<string | null>(
    null
  )

  const loadTemplate = (template: Template) => {
    const { components, pageSettings } = template
    setComponents(components)
    setPageSettings(pageSettings)
    setSelectedComponentId(null)
  }

  const addComponent = useCallback((type: ComponentType) => {
    const newId = `comp-${new Date().getTime()}`
    let newComponent: Component
    switch (type) {
      case "Heading":
        newComponent = {
          id: newId,
          type,
          ...getComponentSettings(type),
        }
        break
      case "Paragraph":
        newComponent = {
          id: newId,
          type,
          ...getComponentSettings(type),
        }
        break
      case "Button":
        newComponent = {
          id: newId,
          type,
          ...getComponentSettings(type),
        }
        break
      case "Space":
        newComponent = { id: newId, type, ...getComponentSettings(type) }
        break
      case "Image":
        newComponent = {
          id: newId,
          type,
          ...getComponentSettings(type),
        }
        break
      default:
        return
    }
    setComponents((prev) => [...prev, newComponent])
  }, [])

  const updateComponent = (id: string, newProps: Partial<Component>) => {
    setComponents((prev) =>
      prev.map((c) => (c.id === id ? { ...c, ...newProps } : c))
    )
  }

  const updatePageSettings = (newSettings: Partial<PageSettings>) => {
    setPageSettings((prev) => ({ ...prev, ...newSettings }))
  }

  const deleteComponent = useCallback(
    (id: string) => {
      setComponents((prev) => prev.filter((c) => c.id !== id))
      if (selectedComponentId === id) setSelectedComponentId(null)
    },
    [selectedComponentId]
  )

  const value = useMemo(
    () => ({
      components,
      setComponents,
      selectedComponentId,
      setSelectedComponentId,
      pageSettings,
      updatePageSettings,
      addComponent,
      updateComponent,
      deleteComponent,
      loadTemplate,
    }),
    [
      components,
      pageSettings,
      selectedComponentId,
      addComponent,
      deleteComponent,
    ]
  )

  return (
    <BuilderContext.Provider value={value}>{children}</BuilderContext.Provider>
  )
}

export { BuilderContext, BuilderProvider }

import { ComponentProperties } from "@/pages/template-content/components/ComponentProperties"
import { PageProperties } from "@/pages/template-content/components/PageProperties"
import { useBuilder } from "@/hooks/useBuilder"
import type { Component } from "@/types/Builder"
import type { ComponentStyles } from "@/types/ElementBaseProps"
import { useMemo } from "react"

export const PropertiesPanel = () => {
  const {
    selectedComponentId,
    components,
    updateComponent,
    pageSettings,
    updatePageSettings,
  } = useBuilder()

  const selectedComponent = useMemo(
    () => components.find((c) => c.id === selectedComponentId),
    [selectedComponentId, components]
  )

  if (!selectedComponent) {
    return (
      <PageProperties
        pageSettings={pageSettings}
        updatePageSettings={updatePageSettings}
      />
    )
  }

  const handleStyleChange = (prop: keyof ComponentStyles, value: string) => {
    updateComponent(selectedComponent.id, {
      styles: { ...selectedComponent.styles, [prop]: value },
    })
  }

  const handlePropChange = (prop: keyof Component, value: string) => {
    updateComponent(selectedComponent.id, {
      [prop]: value,
    })
  }

  return (
    <ComponentProperties
      selectedComponent={selectedComponent}
      handlePropChange={handlePropChange}
      handleStyleChange={handleStyleChange}
    />
  )
}

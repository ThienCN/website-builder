import type { ElementBaseProps } from "@/types/ElementBaseProps"

type ComponentType = "Heading" | "Paragraph" | "Button" | "Space" | "Image"

type Theme = "light" | "dark"

type Component = ElementBaseProps & {
  id: string
  type: ComponentType
  src?: string
  alt?: string
}

type PageSettings = {
  backgroundColor?: string
  maxWidth?: string
}

type Template = {
  name: string
  previewImage: string
  components: Component[]
  pageSettings: PageSettings
}

export {
  type ComponentType,
  type Component,
  type PageSettings,
  type Template,
  type Theme,
}

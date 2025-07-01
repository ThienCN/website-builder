import type { ComponentType, Theme } from "@/types/Builder"

export const getComponentSettings = (
  component: ComponentType,
  theme: Theme = "light"
) => {
  switch (component) {
    case "Heading":
      return {
        content: "New Heading",
        styles: {
          padding: "16",
          fontSize: "30",
          fontWeight: "700",
          color: theme === "dark" ? "#ffffff" : "#111827",
        },
      }
    case "Paragraph":
      return {
        content: "New Paragraph",
        styles: {
          padding: "8",
          fontSize: "16",
          fontWeight: "400",
          color: theme === "dark" ? "#d1d5db" : "#4b5563",
        },
      }
    case "Button":
      return {
        content: "Click Me",
        styles: {
          paddingLeft: "16",
          paddingRight: "16",
          paddingTop: "8",
          paddingBottom: "8",
          backgroundColor: "#3b82f6",
          color: "#ffffff",
          borderRadius: "8",
        },
      }
    case "Space":
      return {
        styles: { height: "40" },
      }
    case "Image":
      return {
        src: "https://placehold.co/600x400/e2e8f0/cbd5e0?text=Placeholder",
        alt: "Placeholder Image",
        styles: { padding: "16" },
      }
  }
}

import type { Template } from "@/types/Builder"

export const templates: Template[] = [
  {
    name: "Minimalist Portfolio",
    previewImage:
      "https://placehold.co/400x500/ffffff/9ca3af?text=Minimalist\\nPortfolio",
    pageSettings: { backgroundColor: "#ffffff", maxWidth: "900" },
    components: [
      {
        id: "tpl1-1",
        type: "Heading",
        content: "John Doe",
        styles: {
          padding: "16",
          fontSize: "48",
          fontWeight: "700",
          color: "#111827",
        },
      },
      {
        id: "tpl1-2",
        type: "Paragraph",
        content: "Software Engineer & Digital Artist",
        styles: {
          padding: "4",
          fontSize: "20",
          fontWeight: "400",
          color: "#4b5563",
        },
      },
      { id: "tpl1-3", type: "Space", styles: { height: "20" } },
      {
        id: "tpl1-4",
        type: "Image",
        src: "https://placehold.co/800x400/d1d5db/4b5563?text=Project+Showcase",
        alt: "Portfolio project showcase",
        styles: { padding: "16" },
      },
      {
        id: "tpl1-5",
        type: "Button",
        content: "Contact Me",
        styles: {
          paddingX: "24",
          paddingY: "12",
          backgroundColor: "#111827",
          color: "#ffffff",
          borderRadius: "8",
        },
      },
    ],
  },
  {
    name: "Clothing Store Template",
    previewImage:
      "https://placehold.co/400x500/1f2937/d1d5db?text=New\\nArrivals",
    pageSettings: { backgroundColor: "#1f2937", maxWidth: "1200" },
    components: [
      {
        id: "tpl2-1",
        type: "Heading",
        content: "New Arrivals",
        styles: {
          padding: "32",
          fontSize: "60",
          fontWeight: "700",
          color: "#ffffff",
        },
      },
      {
        id: "tpl2-2",
        type: "Paragraph",
        content: "COLLECTION 2025",
        styles: {
          padding: "32",
          fontSize: "32",
          fontWeight: "500",
          color: "#9ca3af",
        },
      },
      {
        id: "tpl2-3",
        type: "Paragraph",
        content:
          "A new collection has been released by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        styles: {
          padding: "8",
          fontSize: "22",
          fontWeight: "400",
          color: "#9ca3af",
        },
      },
      { id: "tpl2-4", type: "Space", styles: { height: "20" } },
      {
        id: "tpl2-5",
        type: "Button",
        content: "Shop Now",
        styles: {
          paddingX: "32",
          paddingY: "16",
          backgroundColor: "#3b82f6",
          color: "#ffffff",
          borderRadius: "99",
        },
      },
      {
        id: "tpl2-6",
        type: "Image",
        src: "https://placehold.co/800x300/374151/9ca3af?text=Product+Teaser",
        alt: "Product teaser image",
        styles: { padding: "32" },
      },
    ],
  },
]

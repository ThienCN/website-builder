import type { ElementBaseProps } from "@/types/ElementBaseProps"

export const Paragraph = ({ content, styles }: ElementBaseProps) => (
  <h2
    style={{
      padding: `${styles.padding}px`,
      fontSize: `${styles.fontSize}px`,
      fontWeight: styles.fontWeight,
      color: styles.color,
    }}
    className="w-full text-center"
  >
    {content}
  </h2>
)

import type { ElementBaseProps } from "@/types/ElementBaseProps"

export const Heading = ({ content, styles }: ElementBaseProps) => (
  <h1
    style={{
      padding: `${styles.padding}px`,
      fontSize: `${styles.fontSize}px`,
      fontWeight: styles.fontWeight,
      color: styles.color,
    }}
    className="w-full text-center"
  >
    {content}
  </h1>
)

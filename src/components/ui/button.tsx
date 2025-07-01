import type { ElementBaseProps } from "@/types/ElementBaseProps"

export const Button = ({ content, styles }: ElementBaseProps) => (
  <button
    style={{
      padding: `${styles.paddingY}px ${styles.paddingX}px`,
      backgroundColor: styles.backgroundColor,
      color: styles.color,
      borderRadius: `${styles.borderRadius}px`,
    }}
    className="transition-transform duration-150 ease-in-out hover:scale-105"
  >
    {content}
  </button>
)

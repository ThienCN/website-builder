import type { ElementBaseProps } from "@/types/ElementBaseProps"

type SpaceProps = Omit<ElementBaseProps, "content">

export const Space = ({ styles }: SpaceProps) => (
  <div style={{ height: `${styles.height}px` }} />
)

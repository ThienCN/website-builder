type ComponentStyles = React.CSSProperties & {
  paddingX?: string
  paddingY?: string
}

type ElementBaseProps = {
  content?: string
  styles: ComponentStyles
}

export { type ElementBaseProps, type ComponentStyles }

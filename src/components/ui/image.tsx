import type { ElementBaseProps } from "@/types/ElementBaseProps"

type ImageProps = ElementBaseProps & {
  src?: string
  alt?: string
}

export const Image = ({ src, alt, styles }: ImageProps) => (
  <div style={{ padding: `${styles.padding}px` }}>
    <img
      src={src}
      alt={alt}
      className="w-fit h-auto object-cover rounded-lg"
      onError={(e) => {
        e.currentTarget.src =
          "https://placehold.co/600x400/fecaca/991b1b?text=Invalid+Image+URL"
      }}
    />
  </div>
)

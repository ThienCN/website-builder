import type { Component } from "@/types/Builder"
import type { ComponentStyles } from "@/types/ElementBaseProps"

type ComponentPropertiesProps = {
  selectedComponent: Component
  handlePropChange: (prop: keyof Component, value: string) => void
  handleStyleChange: (prop: keyof ComponentStyles, value: string) => void
}

export const ComponentProperties = ({
  selectedComponent,
  handlePropChange,
  handleStyleChange,
}: ComponentPropertiesProps) => {
  const componentHasOwnProperty = (properties: string) =>
    Object.prototype.hasOwnProperty.call(selectedComponent, properties)

  const componentStylesHasOwnProperty = (properties: string) =>
    Object.prototype.hasOwnProperty.call(selectedComponent.styles, properties)

  const StyleInput = ({
    label,
    prop,
    type = "text",
    min,
    max,
  }: {
    label: string
    prop: keyof ComponentStyles
    type?: string
    min?: number
    max?: number
  }) => (
    <div className="mb-3">
      <label className="block text-xs font-medium text-gray-600 mb-1">
        {label}
      </label>
      <input
        type={type}
        value={selectedComponent.styles[prop]}
        onChange={(e) => handleStyleChange(prop, e.target.value)}
        className={`${type === "color" ? "w-11 h-11 px-0.5 cursor-pointer" : "w-full p-1.5"} border border-gray-300 rounded-sm shadow-sm`}
        min={min}
        max={max}
      />
    </div>
  )

  const AttributeInput = ({
    label,
    prop,
    type = "text",
  }: {
    label: string
    prop: keyof Omit<Component, "styles">
    type?: string
  }) => (
    <div className="mb-3">
      <label className="block text-xs font-medium text-gray-600 mb-1">
        {label}
      </label>
      <input
        type={type}
        value={selectedComponent[prop]}
        onChange={(e) => handlePropChange(prop, e.target.value)}
        className="w-full p-1.5 border border-gray-300 rounded-sm shadow-sm"
      />
    </div>
  )

  return (
    <div className="w-80 bg-gray-50 border-l border-gray-200 p-4 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-2 text-gray-700">Properties</h2>
      <p className="text-sm text-gray-500 mb-4 border-b pb-2">
        Editing:{" "}
        <span className="font-bold text-blue-600">
          {selectedComponent.type}
        </span>
      </p>
      <h3 className="text-md font-semibold mb-2 text-gray-600">Content</h3>
      {componentHasOwnProperty("content") && (
        <div className="mb-4">
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Text
          </label>
          <textarea
            value={selectedComponent.content}
            onChange={(e) => handlePropChange("content", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-sm shadow-sm"
            rows={3}
          />
        </div>
      )}
      {selectedComponent.type === "Image" && (
        <>
          <AttributeInput label="Image URL" prop="src" />
          <AttributeInput label="Alt Text" prop="alt" />
        </>
      )}
      <h3 className="text-md font-semibold mt-4 mb-2 text-gray-600">Styling</h3>
      {selectedComponent.type === "Space" && (
        <StyleInput label="Height (px)" prop="height" type="number" min={10} />
      )}
      {componentStylesHasOwnProperty("padding") && (
        <StyleInput label="Padding (px)" prop="padding" type="number" />
      )}
      {componentStylesHasOwnProperty("paddingX") && (
        <StyleInput label="Padding X (px)" prop="paddingX" type="number" />
      )}
      {componentStylesHasOwnProperty("paddingY") && (
        <StyleInput label="Padding Y (px)" prop="paddingY" type="number" />
      )}
      {componentStylesHasOwnProperty("fontSize") && (
        <StyleInput label="Font Size (px)" prop="fontSize" type="number" />
      )}
      {componentStylesHasOwnProperty("fontWeight") && (
        <div className="mb-3">
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Font Weight
          </label>
          <select
            value={selectedComponent.styles.fontWeight}
            onChange={(e) => handleStyleChange("fontWeight", e.target.value)}
            className="w-full p-1.5 border border-gray-300 rounded-sm text-sm shadow-sm"
          >
            <option value="400">Normal</option>
            <option value="500">Medium</option>
            <option value="600">Semibold</option>
            <option value="700">Bold</option>
          </select>
        </div>
      )}
      {componentStylesHasOwnProperty("borderRadius") && (
        <StyleInput
          label="Border Radius (px)"
          prop="borderRadius"
          type="number"
        />
      )}
      {componentStylesHasOwnProperty("color") && (
        <StyleInput label="Text Color" prop="color" type="color" />
      )}
      {componentStylesHasOwnProperty("backgroundColor") && (
        <StyleInput
          label="Background Color"
          prop="backgroundColor"
          type="color"
        />
      )}
    </div>
  )
}

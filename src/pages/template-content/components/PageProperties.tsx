import type { PageSettings } from "@/types/Builder"
import { Settings } from "lucide-react"

type PageSettingsPropertiesProps = {
  pageSettings: PageSettings
  updatePageSettings: (newSettings: Partial<PageSettings>) => void
}

export const PageProperties = ({
  pageSettings,
  updatePageSettings,
}: PageSettingsPropertiesProps) => {
  const { maxWidth, backgroundColor } = pageSettings

  return (
    <div className="w-80 bg-gray-50 border-l border-gray-200 p-4">
      <div className="flex items-center gap-2">
        <Settings size={20} className="text-gray-600" />
        <h2 className="text-lg font-semibold text-gray-700">Page Settings</h2>
      </div>
      <div className="mt-4 pt-4 border-t">
        <div className="mb-3">
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Background Color
          </label>
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) =>
              updatePageSettings({ backgroundColor: e.target.value })
            }
            className="w-11 h-11 px-0.5 border border-gray-300 rounded-sm shadow-sm cursor-pointer"
          />
        </div>
        <div className="mb-3">
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Max Content Width (px)
          </label>
          <input
            type="number"
            min="300"
            max="1600"
            value={maxWidth}
            onChange={(e) => updatePageSettings({ maxWidth: e.target.value })}
            className="w-full p-1.5 border border-gray-300 rounded-sm shadow-sm"
          />
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-6 text-center">
        Select a component on the canvas to edit its properties.
      </p>
    </div>
  )
}

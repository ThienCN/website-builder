import { useBuilder } from "@/hooks/useBuilder"
import { X } from "lucide-react"
import { useCallback, useEffect, useState } from "react"

export const ExportModal = ({ onClose }: { onClose: () => void }) => {
  const [htmlCode, setHtmlCode] = useState("")
  const [copied, setCopied] = useState(false)
  const { components, pageSettings } = useBuilder()

  const generateHtml = useCallback(() => {
    let content = ""
    components.forEach((c) => {
      const styles = c.styles
      switch (c.type) {
        case "Heading":
          content += `      <h1 style="padding: ${styles.padding}px; font-size: ${styles.fontSize}px; font-weight: ${styles.fontWeight}; color: ${styles.color}; text-align: center; word-wrap: break-word;">${c.content}</h1>\n`
          break
        case "Paragraph":
          content += `      <h2 style="padding: ${styles.padding}px; font-size: ${styles.fontSize}px; font-weight: ${styles.fontWeight}; color: ${styles.color}; text-align: center; word-wrap: break-word;">${c.content}</h2>\n`
          break
        case "Button":
          content += `      <div style="text-align: center; padding: 16px 0;">\n<button style="padding: ${styles.paddingY}px ${styles.paddingX}px; background-color: ${styles.backgroundColor}; color: ${styles.color}; border-radius: ${styles.borderRadius}px; border: none; cursor: pointer; font-size: 16px;">${c.content}</button>\n    </div>\n`
          break
        case "Space":
          content += `      <div style="height: ${styles.height}px;"></div>\n`
          break
        case "Image":
          content += `      <div style="padding: ${styles.padding}px;">\n        <img src="${c.src}" alt="${c.alt}" style="max-width: 100%; height: auto; display: block; border-radius: 8px;" />\n      </div>\n`
          break
      }
    })
    return `<!DOCTYPE html>\n  <html lang="en">\n    <head>\n      <meta charset="UTF-8">\n      <meta name="viewport" content="width=device-width, initial-scale=1.0">\n      <title>My Page</title>\n      <style>\n        body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;margin:0;padding:40px 20px;background-color:#f3f4f6;} *{box-sizing:border-box;}\n      </style>\n    </head>\n    <body>\n      <div style="max-width:${pageSettings.maxWidth}px;background-color:${pageSettings.backgroundColor};margin:0 auto;padding:20px;border-radius:8px;box-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);">${content.trim()}</div>\n    </body>\n  </html>`
  }, [components, pageSettings])

  useEffect(() => {
    setHtmlCode(generateHtml())
    setCopied(false)
  }, [generateHtml])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(htmlCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-3xl">
        <div className="p-4 shadow-sm flex justify-between items-center">
          <h2 className="text-lg font-semibold">Export to HTML</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 cursor-pointer"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-600 mb-2">
            Here is the self-contained HTML code for your page.
          </p>
          <div className="relative">
            <textarea
              readOnly
              className="w-full h-80 p-3 font-mono text-xs bg-gray-900 text-green-400 rounded-md"
              value={htmlCode}
            ></textarea>
            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 bg-gray-700 text-white px-3 py-1 rounded-md text-xs hover:bg-gray-600 cursor-pointer"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

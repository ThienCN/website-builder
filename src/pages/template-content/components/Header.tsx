import { Code, FileUp } from "lucide-react"

type HeaderProps = {
  setTemplateModalOpen: (open: boolean) => void
  setExportModalOpen: (open: boolean) => void
}

export const Header = ({
  setTemplateModalOpen,
  setExportModalOpen,
}: HeaderProps) => (
  <header className="bg-white border-b border-gray-200 p-2 flex justify-end items-center gap-3 shadow-sm z-10">
    <button
      onClick={() => setTemplateModalOpen(true)}
      className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-200 duration-150 cursor-pointer"
    >
      <FileUp size={16} /> Change Template
    </button>
    <button
      onClick={() => setExportModalOpen(true)}
      className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg shadow-sm hover:bg-green-700 duration-150 cursor-pointer"
    >
      <Code size={16} /> Export
    </button>
  </header>
)

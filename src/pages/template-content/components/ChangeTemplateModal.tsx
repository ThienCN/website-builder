import { AlertTriangle } from "lucide-react"

type ChangeTemplateModalProps = {
  setOpen: (open: boolean) => void
  handleConfirm: () => void
}

export const ChangeTemplateModal = ({
  setOpen,
  handleConfirm,
}: ChangeTemplateModalProps) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-lg shadow-2xl w-full max-w-3xl transform transition-all duration-300 ease-out">
      <div className="p-8 text-center">
        <AlertTriangle className="mx-auto text-red-500" size={48} />
        <h2 className="text-2xl font-bold mt-4">Clear Canvas?</h2>
        <p className="text-gray-600 mt-2">
          Loading a new template will replace your current work. This action
          cannot be undone.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => setOpen(false)}
            className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer"
          >
            Yes, Clear Canvas
          </button>
        </div>
      </div>
    </div>
  </div>
)

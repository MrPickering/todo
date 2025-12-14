import { useState } from 'react'
import { Plus } from 'lucide-react'

interface AddTodoProps {
  onAdd: (text: string) => void
}

function AddTodo({ onAdd }: AddTodoProps) {
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      onAdd(text.trim())
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-1 px-4 py-3 rounded-lg bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-primary-600 text-white rounded-lg shadow-lg hover:bg-primary-700 active:scale-95 transition-all flex items-center gap-2 font-medium"
        >
          <Plus className="w-5 h-5" />
          Add
        </button>
      </div>
    </form>
  )
}

export default AddTodo
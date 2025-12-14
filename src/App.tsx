import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import AddTodo from './components/AddTodo'
import TodoItem from './components/TodoItem'

export interface Todo {
  id: string
  text: string
  completed: boolean
  createdAt: Date
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: new Date(),
    }
    setTodos([newTodo, ...todos])
  }

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = (id: string, newText: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ))
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const activeCount = todos.filter(t => !t.completed).length
  const completedCount = todos.filter(t => t.completed).length

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <CheckCircle2 className="w-10 h-10 text-white" />
            <h1 className="text-4xl font-bold text-white">Todo App</h1>
          </div>
          <p className="text-white/80">Stay organized and productive</p>
        </div>

        {/* Add Todo Form */}
        <AddTodo onAdd={addTodo} />

        {/* Stats */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <span className="font-semibold">{activeCount}</span> active
            </div>
            <div>
              <span className="font-semibold">{completedCount}</span> completed
            </div>
            <div>
              <span className="font-semibold">{todos.length}</span> total
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6">
          {(['all', 'active', 'completed'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                filter === f
                  ? 'bg-white text-primary-600 shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Todo List */}
        <div className="space-y-2">
          {filteredTodos.length === 0 ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center text-white">
              <p className="text-lg">
                {filter === 'active' && 'No active todos. Great job! 🎉'}
                {filter === 'completed' && 'No completed todos yet. Get started!'}
                {filter === 'all' && 'No todos yet. Add one above to get started!'}
              </p>
            </div>
          ) : (
            filteredTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onEdit={editTodo}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default App
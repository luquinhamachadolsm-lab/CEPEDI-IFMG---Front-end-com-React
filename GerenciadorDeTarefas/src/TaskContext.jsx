import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const TaskContext = createContext()

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const defaults = [
      { id: 1, text: 'Comprar leite', description: 'Leite integral 1L', category: 'pessoal', completed: false },
      { id: 2, text: 'Estudar React', description: 'Revisar componentes e hooks', category: 'estudo', completed: true }
    ]
    try {
      const raw = localStorage.getItem('tasks')
      return raw ? JSON.parse(raw) : defaults
    } catch (err) {
      console.error('Erro ao ler tasks do localStorage', err)
      return defaults
    }
  })

  const [newTask, setNewTask] = useState('')

  useEffect(() => {
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    } catch (err) {
      console.error('Erro ao salvar tasks no localStorage', err)
    }
    const pendentes = tasks.filter(t => !t.completed).length
    document.title = `Tarefinhas (${pendentes} pendentes)`
  }, [tasks])

  // Usar useCallback para memoizar funções e evitar re-renders desnecessários
  const addTask = useCallback((text) => {
    const trimmed = text.trim()
    if (!trimmed) return
    const next = { id: Date.now(), text: trimmed, description: '', category: 'pessoal', completed: false }
    setTasks((t) => [next, ...t])
  }, [])

  const addTaskWithDetails = useCallback((title, description, category) => {
    const trimmed = title.trim()
    if (!trimmed || trimmed.length < 3) return false
    
    const next = { 
      id: Date.now(), 
      text: trimmed, 
      description: description.trim(), 
      category, 
      completed: false 
    }
    setTasks((t) => [next, ...t])
    return true
  }, [])

  const updateTask = useCallback((id, title, description, category) => {
    const trimmed = title.trim()
    if (!trimmed || trimmed.length < 3) return false
    
    setTasks((t) => t.map(task => 
      task.id === id 
        ? { ...task, text: trimmed, description: description.trim(), category }
        : task
    ))
    return true
  }, [])

  const toggleTask = useCallback((id) => {
    setTasks((t) => t.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
  }, [])

  const removeTask = useCallback((id) => {
    setTasks((t) => t.filter(task => task.id !== id))
  }, [])

  const pendingCount = tasks.filter(t => !t.completed).length

  return (
    <TaskContext.Provider value={{ tasks, setTasks, newTask, setNewTask, addTask, addTaskWithDetails, updateTask, toggleTask, removeTask, pendingCount }}>
      {children}
    </TaskContext.Provider>
  )
}

export function useTask() {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTask must be used within a TaskProvider')
  }
  return context
}

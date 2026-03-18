import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import StatusHeader from '../StatusHeader'
import Task from '../Task'
import { useTask } from '../TaskContext'

export default function HomePage() {
  const { tasks, newTask, setNewTask, addTask, toggleTask, removeTask } = useTask()

  // Memoizar handleAdd para evitar recriação a cada render
  const handleAdd = useCallback((e) => {
    e.preventDefault()
    addTask(newTask)
    setNewTask('')
  }, [newTask, addTask, setNewTask])

  const todayTasks = tasks

  return (
    <div className="page-container">
      <StatusHeader />

      <main>
        <div className="form-section">
          <form className="task-form" onSubmit={handleAdd}>
            <input
              aria-label="Nova tarefa"
              placeholder="Digite uma nova tarefa e pressione Enter"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button type="submit">Adicionar</button>
          </form>
          <Link to="/add-task" className="btn-detailed-form">
            ➕ Formulário Detalhado
          </Link>
        </div>

        <ul className="task-list">
          {todayTasks.length === 0 && <li className="empty">Nenhuma tarefa para hoje</li>}
          {todayTasks.map((task) => (
            <Task key={task.id} task={task} onToggle={toggleTask} onRemove={removeTask} />
          ))}
        </ul>
      </main>
    </div>
  )
}

import { useParams, Link } from 'react-router-dom'
import Task from '../Task'
import { useTask } from '../TaskContext'

export default function ProjectPage() {
  const { id } = useParams()
  const { tasks, addTask, setNewTask, newTask, toggleTask, removeTask } = useTask()

  const projects = [
    { id: '1', name: 'Pessoal', emoji: '👤' },
    { id: '2', name: 'Trabalho', emoji: '💼' },
    { id: '3', name: 'Estudos', emoji: '📚' }
  ]

  const project = projects.find(p => p.id === id)
  if (!project) {
    return <div className="page-container">Projeto não encontrado</div>
  }

  // Filtrar tarefas do projeto
  const projectTasks = tasks.filter((_, index) => index % 3 === parseInt(id) % 3)

  function handleAdd(e) {
    e.preventDefault()
    addTask(newTask)
    setNewTask('')
  }

  const completedCount = projectTasks.filter(t => t.completed).length
  const progress = projectTasks.length > 0 ? (completedCount / projectTasks.length) * 100 : 0

  return (
    <div className="page-container">
      <Link to="/projects" className="back-link">← Voltar aos Projetos</Link>
      
      <div className="project-detail-header">
        <span className="detail-emoji">{project.emoji}</span>
        <h2>{project.name}</h2>
      </div>

      <div className="project-detail-stats">
        <p>Total: <strong>{projectTasks.length}</strong> tarefas</p>
        <p>Concluídas: <strong>{completedCount}</strong></p>
        <div className="progress-container">
          <div className="progress-bar-large">
            <div 
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="progress-text">{Math.round(progress)}%</p>
        </div>
      </div>

      <form className="task-form" onSubmit={handleAdd}>
        <input
          aria-label="Nova tarefa"
          placeholder="Adicionar nova tarefa a este projeto"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul className="task-list">
        {projectTasks.length === 0 && <li className="empty">Nenhuma tarefa neste projeto</li>}
        {projectTasks.map((task) => (
          <Task key={task.id} task={task} onToggle={toggleTask} onRemove={removeTask} />
        ))}
      </ul>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { useTask } from '../TaskContext'
import '../pages/ProjectsPage.css'

export default function ProjectsPage() {
  const { tasks } = useTask()

  // Criar uma lista de projetos agrupando tarefas por um atributo projeto
  // Por enquanto, vamos criar projetos padrão
  const projects = [
    { id: 1, name: 'Pessoal', emoji: '👤' },
    { id: 2, name: 'Trabalho', emoji: '💼' },
    { id: 3, name: 'Estudos', emoji: '📚' }
  ]

  const getTaskCountByProject = (projectId) => {
    // Para demonstração, distribuir tarefas entre projetos
    return tasks.filter((_, index) => index % 3 === projectId % 3).length
  }

  const getCompletedCountByProject = (projectId) => {
    return tasks
      .filter((_, index) => index % 3 === projectId % 3)
      .filter(t => t.completed).length
  }

  return (
    <div className="page-container">
      <h2>Meus Projetos</h2>
      
      <div className="projects-grid">
        {projects.map((project) => {
          const taskCount = getTaskCountByProject(project.id)
          const completedCount = getCompletedCountByProject(project.id)
          const pendingCount = taskCount - completedCount

          return (
            <Link 
              key={project.id} 
              to={`/projects/${project.id}`}
              className="project-card"
            >
              <div className="project-header">
                <span className="project-emoji">{project.emoji}</span>
                <h3 className="project-name">{project.name}</h3>
              </div>
              <div className="project-stats">
                <p>
                  <strong>{taskCount}</strong> {taskCount === 1 ? 'tarefa' : 'tarefas'}
                </p>
                <p className="project-pending">
                  {pendingCount} pendente{pendingCount !== 1 ? 's' : ''}
                </p>
              </div>
              <div className="project-progress">
                <div 
                  className="progress-bar"
                  style={{ width: `${taskCount > 0 ? (completedCount / taskCount) * 100 : 0}%` }}
                ></div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'
import Task from '../Task'
import { useTask } from '../TaskContext'

export default function CompletedPage() {
  const { tasks, toggleTask, removeTask } = useTask()

  const completedTasks = tasks.filter(task => task.completed)

  return (
    <div className="page-container">
      <h2>📜 Histórico de Tarefas Concluídas</h2>
      
      <div className="completed-header">
        <p className="completed-count">
          Você completou <strong>{completedTasks.length}</strong> {completedTasks.length === 1 ? 'tarefa' : 'tarefas'}
        </p>
        {completedTasks.length > 0 && (
          <div className="completion-rate">
            <p>Taxa de conclusão: <strong>{Math.round((completedTasks.length / tasks.length) * 100)}%</strong></p>
          </div>
        )}
      </div>

      <ul className="task-list">
        {completedTasks.length === 0 ? (
          <div className="empty-message">
            <p className="empty">Nenhuma tarefa concluída ainda</p>
            <p className="empty-hint">Conclua tarefas para vê-las aqui! 🎉</p>
          </div>
        ) : (
          completedTasks.map((task) => (
            <Task 
              key={task.id} 
              task={task} 
              onToggle={toggleTask} 
              onRemove={removeTask} 
            />
          ))
        )}
      </ul>

      <div className="page-footer">
        <Link to="/" className="back-link">← Voltar para Home</Link>
      </div>
    </div>
  )
}

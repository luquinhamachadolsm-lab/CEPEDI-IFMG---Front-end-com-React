import { useTask } from './TaskContext'
import { useTheme } from './ThemeContext'

export default function StatusHeader() {
  const { pendingCount } = useTask()
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="status-header">
      <div className="status-info">
        <h1>Gerenciador de Tarefas</h1>
        <p className="pending-tasks">
          Você tem <strong>{pendingCount}</strong> {pendingCount === 1 ? 'tarefa' : 'tarefas'} pendente{pendingCount === 1 ? '' : 's'}
        </p>
      </div>
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        aria-label="Alternar tema"
        title={isDark ? 'Modo claro' : 'Modo escuro'}
      >
        {isDark ? '☀️' : '🌙'}
      </button>
    </div>
  )
}

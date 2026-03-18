import React, { memo } from 'react'

const categoryEmojis = {
  pessoal: '👤',
  trabalho: '💼',
  estudo: '📚'
}

const categoryLabels = {
  pessoal: 'Pessoal',
  trabalho: 'Trabalho',
  estudo: 'Estudo'
}

function Task({ task, onToggle, onRemove }) {
  const categoryEmoji = categoryEmojis[task.category] || '📝'
  const categoryLabel = categoryLabels[task.category] || 'Sem categoria'

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <label className="task-checkbox-label">
          <input 
            type="checkbox" 
            checked={task.completed} 
            onChange={() => onToggle(task.id)}
            aria-label={`Marcar "${task.text}" como ${task.completed ? 'pendente' : 'concluída'}`}
          />
          <span className="task-text">{task.text}</span>
        </label>
        
        {task.description && (
          <p className="task-description">{task.description}</p>
        )}

        <div className="task-meta">
          <span className="task-category">
            {categoryEmoji} {categoryLabel}
          </span>
        </div>
      </div>

      <button 
        className="remove" 
        onClick={() => onRemove(task.id)} 
        aria-label={`Remover ${task.text}`}
        title="Remover tarefa"
      >
        ✕
      </button>
    </li>
  )
}

// Custom comparison function para React.memo
// Compara apenas as propriedades relevantes do objeto task
function arePropsEqual(prevProps, nextProps) {
  return (
    prevProps.task.id === nextProps.task.id &&
    prevProps.task.text === nextProps.task.text &&
    prevProps.task.description === nextProps.task.description &&
    prevProps.task.category === nextProps.task.category &&
    prevProps.task.completed === nextProps.task.completed &&
    prevProps.onToggle === nextProps.onToggle &&
    prevProps.onRemove === nextProps.onRemove
  )
}

export default memo(Task, arePropsEqual)


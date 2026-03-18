import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTask } from './TaskContext'
import './TaskForm.css'

export default function TaskForm({ taskToEdit = null }) {
  const navigate = useNavigate()
  const { addTaskWithDetails, updateTask } = useTask()

  const [formData, setFormData] = useState({
    title: taskToEdit?.text || '',
    description: taskToEdit?.description || '',
    category: taskToEdit?.category || 'pessoal'
  })

  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const categories = [
    { value: 'pessoal', label: '👤 Pessoal' },
    { value: 'trabalho', label: '💼 Trabalho' },
    { value: 'estudo', label: '📚 Estudo' }
  ]

  function validateForm() {
    const newErrors = {}

    // Validar título
    if (!formData.title.trim()) {
      newErrors.title = 'O título é obrigatório'
    } else if (formData.title.trim().length < 3) {
      newErrors.title = 'O título deve ter pelo menos 3 caracteres'
    }

    // Validar descrição (opcional, mas se preenchida deve ter no mínimo 5 chars)
    if (formData.description.trim() && formData.description.trim().length < 5) {
      newErrors.description = 'A descrição deve ter pelo menos 5 caracteres'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleChange(e) {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Validar enquanto digita se o campo foi tocado
    if (touched[name]) {
      validateFieldOnChange(name, value)
    }
  }

  function validateFieldOnChange(field, value) {
    const newErrors = { ...errors }

    if (field === 'title') {
      if (!value.trim()) {
        newErrors.title = 'O título é obrigatório'
      } else if (value.trim().length < 3) {
        newErrors.title = 'O título deve ter pelo menos 3 caracteres'
      } else {
        delete newErrors.title
      }
    }

    if (field === 'description') {
      if (value.trim() && value.trim().length < 5) {
        newErrors.description = 'A descrição deve ter pelo menos 5 caracteres'
      } else {
        delete newErrors.description
      }
    }

    setErrors(newErrors)
  }

  function handleBlur(e) {
    const { name } = e.target
    setTouched(prev => ({
      ...prev,
      [name]: true
    }))
    validateFieldOnChange(name, formData[name])
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    try {
      let success
      if (taskToEdit) {
        success = updateTask(taskToEdit.id, formData.title, formData.description, formData.category)
      } else {
        success = addTaskWithDetails(formData.title, formData.description, formData.category)
      }

      if (success) {
        navigate('/')
      }
    } catch (err) {
      console.error('Erro ao salvar tarefa:', err)
      setErrors({ general: 'Erro ao salvar a tarefa' })
    }
  }

  const isFormValid = !errors.title && !errors.description

  return (
    <div className="form-container">
      <h2>{taskToEdit ? '✏️ Editar Tarefa' : '➕ Nova Tarefa'}</h2>

      <form className="task-form-detailed" onSubmit={handleSubmit}>
        {errors.general && (
          <div className="error-message error-general">{errors.general}</div>
        )}

        <div className="form-group">
          <label htmlFor="title">
            Título *
            <span className="char-count">
              ({formData.title.length}/50)
            </span>
          </label>
          <input
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Ex: Comprar leite"
            maxLength="50"
            className={`form-input ${touched.title && errors.title ? 'input-error' : ''}`}
            aria-label="Título da tarefa"
            aria-invalid={touched.title && !!errors.title}
            aria-describedby={touched.title && errors.title ? 'title-error' : undefined}
          />
          {touched.title && errors.title && (
            <div id="title-error" className="error-message">{errors.title}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="description">
            Descrição
            <span className="char-count">
              ({formData.description.length}/200)
            </span>
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Ex: Leite integral, 1 litro"
            maxLength="200"
            rows="4"
            className={`form-textarea ${touched.description && errors.description ? 'input-error' : ''}`}
            aria-label="Descrição da tarefa"
            aria-invalid={touched.description && !!errors.description}
            aria-describedby={touched.description && errors.description ? 'description-error' : undefined}
          />
          {touched.description && errors.description && (
            <div id="description-error" className="error-message">{errors.description}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="category">Categoria</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="form-select"
            aria-label="Categoria da tarefa"
          >
            {categories.map(cat => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-actions">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="btn btn-secondary"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={!isFormValid}
            className="btn btn-primary"
            aria-label={taskToEdit ? 'Atualizar tarefa' : 'Criar nova tarefa'}
          >
            {taskToEdit ? 'Atualizar' : 'Salvar'}
          </button>
        </div>
      </form>
    </div>
  )
}

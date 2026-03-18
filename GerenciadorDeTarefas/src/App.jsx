import './App.css'
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './Navigation'
import Loading from './components/Loading'

// Lazy load das páginas para code splitting
const HomePage = lazy(() => import('./pages/HomePage'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const ProjectPage = lazy(() => import('./pages/ProjectPage'))
const CompletedPage = lazy(() => import('./pages/CompletedPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const TaskFormPage = lazy(() => import('./pages/TaskFormPage'))

function App() {
  return (
    <div className="app-root">
      <Navigation />
      
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-task" element={<TaskFormPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="/completed" element={<CompletedPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App

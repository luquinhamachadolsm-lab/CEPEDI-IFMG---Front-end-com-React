import { Link } from 'react-router-dom'
import '../pages/AboutPage.css'

export default function AboutPage() {
  return (
    <div className="page-container">
      <div className="about-container">
        <h2>Sobre o Tarefinhas</h2>

        <section className="about-section">
          <h3>📋 O Aplicativo</h3>
          <p>
            Tarefinhas é um gerenciador de tarefas moderno e intuitivo desenvolvido com React. 
            Ele permite organizar suas tarefas diárias de forma eficiente, acompanhando o progresso 
            e mantendo um histórico de tarefas concluídas.
          </p>
        </section>

        <section className="about-section">
          <h3>✨ Funcionalidades</h3>
          <ul className="features-list">
            <li>✅ Criar, editar e remover tarefas</li>
            <li>📊 Acompanhar tarefas concluídas vs pendentes</li>
            <li>📁 Organizar tarefas por projetos</li>
            <li>🌙 Modo escuro/claro automático</li>
            <li>💾 Persistência de dados com localStorage</li>
            <li>📱 Design responsivo e acessível</li>
          </ul>
        </section>

        <section className="about-section">
          <h3>👨‍💻 Desenvolvedor</h3>
          <div className="developer-card">
            <p className="developer-emoji">🍫</p>
            <h4>Lucas Soares</h4>
            <p className="developer-role">Estudante de Ciência da Computação</p>
            <p>
              
            </p>
            <div className="developer-links">
              <a href="https://github.com/luquinhamachadolsm-lab" title="GitHub">GitHub</a>
              <a href="https://www.linkedin.com/in/lucas-soares-820b34333/" title="LinkedIn">LinkedIn</a>
              <a href="mailto:lucassoaresmachado.contato@gmail.com" title="Email">Email</a>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h3>🛠️ Tecnologias Utilizadas</h3>
          <ul className="tech-list">
            <li>React 19.2.0</li>
            <li>React Router DOM 7.13.1</li>
            <li>Vite</li>
            <li>CSS3 (Variáveis CSS e Grid)</li>
            <li>localStorage API</li>
          </ul>
        </section>

        <section className="about-section about-footer">
          <p className="version">Versão 1.0.0</p>
          <p className="copyright">© 2026 Tarefinhas.</p>
        </section>

        <div className="about-actions">
          <Link to="/" className="back-link">← Voltar para Home</Link>
        </div>
      </div>
    </div>
  )
}

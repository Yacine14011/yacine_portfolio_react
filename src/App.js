import './index.css';

function App() {
  return (
    <div>
      <header className="header">
        <h1>Yacine CADI-BOUREGHDA</h1>
        <p>Ingénieur cybersécurité & IA</p>
      </header>

      <nav className="nav">
        <a href="#projects">Projets</a>
        <a href="cv/cv.pdf" target="_blank" rel="noreferrer">CV</a>
        <a href="#contact">Contact</a>
      </nav>

      <main className="main">
        <section id="projects">
          <h2 className="section-title">Mes projets</h2>
          <div className="project">
            <h3>Projet 1</h3>
            <p>Description à venir...</p>
          </div>
          <div className="project">
            <h3>Projet 2</h3>
            <p>Description à venir...</p>
          </div>
        </section>

        <section id="contact">
          <h2 className="section-title">Contact</h2>
          <div className="buttons">
            <a href="mailto:yacineboureghda14@gmail.com">📧 Envoyer un mail</a>
            <a href="https://github.com/Yacine14011" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/yacine-cadi-boureghda-5b9550224/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        &copy; 2025 Yacine CADI-BOUREGHDA — Tous droits réservés
      </footer>
    </div>
  );
}

export default App;

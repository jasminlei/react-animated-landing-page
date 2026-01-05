import './App.css'
import { useState } from 'react'
import { BeeAnimation } from './BeeAnimation'
import { FlowerField } from './FlowerField'
import { Moon } from './Moon'
import { Stars } from './Stars'
import { siteContent } from './content/content'

function App() {
  const [nightMode, setNightMode] = useState(false)
  const [moonPhaseIndex, setMoonPhaseIndex] = useState(0)

  const moonPhaseSequence = [0, 1, 3, 2, 3, 1]
  const moonPhase = moonPhaseSequence[moonPhaseIndex]

  const toggleNightMode = () => {
    setNightMode(!nightMode)
  }

  const cycleMoonPhase = () => {
    setMoonPhaseIndex((prev) => (prev + 1) % moonPhaseSequence.length)
  }

  const projects = siteContent.projects

  return (
    <div className={`app ${nightMode ? 'night-mode' : 'day-mode'}`}>
      {nightMode && (
        <>
          <Stars count={100} />
          <Moon moonPhase={moonPhase} onClick={cycleMoonPhase} />
        </>
      )}

      {!nightMode && (
        <>
          <FlowerField />
          <BeeAnimation />
        </>
      )}

      <div className='main-content'>
        <button className='night-mode-toggle' onClick={toggleNightMode}>
          {nightMode ? '☀️ SWITCH DAY MODE' : '🌙 SWITCH NIGHT MODE'}
        </button>

        <div className='content-panel'>
          <h2>{siteContent.hero.title}</h2>

          <div className='content-links'>
            <div>
              <span
                style={{
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  marginRight: 6,
                }}
              >
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  style={{ verticalAlign: 'middle' }}
                >
                  <path d='M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z' />
                </svg>
              </span>
              <a
                href={siteContent.contact.github}
                target='_blank'
                rel='noopener noreferrer'
              >
                {siteContent.contact.githubLabel}
              </a>
            </div>
            <div>
              <span
                style={{
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  marginRight: 6,
                }}
              >
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  style={{ verticalAlign: 'middle' }}
                >
                  <rect x='2' y='4' width='20' height='16' rx='2' />
                  <polyline points='22,6 12,13 2,6' />
                </svg>
              </span>
              <a href={`mailto:${siteContent.contact.email}`}>
                {siteContent.contact.email}
              </a>
            </div>
          </div>

          <div className='content-projects'>
            <h3>{siteContent.projectsSection.heading}</h3>
            {projects.map((project) => (
              <div key={project.id} className='project-item'>
                <div>
                  <span className='project-title'>
                    {nightMode ? '🌙' : '🌸'} {project.title}
                  </span>
                  <span className='project-desc'> — {project.description}</span>
                </div>
                <div className='project-link-buttons'>
                  <a
                    href={project.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='project-btn project-btn-live'
                  >
                    <svg
                      width='17'
                      height='17'
                      viewBox='0 0 24 24'
                      fill='none'
                      style={{ marginRight: 6, verticalAlign: 'middle' }}
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <circle
                        cx='12'
                        cy='12'
                        r='9.2'
                        stroke='#357a38'
                        strokeWidth='1.5'
                        fill='#eafad7'
                      />
                      <path
                        d='M2.8 12h18.4M12 2.8a9.2 9.2 0 0 1 0 18.4M12 2.8a9.2 9.2 0 0 0 0 18.4'
                        stroke='#357a38'
                        strokeWidth='1.2'
                      />
                      <ellipse
                        cx='12'
                        cy='12'
                        rx='3.5'
                        ry='9.2'
                        stroke='#357a38'
                        strokeWidth='1.1'
                        fill='none'
                      />
                    </svg>
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='project-btn project-btn-github'
                  >
                    <svg
                      className='github-icon'
                      width='17'
                      height='17'
                      viewBox='0 0 24 24'
                      fill='none'
                      style={{ marginRight: 6, verticalAlign: 'middle' }}
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        fill='none'
                      />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

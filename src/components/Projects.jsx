import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/projects'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <p className="section-label">PROJECTS</p>
      <h2 className="section-title reveal">프로젝트</h2>

      <div className={`${styles.list} reveal`}>
        {PROJECTS.map(p => (
          <Link key={p.num} to={`/project/${p.id}`} className={styles.row}>
            <span className={styles.num}>{p.num}</span>
            <div className={styles.info}>
              <div className={styles.name}>{p.title}</div>
              <div className={styles.sub}>{p.desc}</div>
            </div>
            <div className={styles.meta}>
              <div className={styles.period}>{p.period}</div>
              <div className={styles.tags}>
                {p.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
            </div>
            <span className={styles.arrow}>↗</span>
          </Link>
        ))}
      </div>
    </section>
  )
}

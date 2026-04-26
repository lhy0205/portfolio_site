import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { PROJECTS } from '../data/projects'
import styles from './ProjectDetail.module.css'

function SingleVideo({ src }) {
  const ytMatch = src.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/)
  if (ytMatch) {
    return (
      <div className={styles.videoWrap}>
        <iframe
          src={`https://www.youtube.com/embed/${ytMatch[1]}`}
          title="project demo"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    )
  }
  return (
    <div className={styles.videoWrap}>
      <video controls>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  )
}

function VideoPlayer({ video }) {
  if (!video) return null
  const list = Array.isArray(video) ? video : [video]
  return (
    <div className={styles.videoList}>
      {list.map((src, i) => (
        <div key={i}>
          {list.length > 1 && <p className={styles.videoLabel}>영상 {i + 1}</p>}
          <SingleVideo src={src} />
        </div>
      ))}
    </div>
  )
}

export default function ProjectDetail() {
  const { id } = useParams()
  useEffect(() => { window.scrollTo(0, 0) }, [id])
  const project = PROJECTS.find(p => p.id === id)

  if (!project) {
    return (
      <div className={styles.notFound}>
        <p>프로젝트를 찾을 수 없습니다.</p>
        <Link to="/" className={styles.back}>← 돌아가기</Link>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>

        <Link to="/" className={styles.back}>← 프로젝트 목록</Link>

        <header className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.num}>{project.num}</span>
            <span className={styles.period}>{project.period}</span>
            <span className={styles.role}>{project.role}</span>
          </div>
          <h1 className={styles.title}>{project.title}</h1>
          <div className={styles.tags}>
            {project.tags.map(t => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>
        </header>

        <div className={styles.divider} />

        {/* 개요 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Overview</h2>
          <p className={styles.overview}>{project.overview}</p>
        </section>

        {/* 데모 영상 */}
        {project.video && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Demo</h2>
            <VideoPlayer video={project.video} />
          </section>
        )}

        {/* 무엇을 했나 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I Did</h2>
          <ul className={styles.list}>
            {project.what.map((item, i) => (
              <li key={i} className={styles.listItem}>
                <span className={styles.listNum}>{String(i + 1).padStart(2, '0')}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 결과 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Results</h2>
          <ul className={styles.resultList}>
            {project.result.map((item, i) => (
              <li key={i} className={styles.resultItem}>
                <span className={styles.resultDot} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

      </div>
    </div>
  )
}

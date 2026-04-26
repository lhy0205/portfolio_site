import styles from './SkillsMarquee.module.css'

const SKILLS = [
  'Python', 'PyTorch', 'LLM', 'Multi-Agent', 'Computer Vision',
  'Multimodal AI', 'React', 'JavaScript', 'Spring Boot', 'MySQL',
  'Java', 'C++', 'Git', 'Linux',
]

export default function SkillsMarquee() {
  const items = [...SKILLS, ...SKILLS]
  return (
    <div className={styles.strip}>
      <div className={styles.track}>
        {items.map((s, i) => (
          <span key={i} className={styles.chip}>
            <span className={styles.dot} />{s}
          </span>
        ))}
      </div>
    </div>
  )
}

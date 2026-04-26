import styles from './Contact.module.css'

const LINKS = [
  { label: 'Email',    value: '0205lhy@naver.com',                        href: 'mailto:0205lhy@naver.com' },
  { label: 'GitHub',   value: 'github.com/lhy0205',                       href: 'https://github.com/lhy0205' },
  { label: 'LinkedIn', value: 'linkedin.com/in/현욱-이-a745b3285',         href: 'https://www.linkedin.com/in/현욱-이-a745b3285' },
  { label: '소속',     value: '한국기술교육대학교 컴퓨터공학부',             href: null },
]

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>
      <p className="section-label">CONTACT</p>
      <div className={`${styles.list} reveal`}>
        {LINKS.map(l => (
          <div key={l.label} className={styles.line}>
            <span className={styles.lineLabel}>{l.label}</span>
            {l.href
              ? <a href={l.href} className={styles.lineVal}>{l.value}</a>
              : <span className={styles.lineVal}>{l.value}</span>
            }
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

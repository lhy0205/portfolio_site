import styles from './Nav.module.css'

const links = [
  { label: 'About',    href: '#about'    },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
]

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="#hero" className={styles.logo}>이현욱 &nbsp;·&nbsp; Lee Hyun Uk</a>
      <div className={styles.right}>
        <ul className={styles.links}>
          {links.map(l => (
            <li key={l.label}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>
        <a href="mailto:leehy@koreatech.ac.kr" className={styles.cta}>Contact</a>
      </div>
    </nav>
  )
}

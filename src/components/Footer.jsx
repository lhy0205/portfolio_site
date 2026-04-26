import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.copy}>© 이현욱 · All rights reserved</span>
      <ul className={styles.links}>
        <li><a href="https://github.com/lhy0205">GitHub</a></li>
        <li><a href="#">LinkedIn</a></li>
        <li><a href="mailto:0205lhy@naver.com">Email</a></li>
      </ul>
    </footer>
  )
}

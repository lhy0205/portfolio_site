import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.gridBg} />
      <div className={`${styles.glow} ${styles.glow1}`} />
      <div className={`${styles.glow} ${styles.glow2}`} />

      <div className={styles.content}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          <span className={styles.eyebrowText}>AI Researcher &amp; Developer</span>
        </div>

        <h1 className={styles.name}>이현욱</h1>

        <p className={styles.desc}>
          LLM · Multi-Agent · Computer Vision · Multimodal AI를 연구합니다.<br />
          KOREATECH 컴퓨터공학부 재학 중이며, DICE Lab에서 연구 경험을 쌓았습니다.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className="btn-main">프로젝트 보기 →</a>
          <a href="mailto:0205lhy@naver.com" className="btn-ghost">연락하기</a>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.scroll}>
          <div className={styles.scrollLine} />
          <span>Scroll</span>
        </div>
      </div>
    </section>
  )
}

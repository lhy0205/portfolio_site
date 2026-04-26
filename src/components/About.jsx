import styles from './About.module.css'

const tags = ['LLM', 'Multi-Agent', 'Computer Vision', 'Multimodal AI', 'PyTorch', 'Python']

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <p className="section-label">ABOUT</p>
      <div className={styles.grid}>
        <div className={`${styles.left} reveal`}>
          <div className={styles.index}>01</div>
          <h2 className={styles.heading}>
            연구와 개발,<br />두 언어로<br /><em>말합니다</em>
          </h2>
        </div>
        <div className={`${styles.right} reveal`}>
          <p className={styles.body}>
            한국기술교육대학교(KOREATECH) 컴퓨터공학부에 재학 중이며,
            호서대학교 컴퓨터공학부를 거쳐 편입했습니다.
            <strong> DICE Lab에서 연구학생으로 활동</strong>하며 CS231N(CNNs/Vision)·CS224N(NLP/Transformers)을
            집중 이수했습니다.
          </p>
          <p className={styles.body}>
            <strong>LLM, Multi-Agent 시스템, Computer Vision, Multimodal AI</strong>에 관심이 있으며,
            KCI 논문 1편과 학술대회 발표 2편의 연구 실적을 보유하고 있습니다.
            여러 AI 경진대회에서 수상하며 연구 아이디어를 실제 시스템으로 구현하는 경험을 쌓고 있습니다.
          </p>
          <div className={styles.tags}>
            {tags.map(t => <span key={t} className="tag-item">{t}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}

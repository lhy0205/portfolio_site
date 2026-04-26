import styles from './Research.module.css'

const RESEARCH = [
  {
    num: '01',
    icon: '⟨LLM⟩',
    title: 'Large Language Models',
    desc: '대규모 언어 모델의 파인튜닝, 프롬프트 엔지니어링, RAG 등 LLM을 활용한 다양한 응용 연구에 관심이 있습니다.',
  },
  {
    num: '02',
    icon: '⊹ AGT',
    title: 'Multi-Agent Systems',
    desc: 'LLM 기반 자율 에이전트 시스템, 도구 사용(Tool Use), 다중 에이전트 협력(Multi-Agent Collaboration) 구조에 관심이 있습니다.',
  },
  {
    num: '03',
    icon: '◈ CV',
    title: 'Computer Vision',
    desc: '이미지·영상 데이터의 인식과 이해. 객체 탐지, 분류, 세그멘테이션 등 시각 정보를 다루는 딥러닝 모델에 관심이 있습니다.',
  },
  {
    num: '04',
    icon: '⊗ MM',
    title: 'Multimodal AI',
    desc: '텍스트·이미지·오디오를 아우르는 통합 모델. 여러 모달리티를 결합해 더 풍부한 이해와 생성을 가능하게 하는 연구에 관심이 있습니다.',
  },
]

export default function Research() {
  return (
    <section id="research" className={styles.research}>
      <p className="section-label">RESEARCH INTERESTS</p>
      <h2 className="section-title reveal">
        연구<br /><em>관심 분야</em>
      </h2>
      <div className={`${styles.grid} reveal`}>
        {RESEARCH.map(r => (
          <div key={r.num} className={styles.card}>
            <div className={styles.num}>{r.num}</div>
            <div className={styles.icon}>{r.icon}</div>
            <h3 className={styles.title}>{r.title}</h3>
            <p className={styles.desc}>{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

import { useRef } from 'react'
import styles from './Timeline.module.css'

const ITEMS = [
  {
    period: 'Mar. 2021',
    type: 'edu',
    title: 'Hoseo Univ.',
    sub: 'B.S. Computer Science · GPA 3.78',
  },
  {
    period: 'Dec. 2021 – Jun. 2022',
    type: 'research',
    title: 'GDD 반도체 소자 랩실',
    sub: 'Hoseo University · 플렉서블 소자 연구',
  },
  {
    period: 'Oct. 2022',
    type: 'award',
    title: 'AI 경진대회 우수상',
    sub: 'Hoseo University',
  },
  {
    period: 'Nov. 2022',
    type: 'research',
    title: 'iTurtle Lab',
    sub: 'Hoseo Univ. Research Student',
  },
  {
    period: 'Feb. 2023',
    type: 'paper',
    title: 'NOx/O2 센서 모니터링 플랫폼',
    sub: '한국정보통신학회 춘계학술대회 · Poster',
  },
  {
    period: 'Mar. 2023',
    type: 'edu',
    title: 'KOREATECH',
    sub: 'School of CSE · GPA 3.31',
  },
  {
    period: 'May. 2023',
    type: 'paper',
    title: '옵티마이저에 따른 정확도 비교 분석',
    sub: '한국정보통신학회 춘계학술대회 · Oral',
  },
  {
    period: 'Oct. 2023',
    type: 'award',
    title: '충청권 창업경진대회 장려상',
    sub: '교육부 · 한국연구재단',
  },
  {
    period: 'Oct. 2023',
    type: 'paper',
    title: '이미지 데이터와 옵티마이저 정확도 변화',
    sub: '한국지식정보기술학회 논문지 (KCI)',
  },
  {
    period: 'Oct. 2023',
    type: 'award',
    title: 'AI 경진대회 우수상',
    sub: 'Hoseo University',
  },
  {
    period: 'Feb. 2024',
    type: 'research',
    title: 'DICE Lab',
    sub: 'KOREATECH Research Student',
  },
  {
    period: 'Jan. 2024',
    type: 'award',
    title: 'AI 경진대회 장려상',
    sub: 'Hoseo University',
  },
  {
    period: 'Jul. 2025',
    type: 'award',
    title: 'CSE TECH DAY 우수작품상',
    sub: 'KOREATECH',
  },
  {
    period: 'Aug. 2025',
    type: 'award',
    title: 'AI Make a Thon 대상',
    sub: '충청북도지사상',
  },
  {
    period: 'Dec. 2025',
    type: 'award',
    title: '내일路 해커톤 우수상',
    sub: '한국철도공사 · 대전광역시',
  },
  {
    period: 'Jan. 2026',
    type: 'award',
    title: '창업역량 강화캠프 대상',
    sub: '대전충남 초광역',
  },
]

const ACTIVITIES = [
  {
    period: 'Jan. 2026',
    title: '2026 대전충남 초광역 창업역량 강화캠프',
    role: '팀원',
    org: '한남대 · KOREATECH · 나사렛대',
    tags: ['창업', '해커톤'],
    result: '대상(한남대학교총장상)',
  },
  {
    period: 'Dec. 2025',
    title: '내일路 해커톤 2025',
    role: '팀원',
    org: '한국철도공사 · 대전광역시',
    tags: ['해커톤'],
    result: '우수상',
  },
  {
    period: 'Aug. 2025 – Sep. 2025',
    title: 'LG Aimers 7기',
    role: '팀원 / 개발',
    org: 'LG Aimers',
    tags: ['Python', 'ML', '데이터 분석'],
    result: '참가',
  },
  {
    period: 'Aug. 2025',
    title: '2025 AI Make a Thon',
    role: '팀원',
    org: '충청북도',
    tags: ['AI', '해커톤'],
    result: '대상 (충청북도지사상)',
  },
  {
    period: 'Aug. 2025',
    title: '대한민국 SW 융합 해커톤',
    role: '팀 핵심 개발',
    org: '과학기술정보통신부',
    tags: ['React', 'Spring Boot'],
    result: '참가',
  },
  {
    period: 'Jul. 2025',
    title: 'KOREATECH CSE TECH DAY',
    role: '팀 핵심 개발',
    org: 'KOREATECH',
    tags: ['Generative AI', 'Multimodal'],
    result: '우수작품상',
  },
  {
    period: 'Feb. 2025 – Sep. 2025',
    title: '생성형 영상·시 생성 AI (캡스톤)',
    role: '팀 핵심 개발 / 리드',
    org: 'KOREATECH',
    tags: ['PyTorch', 'Generative AI'],
    result: 'Outstanding Capstone',
  },
  {
    period: 'Jan. 2025 – Feb. 2025',
    title: 'LG Aimers 6기 — 난임 환자 임신 성공 예측',
    role: '팀원 / 개발',
    org: 'LG Aimers',
    tags: ['Python', 'Feature Engineering'],
    result: '참가',
  },
  {
    period: 'Aug. 2024 – Sep. 2024',
    title: 'LG Aimers 5기 — 제품 이상 여부 판별',
    role: '팀원 / 개발',
    org: 'LG Aimers',
    tags: ['Python', 'PyTorch'],
    result: '참가',
  },
  {
    period: 'Feb. 2024 – Dec. 2024',
    title: 'DICE Lab 연구학생',
    role: '연구학생',
    org: 'KOREATECH',
    tags: ['CS231N', 'CS224N', 'LLM'],
    result: '수료',
  },
  {
    period: 'Jan. 2024',
    title: 'AI 프로그래밍 경진대회',
    role: '개인',
    org: 'Hoseo University',
    tags: ['경진대회'],
    result: '장려상',
  },
  {
    period: 'May. 2023 – Nov. 2023',
    title: '비행기 수요 예측 시스템 MVP',
    role: 'Tech Lead',
    org: 'iTurtle, Hoseo University',
    tags: ['LSTM', 'PyTorch'],
    result: 'MVP 완성',
  },
  {
    period: 'Jun. 2023 – Aug. 2023',
    title: 'School Admin Dashboard',
    role: '메인 개발자',
    org: 'Turtle Lab, Hoseo University',
    tags: ['React', 'Spring Boot', 'MySQL'],
    result: '운영 배포',
  },
  {
    period: 'Oct. 2023',
    title: '충청권 대학 창업 경진대회',
    role: '팀원',
    org: '교육부 · 한국연구재단(NRF)',
    tags: ['창업', '경진대회'],
    result: '장려상',
  },
  {
    period: 'Oct. 2023',
    title: 'AI 프로그래밍 경진대회',
    role: '개인',
    org: 'Hoseo University',
    tags: ['경진대회'],
    result: '우수상',
  },
  {
    period: 'Nov. 2022 – Dec. 2023',
    title: 'iTurtle Lab 연구학생',
    role: '연구학생',
    org: 'Hoseo University',
    tags: ['웹 개발', '자동화'],
    result: '수료',
  },
  {
    period: 'Oct. 2022',
    title: 'AI 프로그래밍 경진대회',
    role: '개인',
    org: 'Hoseo University',
    tags: ['경진대회'],
    result: '우수상',
  },
  {
    period: 'Dec. 2021 – Jun. 2022',
    title: 'GDD 반도체 소자 랩실',
    role: '연구학생',
    org: 'Hoseo University',
    tags: ['반도체', '플렉서블 소자'],
    result: '참여',
  },
]

const TYPE_LABEL = { edu: 'Education', research: 'Research', award: 'Award', paper: 'Publication' }

export default function Timeline() {
  const wrapperRef = useRef(null)
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 })

  const onMouseDown = (e) => {
    drag.current = { active: true, startX: e.pageX - wrapperRef.current.offsetLeft, scrollLeft: wrapperRef.current.scrollLeft }
    wrapperRef.current.style.cursor = 'grabbing'
  }
  const onMouseUp = () => {
    drag.current.active = false
    wrapperRef.current.style.cursor = 'grab'
  }
  const onMouseMove = (e) => {
    if (!drag.current.active) return
    e.preventDefault()
    const x = e.pageX - wrapperRef.current.offsetLeft
    wrapperRef.current.scrollLeft = drag.current.scrollLeft - (x - drag.current.startX)
  }

  return (
    <section id="timeline" className={styles.section}>
      <p className="section-label">EXPERIENCE</p>
      <h2 className="section-title reveal">
        경력 · 학력<br /><em>&amp; 수상</em>
      </h2>

      <div className={styles.scrollHint}>
        <span>← 스크롤하여 전체 타임라인 확인 →</span>
      </div>

      <div className={styles.fadeWrap}>
        <div
          className={styles.wrapper}
          ref={wrapperRef}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onMouseMove={onMouseMove}
        >
          <div className={styles.track}>
            {ITEMS.map((item, i) => (
              <div key={i} className={`${styles.item} ${i % 2 === 0 ? styles.up : styles.down}`}>
                <div className={styles.card}>
                  <span className={`${styles.badge} ${styles[item.type]}`}>
                    {TYPE_LABEL[item.type]}
                  </span>
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.sub}>{item.sub}</div>
                  <div className={styles.period}>{item.period}</div>
                </div>
                <div className={styles.stem} />
                <div className={`${styles.dot} ${styles[item.type + 'Dot']}`} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.fadeLeft}  />
        <div className={styles.fadeRight} />
      </div>

      {/* 활동 전체 목록 테이블 */}
      <div className={`${styles.tableWrap} reveal`}>
        <p className={styles.tableLabel}>ALL ACTIVITIES</p>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>기간</th>
              <th>활동명</th>
              <th>역할</th>
              <th>소속 / 주관</th>
              <th>기술 스택</th>
              <th>결과</th>
            </tr>
          </thead>
          <tbody>
            {ACTIVITIES.map((a, i) => (
              <tr key={i}>
                <td className={styles.tdPeriod}>{a.period}</td>
                <td className={styles.tdTitle}>{a.title}</td>
                <td className={styles.tdRole}>{a.role}</td>
                <td className={styles.tdOrg}>{a.org}</td>
                <td>
                  <div className={styles.tagRow}>
                    {a.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                  </div>
                </td>
                <td className={styles.tdResult}>{a.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

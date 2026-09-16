export type ProjectType = "프로젝트" | "유지보수";

export interface Project {
  type: ProjectType;
  title: string;
  period: string;
  role: string;
  situation: string;
  task: string;
  actions: string[];
  results: string[];
  stack: string[];
}

export const profile = {
  name: "정의진", // TODO: 실제 이름으로 수정하세요
  role: "Backend Developer",
  email: "jej001228@gmail.com",
  github: "https://github.com/EuijinJeong",
  greeting: "안녕하세요, 백엔드 개발자 정의진입니다.",
  philosophy:
    "시스템과 시스템 사이를 잇고, 오래 운영해도 흔들리지 않는 구조를 만듭니다.",
  summary:
    "Java/Spring Boot 기반 백엔드 개발자. 대규모 시스템 간 데이터 연동·통합(EAI) 및 운영 안정화 경험 1.5년. Legacy 프레임워크 업그레이드, 메시지 기반 비동기 처리, RDBMS 마이그레이션 프로젝트를 리드/참여.",
};

export const highlights: { title: string; description: string }[] = [
  {
    title: "레거시 프레임워크 메이저 업그레이드 리드",
    description:
      "JDK 7→17, Spring Boot 2.6→3.2 등 EOL 리스크가 큰 대규모 메이저 업그레이드를 체크리스트 기반으로 구조화해 무장애로 완료했습니다.",
  },
  {
    title: "이종 시스템 간 연동(EAI)과 운영 안정화",
    description:
      "RMI·JMX 등 비표준 프로토콜을 표준 REST로 전환하고, 모니터링 데몬의 커넥션 hang·NPE 등 운영 결함을 근본 원인 단위로 제거해왔습니다.",
  },
  {
    title: "프로덕션 장애 대응과 근본 원인 분석",
    description:
      "이종 RDBMS(Oracle/PostgreSQL/Altibase) 마이그레이션과 실시간 알림 서비스 장애를 End-to-End로 추적해 재발을 방지했습니다.",
  },
];

export const skillGroups: { category: string; items: string[] }[] = [
  { category: "Backend", items: ["Java", "Spring Boot", "Spring Security", "Spring Batch"] },
  { category: "Database", items: ["Oracle", "PostgreSQL", "Altibase", "MyBatis", "QueryDSL"] },
  { category: "Messaging", items: ["IBM MQ", "비동기/이벤트 기반 메시지 처리"] },
  { category: "Infra", items: ["Linux", "JVM 튜닝(jstat/jmap/pidstat)", "Maven/Nexus"] },
  { category: "협업/도구", items: ["Git", "Claude Code", "기술 문서화", "고객사 운영 지원"] },
];

export const projects: Project[] = [
  {
    type: "프로젝트",
    title: "미래에셋증권 RMS 상태체크 데몬 ACE 모니터링 커스터마이징 및 안정화",
    period: "2026.06 ~ 2026.10",
    role: "Backend Developer",
    situation:
      "사내 통합 상태체크 데몬(RMS V7, IBM DataPower/WMQ/IIB/ACE/MFT/RA Adapter 통합 모니터링)을 미래에셋증권에 배포하는 과정에서 ACE(App Connect Enterprise) 모니터링 모듈의 설정 미비와 JMX 커넥션 무한 hang, NPE 등 운영 결함이 발견됨",
    task: "ACE 모니터링 설정을 고객사 환경에 맞게 커스터마이징하고, 발견된 결함을 근본 원인 단위로 수정하여 안정적인 운영 반영을 완료",
    actions: [
      "ACE 모니터링 모듈 config.yaml 설정 및 MyBatis mapper 문법 수정",
      "CompletableFuture 기반 비동기 스케줄링 구조에서 ADTHandler(RA Adapter 모니터링) JMX 커넥션이 무한 대기하는 문제를 타임아웃 백스톱 적용으로 근본 해결",
      "ADTHandler MBean 생성/HealthCheck 로직을 try 블록으로 분리해 예외 전파 범위 최소화 및 NPE 방어",
      "상태 조회 쿼리(getUpdateTime) 결과 없음/NULL 케이스 방어 로직 추가, 런타임 생성 파일(.ctl/.log) 관리 체계 정비",
    ],
    results: [
      "ACE 모니터링 기능을 미래에셋증권 환경에 정상 반영",
      "JMX 커넥션 hang 및 NPE로 인한 데몬 중단 리스크 제거, 다수 NULL/예외 케이스 방어로 데몬 안정성 강화",
    ],
    stack: ["Java", "Spring Boot", "MyBatis", "Oracle", "JMX", "IBM ACE"],
  },
  {
    type: "프로젝트",
    title: "RA(Rainbow Adapter) RMI 제거 및 Spring Boot REST API 전환",
    period: "2026.08 ~ 진행중",
    role: "Backend Developer (설계 및 구현 단독 수행)",
    situation:
      "KT向 사내 어댑터 솔루션 RA(RAGroupServer/RAManager)가 RMI(운영 콘솔↔어댑터 프로세스) 및 JMX(모니터링 데몬↔어댑터 프로세스) 등 비표준 프로토콜로 통신하고 있어 인증·로깅·디버깅이 어렵고, 10개로 쪼개진 Maven 모듈 구조와 4종 어댑터 클래스의 중복 코드로 유지보수 부담이 큰 상태였음.",
    task: "레거시 RMI 기반 통신을 표준 HTTP REST로 전환하고, 10개 모듈을 배포 단위가 명확한 구조로 재편해 향후 모니터링 체계(REST 기반 상태 조회) 확장의 기반을 마련.",
    actions: [
      "단계적 모듈 통합: 회귀 원인 추적이 어려워지는 것을 방지하기 위해 기존 의존관계 순서(leaf→상위)를 따라 10개 모듈을 5단계(A-1~A-5)로 나누어 순차 병합, 이후 배포 단위별로 ra-common/ra-groupserver/ra-manager 3모듈로 재구조화",
      "RAGroupServer RMI 완전 제거: 외부 의존성 없이 JDK 내장 HttpServer 기반 REST API로 전환 — /health, /jvm/metrics, /shutdown, /adapters, /databases 5개 엔드포인트 구현",
      "RAManager RMI 완전 제거 및 Spring Boot 전환: 기존 Naming.lookup() 기반 원격 호출을 Spring Boot REST 클라이언트/컨트롤러로 재구성, GroupServer 프로세스 start/stop/status/metrics 제어 API 구현",
      "테스트 코드 보강: 핵심 로직(HttpSupport, GroupServerRestClient, PidFile) 단위테스트 및 REST 엔드포인트 통합테스트 작성(신규 테스트 코드 약 750줄 이상)",
      "Fat jar 패키징(maven-shade-plugin) 도입으로 단일 실행 아티팩트 배포 구조 구성",
      "병행하여 어댑터 4종의 dead code 제거, File 어댑터 무제한 재시도(-1) 미동작 버그 등 운영 버그 수정",
    ],
    results: [
      "레거시 RMI/JMX 프로토콜을 표준 HTTP REST로 전환, 인증·로깅 표준화가 가능한 통신 기반 확보",
      "단계별 커밋 전략으로 대규모 구조 변경(10모듈→3모듈)을 기능 손실 없이 완료, 단위/통합 테스트로 회귀 안전망 확보",
      "(진행중) 이후 모니터링 데몬의 JMX-RMI 호출을 REST 클라이언트 호출로 전환하는 후속 작업의 스펙 기반 마련",
    ],
    stack: ["Java 21", "Spring Boot", "Maven", "JUnit", "JDK HttpServer"],
  },
  {
    type: "프로젝트",
    title: "EAI 모니터링 시스템 웹사이트 Spring Boot 3.2.5 마이그레이션",
    period: "2026.03 ~ 2026.05 (2.5개월)",
    role: "Backend Developer",
    situation:
      "사내 핵심 EAI 모니터링 솔루션(백엔드 데몬 6종 및 웹 API 서버)이 Java 8 / Spring Boot 2.6.3 기반으로 운영되며 보안 취약점 및 EOL 리스크에 노출",
    task: "Java 8→17, Spring Boot 2.6.3→3.2.5로의 대규모 프레임워크 메이저 업그레이드를 전담 수행하여 보안·기술부채 리스크를 해소",
    actions: [
      "체크리스트 36건 + 라이브러리 의존성 매핑 40건, 총 76건의 AS-IS/TO-BE 대조표를 직접 설계·작성하고 항목별 담당자로서 단독 처리",
      "AI 코딩 어시스턴트를 활용해 업그레이드 영향도를 사전 분석, 체크리스트 기반 단계별 마이그레이션 진행",
      "JHipster BOM(7.8.1) 탈거 후 spring-boot-starter-parent 직접 선언 방식으로 재구축, javax.* → jakarta.* 패키지 네임스페이스 전 영역 일괄 치환 및 컴파일 에러 해결",
      "WebSecurityConfigurerAdapter 기반 코드를 SecurityFilterChain Bean 등록 방식으로 전면 재작성(antMatchers→requestMatchers 등)",
      "Hibernate 5→6 업그레이드에 따른 JPQL 문법 엄격화, 엔티티 매핑·쿼리 동작 방식 전수 검증",
      "springfox→springdoc-openapi 2.x 교체, MyBatis/Lombok/MapStruct/QueryDSL 등 Jakarta 호환 버전 일괄 업그레이드, Maintenance Mode 라이브러리(zalando problem-spring-web)를 Spring 내장 ProblemDetail(RFC 9457)로 대체",
      "Maven 빌드 설정의 annotationProcessorPaths 순서를 재정립해 어노테이션 프로세싱 충돌 해결, 운영팀과 1개월간 연동 테스트 및 스테이징 검증 주도",
    ],
    results: [
      "실운영 배포 후 현재까지 무장애(0건) 유지",
      "76건 항목 단위 구조화로 대규모 메이저 버전 업그레이드 리스크를 사전 통제, 미사용/Deprecated 라이브러리 제거로 빌드 사이즈 감소 및 보안 취약점 사전 차단",
    ],
    stack: [
      "Java 17",
      "Spring Boot 3.2.5",
      "Spring Security 6",
      "Hibernate 6",
      "PostgreSQL",
      "MyBatis",
      "QueryDSL",
      "Claude Code",
    ],
  },
  {
    type: "프로젝트",
    title: "KT KOS 자사 솔루션 (EAI 어댑터) 업그레이드 프로젝트",
    period: "2025.07 ~ 2026.01",
    role: "Backend Developer",
    situation:
      "KT向 자사 솔루션 KOS RA(Rainbow Adapter) 시스템이 EOL된 JDK 7 기반으로 운영되어 보안 취약점 및 라이브러리 호환성 리스크에 노출",
    task: "JDK 7→17 업그레이드를 통해 EOL 리스크를 해소하고, 운영 중단 없이 배포·안정화까지 전 과정을 주도",
    actions: [
      "개발/검증/운영 환경별 JVM 옵션 분석 및 메모리 설정 재구성, GroupServer/Adapter 구동 환경 전환",
      "log4j, commons-dbcp/pool, slf4j 등 종속 라이브러리 및 JDBC Driver 호환성 전수 조사, RMISecurityManager deprecated 등 RMI 계층의 JDK 17 비호환 리스크 사전 식별 및 대응",
      "모듈별(Management-Client/Server, DatabaseAdapter, FileAdapter, Interfaces, CommonLib_Encrypt 등) 변경 대상 클래스·메소드 단위 분석 및 문서화(총 75개 항목)",
      "DEV/SIT/LOCAL 3개 환경 간 배포 클래스 파일 동일성 검증 체계 수립(핵심 어댑터 클래스 4종 포함 약 100개 항목), 테스트 케이스 105건 설계·수행(전건 통과)",
      "결함관리대장 양식 설계, 결함 21건을 공통모듈/매니저/어댑터/로깅 4개 카테고리로 구조화해 등록~원인분석~조치~재테스트까지 End-to-End 관리",
      "IBM MQ 8.0.0.4→9.3.x 업그레이드에 따른 JDK 17 호환성 검증, Azure 전환 신규 DB(Oracle 19c Azure 등) 연동 개발 및 방화벽/포트 정책 점검",
      "개발가이드/운영자가이드/개발환경 구성가이드/에러코드 정의서 등 핵심 기술 문서 4종 단독 작성 및 지속 개정 관리(에러코드 정의서 5회 개정)",
    ],
    results: [
      "운영 중단 없이 JDK 7→17 업그레이드 완료, 배포 후 서비스 장애 0건 유지",
      "보안 취약점 및 기술부채(EOL Runtime, 레거시 라이브러리) 해소, Azure 전환 DB 연동 추가 개발로 멀티 클라우드 대응 기반 마련",
      "검증→테스트→결함관리 전 과정을 입사 1년차 시점에 단독 주도, 대규모 마이그레이션의 품질 게이트를 온전히 책임짐",
      "팀 공용 기술 문서 체계 구축으로 온보딩·트러블슈팅 효율화",
    ],
    stack: ["JDK 17", "RMI", "IBM MQ", "Oracle 19c", "Azure", "MariaDB/Informix"],
  },
  {
    type: "유지보수",
    title: "대한항공 실시간 알림 서비스 장애 분석 및 개선",
    period: "2025.04 ~ 2025.07 (3개월)",
    role: "Backend Developer",
    situation:
      "운영 중인 실시간 장애 알림 서비스에서 인터페이스 및 모니터링 대상 장애 이벤트의 SMS 알림이 지연·누락되는 현상 발생",
    task: "근본 원인을 규명하고 재발 방지가 가능한 수준으로 메시지 처리 로직을 개선",
    actions: [
      "애플리케이션 로그 및 데이터 처리 이력 분석, 이벤트 생성부터 알림 발송까지 End-to-End 처리 흐름 추적",
      "특정 상태의 데이터가 후속 이벤트 처리를 차단하는 구조적 문제 식별",
      "메시지 처리 로직 개선 및 예외 상황 대응 방안 적용, DEV/STG/PRD 환경 배포 및 모니터링",
    ],
    results: [
      "SMS 알림 지연 및 누락 문제 해결, 실시간 알림 서비스 안정성 향상",
      "운영 환경 적용 이후 동일 유형 장애 재발 방지",
    ],
    stack: ["Java", "PostgreSQL", "Linux"],
  },
];

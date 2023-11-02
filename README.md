# Fit Together
: 사용자들에게 운동 방법을 제공하고, 운동 메이트를 연결시켜주는 커뮤니티를 제공하는 플랫폼

![회원가입](https://github.com/woojkk/FitTogether/assets/122269418/c762ba94-45fd-4e2d-871b-2362ccc4a2c8)
![2023-10-10 14 36 49](https://github.com/woojkk/FitTogether/assets/122269418/857fdd63-ef5a-4f56-b915-384fc3672a22)
![게시판](https://github.com/woojkk/FitTogether/assets/122269418/e66ff809-8378-4bc8-bdb6-f9d69e81e530)

## ERD
![abcPuCHZRa5g6stS3 (1)](https://github.com/woojkk/FitTogether/assets/122269418/feff91e1-bf60-4318-a8ab-c6b60a23cd13)


## 프로젝트 개요

### 1) 기술 스택
- IDE : IntelliJ
- Language : Java 11
- Framework : Spring Boot 2.6.3
- Database : MySQL (AWS RDS)
- Build Tool : Gradle
- API 문서화 : Swagger
- Container : Docker
- ORM : JPA
- Caching : Redis on AWS EC2
- Auth : jwt
- Real-time : Spring web socket, SSE
- Cloud Infrastructure: AWS EC2
- Cloud Storage: AWS S3

### 2) 주요기능
- 내 위치 기반 지도에서 운동 메이트 매칭
- 커뮤니티 활동
- 1:1 채팅 기능
- 운동 프로그램 제공

### 3) DataBase

- @ManyToOne 어노테이션 사용으로 관계 테이블 형성
- AWS의 RDS(MySQL) 사용 - 팀원 간 공유 DB 설정
- Spring data JPA 사용 - 엔터티 필드를 자동 매핑하여 쿼리 메서드를 작성
    
### 4) Server

- 개발 규칙, 커밋 컨벤션 설정,데일리 미팅 등의 규칙 설정
- api 명세 디스크립션 작성
- ERD 설계
- 사용 기술 설정
- 계층형 아키텍쳐로 구현
- Rest API 를 활용한 API 서버 구현, Swagger를 통한 API 문서화
- 코드 리뷰
- AWS RDS를 통한 DB공유, 프론트엔드-백엔드 연결


## 개발 일정
| 항목              | 기간                      | 상태  |
|-----------------|-------------------------|-----|
| 제공 서비스 선별/확립    | 2023/07/07 – 2023/07/15 | 완료  |
| 역할 분담 및 개발환경 구축 | 2023/07/17 | 완료  |
| 서버 설계           | 2023/07/17 – 2023/08/05 | 완료  |
| 웹 설계            | 2023/07/17 – 2023/08/05 | 완료  |
| 데모데이            | 2023/08/17                | 완료 |

#### 참고: [fitTogether 노션링크](https://www.notion.so/FitTogether-8be1ca2fe86849efa12338b9552ad7f9)

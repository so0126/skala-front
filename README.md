# SKALA Front-End Assignment

HTML, CSS, JavaScript 수업에서 진행한 실습 과제를 정리하는 저장소입니다.  
각 단원의 요구사항을 순서대로 구현하고, 최종적으로 하나의 개인 포털 형태로 통합할 예정입니다.

## Project Goal

- HTML 시맨틱 태그를 활용한 페이지 구조 작성
- CSS를 활용한 공통 디자인 및 반응형 레이아웃 구현
- JavaScript를 활용한 DOM 조작과 사용자 상호작용 구현
- Git 브랜치와 커밋을 활용한 작업 과정 관리

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Git / GitHub

## Project Structure

```text
SKALA-FRONT/
├─ README.md
├─ index.html
├─docs/
│  └─ claude, codex 협업용 파일
├─ html/
│  ├─ myProfile.html
│  ├─ myClass.html
│  ├─ myHoliday.html
│  ├─ myTrip.html
│  ├─ signUp.html
│  └─ signUpResult.html
├─ css/
│  └─ style.css
├─ script/
│  └─ JavaScript 실습 파일
└─ media/
   └─ 이미지, 오디오, 비디오 파일


```

> 실제 파일 구조는 과제 진행 과정에서 변경될 수 있습니다.

## Pages

| Page | Description |
|---|---|
| `index.html` | 전체 페이지를 연결하는 메인 포털 |
| `myProfile.html` | 나의 소개 |
| `myClass.html` | 강의 일정 |
| `myHoliday.html` | 휴일과 하고 싶은 일 |
| `myTrip.html` | 이미지, 오디오, 비디오를 활용한 여행지 소개 |
| `signUp.html` | 회원가입 폼 |
| `signUpResult.html` | 회원가입 결과 페이지 |

## Assignment Progress

### HTML

- [ ] 프로젝트 폴더 및 `index.html` 생성
- [ ] 나의 소개 페이지
- [ ] 강의 일정 페이지
- [ ] 페이지 바로가기
- [ ] 회원가입 폼
- [ ] 회원가입 결과 페이지
- [ ] 여행지 소개 페이지
- [ ] 시맨틱 태그를 활용한 메인 포털 구성

### CSS

- [ ] 공통 폰트와 색상 적용
- [ ] 박스 모델과 카드 UI 적용
- [ ] 강의 일정 테이블 스타일링
- [ ] 회원가입 폼 스타일링
- [ ] 공통 레이아웃 및 반응형 디자인

### JavaScript

- [ ] Up-Down 게임
- [ ] 성적 계산 기능
- [ ] 가방 객체 실습
- [ ] DOM 이벤트 처리
- [ ] 실시간 정보 또는 날씨 API 연동

## Branch

현재 과제 작업은 다음 브랜치에서 진행합니다.

```text
feature/frontend-assignment
```

작업 완료 후 `main` 브랜치에 병합합니다.

## Run

별도의 빌드 과정은 필요하지 않습니다.

1. 저장소를 Clone합니다.
2. VS Code에서 프로젝트를 엽니다.
3. Live Server로 `html/index.html`을 실행합니다.

```bash
git clone <repository-url>
cd SKALA-FRONT
```

## Commit Convention

```text
feat: 새로운 페이지 또는 기능 추가
style: CSS 및 화면 디자인 수정
fix: 오류 수정
refactor: 코드 구조 개선
docs: README 등 문서 수정
```

예시:

```text
feat: add profile and class pages
style: apply common page layout
feat: implement up-down game
docs: update assignment checklist
```

## Current Status

현재는 수업 과제를 순차적으로 구현하는 단계입니다.  
전체 과제 완료 후 디자인, 실행 방법, 주요 기능과 결과 화면을 추가하여 README를 보완할 예정입니다.
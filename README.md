<h1>ForinK🌿<br>외국인 맞춤형 정착 지원 서비스</h1>
<img width="1200" height="300" alt="forink_preview (2)" src="https://github.com/user-attachments/assets/f15c10f3-aef5-40de-984d-594fbeba7e0d" />

## Table of Contents
- [Overview](#1-overview)
- [Features](#2-features)
  - [Personalized Settlement Roadmap](#🗺️-personalized-settlement-roadmap)
  - [Trust-based Guide Matching](#🛡️-trust-based-guide-matching)
  - [RAG-based AI Chatbot (Fori)](#🤖-rag-based-ai-chatbot-fori)
- [System Design](#3-system-design)
- [Tech Stacks](#4-tech-stacks)
- [Pages' Details](#5-pages-details)
- [UI Overview](#6-ui-overview)
- [Directory Structure](#7-directory-structure)
- [Installation](#8-installation)
- [Demo Video](#9-demo-video)
- [Contributor](#10-contributor)

## 1. Overview
**문제의식:** 한국 거주 외국인들은 언어 장벽, 정보 부족, 복잡한 행정 절차 등으로 초기 정착에 어려움을 겪는 실정<br>

**목표:** AI 기반 개인 맞춤형 정착 로드맵, 신뢰 기반 가이드 매칭, 실시간 정보 제공, 활동 보상 시스템을 통해 외국인의 안정적 정착 지원


## 2. Features

### 🗺️ Personalized Settlement Roadmap
- 진단 검사 결과 기반 **개인 최적화 로드맵** 생성
  
  <img width="13161" height="832" alt="Group 71" src="https://github.com/user-attachments/assets/19a84923-5967-4305-8ef3-123449825fe5" />
  
- 진행률 시각화 및 체크리스트 관리
- 완료 시 **포인트 지급** (가이드 매칭 등 활용 가능)

### 🛡️ Trust-based Guide Matching
- 인증된 가이드와 1:1 매칭
- 예비 가이드 → 전문 가이드로 승격 과정 투명 관리
- 블록체인 기반 검증 시스템 적용

### 🤖 RAG-based AI Chatbot (Fori)
- 개인화된 답변 제공, 환각 방지
- 다국어 지원
- 로드맵 진행 상황 기반 추천


## 3. System Design

### Architecture Diagram
<img width="1000" align="center" alt="forink-diagram" src="https://github.com/user-attachments/assets/bd1d48f7-a460-44bc-bf5e-a0e4c7840065" />

## 4. Tech Stacks

![React](https://img.shields.io/badge/React%2019.1.0-20232a?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript%205.8.3-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite%207.0.0-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS%204.1.11-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Query](https://img.shields.io/badge/-React%20Query%205.83.0-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
  <details>
    <summary>Other Libraries & API</summary>
    <div markdown="1">
      <code>zustand 5.0.7</code>
      <code>i18next 25.3.2</code>
      <code>reactflow 11.11.4</code>
      <code>Google Translate API</code>
    </div>
  </details>

## 5. Pages' Details
`진단 검사 페이지`
- 맞춤형 정착 서비스를 원하는 일반 사용자라면, 회원가입 후 진단검사 페이지로 이동해요.
- 진단 검사는 약 20개의 문항으로 이루어져 있으며, 각 항목을 클릭하면 다음 항목으로 이동해요.
- 진단 검사 결과는 **개별 맞춤 로드맵 생성 데이터**로 활용돼요.

`로드맵 전체 조회 페이지`
- 진단 검사를 바탕으로 생성된 로드맵을 확인할 수 있어요.
  - 진단 검사 결과가 없다면 로드맵 생성이 어려워요.
- 각 로드맵 별 진행 사항을 진행 바(Progress Bar)로 확인할 수 있어요.
- 제공받을 수 있는 서비스의 타입을 다음과 같아요.
  - *나만의 행정 로드맵*: 비자, 건강 보험 및 등록에 대한 단계별 가이드를 받을 수 있어요.
  - *나만의 거주 로드맵*: 정착을 하기 위해 필요한 생활 정보들을 알 수 있어요.
  - *나만의 언어 로드맵*: 한국어 기초를 배워 정착하는 데 도움을 받을 수 있어요.
  - *나만의 경력 로드맵*: 한국에서 구직할 수 있도록 리소스와 가이드를 제공해요.
 
`로드맵 타입별 조회 페이지`
- 타입별 로드맵을 클릭하면 **맞춤 로드맵** 내역을 확인할 수 있어요.
- 로드맵의 각 항목은, 세부 항목 완료 후 피드백을 작성하면 초록색 체크 표시와 함께 완료처리가 돼요. 또한, 진행률에 즉시 반영 돼요.

`로드맵 타입별 상세 항목 조회 페이지`
- 로드맵의 각 항목을 클릭하면 상세 항목을 조회할 수 있어요.
- 사용자들은 로드맵을 수행하고 체크박스를 클릭해요. (사용자 실제 이행 유도)
- 모두 체크하면 상세 항목별 피드백을 제출할 수 있어요.
  - 상세 항목 피드백은 좋아요/별로예요 중 선택 가능하며, 완료 시 **5 point**가 지급돼요.
- 모든 상세 항목을 완료하면 항목의 전체 피드백을 제출할 수 있어요.
  - 항목 전체 피드백은 서술식으로 진행되며, 완료 시 **10 point**가 지급돼요.
- 포인트는 가이드 매칭 시 사용할 수 있어요.

`가이드 조회 페이지`
- 인증된 가이드 목록을 조회할 수 있어요.
  - 스마트 컨트랙트를 이용한 가이드 검증 시스템으로 인증된 가이드예요.
- 가이드의 이름, 국적, 매칭 경력, 전문 분야, 가능 언어를 프로필 카드로 확인할 수 있어요.
- 원하는 가이드에게 매칭을 요청할 수 있어요.

`가이드 이력서 페이지`
- 가이드로서의 역할을 하고 싶은 신규 가입자라면, 회원 가입 후 이력서 작성 페이지로 이동해요.
- 이름, 언어, 전문 분야 등 예비 가이드 등급을 얻기 위한 기본 정보를 입력해요.
- 가이드 이력서 작성을 완료하면 예비 가이드 권한을 얻게 돼요.

`예비 가이드 로드맵 페이지`
- 예비 가이드는 외국인 정착 지원에 대한 전문성을 평가받기 위해 예비 가이드 전용 로드맵을 수행해요.
- 일반 사용자가 로드맵을 이용했던 것처럼, 예비 가이드도 로드맵을 수행한 후 해당 정보들에 대한 지식을 피드백으로 제출해요.
- 이 피드백은 전문 가이드들이 예비 가이드를 평가하는 지표가 돼요.

`예비 가이드 평가 페이지 (전문 가이드용)`
- 전문 가이드들은 예비 가이드들의 로드맵 피드백을 보고 평가해요.
- 평가 항목은 전문 역량 점수, 도움 점수, 추천 점수로 이루어져 있어요.
- 각 항목에서 3.0 이상, 평균 4.0 이상의 점수를 받으면 예비 가이드는 전문 가이드로 승격돼요.

`예비 가이드 상태 페이지 (예비 가이드용)`
- 예비 가이드들은 전문 가이드들이 평가한 내역을 모니터링해요.
- 평가 상태에 따라 In progress/Almost/Formal guide로 나누어 현재 상태를 확인할 수 있어요.
- 예비 가이드가 전문 가이드로 전환되면, 예비 가이드 평가 페이지를 확인할 수 있어요.

`챗봇 페이지(기능)`
- 사용자가 서비스 이용 중 궁금한 점이 있다면 우측 하단의 챗봇 버튼을 눌러 질문할 수 있어요.
- 질문에 맞는 답변을 신뢰도 있는 기관에서의 데이터와 사용자 정보를 기반으로 AI가 답해요.
- AI가 답변을 생성할 때 참고하는 RAG DB에 포함되지 않는 내용에 대한 답변은 하지 않음으로서 환각 현상을 방지해요.
  - 사용자 정보를 기반으로 하기 때문에, 알 필요 없는 정보는 필터링을 거쳐서 제공해요.
 
`회원가입/로그인 페이지`
- 소셜 로그인(구글)을 이용하여 회원가입과 로그인을 해요.
- 유효하지 않은 정보라면 회원가입은 할 수 없어요.
- 진단 검사 또는 이력서 작성을 하지 않았다면 진단 검사 또는 이력서 작성 페이지로 이동되고, 완료했다면 랜딩페이지로 이동해요.
- 로그아웃 버튼을 클릭하면 로그아웃 할 수 있어요.


## 6. UI Overview
<img width="22027" height="18015" alt="Group 73" src="https://github.com/user-attachments/assets/ad174768-60e7-4507-89b7-255b8cea50b7" />


## 7. Directory Structure

```shell
src/
│
├── 📁 apis/           # API 요청 함수 (axios 인스턴스)
├── 🖼️ assets/         # 이미지, 아이콘, 로고 등 정적 파일
│
├── 📁 components/     # 🧩 재사용 가능한 UI 컴포넌트
│   └── 📁 chatbot/     #    (예시: 챗봇 컴포넌트)
│       ├── ChatWindow.tsx #  - 전체 챗봇 창
│       ├── ChatLog.tsx    #  - 대화 기록 영역
│       └── ...
│
├── 🏛️ constants/      # 변하지 않는 상수 데이터
│
├── 🪝 hooks/          # 비즈니스 로직 및 상태 관리 커스텀 훅
│   └── useTranslation.ts  # 🌐 다국어 텍스트를 쉽게 사용하기 위한 커스텀 훅
│
├── 🏗️ layouts/        # 페이지 구조를 정의하는 레이아웃 (헤더, 푸터 등)
│   └── 📁 Header/
│       └── LanguageSelector.tsx # 🌐 언어 선택 UI 컴포넌트
│
├── 📄 pages/          # 각 라우팅 경로에 해당하는 페이지
│   └── 📁 roadmap/    #    (예시: 로드맵 페이지)
│       ├── RoadmapTypeSelectorPage.tsx # - 로드맵 타입 선택 페이지
│       └── 📁 template/               #   - 로드맵 페이지에서 사용하는 템플릿 컴포넌트
│           └── MilestoneNode.tsx     #     - 로드맵의 각 단계(마일스톤)
│
├── 🧭 routes/         # 페이지 라우팅 설정
│
├── ⚙️ services/       # API 호출 외의 비즈니스 로직
│   └── translationService.ts # 🌐 번역 관련 서비스 로직
│
├── 🗄️ stores/         # 전역 상태 관리 (Zustand)
│
├── App.tsx             # 최상위 애플리케이션 컴포넌트
├── main.tsx            # 애플리케이션 진입점 (Entry Point)
└── i18n.ts             # 🌐 i18next 라이브러리 설정 및 초기화 파일
```


## 8. Installation

```shell
git clone https://github.com/For-In-K/forink-front.git
cd ./forink-front
npm install # + 기타 .env 환경변수 설정
npm run dev
```


## 9. Demo Video

https://github.com/user-attachments/assets/6af46090-f4c8-47d5-956c-85a9e0a820ec
<caption>10MB 제한으로 일부 기능 생략 후 시연한 영상입니다.</caption>

## 10. Contributor
[![contributors](https://contrib.rocks/image?repo=For-In-K/forink-front)](https://github.com/For-In-K/forink-front/graphs/contributors)

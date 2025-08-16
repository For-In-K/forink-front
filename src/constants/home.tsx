import { ReactElement } from 'react';
import { Globe, Users, HelpingHand, Hospital, FileDigit } from 'lucide-react';

export interface ServiceBasicInfo {
  title: string;
  when: string;
  summary: string;
  tag: '중요' | '필수' | '선택' | '권장';
  url: string;
  icon: ReactElement;
}

export type ServiceBasicInfoList = ServiceBasicInfo[];

export const serviceList: ServiceBasicInfoList = [
  {
    title: '외국인등록 및 체류연장',
    when: '입국 후 90일 이내',
    summary: '한국 체류를 위한 필수 절차',
    tag: '중요',
    url: 'https://www.studyinkorea.go.kr/in/life/residenceAndStayInfo.do',
    icon: <Globe />,
  },
  {
    title: '사회통합프로그램 (KIIP) 참여',

    when: '영주권 준비 시',
    summary: '원활한 한국 사회 적응을 위한 프로그램',
    tag: '권장',
    url: 'https://www.immigration.go.kr/immigration_eng/1869/subview.do',
    icon: <Users />,
  },
  {
    title: '초기 정착 및 문화적응 프로그램',
    when: '생활 적응 필요 시',
    summary: '한국 생활에 필요한 기초 정보 제공',
    tag: '선택',
    url: 'https://www.immigration.go.kr/bbs/immigration_eng/230/454085/download.do',
    icon: <HelpingHand />,
  },
  {
    title: '건강보험 가입',
    when: '등록 직후',
    summary: '한국에서의 의료 혜택 제공',
    tag: '필수',
    url: 'https://www.immigration.go.kr/immigration_eng/index.do',
    icon: <Hospital />,
  },
  {
    title: '외국인 세금 신고 안내',
    when: '소득 발생 시 (연 1회)',
    summary: '한국 내 세금 신고 절차 안내',
    tag: '중요',
    url: 'https://www.nts.go.kr/english/main.do',
    icon: <FileDigit />,
  },
];

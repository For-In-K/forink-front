export type RoadmapType = 'administration' | 'travel' | 'career';

export interface RoadmapTypeDetail {
  type: string;
  progressRatio: number;
}

export type GetRoadmapTypeResponse = RoadmapTypeDetail[];

export interface UiRoadmapType {
  type: string;
  typeDescription: string;
  progressRatio: number;
}

export interface StepContent {
  stepContentId: number;
  stepContent: string;
  isChecked: boolean;
}

export interface Step {
  stepNumber: number;
  stepTitle: string;
  stepDescription: string;
  contents: StepContent[];
}

export type GetRoadmapStepDetailResponse = Step[];

export interface SubroadmapSection {
  roadmapId: number;
  title: string;
  statusType: 'COMPLETED' | 'IN_PROGRESS';
}

export type GetSubroadmapResponse = SubroadmapSection[];

export interface RoadmapType {
  type: string;
  progressRatio: number;
}

export type GetRoadmapTypeResponse = RoadmapType[];

export interface UiRoadmapType {
  type: string;
  typeDescription: string;
  progressRatio: number;
}

export interface StepContent {
  stepContent: string;
}

export interface Step {
  stepNumber: number;
  stepTitle: string;
  stepDescription: string;
  contents: StepContent[];
}

export interface RoadmapSection {
  type: string;
  order: number;
  title: string;
  steps: Step[];
}

export type CreateRoadmapResponse = RoadmapSection[];

export interface SubroadmapSection {
  roadmapId: number;
  title: string;
  statusType: 'COMPLETED' | 'IN_PROGRESS';
}

export type GetSubroadmapResponse = SubroadmapSection[];

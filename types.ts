export enum SectionType {
  OBSERVATION = 'OBSERVATION',
  INTERACTION = 'INTERACTION',
  CLOSING = 'CLOSING'
}

export interface ObservationPoint {
  id: string;
  label: string;
  description?: string;
}

export interface ChecklistSection {
  id: number;
  title: string;
  type: SectionType;
  icon: string;
  description: string;
  observationPoints: ObservationPoint[];
  scriptGuidance: string; // What to say/pitch
  keyInsight: string; // Why this matters (internal note)
}

export interface VisitData {
  clientName: string;
  notes: Record<string, string>; // Notes per section
  observations: Record<string, boolean>; // Checked observations
  completedSections: number[];
}
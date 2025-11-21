import { ChecklistSection, SectionType } from './types';
import { 
  Activity, 
  Home, 
  ShieldCheck, 
  Briefcase, 
  AlertCircle, 
  CalendarClock, 
  Smartphone, 
  Eye, 
  CheckCircle2 
} from 'lucide-react';
import React from 'react';

export const CHECKLIST_DATA: ChecklistSection[] = [
  {
    id: 1,
    title: 'Signs of Stress and Time',
    type: SectionType.OBSERVATION,
    icon: 'Activity',
    description: 'Observe if the home reflects overwhelm (piles of laundry, dishes, scattered toys).',
    observationPoints: [
      { id: 'piles_laundry', label: 'Piles of laundry' },
      { id: 'dishes_sink', label: 'Dishes in the sink' },
      { id: 'toys_scattered', label: 'Scattered toys' },
      { id: 'general_clutter', label: 'General clutter' }
    ],
    scriptGuidance: '"I see you are busy with important things — let us take care of this for you."',
    keyInsight: 'High-income clients with messy homes are the ideal target. They already know they need help.'
  },
  {
    id: 2,
    title: 'Quality and Condition',
    type: SectionType.OBSERVATION,
    icon: 'Home',
    description: 'Identify high-value finishes that require special care.',
    observationPoints: [
      { id: 'wood_floors', label: 'Hardwood floors' },
      { id: 'granite_marble', label: 'Granite or Marble' },
      { id: 'premium_fixtures', label: 'Premium Fixtures' },
      { id: 'expensive_furniture', label: 'Delicate/Expensive furniture' },
      { id: 'tech_areas', label: 'High-tech areas' }
    ],
    scriptGuidance: '"We have specific experience and the right products to care for these premium finishes without damaging them."',
    keyInsight: 'They have a lot to lose. Sell "meticulous care" and safety.'
  },
  {
    id: 3,
    title: 'Signs of Trust',
    type: SectionType.INTERACTION,
    icon: 'ShieldCheck',
    description: 'Assess the client\'s security and hesitation.',
    observationPoints: [
      { id: 'hesitation_alone', label: 'Hesitant to leave you alone' },
      { id: 'asks_insurance', label: 'Asked about insurance/references' },
      { id: 'cameras_alarm', label: 'Has cameras or alarms' }
    ],
    scriptGuidance: 'Proactively present certificates, background checks, and insurance. "Here are our credentials for your total peace of mind."',
    keyInsight: 'Don\'t wait for them to ask. Resolve anxiety before it arises.'
  },
  {
    id: 4,
    title: 'Standard of Living',
    type: SectionType.OBSERVATION,
    icon: 'Briefcase',
    description: 'Identify signs of a successful career and family priorities.',
    observationPoints: [
      { id: 'public_order_private_mess', label: 'Public area clean / Bedroom messy' },
      { id: 'family_photos', label: 'Many family/travel photos' },
      { id: 'home_office', label: 'Professional Home Office' }
    ],
    scriptGuidance: '"You\'ve built a successful life. Let us handle the cleaning so you can focus on your career and family."',
    keyInsight: 'They are successful. The pitch is about freeing up time for what matters.'
  },
  {
    id: 5,
    title: 'High Concern Areas',
    type: SectionType.INTERACTION,
    icon: 'AlertCircle',
    description: 'Find out where the pain is greatest.',
    observationPoints: [
      { id: 'high_traffic', label: 'High traffic areas dirty' },
      { id: 'sensitive_hosting', label: 'Hosts many guests' },
      { id: 'kids_pets', label: 'Children or Pets present' }
    ],
    scriptGuidance: 'ASK: "Which area of this house causes you the most stress to keep clean?"',
    keyInsight: 'This question reveals the true "pain point" to close the sale.'
  },
  {
    id: 6,
    title: 'Frequency and Budget',
    type: SectionType.OBSERVATION,
    icon: 'CalendarClock',
    description: 'Calibrate the offer based on the current state of the house.',
    observationPoints: [
      { id: 'well_maintained', label: 'Well maintained (Preventive)' },
      { id: 'slightly_messy', label: 'Slightly messy (Deep + Maintenance)' },
      { id: 'neglected', label: 'Very neglected (Anxious/Skeptical)' }
    ],
    scriptGuidance: '"I recommend starting with an initial deep clean to establish our standard, followed by maintenance every X weeks."',
    keyInsight: 'Adjust the recommendation visually so as not to scare or underestimate the need.'
  },
  {
    id: 7,
    title: 'Education and Technology',
    type: SectionType.INTERACTION,
    icon: 'Smartphone',
    description: 'Demonstrate modern professionalism.',
    observationPoints: [
      { id: 'digital_calendar', label: 'Uses digital calendar' },
      { id: 'tech_savvy', label: 'Tech-savvy profile' }
    ],
    scriptGuidance: 'Mention the scheduling app, online payments, and easy communication. Avoid looking amateur.',
    keyInsight: 'They value convenience and clarity. Avoid "gig economy" chaos.'
  },
  {
    id: 8,
    title: 'Strategic Compliments',
    type: SectionType.INTERACTION,
    icon: 'Eye',
    description: 'Validate the client\'s achievements and taste.',
    observationPoints: [
      { id: 'compliment_kitchen', label: 'Compliment Kitchen' },
      { id: 'compliment_finishes', label: 'Compliment Finishes' },
      { id: 'compliment_decor', label: 'Compliment Decor/Valuables' }
    ],
    scriptGuidance: '"Your kitchen is beautiful. Our processes ensure every detail is treated with the respect it deserves."',
    keyInsight: 'Don\'t be sycophantic, but acknowledge quality. They want you to respect what they\'ve built.'
  },
  {
    id: 9,
    title: 'Closing',
    type: SectionType.CLOSING,
    icon: 'CheckCircle2',
    description: 'The final question to secure the contract.',
    observationPoints: [],
    scriptGuidance: 'ASK: "What would make you say \'YES\' today?"',
    keyInsight: 'Identify the final objection (Price, Trust, Schedule) and resolve it on the spot.'
  }
];
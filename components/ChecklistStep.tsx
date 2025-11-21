import React from 'react';
import { ChecklistSection } from '../types';
import { 
  Activity, 
  Home, 
  ShieldCheck, 
  Briefcase, 
  AlertCircle, 
  CalendarClock, 
  Smartphone, 
  Eye, 
  CheckCircle2,
  MessageCircle,
  Lightbulb
} from 'lucide-react';

// Map string icon names to components
const IconMap: Record<string, React.ElementType> = {
  Activity, Home, ShieldCheck, Briefcase, AlertCircle, CalendarClock, Smartphone, Eye, CheckCircle2
};

interface ChecklistStepProps {
  section: ChecklistSection;
  data: {
    notes: string;
    observations: Record<string, boolean>;
  };
  onToggleObservation: (id: string) => void;
  onUpdateNote: (note: string) => void;
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export const ChecklistStep: React.FC<ChecklistStepProps> = ({
  section,
  data,
  onToggleObservation,
  onUpdateNote,
  onNext,
  onPrev,
  isFirst,
  isLast
}) => {
  const Icon = IconMap[section.icon] || Activity;

  return (
    <div className="max-w-2xl mx-auto w-full pb-24">
      {/* Section Header Card */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-6">
        <div className="bg-slate-50 p-4 border-b border-slate-100 flex items-start gap-4">
          <div className="bg-blue-100 p-3 rounded-lg text-blue-700 shrink-0">
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-800">{section.title}</h2>
            <p className="text-sm text-slate-500 mt-1">{section.description}</p>
          </div>
        </div>

        <div className="p-5 space-y-6">
          {/* Script Box */}
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <div className="flex items-center gap-2 mb-2">
              <MessageCircle className="w-4 h-4 text-emerald-700" />
              <span className="text-xs font-bold uppercase text-emerald-700 tracking-wide">What to say</span>
            </div>
            <p className="text-emerald-900 font-medium italic text-lg leading-relaxed">
              {section.scriptGuidance}
            </p>
          </div>

          {/* Observations Grid */}
          {section.observationPoints.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                What did you observe?
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {section.observationPoints.map((point) => (
                  <button
                    key={point.id}
                    onClick={() => onToggleObservation(point.id)}
                    className={`text-left px-4 py-3 rounded-lg border transition-all flex items-center justify-between group ${
                      data.observations[point.id]
                        ? 'bg-blue-50 border-blue-500 shadow-sm'
                        : 'bg-white border-slate-200 hover:border-blue-300'
                    }`}
                  >
                    <span className={`font-medium ${data.observations[point.id] ? 'text-blue-800' : 'text-slate-700'}`}>
                      {point.label}
                    </span>
                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                      data.observations[point.id] ? 'bg-blue-500 border-blue-500' : 'border-slate-300'
                    }`}>
                      {data.observations[point.id] && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Insight Box */}
          <div className="flex gap-3 p-3 bg-amber-50 rounded-lg border border-amber-100">
            <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              <span className="font-bold">Strategic Insight:</span> {section.keyInsight}
            </p>
          </div>

          {/* Notes Area */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Additional Notes</label>
            <textarea
              value={data.notes}
              onChange={(e) => onUpdateNote(e.target.value)}
              placeholder="Specific details for the quote..."
              className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none h-24 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 z-40">
        <div className="max-w-2xl mx-auto flex justify-between gap-4">
          <button
            onClick={onPrev}
            disabled={isFirst}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
              isFirst 
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'
            }`}
          >
            Back
          </button>
          <button
            onClick={onNext}
            className="flex-1 py-3 px-4 rounded-lg bg-blue-800 text-white font-medium hover:bg-blue-900 shadow-lg transition-transform active:scale-95"
          >
            {isLast ? 'Finish and Review' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};
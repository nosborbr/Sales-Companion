import React from 'react';
import { VisitData } from '../types';
import { CHECKLIST_DATA } from '../constants';
import { CheckCircle2, Star, Share2 } from 'lucide-react';

interface SummaryReportProps {
  data: VisitData;
  onReset: () => void;
}

export const SummaryReport: React.FC<SummaryReportProps> = ({ data, onReset }) => {
  
  // Helper to count true values
  const countObservations = Object.values(data.observations).filter(Boolean).length;

  const handleShare = () => {
    // In a real app, this would generate a PDF or copy to clipboard
    const text = `Visit Report: ${data.clientName}\n` + 
      CHECKLIST_DATA.map(section => {
        const obs = section.observationPoints
          .filter(p => data.observations[p.id])
          .map(p => `- ${p.label}`)
          .join('\n');
        const note = data.notes[section.id] ? `Note: ${data.notes[section.id]}` : '';
        return obs || note ? `\n[${section.title}]\n${obs}\n${note}` : '';
      }).join('');
      
    if (navigator.share) {
      navigator.share({
        title: `Visit: ${data.clientName}`,
        text: text,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(text);
      alert('Summary copied to clipboard!');
    }
  };

  return (
    <div className="max-w-3xl mx-auto pb-12">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6 border border-slate-200">
        <div className="bg-blue-900 p-8 text-white text-center">
          <div className="bg-green-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <CheckCircle2 className="w-10 h-10 text-blue-900" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Visit Complete!</h2>
          <p className="text-blue-200">You collected {countObservations} key points about {data.clientName}'s residence.</p>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            Strategic Summary for Quote
          </h3>

          <div className="space-y-6">
            {CHECKLIST_DATA.map((section) => {
              const hasObservations = section.observationPoints.some(p => data.observations[p.id]);
              const hasNotes = !!data.notes[section.id];

              if (!hasObservations && !hasNotes) return null;

              return (
                <div key={section.id} className="border-l-2 border-slate-200 pl-4 py-1">
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">{section.title}</h4>
                  
                  {hasObservations && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {section.observationPoints.filter(p => data.observations[p.id]).map(p => (
                        <span key={p.id} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm font-medium border border-blue-100">
                          {p.label}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {hasNotes && (
                    <p className="text-slate-600 text-sm bg-slate-50 p-2 rounded italic">
                      "{data.notes[section.id]}"
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-3">Closing Checklist</h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                Show proof of Insurance and Background Check
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                Mention care for observed valuable items
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                Explain scheduling app (Convenience)
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                Ask the golden question: "What would make you say 'YES' today?"
              </li>
            </ul>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <button 
              onClick={onReset}
              className="py-3 px-4 rounded-lg border border-slate-300 text-slate-600 font-medium hover:bg-slate-50 text-center"
            >
              New Visit
            </button>
            <button 
              onClick={handleShare}
              className="py-3 px-4 rounded-lg bg-blue-800 text-white font-medium hover:bg-blue-900 shadow text-center flex items-center justify-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              Copy/Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
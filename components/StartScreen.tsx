import React, { useState } from 'react';
import { ClipboardList, ArrowRight } from 'lucide-react';

interface StartScreenProps {
  onStart: (name: string) => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onStart(name);
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center border-t-4 border-blue-600">
        <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <ClipboardList className="w-8 h-8 text-blue-600" />
        </div>
        
        <h2 className="text-2xl font-bold text-slate-800 mb-2">New Visit</h2>
        <p className="text-slate-500 mb-8">Strategic checklist for home visits in Watertown.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label htmlFor="clientName" className="block text-sm font-medium text-slate-700 mb-1">
              Client Name / Address
            </label>
            <input
              id="clientName"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Mrs. Smith - 123 Main St"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              autoFocus
            />
          </div>
          
          <button
            type="submit"
            disabled={!name.trim()}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Start Visit
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};
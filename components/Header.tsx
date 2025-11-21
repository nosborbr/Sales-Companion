import React from 'react';
import { Sparkles } from 'lucide-react';

interface HeaderProps {
  clientName: string;
  progress: number;
  onReset: () => void;
}

export const Header: React.FC<HeaderProps> = ({ clientName, progress, onReset }) => {
  return (
    <header className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-white/10 p-2 rounded-full">
            <Sparkles className="w-5 h-5 text-blue-200" />
          </div>
          <div>
            <h1 className="text-sm font-bold uppercase tracking-wider text-blue-200">Reliable Maid Services</h1>
            {clientName && <p className="text-xs font-medium truncate max-w-[150px] sm:max-w-xs">Client: {clientName}</p>}
          </div>
        </div>
        
        {clientName && (
          <div className="flex flex-col items-end gap-1">
            <div className="w-24 h-2 bg-blue-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-400 transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <button onClick={onReset} className="text-xs text-blue-300 hover:text-white underline">
              Reset
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
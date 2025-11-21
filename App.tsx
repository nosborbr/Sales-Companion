import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { StartScreen } from './components/StartScreen';
import { ChecklistStep } from './components/ChecklistStep';
import { SummaryReport } from './components/SummaryReport';
import { CHECKLIST_DATA } from './constants';
import { VisitData } from './types';

const INITIAL_DATA: VisitData = {
  clientName: '',
  notes: {},
  observations: {},
  completedSections: []
};

const App: React.FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(-1);
  const [visitData, setVisitData] = useState<VisitData>(INITIAL_DATA);

  // Calculate progress percentage
  const progress = useMemo(() => {
    if (currentStepIndex === -1) return 0;
    if (currentStepIndex >= CHECKLIST_DATA.length) return 100;
    return ((currentStepIndex + 1) / CHECKLIST_DATA.length) * 100;
  }, [currentStepIndex]);

  const handleStart = (name: string) => {
    setVisitData({ ...INITIAL_DATA, clientName: name });
    setCurrentStepIndex(0);
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset? All data will be lost.")) {
      setVisitData(INITIAL_DATA);
      setCurrentStepIndex(-1);
    }
  };

  const handleNext = () => {
    setCurrentStepIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    setCurrentStepIndex(prev => Math.max(0, prev - 1));
  };

  const handleToggleObservation = (id: string) => {
    setVisitData(prev => ({
      ...prev,
      observations: {
        ...prev.observations,
        [id]: !prev.observations[id]
      }
    }));
  };

  const handleUpdateNote = (note: string) => {
    const sectionId = CHECKLIST_DATA[currentStepIndex].id;
    setVisitData(prev => ({
      ...prev,
      notes: {
        ...prev.notes,
        [sectionId]: note
      }
    }));
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <Header 
        clientName={visitData.clientName} 
        progress={progress}
        onReset={handleReset}
      />

      <main className="flex-1 container mx-auto px-4 py-6">
        {currentStepIndex === -1 && (
          <StartScreen onStart={handleStart} />
        )}

        {currentStepIndex >= 0 && currentStepIndex < CHECKLIST_DATA.length && (
          <ChecklistStep
            section={CHECKLIST_DATA[currentStepIndex]}
            data={{
              notes: visitData.notes[CHECKLIST_DATA[currentStepIndex].id] || '',
              observations: visitData.observations
            }}
            onToggleObservation={handleToggleObservation}
            onUpdateNote={handleUpdateNote}
            onNext={handleNext}
            onPrev={handlePrev}
            isFirst={currentStepIndex === 0}
            isLast={currentStepIndex === CHECKLIST_DATA.length - 1}
          />
        )}

        {currentStepIndex === CHECKLIST_DATA.length && (
          <SummaryReport 
            data={visitData} 
            onReset={handleReset}
          />
        )}
      </main>
    </div>
  );
};

export default App;
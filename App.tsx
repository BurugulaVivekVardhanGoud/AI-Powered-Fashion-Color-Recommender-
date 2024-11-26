import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticleBackground from './components/ParticleBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import ImageUploader from './components/ImageUploader';
import SkinToneSelector from './components/SkinToneSelector';
import AnalysisResult from './components/AnalysisResult';
import { colorRecommendations } from './data/colorRecommendations';
import type { AnalysisResult as AnalysisResultType, SkinToneData } from './types';

function App() {
  const [mode, setMode] = React.useState<'upload' | 'manual' | null>(null);
  const [image, setImage] = React.useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = React.useState<AnalysisResultType | null>(null);
  const [analyzing, setAnalyzing] = React.useState(false);

  const handleImageCapture = (imageData: string) => {
    setImage(imageData);
    setAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysisResult({
        skinTone: {
          tone: 'medium',
          undertone: 'neutral'
        },
        colors: colorRecommendations.medium.neutral
      });
      setAnalyzing(false);
    }, 2000);
  };

  const handleManualSelection = (selection: SkinToneData) => {
    setAnalysisResult({
      skinTone: selection,
      colors: colorRecommendations[selection.tone][selection.undertone]
    });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />
      <Header />
      
      <AnimatePresence mode="wait">
        {!mode ? (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Hero onUpload={() => setMode('upload')} onManual={() => setMode('manual')} />
          </motion.div>
        ) : (
          <motion.main
            key="analysis"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
          >
            {mode === 'upload' && !analysisResult && (
              <>
                {analyzing ? (
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
                    <p className="text-gray-400">Analyzing your skin tone...</p>
                  </div>
                ) : (
                  <ImageUploader onImageCapture={handleImageCapture} />
                )}
              </>
            )}

            {mode === 'manual' && !analysisResult && (
              <SkinToneSelector onSelection={handleManualSelection} />
            )}

            {analysisResult && (
              <>
                <AnalysisResult result={analysisResult} />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setMode(null);
                    setImage(null);
                    setAnalysisResult(null);
                  }}
                  className="mt-8 mx-auto flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                >
                  Try Again
                </motion.button>
              </>
            )}
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
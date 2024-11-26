import React from 'react';
import { Palette, Info } from 'lucide-react';

interface ColorAnalysisProps {
  imageUrl: string;
  onAnalysisComplete?: (results: any) => void;
}

const colorPalettes = {
  fair: {
    casual: ['#2E5A88', '#8B008B', '#006400', '#4B0082'],
    formal: ['#191970', '#800000', '#483D8B', '#2F4F4F'],
    party: ['#9400D3', '#4169E1', '#8B008B', '#483D8B']
  },
  medium: {
    casual: ['#FF4500', '#20B2AA', '#DAA520', '#32CD32'],
    formal: ['#800000', '#008080', '#4682B4', '#556B2F'],
    party: ['#FF1493', '#FF4500', '#1E90FF', '#32CD32']
  },
  deep: {
    casual: ['#FFD700', '#FF4500', '#00FF00', '#FF69B4'],
    formal: ['#8B0000', '#4B0082', '#006400', '#8B008B'],
    party: ['#FF1493', '#FFD700', '#00FF00', '#FF4500']
  }
};

export default function ColorAnalysis({ imageUrl }: ColorAnalysisProps) {
  const [analyzing, setAnalyzing] = React.useState(true);
  const [skinTone] = React.useState('medium'); // Simulated analysis result

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setAnalyzing(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-8">
      <div className="relative rounded-xl overflow-hidden">
        <img
          src={imageUrl}
          alt="Analyzed"
          className="w-full h-64 object-cover"
        />
        {analyzing && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent mb-4" />
              <p>Analyzing your skin tone...</p>
            </div>
          </div>
        )}
      </div>

      {!analyzing && (
        <div className="space-y-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Info className="text-purple-400" />
              <h3 className="text-xl font-semibold text-white">Analysis Results</h3>
            </div>
            <p className="text-gray-300">
              Your skin tone appears to be in the medium range with warm undertones.
              This opens up a beautiful spectrum of colors that will complement your natural features.
            </p>
          </div>

          {Object.entries(colorPalettes[skinTone as keyof typeof colorPalettes]).map(([category, colors]) => (
            <div key={category} className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white capitalize mb-4">{category} Wear</h3>
              <div className="grid grid-cols-4 gap-4">
                {colors.map((color) => (
                  <div key={color} className="space-y-2">
                    <div
                      className="w-full aspect-square rounded-lg shadow-lg"
                      style={{ backgroundColor: color }}
                    />
                    <p className="text-xs text-center text-gray-400 font-mono">
                      {color.toUpperCase()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
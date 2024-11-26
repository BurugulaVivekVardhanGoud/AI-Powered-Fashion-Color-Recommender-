import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import type { SkinToneData } from '../types';

interface SkinToneSelectorProps {
  onSelection: (selection: SkinToneData) => void;
}

export default function SkinToneSelector({ onSelection }: SkinToneSelectorProps) {
  const [selectedTone, setSelectedTone] = React.useState<string | null>(null);
  const [selectedUndertone, setSelectedUndertone] = React.useState<string | null>(null);

  const tones = [
    { id: 'fair', color: '#FFE5D6', label: 'Fair' },
    { id: 'medium', color: '#D4A088', label: 'Medium' },
    { id: 'deep', color: '#8D5524', label: 'Deep' }
  ];

  const undertones = [
    { id: 'cool', label: 'Cool' },
    { id: 'warm', label: 'Warm' },
    { id: 'neutral', label: 'Neutral' }
  ];

  const handleSubmit = () => {
    if (selectedTone && selectedUndertone) {
      onSelection({
        tone: selectedTone,
        undertone: selectedUndertone
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="glass-panel p-6">
        <div className="flex items-center gap-3 mb-4">
          <Info className="text-purple-400" />
          <h3 className="text-xl font-semibold text-white">Select Your Skin Tone</h3>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-300">
              Choose your base tone:
            </label>
            <div className="grid grid-cols-3 gap-4">
              {tones.map((tone) => (
                <motion.button
                  key={tone.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedTone(tone.id)}
                  className={`relative p-4 rounded-lg border-2 transition-colors ${
                    selectedTone === tone.id
                      ? 'border-purple-500'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <div
                    className="w-full h-16 rounded-md mb-2"
                    style={{ backgroundColor: tone.color }}
                  />
                  <p className="text-sm text-gray-300">{tone.label}</p>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-300">
              Select your undertone:
            </label>
            <div className="grid grid-cols-3 gap-4">
              {undertones.map((undertone) => (
                <motion.button
                  key={undertone.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedUndertone(undertone.id)}
                  className={`p-4 rounded-lg border-2 transition-colors ${
                    selectedUndertone === undertone.id
                      ? 'border-purple-500 bg-purple-500/10'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <p className="text-gray-300">{undertone.label}</p>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="p-4 bg-gray-800/50 rounded-lg">
            <h4 className="font-medium text-purple-400 mb-2">How to identify your undertone:</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Look at your veins: Green = Warm, Blue/Purple = Cool</li>
              <li>• Gold vs Silver jewelry: Which looks better?</li>
              <li>• Sun reaction: Tan easily = Warm, Burn = Cool</li>
            </ul>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSubmit}
            disabled={!selectedTone || !selectedUndertone}
            className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
              selectedTone && selectedUndertone
                ? 'bg-purple-600 hover:bg-purple-700 text-white'
                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
            }`}
          >
            Get Color Recommendations
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
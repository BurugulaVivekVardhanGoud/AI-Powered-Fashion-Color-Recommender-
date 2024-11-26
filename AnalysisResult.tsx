import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Info } from 'lucide-react';
import type { AnalysisResult } from '../types';

interface AnalysisResultProps {
  result: AnalysisResult;
}

export default function AnalysisResult({ result }: AnalysisResultProps) {
  const categories = ['casual', 'formal', 'festive'] as const;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="glass-panel p-6">
        <div className="flex items-center gap-3 mb-4">
          <Info className="text-purple-400" />
          <h3 className="text-xl font-semibold text-white">Your Color Profile</h3>
        </div>
        <p className="text-gray-300">
          Your skin tone appears to be <span className="text-purple-400 font-medium">{result.skinTone.tone}</span> with
          a <span className="text-purple-400 font-medium">{result.skinTone.undertone}</span> undertone.
          Here's your personalized color palette:
        </p>
      </div>

      {categories.map((category) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-panel p-6"
        >
          <h3 className="text-lg font-semibold text-white capitalize mb-4">
            {category} Wear
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {result.colors[category].map((color) => (
              <motion.div
                key={color}
                whileHover={{ scale: 1.05 }}
                className="space-y-2"
              >
                <div
                  className="aspect-square rounded-lg shadow-lg cursor-pointer"
                  style={{ backgroundColor: color }}
                />
                <p className="text-xs text-center text-gray-400 font-mono">
                  {color.toUpperCase()}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="glass-panel p-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <Palette className="text-purple-400" />
          <h3 className="text-xl font-semibold text-white">Style Tips</h3>
        </div>
        <ul className="space-y-2 text-gray-300">
          <li>• Mix and match colors within each category for balanced outfits</li>
          <li>• Use formal colors for professional settings and interviews</li>
          <li>• Festive colors are perfect for special occasions and celebrations</li>
        </ul>
      </motion.div>
    </motion.div>
  );
}
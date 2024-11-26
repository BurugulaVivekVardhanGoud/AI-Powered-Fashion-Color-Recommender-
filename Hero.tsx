import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Upload, Palette } from 'lucide-react';

interface HeroProps {
  onUpload: () => void;
  onManual: () => void;
}

export default function Hero({ onUpload, onManual }: HeroProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-4xl w-full space-y-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Discover Your Perfect
            </span>
            <br />
            <span className="text-white">Color Palette</span>
          </h1>
          
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
            Get personalized color recommendations based on your unique skin tone.
            Choose to upload a photo or use our interactive skin tone selector.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onUpload}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-medium transition-colors"
          >
            <Upload size={20} />
            Upload or Take Photo
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onManual}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-medium transition-colors"
          >
            <Palette size={20} />
            Select Manually
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-8 pt-12"
        >
          {[
            'AI-Powered Analysis',
            'Manual Selection',
            'Personalized Results'
          ].map((feature, i) => (
            <div key={feature} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-3"
              >
                <div className="w-8 h-8 rounded-full bg-purple-500/20" />
              </motion.div>
              <p className="text-gray-400 text-sm">{feature}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
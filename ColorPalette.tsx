import React from 'react';
import { Palette, Star } from 'lucide-react';

const colorSuggestions = {
  warm: {
    casual: ['#F4A261', '#E76F51', '#D4A373', '#CCD5AE'],
    formal: ['#2A9D8F', '#264653', '#8B4513', '#DEB887'],
    festive: ['#E63946', '#FFB703', '#FB8500', '#DC2F02']
  },
  cool: {
    casual: ['#48CAE4', '#90E0EF', '#CAF0F8', '#ADE8F4'],
    formal: ['#023E8A', '#0077B6', '#1A759F', '#34A0A4'],
    festive: ['#7209B7', '#3A0CA3', '#4361EE', '#4CC9F0']
  },
  neutral: {
    casual: ['#CCD5AE', '#E9EDC9', '#FEFAE0', '#FAEDCD'],
    formal: ['#D6CCC2', '#E3D5CA', '#D5BDAF', '#B7B7A4'],
    festive: ['#BB3E03', '#CA6702', '#EE9B00', '#94D2BD']
  }
};

export default function ColorPalette({ undertone = 'neutral' }) {
  const categories = ['casual', 'formal', 'festive'];

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center gap-3 mb-6">
        <Palette className="text-purple-600" size={24} />
        <h2 className="text-2xl font-bold text-gray-800">Your Color Palette</h2>
      </div>

      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category} className="space-y-4">
            <h3 className="text-lg font-semibold capitalize text-gray-700 flex items-center gap-2">
              {category}
              {category === 'formal' && <Star className="text-yellow-500" size={16} />}
            </h3>
            
            <div className="grid grid-cols-4 gap-4">
              {colorSuggestions[undertone][category].map((color) => (
                <div key={color} className="space-y-2">
                  <div
                    className="w-full aspect-square rounded-lg shadow-inner"
                    style={{ backgroundColor: color }}
                  />
                  <p className="text-xs text-center text-gray-600 font-mono">
                    {color.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                {category === 'casual' && 'Perfect for everyday wear and casual outings'}
                {category === 'formal' && 'Ideal for professional settings and formal events'}
                {category === 'festive' && 'Make a statement at celebrations and special occasions'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
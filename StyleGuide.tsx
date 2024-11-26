import React from 'react';
import { BookOpen, TrendingUp } from 'lucide-react';

const articles = [
  {
    title: "Understanding Color Theory in Fashion",
    excerpt: "Learn how colors interact and create harmonious outfits...",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Seasonal Color Analysis",
    excerpt: "Discover which colors work best for different seasons...",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
  }
];

export default function StyleGuide() {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center gap-3 mb-6">
        <BookOpen className="text-purple-600" size={24} />
        <h2 className="text-2xl font-bold text-gray-800">Style Guide</h2>
      </div>

      <div className="grid gap-6">
        {articles.map((article, index) => (
          <article key={index} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg aspect-video mb-4">
              <img
                src={article.image}
                alt={article.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
              {article.title}
            </h3>
            <p className="mt-2 text-gray-600">{article.excerpt}</p>
            
            <div className="mt-4 flex items-center gap-2 text-purple-600">
              <span className="text-sm font-medium">Read more</span>
              <TrendingUp size={16} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
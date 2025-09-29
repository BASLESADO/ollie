import React from 'react';
import { Share2, Heart, Flag } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2">
            {/* Campaign Image */}
            <div className="aspect-video bg-gray-200 rounded-lg mb-6 overflow-hidden">
              <img 
                src="https://images.gofundme.com/hwNOH-tfy8BvSx8RPp00_uAbahg=/720x405/https://d2g8igdw686xgo.cloudfront.net/94175427_1756666248348224_r.png"
                alt="Campaign cover image"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Campaign Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Help Save Baby Ollie's Heart
            </h1>
            
            {/* Campaign Meta */}
            <div className="flex items-center space-x-4 mb-6 text-sm text-gray-600">
              <span>Organized by <a href="#" className="text-green-600 font-medium hover:underline">Campaign Organizer</a></span>
              <span>•</span>
              <span>Last donation 2h ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
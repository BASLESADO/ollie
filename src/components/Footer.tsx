import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Fundraise for</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-400">Medical</a></li>
              <li><a href="#" className="hover:text-green-400">Emergency</a></li>
              <li><a href="#" className="hover:text-green-400">Memorial</a></li>
              <li><a href="#" className="hover:text-green-400">Education</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Learn more</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-400">How GoFundMe works</a></li>
              <li><a href="#" className="hover:text-green-400">Why GoFundMe</a></li>
              <li><a href="#" className="hover:text-green-400">Common questions</a></li>
              <li><a href="#" className="hover:text-green-400">Success stories</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-400">Help center</a></li>
              <li><a href="#" className="hover:text-green-400">Blog</a></li>
              <li><a href="#" className="hover:text-green-400">Press center</a></li>
              <li><a href="#" className="hover:text-green-400">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-400">About</a></li>
              <li><a href="#" className="hover:text-green-400">Terms</a></li>
              <li><a href="#" className="hover:text-green-400">Privacy</a></li>
              <li><a href="#" className="hover:text-green-400">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 GoFundMe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
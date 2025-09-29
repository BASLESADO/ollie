import React, { useState } from 'react';
import { Heart, Users } from 'lucide-react';

export default function DonationBox() {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const raisedAmount = 1850;
  const goalAmount = 50000;
  const donorCount = 33;
  const percentage = Math.round((raisedAmount / goalAmount) * 100);

  const quickAmounts = [
    { amount: 10, url: 'https://olliehelp.gumroad.com/l/pyjeyg?_gl=1*ou751r*_ga*MTM5OTA5MTU4OS4xNzU4MjQ5Mjc0*_ga_6LJN6D94N6*czE3NTkxNzYzNzUkbzI0JGcxJHQxNzU5MTc2Nzk1JGo1OSRsMCRoMA..' },
    { amount: 20, url: 'https://olliehelp.gumroad.com/l/jrsnrn?_gl=1*1qwovqx*_ga*MTM5OTA5MTU4OS4xNzU4MjQ5Mjc0*_ga_6LJN6D94N6*czE3NTkxNzYzNzUkbzI0JGcxJHQxNzU5MTc2Nzk1JGo1OSRsMCRoMA..' },
    { amount: 50, url: 'https://olliehelp.gumroad.com/l/egiaun?_gl=1*1qwovqx*_ga*MTM5OTA5MTU4OS4xNzU4MjQ5Mjc0*_ga_6LJN6D94N6*czE3NTkxNzYzNzUkbzI0JGcxJHQxNzU5MTc2Nzk1JGo1OSRsMCRoMA..' },
    { amount: 100, url: 'https://olliehelp.gumroad.com/l/kcegx?_gl=1*1qwovqx*_ga*MTM5OTA5MTU4OS4xNzU4MjQ5Mjc0*_ga_6LJN6D94N6*czE3NTkxNzYzNzUkbzI0JGcxJHQxNzU5MTc2Nzk1JGo1OSRsMCRoMA..' },
    { amount: 250, url: 'https://olliehelp.gumroad.com/l/pswgr?_gl=1*14iw3rq*_ga*MTM5OTA5MTU4OS4xNzU4MjQ5Mjc0*_ga_6LJN6D94N6*czE3NTkxNzYzNzUkbzI0JGcxJHQxNzU5MTc2Nzk1JGo1OSRsMCRoMA..' },
    { amount: 500, url: 'https://olliehelp.gumroad.com/l/dknbwz?_gl=1*14iw3rq*_ga*MTM5OTA5MTU4OS4xNzU4MjQ5Mjc0*_ga_6LJN6D94N6*czE3NTkxNzYzNzUkbzI0JGcxJHQxNzU5MTc2Nzk1JGo1OSRsMCRoMA..' }
  ];

  const getPaymentUrl = (amount: number) => {
    const option = quickAmounts.find(qa => qa.amount === amount);
    return option ? option.url : quickAmounts[2].url; // Default to $50 if not found
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
      {/* Progress Circle */}
      <div className="flex justify-center mb-6">
        <div className="relative w-20 h-20">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 80 80">
            <circle
              cx="40"
              cy="40"
              r="35"
              stroke="#e5e7eb"
              strokeWidth="8"
              fill="transparent"
            />
            <circle
              cx="40"
              cy="40"
              r="35"
              stroke="#00d775"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray="220"
              strokeDashoffset={220 - (220 * percentage) / 100}
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-bold text-gray-900">{percentage}%</span>
          </div>
        </div>
      </div>

      {/* Progress Stats */}
      <div className="text-center mb-6">
        <div className="text-2xl font-bold text-gray-900 mb-1">
          ${raisedAmount.toLocaleString()} raised
        </div>
        <div className="text-gray-600 text-sm mb-2">
          of ${goalAmount.toLocaleString()} goal
        </div>
        <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{donorCount} donors</span>
          </div>
          <span>•</span>
          <span>45 days left</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div 
          className="bg-green-500 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      {/* Quick Donation Amounts */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        {quickAmounts.map(({ amount }) => (
          <button
            key={amount}
            onClick={() => setSelectedAmount(amount)}
            className={`p-3 rounded-lg border text-center font-medium transition-colors ${
              selectedAmount === amount
                ? 'border-green-500 bg-green-50 text-green-700'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            ${amount}
          </button>
        ))}
      </div>

      {/* Donate Button */}
      <a 
        href={getPaymentUrl(selectedAmount)}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors mb-4 text-center"
      >
        Donate ${selectedAmount}
      </a>

      {/* Recent Donors */}
      <div className="mt-4">
        <h3 className="font-semibold text-gray-900 mb-3">Recent donations</h3>
        <div className="space-y-3">
          {[
            { name: 'Anonymous', amount: 250, time: '1h ago', message: 'Praying for baby Ollie!' },
            { name: 'Sarah Johnson', amount: 100, time: '2h ago', message: 'Stay strong!' },
            { name: 'Mike Chen', amount: 500, time: '4h ago', message: 'Hope this helps' },
            { name: 'Anonymous', amount: 50, time: '6h ago', message: 'Get well soon!' },
            { name: 'Lisa Martinez', amount: 20, time: '8h ago', message: null },
            { name: 'David Kim', amount: 100, time: '12h ago', message: 'Sending love' },
          ].map((donor, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900 truncate">{donor.name}</p>
                  <p className="text-sm text-gray-600">${donor.amount}</p>
                </div>
                <p className="text-xs text-gray-500">{donor.time}</p>
                {donor.message && (
                  <p className="text-sm text-gray-700 mt-1">{donor.message}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
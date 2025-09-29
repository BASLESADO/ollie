import React, { useState } from 'react';
import { Calendar, MapPin, Tag } from 'lucide-react';

export default function CampaignContent() {
  const [activeTab, setActiveTab] = useState('story');

  return (
    <div className="lg:col-span-2">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'story', label: 'Story' },
            { id: 'updates', label: 'Updates (3)' },
            { id: 'donors', label: 'Donors (33)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'story' && (
        <div className="prose prose-lg max-w-none">
          {/* Story Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ollie's Story</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                My baby boy, Ollie, is just 12 months old. At only two weeks old, he was unexpectedly diagnosed with a rare and complex heart condition: pulmonary atresia with ventricular septal defect and major aortopulmonary collateral arteries (PA-VSD MAPCAs).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Since then, Ollie has spent much of his first year in and out of hospital. But despite everything he's been through, he is the happiest, cheekiest little boy. He loves bubbles, ducks, and making everyone around him laugh.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ollie is my only child. He is my whole world.
                And he deserves the chance to grow up, to go to school, make friends, and live the full life every child should have.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Stanford?</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ollie's condition is life-limiting without surgery. So far, three major hospitals in the UK and more across Europe have told us the same devastating thing:
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 italic font-medium">
                "We can't operate."
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The only option offered here is palliative care, to make him comfortable, but not to save him.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                As his mum, I can't and won't accept that as his only future.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                That's when we found Stanford Children's Hospital in California. The world's leading centres for Ollie's exact condition.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Stanford have reviewed Ollie's case and offered us hope: they believe he is operable, and have accepted him for life-saving surgery.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">The Plan: Two Stages to Save His Life</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Stanford will begin with a pulmonary artery reconstruction, which is the most urgent step. Right now, Ollie's lung arteries are underdeveloped, making a full repair impossible. This surgery will improve blood flow to the lungs, helping his arteries grow strong enough over the next 6–9 months.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Once that happens, Ollie will be ready for stage two: the full repair.
                We're hopeful this second stage can be done back here in the UK.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                But it all depends on getting him to America first.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">The Challenge</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                This first stage of surgery can't be done in the UK, as the NHS simply doesn't have the expertise required.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The confirmed cost of treatment, recovery, and aftercare at Stanford is £1.5 million.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                It's an unimaginable figure for any parent.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We can't do this alone, but with your help, we just might be able to.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How You Can Help</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Every single donation, no matter how small, takes us one step closer to giving Ollie a future.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                And if you can't donate, please consider sharing his story. You never know who it might reach.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This is Ollie's chance not just to have a childhood, but to grow up.
                To laugh without limits.
                To live the full, bright life he deserves.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Thank you for standing with us.
                Thank you for believing in Ollie.
                And thank you for helping us give him the chance of life.
              </p>
            </div>

            {/* Photo Gallery */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'https://d2g8igdw686xgo.cloudfront.net/94175427_1756666304625871_r.jpg',
                  'https://d2g8igdw686xgo.cloudfront.net/94175427_175666631041744_r.jpg',
                  'https://d2g8igdw686xgo.cloudfront.net/94175427_175666631684069_r.jpg',
                  'https://d2g8igdw686xgo.cloudfront.net/94175427_1757096449433602_r.jpeg',
                  'https://d2g8igdw686xgo.cloudfront.net/94175427_1758471538700737_r.jpeg'
                ].map((imageUrl, index) => (
                  <div key={index} className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src={imageUrl}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Show your support for this GoFundMe</h3>
              <p className="text-gray-700 leading-relaxed">
                Every donation brings Ollie one step closer to the life-saving surgery he desperately needs. Your generosity and support mean the world to our family during this incredibly difficult time.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'updates' && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Updates</h2>
          <div className="border-b border-gray-200 pb-6 last:border-b-0">
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
              <span>3 days ago</span>
              <span>•</span>
              <span>Jasmin & Ollie</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Important Update: Revised Goal & Progress
            </h3>
            <div className="text-gray-700 space-y-4">
              <p>Hello everyone,</p>
              <p>
                Firstly, I just want to say a massive thank you to every single person who's donated, shared, or even just taken a moment to read Ollie's story. Your support has kept us going in ways I can't explain.
              </p>
              <p>I wanted to update you on something important:</p>
              <p>
                Originally, we were fundraising for £3 million to cover the full cost of Ollie's life-saving surgery abroad. But after recent conversations with doctors, there's a possibility that Alder Hey may be able to carry out the second stage of Ollie's surgery here in the UK.
              </p>
              <p>
                This is amazing news, because it means we can now focus on getting him to America for Stage One, which is the most urgent part.
              </p>
              <p>
                <strong>That brings our fundraising goal down to £1.5 million.</strong><br />
                Still a huge number, but now, it feels slightly more reachable.
              </p>
              <p>
                We're doing everything we can: handing out posters, running local events, contacting media, and of course, continuing to share Ollie's story here.
              </p>
              <p>
                Thank you for standing with us so far. We're not there yet, but we're a big step closer, and it's because of you.
              </p>
              <p>
                <em>With love and hope,<br />
                Jasmin & Ollie</em>
              </p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'donors' && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Donors (33)</h2>
          <div className="space-y-4">
            {[
              { name: 'Anonymous', amount: 250, time: '1h ago' },
              { name: 'Sarah Johnson', amount: 100, time: '2h ago' },
              { name: 'Mike Chen', amount: 500, time: '4h ago' },
              { name: 'Anonymous', amount: 50, time: '6h ago' },
              { name: 'Lisa Martinez', amount: 20, time: '8h ago' },
              { name: 'David Kim', amount: 100, time: '12h ago' },
              { name: 'Anonymous', amount: 10, time: '1 day ago' },
              { name: 'Maria Garcia', amount: 250, time: '1 day ago' },
              { name: 'John Smith', amount: 50, time: '1 day ago' },
              { name: 'Emma Wilson', amount: 100, time: '2 days ago' },
              { name: 'Anonymous', amount: 20, time: '2 days ago' },
              { name: 'Robert Brown', amount: 50, time: '2 days ago' },
              { name: 'Jennifer Davis', amount: 100, time: '3 days ago' },
              { name: 'Anonymous', amount: 10, time: '3 days ago' },
              { name: 'Michael Taylor', amount: 250, time: '3 days ago' },
              { name: 'Ashley Miller', amount: 20, time: '4 days ago' },
              { name: 'Christopher Lee', amount: 50, time: '4 days ago' },
              { name: 'Anonymous', amount: 100, time: '4 days ago' },
              { name: 'Jessica White', amount: 10, time: '5 days ago' },
              { name: 'Daniel Harris', amount: 50, time: '5 days ago' },
              { name: 'Amanda Clark', amount: 20, time: '5 days ago' },
              { name: 'Anonymous', amount: 100, time: '6 days ago' },
              { name: 'Ryan Lewis', amount: 50, time: '6 days ago' },
              { name: 'Michelle Robinson', amount: 10, time: '1 week ago' },
              { name: 'Kevin Walker', amount: 20, time: '1 week ago' },
              { name: 'Anonymous', amount: 50, time: '1 week ago' },
              { name: 'Laura Hall', amount: 100, time: '1 week ago' },
              { name: 'Steven Young', amount: 10, time: '1 week ago' },
              { name: 'Nicole King', amount: 20, time: '1 week ago' },
              { name: 'Anonymous', amount: 50, time: '1 week ago' },
              { name: 'Brian Wright', amount: 10, time: '2 weeks ago' },
              { name: 'Samantha Green', amount: 20, time: '2 weeks ago' },
              { name: 'Anonymous', amount: 10, time: '2 weeks ago' },
              { name: 'Thomas Adams', amount: 10, time: '2 weeks ago' },
            ].map((donor, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-semibold text-sm">
                    {donor.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-900">
                      {donor.name}
                    </h4>
                    <span className="text-gray-600 font-semibold">
                      ${donor.amount}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {donor.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
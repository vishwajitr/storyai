export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600">
            Choose the plan that fits your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Single Video */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Single Video
            </h3>
            <div className="mb-6">
              <span className="text-5xl font-bold text-gray-900">₹5,000</span>
              <span className="text-gray-600 ml-2">one-time</span>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">1 AI Reel (30 sec)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">One-time purchase</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Uses our AI influencer model</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">1 revision included</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">7–10 days delivery</span>
              </li>
            </ul>

            <a
              href="https://wa.me/919876543210?text=I%20want%20to%20start%20with%201%20video"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 px-6 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors text-center"
            >
              Start with 1 Video
            </a>
          </div>

          {/* Monthly Pack */}
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-2xl p-8 relative hover:shadow-2xl transition-shadow border-4 border-purple-400">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
              BEST VALUE
            </div>
            
            <h3 className="text-2xl font-bold mb-2">
              Monthly Pack
            </h3>
            <div className="mb-6">
              <span className="text-5xl font-bold">₹10,000</span>
              <span className="text-purple-100 ml-2">/ month</span>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>3 AI Reels (30 sec each)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Category-based AI influencer</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>1 revision per video</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>7–10 days delivery</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-semibold">Save ₹5,000 per month</span>
              </li>
            </ul>

            <a
              href="https://wa.me/919876543210?text=I%20want%20the%20monthly%20pack%20with%203%20videos"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 px-6 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-center"
            >
              Get 3 Videos
            </a>
          </div>
        </div>

        <p className="text-center text-gray-600 mt-8">
          All prices in Indian Rupees (₹). No hidden charges.
        </p>
      </div>
    </section>
  );
}

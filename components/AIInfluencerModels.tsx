export default function AIInfluencerModels() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            AI Influencer Models
          </h2>
          <p className="text-lg text-gray-600">
            Category-based AI influencers for your brand
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            How We Select Your AI Influencer
          </h3>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white font-semibold">
                F
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Female AI Influencer</h4>
                <p className="text-gray-700">For women-focused products like beauty, salon, cosmetics, jewelry, fashion</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-semibold">
                M
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Male AI Influencer</h4>
                <p className="text-gray-700">For men-focused products like fitness, clothing, grooming, tech</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Standard Plans:</span> We maintain 2–3 fixed AI influencer models selected based on your product category
            </p>
          </div>
        </div>

        <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 md:p-8">
          <div className="flex items-start gap-4">
            <svg className="w-8 h-8 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Want Your Own Exclusive AI Influencer?
              </h4>
              <p className="text-gray-700 mb-3">
                Create a custom AI influencer exclusively for your brand. Perfect for consistent brand identity across all your content.
              </p>
              <p className="text-gray-900 font-semibold">
                Pricing discussed separately
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

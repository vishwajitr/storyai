export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Share your product details',
      description: 'Tell us about your product, brand, and target audience'
    },
    {
      number: 2,
      title: 'We create AI influencer Reels',
      description: 'Our team produces professional 30-second videos with AI influencers'
    },
    {
      number: 3,
      title: 'You post and grow on Instagram',
      description: 'Receive ready-to-post videos and watch your engagement soar'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Get your AI Reels in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 text-white text-2xl font-bold rounded-full mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

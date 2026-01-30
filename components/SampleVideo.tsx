export default function SampleVideo() {
  return (
    <section id="sample-video" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            See AI Reels in Action
          </h2>
          <p className="text-lg text-gray-600">
            This is how your product can look in an AI influencer Reel
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="aspect-[9/16] max-w-md mx-auto bg-black relative">
            <video
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
            >
              <source src="/sample_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="p-6 text-center">
            <p className="text-gray-700 mb-4">
              Want to see how your product will look with our AI influencer?
            </p>
            <a
              href="https://wa.me/919876543210?text=I%20want%20to%20see%20a%20sample%20video%20for%20my%20product"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
            >
              Request Sample Video
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useRef, useState } from 'react';

export default function SampleVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
        setShowControls(true);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
        setShowControls(false);
      }
    }
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  const handleMouseEnter = () => {
    setShowControls(true);
  };

  const handleMouseLeave = () => {
    if (isPlaying) {
      setShowControls(false);
    }
  };

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
          <div 
            className="aspect-[9/16] max-w-md mx-auto bg-black relative overflow-hidden cursor-pointer group"
            onClick={handleVideoClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="absolute inset-0 overflow-hidden">
              <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-[110%] object-cover"
                playsInline
                preload="metadata"
                style={{ transform: 'translateY(-5%)' }}
                onEnded={() => {
                  setIsPlaying(false);
                  setShowControls(true);
                }}
              >
                <source src="/sample_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Play/Pause Overlay */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'} ${isPlaying ? 'group-hover:opacity-100' : ''}`}>
              <button
                className="w-20 h-20 flex items-center justify-center rounded-full bg-white/90 hover:bg-white shadow-lg transform hover:scale-110 transition-all duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
              >
                {isPlaying ? (
                  <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                ) : (
                  <svg className="w-10 h-10 text-purple-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          <div className="p-6 text-center">
            <p className="text-gray-700 mb-4">
              Want to see how your product will look with our AI influencer?
            </p>
            <a
              href="https://wa.me/+919702270708?text=I%20want%20to%20see%20a%20sample%20video%20for%20my%20product"
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

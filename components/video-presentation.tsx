"use client"

import { useRef, useState } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

export function VideoPresentation() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#35C8F4]/10 blur-[120px] rounded-full z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
            Découvrez <span className="text-[#35C8F4]">Nos Locaux</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Plongez dans l'univers Ouzouri Car'Wash et découvrez comment nous prenons soin de votre véhicule.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative group aspect-video rounded-3xl overflow-hidden border border-gray-800 shadow-2xl shadow-[#35C8F4]/10 bg-gray-900">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src="/images/gallery/presentation.mp4"
              loop
              autoPlay
              muted={isMuted}
              playsInline
              onClick={togglePlay}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Overlay Controls */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              {!isPlaying && (
                <button
                  onClick={togglePlay}
                  className="w-20 h-20 flex items-center justify-center bg-[#35C8F4] rounded-full text-black hover:scale-110 transition-transform duration-300 shadow-xl shadow-[#35C8F4]/20"
                >
                  <Play className="w-8 h-8 fill-current ml-1" />
                </button>
              )}
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-center">
              <button onClick={togglePlay} className="text-white hover:text-[#35C8F4] transition-colors">
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </button>

              <button onClick={toggleMute} className="text-white hover:text-[#35C8F4] transition-colors">
                {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

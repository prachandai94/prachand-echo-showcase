import { Button } from "@/components/ui/button";
import { useState } from "react";
import AudioPlayer from "./AudioPlayer";

const HeroSection = () => {
  const [showAudioPlayer, setShowAudioPlayer] = useState(false);
  const [startAudio, setStartAudio] = useState(false);

  const handleExperienceEcho = () => {
    console.log('Experience Echo clicked');
    setShowAudioPlayer(true);
    // Small delay to ensure audio player is mounted before starting
    setTimeout(() => setStartAudio(true), 500);
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Audio Waves */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="audio-waves">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="wave-bar"
              style={{
                height: `${Math.random() * 60 + 20}px`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-32 w-6 h-6 bg-primary/50 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-primary rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />
      
      {/* Main Content */}
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <div className="mb-8 animate-fade-in-up">
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/5af2ab13-e35d-46fb-8104-4134e5cdcc13.png" 
              alt="Prachand Echo Logo" 
              className="h-32 md:h-48 w-auto"
            />
          </div>
        </div>
        
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            Where Sound Meets Perfection
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional audio production, mixing, and sound design that transforms your vision into sonic reality
          </p>
        </div>

        {/* Audio Visualizer */}
        <div className="mb-12 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="audio-waves">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="wave-bar" />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            variant="hero" 
            size="lg" 
            className="text-xl px-12 py-6 h-auto"
            onClick={handleExperienceEcho}
          >
            Experience Echo
          </Button>
        </div>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      
      {/* Audio Player */}
      <AudioPlayer 
        isVisible={showAudioPlayer}
        startPlaying={startAudio}
        onPlay={() => console.log('Audio playing')}
        onPause={() => console.log('Audio paused')}
      />
    </section>
  );
};

export default HeroSection;
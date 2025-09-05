import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";

interface AudioPlayerProps {
  isVisible: boolean;
  onPlay: () => void;
  onPause: () => void;
}

const AudioPlayer = ({ isVisible, onPlay, onPause }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        onPause();
      } else {
        audioRef.current.play();
        setIsPlaying(true);
        onPlay();
      }
    }
  };

  useEffect(() => {
    if (isVisible && audioRef.current && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
      onPlay();
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <audio
        ref={audioRef}
        loop
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      >
        {/* We'll use a placeholder audio for now since we can't directly access SoundCloud */}
        <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" type="audio/wav" />
      </audio>
      
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          variant="outline"
          size="icon"
          className="h-14 w-14 rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10 shadow-lg"
          onClick={togglePlayback}
        >
          {isPlaying ? (
            <Pause className="h-6 w-6 text-primary" />
          ) : (
            <Play className="h-6 w-6 text-primary" />
          )}
        </Button>
      </div>
    </>
  );
};

export default AudioPlayer;
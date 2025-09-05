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
  const [widget, setWidget] = useState<any>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (isVisible && !widget) {
      // Load SoundCloud Widget API
      const script = document.createElement('script');
      script.src = 'https://w.soundcloud.com/player/api.js';
      script.onload = () => {
        if (iframeRef.current && (window as any).SC) {
          const soundcloudWidget = (window as any).SC.Widget(iframeRef.current);
          setWidget(soundcloudWidget);
          
          soundcloudWidget.bind((window as any).SC.Widget.Events.READY, () => {
            soundcloudWidget.play();
            setIsPlaying(true);
            onPlay();
          });

          soundcloudWidget.bind((window as any).SC.Widget.Events.PLAY, () => {
            setIsPlaying(true);
            onPlay();
          });

          soundcloudWidget.bind((window as any).SC.Widget.Events.PAUSE, () => {
            setIsPlaying(false);
            onPause();
          });
        }
      };
      document.head.appendChild(script);
    }
  }, [isVisible]);

  const togglePlayback = () => {
    if (widget) {
      if (isPlaying) {
        widget.pause();
      } else {
        widget.play();
      }
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <iframe
        ref={iframeRef}
        width="0"
        height="0"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//on.soundcloud.com/4KUlZeQO8z9YbrxnPu&color=%23ff5500&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"
        style={{ opacity: 0, position: 'absolute', pointerEvents: 'none' }}
      />
      
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
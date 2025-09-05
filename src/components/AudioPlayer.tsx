import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";

interface AudioPlayerProps {
  isVisible: boolean;
  onPlay: () => void;
  onPause: () => void;
  startPlaying?: boolean;
}

const AudioPlayer = ({ isVisible, onPlay, onPause, startPlaying = false }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [widget, setWidget] = useState<any>(null);
  const [widgetReady, setWidgetReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pendingPlay, setPendingPlay] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (isVisible && !widget) {
      setIsLoading(true);
      setError(null);
      
      // Check if SoundCloud API is already loaded
      if ((window as any).SC) {
        initializeWidget();
        return;
      }
      
      // Load SoundCloud Widget API
      const script = document.createElement('script');
      script.src = 'https://w.soundcloud.com/player/api.js';
      script.onload = () => {
        console.log('SoundCloud API loaded');
        setTimeout(initializeWidget, 100); // Small delay to ensure iframe is ready
      };
      script.onerror = () => {
        console.error('Failed to load SoundCloud API');
        setError('Failed to load audio player');
        setIsLoading(false);
      };
      document.head.appendChild(script);
    }
  }, [isVisible]);

  // Handle play requests when widget becomes ready or startPlaying changes
  useEffect(() => {
    if (widget && widgetReady && startPlaying && !isPlaying) {
      console.log('Starting playback from startPlaying prop');
      widget.play();
      setPendingPlay(false);
    } else if (startPlaying && !widgetReady) {
      setPendingPlay(true);
    }
  }, [widget, widgetReady, startPlaying, isPlaying]);

  // Handle pending play requests when widget becomes ready
  useEffect(() => {
    if (widget && widgetReady && pendingPlay && !isPlaying) {
      console.log('Playing pending audio request');
      widget.play();
      setPendingPlay(false);
    }
  }, [widget, widgetReady, pendingPlay, isPlaying]);

  const initializeWidget = () => {
    if (iframeRef.current && (window as any).SC) {
      try {
        const soundcloudWidget = (window as any).SC.Widget(iframeRef.current);
        setWidget(soundcloudWidget);
        
        soundcloudWidget.bind((window as any).SC.Widget.Events.READY, () => {
          console.log('SoundCloud widget ready');
          setWidgetReady(true);
          setIsLoading(false);
          setError(null);
        });

        soundcloudWidget.bind((window as any).SC.Widget.Events.PLAY, () => {
          console.log('Audio started playing');
          setIsPlaying(true);
          onPlay();
        });

        soundcloudWidget.bind((window as any).SC.Widget.Events.PAUSE, () => {
          console.log('Audio paused');
          setIsPlaying(false);
          onPause();
        });

        soundcloudWidget.bind((window as any).SC.Widget.Events.FINISH, () => {
          console.log('Audio finished');
          setIsPlaying(false);
          onPause();
        });

        soundcloudWidget.bind((window as any).SC.Widget.Events.ERROR, () => {
          console.error('SoundCloud widget error');
          setError('Failed to load audio track');
          setIsLoading(false);
        });
      } catch (err) {
        console.error('Error initializing SoundCloud widget:', err);
        setError('Failed to initialize audio player');
        setIsLoading(false);
      }
    }
  };

  const togglePlayback = () => {
    if (!widget || !widgetReady) {
      console.warn('Widget not ready yet');
      setError('Audio player is still loading...');
      return;
    }
    
    try {
      if (isPlaying) {
        console.log('Pausing audio');
        widget.pause();
      } else {
        console.log('Playing audio');
        widget.play();
      }
    } catch (err) {
      console.error('Error toggling playback:', err);
      setError('Failed to control audio playback');
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
        src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/echostudiosradio/echo-studios-radio-show-april-2024&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"
        style={{ opacity: 0, position: 'absolute', pointerEvents: 'none' }}
      />
      
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          variant="outline"
          size="icon"
          className="h-14 w-14 rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10 shadow-lg"
          onClick={togglePlayback}
          disabled={isLoading || !!error || !widgetReady}
        >
          {isLoading ? (
            <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          ) : error ? (
            <div className="text-destructive text-xs">!</div>
          ) : isPlaying ? (
            <Pause className="h-6 w-6 text-primary" />
          ) : (
            <Play className="h-6 w-6 text-primary" />
          )}
        </Button>
        
        {error && (
          <div className="absolute bottom-16 right-0 bg-destructive text-destructive-foreground p-2 rounded text-xs whitespace-nowrap">
            {error}
            <br />
            <a 
              href="https://on.soundcloud.com/4KUlZeQO8z9YbrxnPu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline"
            >
              Listen on SoundCloud
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default AudioPlayer;
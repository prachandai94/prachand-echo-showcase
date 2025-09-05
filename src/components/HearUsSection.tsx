import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Play, Pause, Volume2 } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Epic Movie Soundtrack",
    category: "Film Scoring",
    description: "Composed and produced a cinematic orchestral score for a blockbuster action film, featuring 40-piece orchestra recordings and immersive sound design.",
    image: "/placeholder.svg",
    audioUrl: "#"
  },
  {
    id: 2,
    title: "Commercial Jingle",
    category: "Advertising",
    description: "Created a catchy, memorable jingle for a major brand campaign that increased brand recognition by 85% within three months of release.",
    image: "/placeholder.svg",
    audioUrl: "#"
  },
  {
    id: 3,
    title: "Podcast Series",
    category: "Audio Production",
    description: "Mixed and mastered a 12-episode true crime podcast series, implementing advanced noise reduction and dynamic audio processing techniques.",
    image: "/placeholder.svg",
    audioUrl: "#"
  },
  {
    id: 4,
    title: "Video Game OST",
    category: "Game Audio",
    description: "Developed an adaptive music system for an indie RPG game, featuring 20+ tracks that seamlessly blend based on player actions and story progression.",
    image: "/placeholder.svg",
    audioUrl: "#"
  },
  {
    id: 5,
    title: "Documentary Narration",
    category: "Voice Over",
    description: "Provided complete audio post-production for a nature documentary, including voice-over recording, ambient sound design, and music composition.",
    image: "/placeholder.svg",
    audioUrl: "#"
  },
  {
    id: 6,
    title: "Live Concert Recording",
    category: "Live Audio",
    description: "Captured and mixed a live symphony orchestra performance using 32-channel recording setup, preserving the natural acoustics of the venue.",
    image: "/placeholder.svg",
    audioUrl: "#"
  }
];

const HearUsSection = () => {
  const [selectedCase, setSelectedCase] = useState<typeof caseStudies[0] | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const openCaseStudy = (caseStudy: typeof caseStudies[0]) => {
    setSelectedCase(caseStudy);
  };

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
    // Here you would implement actual audio playback
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Hear <span className="text-primary">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of exceptional audio productions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="bg-card rounded-xl overflow-hidden border border-border hover-lift cursor-pointer group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openCaseStudy(study)}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Volume2 className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <div className="p-6">
                <div className="text-sm text-primary mb-2">{study.category}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {study.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {study.description.substring(0, 80)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <Dialog open={!!selectedCase} onOpenChange={() => setSelectedCase(null)}>
        <DialogContent className="max-w-2xl bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-foreground">
              {selectedCase?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedCase && (
            <div className="space-y-6">
              <div className="text-primary font-medium">{selectedCase.category}</div>
              
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                <Volume2 className="w-20 h-20 text-primary" />
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {selectedCase.description}
              </p>
              
              <div className="flex items-center gap-4">
                <Button
                  variant="audio"
                  size="lg"
                  onClick={toggleAudio}
                  className="flex items-center gap-2"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  {isPlaying ? "Pause" : "Play"} Audio
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HearUsSection;
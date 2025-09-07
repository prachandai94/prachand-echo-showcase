import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Play, Pause, Volume2 } from "lucide-react";
const caseStudies = [{
  id: 1,
  title: "Epic Movie Soundtrack",
  category: "Film Scoring",
  description: "Composed and produced a cinematic orchestral score for a blockbuster action film, featuring 40-piece orchestra recordings and immersive sound design.",
  image: "/placeholder.svg",
  audioUrl: "#"
}, {
  id: 2,
  title: "Commercial Jingle",
  category: "Advertising",
  description: "Created a catchy, memorable jingle for a major brand campaign that increased brand recognition by 85% within three months of release.",
  image: "/placeholder.svg",
  audioUrl: "#"
}, {
  id: 3,
  title: "Audiobook Series IP For Globocom & Tiara Digital",
  category: "Audio Production",
  description: "Prachand Echo collaborated with Globocom to power the launch of their new audio platform. Our team created and delivered over three original fictional audiobook series, designed to immerse listeners in cinematic storytelling purely through sound. From scripting and narration direction to recording, sound design, and mastering, we handled the entire production pipeline. The result was a set of rich, character-driven audio experiences that built strong engagement on the platform and set a new standard for quality in fictional audio entertainment. With additional series in development, this partnership highlights our expertise in combining narrative depth with technical precision, ensuring Globocom's platform establishes itself as a leader in the audiobook space.",
  image: "/lovable-uploads/5f05b60d-72d5-4596-bd33-3192dd2b9799.png",
  audioUrl: "#"
}, {
  id: 4,
  title: "Video Game OST",
  category: "Game Audio",
  description: "Developed an adaptive music system for an indie RPG game, featuring 20+ tracks that seamlessly blend based on player actions and story progression.",
  image: "/placeholder.svg",
  audioUrl: "#"
}, {
  id: 5,
  title: "Documentary Narration",
  category: "Voice Over",
  description: "Provided complete audio post-production for a nature documentary, including voice-over recording, ambient sound design, and music composition.",
  image: "/placeholder.svg",
  audioUrl: "#"
}, {
  id: 6,
  title: "Live Concert Recording",
  category: "Live Audio",
  description: "Captured and mixed a live symphony orchestra performance using 32-channel recording setup, preserving the natural acoustics of the venue.",
  image: "/placeholder.svg",
  audioUrl: "#"
}];
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
  return <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Hear <span className="text-primary">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Portfolio and Audio Samples</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => <div key={study.id} className="bg-card rounded-xl overflow-hidden border border-border hover-lift cursor-pointer group animate-fade-in-up" style={{
          animationDelay: `${index * 0.1}s`
        }} onClick={() => openCaseStudy(study)}>
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
            </div>)}
        </div>
      </div>

      {/* Case Study Modal */}
      <Dialog open={!!selectedCase} onOpenChange={() => setSelectedCase(null)}>
        <DialogContent className="max-w-3xl bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-foreground">
              {selectedCase?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedCase && <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="text-primary font-medium mb-4">{selectedCase.category}</div>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img 
                    src={selectedCase.image} 
                    alt={selectedCase.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:col-span-2 space-y-6">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {selectedCase.description}
                </p>
                
                <div className="flex items-center gap-4">
                  <Button variant="audio" size="lg" onClick={toggleAudio} className="flex items-center gap-2">
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    {isPlaying ? "Pause" : "Play"} Audio
                  </Button>
                </div>
              </div>
            </div>}
        </DialogContent>
      </Dialog>
    </section>;
};
export default HearUsSection;
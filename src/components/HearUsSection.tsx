import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const caseStudies = [{
  id: 1,
  title: "High Profile Web Series",
  category: "Web Series Sound Design & Mixing",
  description: "Prachand Echo has been entrusted with managing the mixing and sound design for a prestigious upcoming web series featuring Piyush Mishra, Tigmanshu Dhulia, and Anita Hassanandani. The scale of this project required us to build a sonic world that matched the cinematic ambition of the narrative and the stature of its cast. From balancing complex dialogue-heavy sequences to layering atmospheric soundscapes, our approach ensures that every performance resonates with emotional intensity while maintaining technical precision. Working with industry veterans demanded both sensitivity and innovation, and Prachand Echo rose to the challenge by creating a workflow that merges artistry with efficiency. This ongoing collaboration solidifies our reputation as a go-to partner for high profile productions that require world-class sound.",
  image: "/lovable-uploads/deebeb72-01ef-4848-8157-1c3d026b8b8e.png",
  hearNowUrl: "#"
}, {
  id: 2,
  title: "Let Us Live In - India's First Vertical Web Series",
  category: "Web Series Sound Design & Music",
  description: "Prachand Echo played a central role in shaping the sound of Let Us Live In, India's first vertical format web series. We managed the complete mixing process, balancing dialogues, ambient textures, and effects to enhance clarity while preserving emotional depth. Beyond mixing, we also composed and produced the original background score, giving the series its unique sonic identity. The score was crafted to match the narrative beats, shifting seamlessly from lighthearted intimacy to high tension drama, amplifying the impact of every scene. By combining meticulous technical precision with creative storytelling through music, Prachand Echo elevated the viewing experience and set a benchmark for vertical series sound design in India. This project showcased our dual expertise in mixing and music composition for new-age storytelling formats.",
  image: "/lovable-uploads/2acb0bb0-7737-4012-bb41-ab491ac9285a.png",
  hearNowUrl: "#"
}, {
  id: 3,
  title: "Audiobook Series IP For Globocom & Tiara Digital",
  category: "Audio Production",
  description: "Prachand Echo collaborated with Globocom to power the launch of their new audio platform. Our team created and delivered over three original fictional audiobook series, designed to immerse listeners in cinematic storytelling purely through sound. From scripting and narration direction to recording, sound design, and mastering, we handled the entire production pipeline. The result was a set of rich, character-driven audio experiences that built strong engagement on the platform and set a new standard for quality in fictional audio entertainment. With additional series in development, this partnership highlights our expertise in combining narrative depth with technical precision, ensuring Globocom's platform establishes itself as a leader in the audiobook space.",
  image: "/lovable-uploads/77679f78-3c21-45b5-8369-f6c8b509d5ee.png",
  hearNowUrl: "#"
}, {
  id: 4,
  title: "Echo 1000 Hours of Regional Dubbing",
  category: "Voice Over & Dubbing",
  description: "Prachand Echo has established itself as a trusted partner for large scale dubbing projects across India's diverse linguistic landscape. Our team has successfully completed over 1000 hours of dubbing in regional languages including Bengali, Telugu, and Kannada, with more work underway. Each project required careful voice casting, script adaptation, and precise lip sync to ensure cultural and emotional authenticity. By maintaining the integrity of the original content while tailoring it to resonate with regional audiences, we helped our clients scale their reach and expand to new markets. This case reflects our expertise in managing high volume dubbing operations while keeping uncompromising quality at the core of every delivery.",
  image: "/lovable-uploads/5f05b60d-72d5-4596-bd33-3192dd2b9799.png",
  hearNowUrl: "#"
}, {
  id: 5,
  title: "Hear Velvet x Echo Immersive Audiobook Experience",
  category: "3D Audio Production",
  description: "Prachand Echo collaborated with Hear Velvet, an audio-first company backed by actor Pankaj Tripathi, to create an original IP that redefined the listening experience. Our team designed a 3D sound environment using advanced ambisonics technology, enabling listeners to feel as though they were inside the world of the story. Every element, from character voices to environmental soundscapes, was engineered to move seamlessly in three-dimensional space, resulting in an audiobook that felt like cinema for the ears. The immersive production captivated audiences with its realism and emotional depth, setting a new benchmark for narrative audio. This project highlights our ability to push the boundaries of storytelling through cutting-edge sound design and creative innovation.",
  image: "/lovable-uploads/5541ddf0-87c7-48db-bd0c-f46c5ad4bb8b.png",
  hearNowUrl: "#"
}, {
  id: 6,
  title: "Reelsaga Micro Drama Dubbing Excellence",
  category: "Micro Drama Dubbing",
  description: "Prachand Echo collaborated with Reelsaga, a platform for micro drama, to achieve one of the most ambitious dubbing feats in the industry. We became known as experts in dubbing micro drama after adapting their entire content library from English into Hindi, Tamil, Telugu, and Kannada, series by series. This end to end process involved translation, voice casting, dubbing, mixing, and mastering while ensuring that every performance retained the nuance and impact of the original. By making their content accessible in multiple languages, we not only amplified Reelsaga's reach but also set a benchmark for scale and quality in short format dubbing. This case highlights our ability to deliver cultural authenticity and technical precision at high volumes without compromising storytelling.",
  image: "/lovable-uploads/f3a7dc2c-8c3c-4bc5-adf2-d2e186a9a149.png",
  hearNowUrl: "#"
}];

const HearUsSection = () => {
  const [selectedCase, setSelectedCase] = useState<typeof caseStudies[0] | null>(null);

  const openCaseStudy = (caseStudy: typeof caseStudies[0]) => {
    setSelectedCase(caseStudy);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Hear <span className="text-primary">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Portfolio and Audio Samples</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={study.id} 
              className="bg-card rounded-xl overflow-hidden border border-border hover-lift cursor-pointer group animate-fade-in-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openCaseStudy(study)}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
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
        <DialogContent className="max-w-3xl bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-foreground">
              {selectedCase?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedCase && (
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="text-primary font-medium mb-4">{selectedCase.category}</div>
                <div className="aspect-square rounded-lg overflow-hidden">
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
                
                <div className="flex justify-center">
                  <Button 
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => window.open(selectedCase.hearNowUrl, '_blank')}
                  >
                    🎧 Hear Now!
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HearUsSection;
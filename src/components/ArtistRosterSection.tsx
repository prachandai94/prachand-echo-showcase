import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const allArtists = [{
  name: "Sarah Johnson",
  role: "Lead Vocalist",
  specialty: "Jazz & Soul",
  image: "/placeholder.svg"
}, {
  name: "Marcus Chen",
  role: "Audio Engineer",
  specialty: "Electronic Music",
  image: "/placeholder.svg"
}, {
  name: "Elena Rodriguez",
  role: "Sound Designer",
  specialty: "Film & TV",
  image: "/placeholder.svg"
}, {
  name: "David Park",
  role: "Mixing Engineer",
  specialty: "Rock & Metal",
  image: "/placeholder.svg"
}, {
  name: "Aria Thompson",
  role: "Composer",
  specialty: "Orchestral",
  image: "/placeholder.svg"
}, {
  name: "James Wilson",
  role: "Mastering Engineer",
  specialty: "All Genres",
  image: "/placeholder.svg"
}];
const ArtistRosterSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const artistsPerPage = 3;
  const getCurrentArtists = () => {
    return allArtists.slice(currentIndex, currentIndex + artistsPerPage);
  };
  const nextSlide = () => {
    if (currentIndex + artistsPerPage < allArtists.length) {
      setCurrentIndex(currentIndex + artistsPerPage);
    }
  };
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - artistsPerPage);
    }
  };
  const canGoNext = currentIndex + artistsPerPage < allArtists.length;
  const canGoPrev = currentIndex > 0;
  return <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Artist <span className="text-primary">Roster</span>
          </h2>
          
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8">
            {getCurrentArtists().map((artist, index) => <div key={artist.name} className="bg-card rounded-xl p-6 border border-border hover-lift group animate-fade-in-up text-center" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full mx-auto flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">
                        {artist.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {artist.name}
                </h3>
                
                <div className="text-primary font-medium mb-2">
                  {artist.role}
                </div>
                
                <p className="text-muted-foreground text-sm">
                  {artist.specialty}
                </p>
              </div>)}
          </div>

          {/* Navigation Buttons */}
          {(canGoPrev || canGoNext) && <div className="flex justify-center items-center gap-4 mt-8">
              <Button variant="outline" size="icon" onClick={prevSlide} disabled={!canGoPrev} className="h-12 w-12">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <div className="flex gap-2">
                {Array.from({
              length: Math.ceil(allArtists.length / artistsPerPage)
            }).map((_, i) => <button key={i} onClick={() => setCurrentIndex(i * artistsPerPage)} className={`w-3 h-3 rounded-full transition-all duration-300 ${Math.floor(currentIndex / artistsPerPage) === i ? 'bg-primary' : 'bg-primary/30'}`} />)}
              </div>

              <Button variant="outline" size="icon" onClick={nextSlide} disabled={!canGoNext} className="h-12 w-12">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>}
        </div>
      </div>
    </section>;
};
export default ArtistRosterSection;
const artists = [
  {
    name: "Sarah Johnson",
    role: "Lead Vocalist",
    specialty: "Jazz & Soul",
    image: "/placeholder.svg"
  },
  {
    name: "Marcus Chen",
    role: "Audio Engineer",
    specialty: "Electronic Music",
    image: "/placeholder.svg"
  },
  {
    name: "Elena Rodriguez",
    role: "Sound Designer",
    specialty: "Film & TV",
    image: "/placeholder.svg"
  },
  {
    name: "David Park",
    role: "Mixing Engineer",
    specialty: "Rock & Metal",
    image: "/placeholder.svg"
  },
  {
    name: "Aria Thompson",
    role: "Composer",
    specialty: "Orchestral",
    image: "/placeholder.svg"
  },
  {
    name: "James Wilson",
    role: "Mastering Engineer",
    specialty: "All Genres",
    image: "/placeholder.svg"
  }
];

const ArtistRosterSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Artist <span className="text-primary">Roster</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the talented professionals behind every exceptional production
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <div
              key={artist.name}
              className="bg-card rounded-xl p-6 border border-border hover-lift group animate-fade-in-up text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistRosterSection;
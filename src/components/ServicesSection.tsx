import { Mic, Music, Volume2, Radio } from "lucide-react";

const services = [
  {
    icon: Mic,
    title: "Dubbing",
    description: "Professional voice-over recording and synchronization in English, Hindi, Tamil, Telugu, Malayalam, Bengali, Kannada, and Arabic for films, commercials, and multimedia content."
  },
  {
    icon: Radio,
    title: "Mixing & Mastering",
    description: "Expert audio mixing and mastering to achieve the perfect balance, clarity, and professional sound quality."
  },
  {
    icon: Music,
    title: "Background Music & Sound Design",
    description: "Custom-composed background scores, ambient music, creative sound effects, foley, and atmospheric audio design for immersive storytelling experiences."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive audio solutions crafted with precision and passion
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card rounded-xl p-8 border border-border hover-lift group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
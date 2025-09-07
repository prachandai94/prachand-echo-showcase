const AboutSection = () => {
  return <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-8">
            About <span className="text-primary">Us</span>
          </h2>
          
          <div className="bg-card rounded-2xl p-12 border border-border relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full translate-y-12 -translate-x-12" />
            
            <div className="relative z-10">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">Echo stands at the forefront of audio innovation, where technology meets artistic excellence. Our team of seasoned audio engineers and creative professionals transforms raw recordings into hit masterpieces.</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToForm = () => {
    const form = document.getElementById("hashtag-form");
    form?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero-gradient min-h-[80vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-brown mb-6">
          Create Your Perfect Wedding Hashtag
        </h1>
        <p className="text-xl md:text-2xl text-brown-light mb-8 max-w-2xl mx-auto">
          Looking for a clever and unique wedding hashtag? Our AI creates tailored hashtags
          that are as special as your relationship!
        </p>
        <Button
          onClick={scrollToForm}
          className="bg-gold hover:bg-gold/90 text-brown text-lg px-8 py-6"
        >
          Generate Your Hashtag
        </Button>
      </div>
    </div>
  );
};
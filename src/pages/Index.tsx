import { useState } from "react";
import { Hero } from "@/components/Hero";
import { HashtagForm, FormData } from "@/components/HashtagForm";
import { HashtagResults } from "@/components/HashtagResults";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleFormSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const mockHashtags = [
        `#${data.groomName}And${data.brideName}Forever`,
        `#${data.groomName}${data.brideName}Wedding2024`,
        `#${data.brideName}SaidYesTo${data.groomName}`,
      ];
      
      // Store the full list of hashtags in sessionStorage
      const fullHashtags = [
        ...mockHashtags,
        `#Together${data.groomName}${data.brideName}`,
        `#${data.groomName}${data.brideName}Love`,
        `#${data.brideName}And${data.groomName}TieTheKnot`,
        `#${data.groomName}And${data.brideName}GetHitched`,
        `#${data.brideName}${data.groomName}BigDay`,
        `#${data.groomName}${data.brideName}Wedding`,
        `#${data.brideName}Weds${data.groomName}`,
        `#${data.groomName}Takes${data.brideName}`,
        `#${data.brideName}And${data.groomName}Forever`,
        `#${data.groomName}${data.brideName}Love2024`,
        `#${data.brideName}${data.groomName}Celebration`,
        `#${data.groomName}${data.brideName}Party`,
        `#${data.brideName}And${data.groomName}Romance`,
        `#${data.groomName}${data.brideName}Special`,
        `#${data.brideName}${data.groomName}Forever`,
        `#${data.groomName}And${data.brideName}Union`,
        `#${data.brideName}${data.groomName}Together`,
        `#${data.groomName}${data.brideName}Happiness`,
        `#${data.brideName}And${data.groomName}Joy`,
        `#${data.groomName}${data.brideName}Memories`,
        `#${data.brideName}${data.groomName}Adventure`,
        `#${data.groomName}And${data.brideName}Story`,
        `#${data.brideName}${data.groomName}Chapter`,
        `#${data.groomName}${data.brideName}Beginning`,
        `#${data.brideName}And${data.groomName}Journey`,
        `#${data.groomName}${data.brideName}Paradise`,
        `#${data.brideName}${data.groomName}Dreams`,
      ];
      sessionStorage.setItem('fullHashtags', JSON.stringify(fullHashtags));
      setHashtags(mockHashtags);
      setShowResults(true);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate hashtags. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleUnlock = () => {
    navigate('/payment');
  };

  return (
    <div className="min-h-screen">
      <Hero />
      <HashtagForm onSubmit={handleFormSubmit} isLoading={isLoading} />
      {showResults && (
        <HashtagResults
          hashtags={hashtags}
          showAll={false}
          onUnlock={handleUnlock}
        />
      )}
    </div>
  );
};

export default Index;
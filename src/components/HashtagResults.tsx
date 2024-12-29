import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Check, Copy } from "lucide-react";

interface HashtagResultsProps {
  hashtags: string[];
  showAll?: boolean;
  onUnlock?: () => void;
}

export const HashtagResults = ({
  hashtags,
  showAll = false,
  onUnlock,
}: HashtagResultsProps) => {
  const { toast } = useToast();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const displayHashtags = showAll ? hashtags : hashtags.slice(0, 3);

  const copyToClipboard = async (hashtag: string, index: number) => {
    try {
      await navigator.clipboard.writeText(hashtag);
      setCopiedIndex(index);
      toast({
        title: "Copied!",
        description: "Hashtag copied to clipboard",
      });
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy hashtag",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-brown mb-8 text-center">
          Your Wedding Hashtags
        </h2>
        <div className="space-y-4">
          {displayHashtags.map((hashtag, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gold/20 hover:border-gold/40 transition-colors"
            >
              <span className="text-lg text-brown">{hashtag}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => copyToClipboard(hashtag, index)}
                className="text-gold hover:text-gold/80"
              >
                {copiedIndex === index ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <Copy className="h-5 w-5" />
                )}
              </Button>
            </div>
          ))}
        </div>

        {!showAll && onUnlock && (
          <div className="mt-12 text-center">
            <p className="text-brown-light mb-6">
              Love what you see? Unlock 27 more unique hashtags!
            </p>
            <Button
              onClick={onUnlock}
              className="bg-gold hover:bg-gold/90 text-brown px-8"
            >
              Unlock All Hashtags
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
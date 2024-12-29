import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashtagResults } from "@/components/HashtagResults";
import { Button } from "@/components/ui/button";

const Results = () => {
  const navigate = useNavigate();
  const [hashtags, setHashtags] = useState<string[]>([]);

  useEffect(() => {
    const storedHashtags = sessionStorage.getItem('fullHashtags');
    if (!storedHashtags) {
      navigate('/');
      return;
    }
    setHashtags(JSON.parse(storedHashtags));
  }, [navigate]);

  const handleStartOver = () => {
    sessionStorage.removeItem('fullHashtags');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-4xl mx-auto pt-8 px-4">
        <Button
          onClick={handleStartOver}
          className="mb-8 bg-gold hover:bg-gold/90 text-brown"
        >
          Generate New Hashtags
        </Button>
        <HashtagResults hashtags={hashtags} showAll={true} />
      </div>
    </div>
  );
};

export default Results;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Payment = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleMockPayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsProcessing(false);
    
    toast({
      title: "Payment Successful!",
      description: "You now have access to all hashtags.",
    });
    
    // Navigate to the results page
    navigate('/results');
  };

  return (
    <div className="min-h-screen bg-cream py-16 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-serif font-bold text-brown mb-6 text-center">
          Unlock All Hashtags
        </h2>
        <div className="space-y-6">
          <div className="text-center text-brown-light">
            <p className="mb-2">Get access to:</p>
            <ul className="space-y-2">
              <li>✨ 27 more unique hashtags</li>
              <li>✨ Copy-to-clipboard functionality</li>
              <li>✨ Instant access</li>
            </ul>
          </div>
          <div className="border-t border-gold/20 pt-6">
            <div className="text-center mb-6">
              <span className="text-2xl font-bold text-brown">$4.99</span>
              <span className="text-brown-light"> one-time payment</span>
            </div>
            <Button
              onClick={handleMockPayment}
              className="w-full bg-gold hover:bg-gold/90 text-brown"
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : "Pay Now"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";

export type FormData = {
  groomName: string;
  brideName: string;
  weddingDate: string;
  groomSurname?: string;
  brideSurname?: string;
  groomProfession?: string;
  brideProfession?: string;
};

interface HashtagFormProps {
  onSubmit: (data: FormData) => void;
  isLoading: boolean;
}

export const HashtagForm = ({ onSubmit, isLoading }: HashtagFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    groomName: "",
    brideName: "",
    weddingDate: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.groomName || !formData.brideName || !formData.weddingDate) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="form-gradient py-16 px-4" id="hashtag-form">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-brown mb-8 text-center">
          Tell Us About Your Special Day
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="groomName">Groom's First Name *</Label>
              <Input
                id="groomName"
                name="groomName"
                value={formData.groomName}
                onChange={handleChange}
                className="border-gold"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="brideName">Bride's First Name *</Label>
              <Input
                id="brideName"
                name="brideName"
                value={formData.brideName}
                onChange={handleChange}
                className="border-gold"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="weddingDate">Wedding Date *</Label>
            <Input
              id="weddingDate"
              name="weddingDate"
              type="date"
              value={formData.weddingDate}
              onChange={handleChange}
              className="border-gold"
              required
            />
          </div>

          <Accordion type="single" collapsible>
            <AccordionItem value="optional">
              <AccordionTrigger className="text-brown-light">
                Optional Details
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6 pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="groomSurname">Groom's Surname</Label>
                      <Input
                        id="groomSurname"
                        name="groomSurname"
                        value={formData.groomSurname}
                        onChange={handleChange}
                        className="border-gold"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="brideSurname">Bride's Surname</Label>
                      <Input
                        id="brideSurname"
                        name="brideSurname"
                        value={formData.brideSurname}
                        onChange={handleChange}
                        className="border-gold"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="groomProfession">Groom's Profession</Label>
                      <Input
                        id="groomProfession"
                        name="groomProfession"
                        value={formData.groomProfession}
                        onChange={handleChange}
                        className="border-gold"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="brideProfession">Bride's Profession</Label>
                      <Input
                        id="brideProfession"
                        name="brideProfession"
                        value={formData.brideProfession}
                        onChange={handleChange}
                        className="border-gold"
                      />
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Button
            type="submit"
            className="w-full bg-gold hover:bg-gold/90 text-brown"
            disabled={isLoading}
          >
            {isLoading ? "Generating Hashtags..." : "Generate Hashtags"}
          </Button>
        </form>
      </div>
    </div>
  );
};
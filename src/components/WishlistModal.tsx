import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WishlistModal({ isOpen, onClose }: WishlistModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Welcome to the waitlist! 🎉",
      description: "You'll be the first to know when DRIPPR AI Stylist launches.",
    });

    setIsLoading(false);
    setName("");
    setEmail("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="card-minimal border-primary/20 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Join the Waitlist
          </DialogTitle>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 hover:bg-muted rounded-full transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border-border focus:border-primary bg-background"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-border focus:border-primary bg-background"
            />
          </div>
          
          <Button
            type="submit"
            variant="cta"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Joining..." : "Join Waitlist"}
          </Button>
          
          <p className="text-xs text-muted-foreground text-center">
            We'll never spam you. Just updates on the AI Stylist launch.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
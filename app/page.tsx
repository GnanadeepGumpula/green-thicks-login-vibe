// Home/Index Page
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();

  const handleSignInClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toast({
      title: "Not Available",
      description: "We are not taking orders now. We will start our business very soon. Please come back again.",
    });
  };

  const handleCreateAccountClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toast({
      title: "Not Available",
      description: "We are not taking new users now. We will take new users very soon. Please come back again.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-greenthicks-light/10 p-6">
      <div className="mb-8 animate-float">
        <img
          src="/lovable-uploads/d07e0a90-7060-4a20-a861-24c1b507ed99.png"
          alt="GreenThicks Logo"
          className="h-32 sm:h-40 md:h-48"
        />
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gradient mb-4 text-center">
        GreenThicks
      </h1>
      <p className="text-xl text-greenthicks-dark mb-8 text-center max-w-lg">
        Fresh from farm to table. Experience our sustainable produce with just a click.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          className="bg-greenthicks text-white px-8 py-6 text-lg opacity-50 cursor-not-allowed"
          onClick={handleSignInClick}
          disabled
        >
          Sign In
        </Button>
        <Button
          variant="outline"
          className="border-greenthicks text-greenthicks px-8 py-6 text-lg opacity-50 cursor-not-allowed"
          onClick={handleCreateAccountClick}
          disabled
        >
          Create Account
        </Button>
      </div>

      <div className="mt-16 text-sm text-muted-foreground text-center">
        <p>
          FRESH FROM FARM TO TABLE
        </p>
      </div>
    </div>
  );
}

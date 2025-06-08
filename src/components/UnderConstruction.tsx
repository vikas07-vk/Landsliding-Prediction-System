
import { Construction } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 text-center">
      <Construction className="h-24 w-24 text-amber-500 mb-6" />
      <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4">Under Construction</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 max-w-md mb-8">
        We're currently working on this page. Please check back soon for updates.
      </p>
      <Button asChild size="lg">
        <Link to="/">Return to Home</Link>
      </Button>
    </div>
  );
};

export default UnderConstruction;


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import LandslideInfo from "@/components/LandslideInfo";
import { Calendar } from "lucide-react";

const Information = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-8 rounded-xl mb-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-2">Landslide Information</h1>
        <p className="text-lg opacity-90">Learn about landslide causes, effects and prevention</p>
        <div className="flex items-center mt-3 bg-white/20 w-fit px-3 py-1 rounded-full">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm font-medium">Updated with 2024 insights</span>
        </div>
      </div>
      
      <Card className="border-2 border-purple-100 dark:border-purple-900 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-white dark:from-purple-900/30 dark:to-gray-900 border-b border-purple-100 dark:border-purple-900">
          <CardTitle className="text-purple-700 dark:text-purple-400">Landslide Information</CardTitle>
          <CardDescription>Learn about landslide causes, effects and prevention</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <LandslideInfo />
        </CardContent>
      </Card>
    </div>
  );
};

export default Information;


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import LandslideMap from "@/components/LandslideMap";
import { Calendar } from "lucide-react";

const RiskMap = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-8 rounded-xl mb-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-2">Landslide Risk Map</h1>
        <p className="text-lg opacity-90">Interactive map of landslide-prone areas in India with historical events</p>
        <div className="flex items-center mt-3 bg-white/20 w-fit px-3 py-1 rounded-full">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm font-medium">Updated with 2024 data</span>
        </div>
      </div>
      
      <Card className="border-2 border-green-100 dark:border-green-900 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-green-50 to-white dark:from-green-900/30 dark:to-gray-900 border-b border-green-100 dark:border-green-900">
          <CardTitle className="text-green-700 dark:text-green-400">Landslide Risk Map</CardTitle>
          <CardDescription>Interactive map of landslide-prone areas in India</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <LandslideMap />
        </CardContent>
      </Card>
    </div>
  );
};

export default RiskMap;

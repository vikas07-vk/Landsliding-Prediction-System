
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PredictionForm from "@/components/PredictionForm";

const Predict = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white p-8 rounded-xl mb-8 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-md">Landslide Risk Prediction</h1>
        <p className="text-lg md:text-xl opacity-90">Enter parameters to predict landslide risk for a specific location</p>
      </div>
      
      <Card className="border-2 border-amber-100 dark:border-amber-900 shadow-lg overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-amber-50 to-white dark:from-amber-900/30 dark:to-gray-900 border-b border-amber-100 dark:border-amber-900">
          <CardTitle className="text-amber-700 dark:text-amber-400 text-2xl">Predict Landslide Risk</CardTitle>
          <CardDescription className="text-amber-600 dark:text-amber-500">Enter parameters to predict landslide risk for a specific location</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <PredictionForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default Predict;

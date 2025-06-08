
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const PredictionForm = () => {
  const [location, setLocation] = useState("");
  const [rainfall, setRainfall] = useState(100);
  const [slope, setSlope] = useState(25);
  const [soilType, setSoilType] = useState("clay");
  const [vegetation, setVegetation] = useState(40);
  const [elevation, setElevation] = useState(750);
  const [soilMoisture, setSoilMoisture] = useState(60);
  const [deforestation, setDeforestation] = useState(30);
  const [seismicActivity, setSeismicActivity] = useState(15);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call/prediction calculation
    setTimeout(() => {
      // Simple predictive algorithm (this would be replaced by actual ML model)
      const rainfallFactor = rainfall / 200; // Normalized to 0-1 range assuming 200mm is high
      const slopeFactor = slope / 45; // Normalized to 0-1 range assuming 45 degrees is max
      const vegetationFactor = 1 - (vegetation / 100); // Inverse (less vegetation = higher risk)
      const soilFactor = { 
        clay: 0.8, 
        loam: 0.5, 
        rocky: 0.3, 
        sandy: 0.6 
      }[soilType];
      const elevationFactor = Math.min(elevation / 2000, 1); // Normalized with cap at 2000m
      const moistureFactor = soilMoisture / 100;
      const deforestationFactor = deforestation / 100;
      const seismicFactor = seismicActivity / 100;

      // Calculate risk probability (simple weighted average)
      const riskProbability = (
        rainfallFactor * 0.25 + 
        slopeFactor * 0.2 + 
        vegetationFactor * 0.15 + 
        soilFactor * 0.1 + 
        elevationFactor * 0.1 +
        moistureFactor * 0.1 +
        deforestationFactor * 0.05 +
        seismicFactor * 0.05
      ) * 100;

      // Determine risk level
      let riskLevel;
      if (riskProbability < 30) riskLevel = "Low";
      else if (riskProbability < 60) riskLevel = "Moderate";
      else if (riskProbability < 80) riskLevel = "High";
      else riskLevel = "Very High";

      // Determine contributing factors (top 3)
      const factors = [
        { name: "Heavy Rainfall", value: rainfallFactor, contribution: rainfallFactor * 0.25 * 100 },
        { name: "Steep Slope", value: slopeFactor, contribution: slopeFactor * 0.2 * 100 },
        { name: "Low Vegetation Cover", value: vegetationFactor, contribution: vegetationFactor * 0.15 * 100 },
        { name: "Unstable Soil Type", value: soilFactor, contribution: soilFactor * 0.1 * 100 },
        { name: "High Elevation", value: elevationFactor, contribution: elevationFactor * 0.1 * 100 },
      ].sort((a, b) => b.value - a.value);

      const primaryFactors = factors.slice(0, 3).map(f => f.name);

      // Create graph data
      const graphData = factors.sort((a, b) => b.contribution - a.contribution).map(factor => ({
        name: factor.name,
        value: factor.contribution.toFixed(1)
      }));

      // Create risk prevention measures based on primary factors
      const preventionMeasures = [];
      
      if (primaryFactors.includes("Heavy Rainfall")) {
        preventionMeasures.push("Implement proper drainage systems to manage water runoff");
        preventionMeasures.push("Monitor rainfall patterns and establish early warning systems");
      }
      
      if (primaryFactors.includes("Steep Slope")) {
        preventionMeasures.push("Construct retaining walls and terracing on steep slopes");
        preventionMeasures.push("Avoid building on very steep or unstable slopes");
      }
      
      if (primaryFactors.includes("Low Vegetation Cover")) {
        preventionMeasures.push("Implement reforestation and vegetation restoration programs");
        preventionMeasures.push("Preserve existing vegetation, especially on slopes");
      }
      
      if (primaryFactors.includes("Unstable Soil Type")) {
        preventionMeasures.push("Implement soil stabilization techniques");
        preventionMeasures.push("Consider soil reinforcement for critical areas");
      }
      
      if (primaryFactors.includes("High Elevation")) {
        preventionMeasures.push("Regular monitoring of high-elevation zones");
        preventionMeasures.push("Establish buffer zones in high-risk elevation areas");
      }
      

      setResult({
        location,
        riskPercentage: riskProbability.toFixed(1),
        riskLevel,
        primaryFactors,
        graphData,
        preventionMeasures: preventionMeasures.slice(0, 5) // Limit to 5 measures
      });

      setLoading(false);
      toast({
        title: "Prediction Complete",
        description: "The landslide risk assessment has been calculated.",
      });
    }, 1500);
  };

  const getRiskClass = (level) => {
    const classes = {
      "Low": "bg-green-100 border-green-300 text-green-800",
      "Moderate": "bg-yellow-100 border-yellow-300 text-yellow-800",
      "High": "bg-orange-100 border-orange-300 text-orange-800",
      "Very High": "bg-red-100 border-red-300 text-red-800"
    };
    return classes[level] || "";
  };

  const getRiskColor = (level) => {
    const colors = {
      "Low": "#22c55e", // green-500
      "Moderate": "#eab308", // yellow-500
      "High": "#f97316", // orange-500
      "Very High": "#ef4444" // red-500
    };
    return colors[level] || "#22c55e";
  };

  const handleRainfallChange = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 500) {
      setRainfall(value);
    }
  };

  const handleSlopeChange = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 45) {
      setSlope(value);
    }
  };

  const handleVegetationChange = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 100) {
      setVegetation(value);
    }
  };

  const handleElevationChange = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 3000) {
      setElevation(value);
    }
  };


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="location" className="text-amber-700 dark:text-amber-400 font-medium">Location Name</Label>
             <Input 
               id="location" 
               placeholder="e.g. Shimla, Himachal Pradesh" 
               value={location}
               onChange={(e) => setLocation(e.target.value)}
               className="border-amber-200 hover:border-amber-300 focus:border-amber-400"
               required
          />
          </div>

          <div className="space-y-2 bg-gradient-to-r from-amber-50 to-white dark:from-amber-900/30 dark:to-gray-900 p-4 rounded-lg border border-amber-100 dark:border-amber-800">
            <Label htmlFor="rainfall" className="text-amber-700 dark:text-amber-400 font-medium">Monthly Rainfall (mm)</Label>
            <div className="flex gap-4 items-center">
              <div className="flex-grow">
                <Slider 
                  id="rainfall" 
                  min={0} 
                  max={500} 
                  step={5}
                  className="cursor-pointer"
                  value={[rainfall]} 
                  onValueChange={(value) => setRainfall(value[0])} 
                />
              </div>
              <div className="w-20">
                <Input 
                  type="number" 
                  min={0}
                  max={500}
                  value={rainfall} 
                  onChange={handleRainfallChange}
                  className="text-center bg-white dark:bg-gray-800 border-amber-200"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2 bg-gradient-to-r from-amber-50 to-white dark:from-amber-900/30 dark:to-gray-900 p-4 rounded-lg border border-amber-100 dark:border-amber-800">
            <Label htmlFor="slope" className="text-amber-700 dark:text-amber-400 font-medium">Slope Angle (degrees)</Label>
            <div className="flex gap-4 items-center">
              <div className="flex-grow">
                <Slider 
                  id="slope" 
                  min={0} 
                  max={45} 
                  step={1} 
                  className="cursor-pointer"
                  value={[slope]} 
                  onValueChange={(value) => setSlope(value[0])} 
                />
              </div>
              <div className="w-20">
                <Input 
                  type="number" 
                  min={0}
                  max={45}
                  value={slope} 
                  onChange={handleSlopeChange}
                  className="text-center bg-white dark:bg-gray-800 border-amber-200"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="soil-type" className="text-amber-700 dark:text-amber-400 font-medium">Soil Type</Label>
            <Select value={soilType} onValueChange={setSoilType}>
              <SelectTrigger className="border-amber-200 hover:border-amber-300 focus:border-amber-400 bg-white dark:bg-gray-800">
                <SelectValue placeholder="Select soil type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="clay">Clay</SelectItem>
                <SelectItem value="loam">Loam</SelectItem>
                <SelectItem value="rocky">Rocky</SelectItem>
                <SelectItem value="sandy">Sandy</SelectItem>
                <SelectItem value="sandy">Cohesive</SelectItem>

              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2 bg-gradient-to-r from-amber-50 to-white dark:from-amber-900/30 dark:to-gray-900 p-4 rounded-lg border border-amber-100 dark:border-amber-800">
            <Label htmlFor="vegetation" className="text-amber-700 dark:text-amber-400 font-medium">Vegetation Cover (%)</Label>
            <div className="flex gap-4 items-center">
              <div className="flex-grow">
                <Slider 
                   id="vegetation" 
                   min={0} 
                   max={100} 
                   step={5}
                   className="cursor-pointer" 
                   value={[vegetation]} 
                   onValueChange={(value) => setVegetation(value[0])} 
                />
              </div>
              <div className="w-20">
                <Input 
                  type="number" 
                  min={0}
                  max={100}
                  value={vegetation} 
                  onChange={handleVegetationChange}
                  className="text-center bg-white dark:bg-gray-800 border-amber-200"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2 bg-gradient-to-r from-amber-50 to-white dark:from-amber-900/30 dark:to-gray-900 p-4 rounded-lg border border-amber-100 dark:border-amber-800">
            <Label htmlFor="elevation" className="text-amber-700 dark:text-amber-400 font-medium">Elevation (meters)</Label>
            <div className="flex gap-4 items-center">
              <div className="flex-grow">
                <Slider 
                  id="elevation" 
                  min={0} 
                  max={3000} 
                  step={50}
                  className="cursor-pointer" 
                  value={[elevation]} 
                  onValueChange={(value) => setElevation(value[0])} 
                />
              </div>
              <div className="w-20">
                <Input 
                  type="number" 
                  min={0}
                  max={3000}
                  value={elevation} 
                  onChange={handleElevationChange}
                  className="text-center bg-white dark:bg-gray-800 border-amber-200"
                />
              </div>
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-lg py-6" 
            disabled={loading || !location}
          >
            {loading ? "Calculating..." : "Predict Landslide Risk"}
          </Button>
        </form>
      </div>

      <div>
        {result ? (
          <Card className={`border-2 shadow-lg ${getRiskClass(result.riskLevel)}`}>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">
                Risk Assessment for {result.location}
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Risk Level</p>
                  <p className="text-2xl font-bold">{result.riskLevel}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Risk Probability</p>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div 
                      className={`h-4 rounded-full ${
                        result.riskLevel === "Low" ? "bg-green-500" :
                        result.riskLevel === "Moderate" ? "bg-yellow-500" :
                        result.riskLevel === "High" ? "bg-orange-500" : "bg-red-500"
                      }`}
                      style={{ width: `${result.riskPercentage}%` }}
                    ></div>
                  </div>
                  <p className="mt-1 text-sm">{result.riskPercentage}% chance of landslide occurrence</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-2">Primary Contributing Factors</p>
                  <ul className="list-disc list-inside">
                    {result.primaryFactors.map((factor, index) => (
                      <li key={index} className="text-md">{factor}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-3">Risk Factor Analysis</p>
                  <div className="h-72 w-full">
                    <ChartContainer
                      config={{
                        area: {
                          theme: { light: getRiskColor(result.riskLevel), dark: getRiskColor(result.riskLevel) },
                        },
                        line: {
                          theme: { light: getRiskColor(result.riskLevel), dark: getRiskColor(result.riskLevel) },
                        },
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                          data={result.graphData}
                          margin={{ top: 5, right: 20, left: 0, bottom: 25 }}
                        >
                          <defs>
                            <linearGradient id="riskFillGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor={getRiskColor(result.riskLevel)} stopOpacity={0.7} />
                              <stop offset="100%" stopColor={getRiskColor(result.riskLevel)} stopOpacity={0.05} />
                            </linearGradient>
                          </defs>
                          <XAxis 
                            dataKey="name" 
                            angle={-45}
                            textAnchor="end"
                            height={70}
                            tick={{fontSize: 11}}
                          />
                          <YAxis label={{ value: 'Contribution to Risk (%)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } }} />
                          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                          <Tooltip content={<ChartTooltipContent />} />
                          <Area 
                            type="monotone" 
                            dataKey="value" 
                            stroke={getRiskColor(result.riskLevel)} 
                            fillOpacity={1} 
                            fill="url(#riskFillGradient)" 
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-2">Prevention Measures</p>
                  <ul className="list-disc list-inside">
                    {result.preventionMeasures.map((measure, index) => (
                      <li key={index} className="text-md mb-1">{measure}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Recommendation</p>
                  <p className="text-md">
                    {result.riskLevel === "Low" 
                      ? "Standard monitoring is sufficient."
                      : result.riskLevel === "Moderate"
                      ? "Regular monitoring recommended. Implement basic preventive measures."
                      : result.riskLevel === "High"
                      ? "Close monitoring required. Consider evacuation plans during heavy rainfall."
                      : "Immediate action needed. Evacuation recommended during monsoon periods."
                    }
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="flex flex-col items-center justify-center h-full border-2 border-dashed border-amber-300 rounded-lg p-6 space-y-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-gray-900">
            <div className="text-5xl text-amber-400">📊</div>
            <h3 className="text-lg font-medium text-amber-700">Enter parameters to see prediction</h3>
            <p className="text-sm text-amber-600 text-center">
              Fill out the form with location details and environmental factors to generate a landslide risk assessment
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PredictionForm;


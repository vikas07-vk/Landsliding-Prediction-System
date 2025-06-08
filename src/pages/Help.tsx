
import { Calculator, Layers, BarChart, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Help = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 dark:text-green-400 mb-4">
            How to Use EarthSense
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Learn how to calculate and interpret landslide risk values for effective monitoring and prevention
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-6 w-6 text-blue-600" />
                <span>Data Collection</span>
              </CardTitle>
              <CardDescription>Understanding the required measurements</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full h-6 w-6 flex items-center justify-center text-blue-700 dark:text-blue-400 flex-shrink-0">1</div>
                  <p><strong>Rainfall Data:</strong> Collect daily rainfall data in millimeters from local weather stations or automated rain gauges in your area.</p>
                </li>
                <li className="flex gap-2">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full h-6 w-6 flex items-center justify-center text-blue-700 dark:text-blue-400 flex-shrink-0">2</div>
                  <p><strong>Soil Moisture:</strong> Measure soil moisture content using a soil moisture sensor at depths of 30cm, 60cm, and 90cm.</p>
                </li>
                <li className="flex gap-2">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full h-6 w-6 flex items-center justify-center text-blue-700 dark:text-blue-400 flex-shrink-0">3</div>
                  <p><strong>Slope Angle:</strong> Measure the slope angle in degrees using an inclinometer or slope measurement app.</p>
                </li>
                <li className="flex gap-2">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full h-6 w-6 flex items-center justify-center text-blue-700 dark:text-blue-400 flex-shrink-0">4</div>
                  <p><strong>Vegetation Cover:</strong> Estimate vegetation cover percentage in the area (0-100%).</p>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="h-6 w-6 text-green-600" />
                <span>Risk Calculation</span>
              </CardTitle>
              <CardDescription>Calculating the landslide risk index</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="font-medium">The landslide risk index (LRI) is calculated using this formula:</p>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
                  <p className="text-center font-mono">LRI = (0.4 × R) + (0.3 × S) + (0.2 × A) + (0.1 × (100 - V))</p>
                </div>
                <p>Where:</p>
                <ul className="space-y-2 pl-6 list-disc">
                  <li><strong>R</strong> = Normalized 5-day cumulative rainfall (scale 0-100)</li>
                  <li><strong>S</strong> = Normalized soil moisture (scale 0-100)</li>
                  <li><strong>A</strong> = Normalized slope angle (scale 0-100)</li>
                  <li><strong>V</strong> = Vegetation cover percentage</li>
                </ul>
                <p>The resulting LRI will be a value between 0-100, where higher values indicate higher landslide risk.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-l-4 border-l-amber-500 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart className="h-6 w-6 text-amber-600" />
                <span>Interpreting Results</span>
              </CardTitle>
              <CardDescription>Understanding the risk levels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>The landslide risk index (LRI) can be interpreted using these thresholds:</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-green-500 rounded-full"></div>
                    <p><strong>0-25:</strong> Low Risk - Regular monitoring recommended</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-yellow-500 rounded-full"></div>
                    <p><strong>26-50:</strong> Moderate Risk - Increased monitoring and basic precautions</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-orange-500 rounded-full"></div>
                    <p><strong>51-75:</strong> High Risk - Prepare for possible evacuation and implement safeguards</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-red-500 rounded-full"></div>
                    <p><strong>76-100:</strong> Extreme Risk - Immediate evacuation recommended</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                <span>Warning Signs</span>
              </CardTitle>
              <CardDescription>Physical indicators of imminent landslides</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <div className="bg-red-100 dark:bg-red-900 rounded-full h-6 w-6 flex items-center justify-center text-red-700 dark:text-red-400 flex-shrink-0">!</div>
                  <p>New cracks or unusual bulges in the ground or street pavements</p>
                </li>
                <li className="flex gap-2">
                  <div className="bg-red-100 dark:bg-red-900 rounded-full h-6 w-6 flex items-center justify-center text-red-700 dark:text-red-400 flex-shrink-0">!</div>
                  <p>Soil moving away from foundations, and utilities beginning to tilt or shift</p>
                </li>
                <li className="flex gap-2">
                  <div className="bg-red-100 dark:bg-red-900 rounded-full h-6 w-6 flex items-center justify-center text-red-700 dark:text-red-400 flex-shrink-0">!</div>
                  <p>Sudden decrease or increase in water flow in streams or springs</p>
                </li>
                <li className="flex gap-2">
                  <div className="bg-red-100 dark:bg-red-900 rounded-full h-6 w-6 flex items-center justify-center text-red-700 dark:text-red-400 flex-shrink-0">!</div>
                  <p>Tilting trees, especially on slopes, or fences/walls beginning to tilt</p>
                </li>
                <li className="flex gap-2">
                  <div className="bg-red-100 dark:bg-red-900 rounded-full h-6 w-6 flex items-center justify-center text-red-700 dark:text-red-400 flex-shrink-0">!</div>
                  <p>Unusual sounds like trees cracking or boulders knocking together</p>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/30 rounded-md border border-red-200 dark:border-red-800">
                <p className="text-red-700 dark:text-red-400 font-medium">If you observe these warning signs, contact local authorities immediately and consider evacuation if safe to do so.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Help;


import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const LandslideInfo = () => {
  return (
    <Tabs defaultValue="causes" className="w-full">
      <TabsList className="grid grid-cols-4 mb-4">
        <TabsTrigger value="causes">Causes</TabsTrigger>
        <TabsTrigger value="effects">Effects</TabsTrigger>
        <TabsTrigger value="prevention">Prevention</TabsTrigger>
        <TabsTrigger value="faq">FAQ</TabsTrigger>
      </TabsList>
      
      <TabsContent value="causes">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4">Major Causes of Landslides in India</h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-blue-700 dark:text-blue-400">Natural Causes</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Heavy rainfall during monsoon seasons</li>
                    <li>Seismic activity and earthquakes</li>
                    <li>Natural erosion of slopes</li>
                    <li>Volcanic activity (rare in India)</li>
                    <li>River undercutting at base of slopes</li>
                  </ul>
                </div>
                
                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-amber-700 dark:text-amber-400">Human Activities</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Deforestation and vegetation removal</li>
                    <li>Improper construction on slopes</li>
                    <li>Mining activities disturbing stability</li>
                    <li>Road cutting in mountainous areas</li>
                    <li>Poor drainage systems increasing water saturation</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-green-700 dark:text-green-400">Geological Factors</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Weak or weathered materials</li>
                    <li>Fractured bedrock structures</li>
                    <li>Clay-rich soil properties</li>
                    <li>Contrast in permeability of layers</li>
                    <li>Steep slope angles (over 35°)</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Contributing Factors by Importance</h4>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div className="flex flex-col md:flex-row text-xs text-white text-center">
                    <div className="bg-blue-600 rounded-l-full px-2 py-1" style={{ width: "35%" }}>Rainfall (35%)</div>
                    <div className="bg-red-500 px-2 py-1" style={{ width: "25%" }}>Slope Angle (25%)</div>
                    <div className="bg-amber-500 px-2 py-1" style={{ width: "15%" }}>Human Activity (15%)</div>
                    <div className="bg-green-500 px-2 py-1" style={{ width: "15%" }}>Soil Type (15%)</div>
                    <div className="bg-purple-500 rounded-r-full px-2 py-1" style={{ width: "10%" }}>Elevation (10%)</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Regional Variations in Causes</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-left text-sm font-medium">Region</th>
                        <th className="px-4 py-2 text-left text-sm font-medium">Primary Cause</th>
                        <th className="px-4 py-2 text-left text-sm font-medium">Secondary Cause</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      <tr>
                        <td className="px-4 py-2 text-sm">Western Ghats</td>
                        <td className="px-4 py-2 text-sm">Heavy monsoon rainfall</td>
                        <td className="px-4 py-2 text-sm">Deforestation for agriculture</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm">Himalayas</td>
                        <td className="px-4 py-2 text-sm">Seismic activity</td>
                        <td className="px-4 py-2 text-sm">Road construction</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm">Northeast India</td>
                        <td className="px-4 py-2 text-sm">Excessive rainfall</td>
                        <td className="px-4 py-2 text-sm">Jhum cultivation</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm">Eastern Ghats</td>
                        <td className="px-4 py-2 text-sm">Mining activities</td>
                        <td className="px-4 py-2 text-sm">Seasonal rainfall</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="effects">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4">Effects of Landslides</h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Immediate Impacts</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Loss of human life and injuries</li>
                    <li>Destruction of buildings and infrastructure</li>
                    <li>Road blockages and transportation disruptions</li>
                    <li>Damage to power and communication lines</li>
                    <li>River blockage causing potential flash floods</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Long-term Consequences</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Economic losses from property damage</li>
                    <li>Decreased land value in affected areas</li>
                    <li>Loss of agricultural productivity</li>
                    <li>Population displacement</li>
                    <li>Ecosystem disruption and biodiversity loss</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Annual Impact in India</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                    <p className="text-xl font-bold text-red-600">200+</p>
                    <p className="text-sm text-gray-500">Annual Landslides</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                    <p className="text-xl font-bold text-red-600">250+</p>
                    <p className="text-sm text-gray-500">Lives Lost Yearly</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                    <p className="text-xl font-bold text-red-600">₹800+ Cr</p>
                    <p className="text-sm text-gray-500">Annual Economic Loss</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                    <p className="text-xl font-bold text-red-600">4,500+</p>
                    <p className="text-sm text-gray-500">People Affected</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Case Study: 2018 Kerala Landslides</h4>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="text-sm mb-2">
                    The August 2018 Kerala floods and subsequent landslides resulted in:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Over 400 landslides across the state</li>
                    <li>483 deaths and thousands displaced</li>
                    <li>₹40,000 crore (US$5.6 billion) in damage</li>
                    <li>Destruction of over 10,000 homes</li>
                    <li>Major environmental damage to the Western Ghats</li>
                  </ul>
                  <p className="text-sm mt-2">
                    Root causes included extreme rainfall (256% above normal) and human factors 
                    like deforestation, quarrying, and improper land use in ecologically sensitive areas.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="prevention">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4">Landslide Prevention & Mitigation</h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-green-700 dark:text-green-400">Engineering Solutions</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Retaining walls to support unstable slopes</li>
                    <li>Proper drainage systems to manage water flow</li>
                    <li>Soil nailing and ground anchoring</li>
                    <li>Surface protection with shotcrete or mesh systems</li>
                    <li>Terracing to reduce slope angles</li>
                    <li>Debris flow barriers in channels</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-blue-700 dark:text-blue-400">Environmental Approaches</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Reforestation and vegetation management</li>
                    <li>Bioengineering using plants with strong roots</li>
                    <li>Watershed management practices</li>
                    <li>Controlled land use and zoning</li>
                    <li>Protection of existing forests</li>
                    <li>Limiting agriculture on steep slopes</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Early Warning Systems</h4>
                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-3xl mb-2">📡</div>
                      <h5 className="font-medium text-sm mb-1">Monitoring</h5>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Rainfall sensors, soil moisture monitors, ground movement detectors</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-2">🔍</div>
                      <h5 className="font-medium text-sm mb-1">Analysis</h5>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Real-time data processing with threshold triggers</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-2">🚨</div>
                      <h5 className="font-medium text-sm mb-1">Alert</h5>
                      <p className="text-xs text-gray-600 dark:text-gray-400">SMS alerts, sirens, and community notification systems</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-2">🏃</div>
                      <h5 className="font-medium text-sm mb-1">Response</h5>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Evacuation plans and emergency response procedures</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Policy & Planning Measures</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Hazard mapping and risk assessment</li>
                  <li>Land use regulations in vulnerable areas</li>
                  <li>Building codes and construction standards</li>
                  <li>Public education and awareness campaigns</li>
                  <li>Emergency preparedness training</li>
                  <li>Integration of landslide risk in development planning</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Success Story: Munnar Landslide Prevention</h4>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="text-sm">
                    In Munnar, Kerala, a comprehensive landslide prevention project implemented in 2019-2021 has shown remarkable results:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm mt-2">
                    <li>60% reduction in landslide incidents despite heavy rainfall</li>
                    <li>Implementation of advanced soil stabilization techniques</li>
                    <li>Community-based early warning system with 95% coverage</li>
                    <li>Reforestation of 500+ hectares of degraded slopes</li>
                    <li>Training of local communities in disaster preparedness</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="faq">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium mb-1">What is the difference between a landslide and a mudslide?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  A landslide involves movement of a mass of rock, earth, or debris down a slope, while a mudslide is specifically a flowing mixture of water and soil or sediment. Mudslides typically contain at least 50% liquid and flow more like a viscous fluid.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium mb-1">How can I identify if my area is at risk for landslides?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Look for signs like cracks in the ground, unusual bulges at the base of slopes, tilting trees, sudden changes in creek water levels, or new springs emerging from hillsides. You can also check with local geological survey departments for hazard maps of your region.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium mb-1">What should I do during a landslide warning?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Stay alert and awake. Listen to emergency information. Be ready to evacuate quickly. If indoors, take cover under a sturdy piece of furniture. If outdoors, move away from the slide path to higher ground. Avoid river valleys and low-lying areas during heavy rainfall.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium mb-1">Which government agencies handle landslide management in India?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  The Geological Survey of India (GSI) is the primary agency for landslide studies. Other involved agencies include the National Disaster Management Authority (NDMA), Central Water Commission (CWC), and state disaster management authorities.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium mb-1">How accurate are landslide predictions?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Landslide predictions have improved significantly with modern technology. While specific timing is still challenging, researchers can identify high-risk zones with about 70-85% accuracy. Rainfall-triggered landslides have higher prediction accuracy than earthquake-induced ones.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium mb-1">How is climate change affecting landslide patterns in India?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Climate change is leading to more intense rainfall events in shorter periods, increasing landslide frequency. Studies show a 20-30% increase in landslide incidents in the Western Ghats and Himalayan regions over the past decade due to changing precipitation patterns.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium mb-1">Is insurance available for landslide damage?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Standard insurance policies in India typically do not cover landslide damage. However, specialized coverage may be available in high-risk areas through additional riders or specific natural disaster policies. The Pradhan Mantri Fasal Bima Yojana provides limited coverage for farmers affected by landslides.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default LandslideInfo;

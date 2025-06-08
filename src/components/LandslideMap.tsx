
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Map will be rendered using HTML and CSS since we don't have actual map integration
const LandslideMap = () => {
  const mapRef = useRef(null);
  const [activeRegion, setActiveRegion] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [activeYear, setActiveYear] = useState("2023");

  const highRiskRegions = [
    {
      id: 1,
      name: "Western Ghats",
      states: "Kerala, Tamil Nadu, Karnataka, Maharashtra",
      riskLevel: "Very High",
      color: "#ef4444",
      factors: "Heavy rainfall, deforestation, steep slopes",
      coordinates: { x: 28, y: 60, width: 8, height: 30 }
    },
    {
      id: 2,
      name: "Himalayan Region",
      states: "Himachal Pradesh, Uttarakhand, Sikkim",
      riskLevel: "Very High",
      color: "#ef4444",
      factors: "Seismic activity, steep terrain, high precipitation",
      coordinates: { x: 45, y: 15, width: 30, height: 10 }
    },
    {
      id: 3,
      name: "Northeast India",
      states: "Assam, Meghalaya, Mizoram, Tripura",
      riskLevel: "High",
      color: "#f97316",
      factors: "Heavy monsoon rainfall, deforestation",
      coordinates: { x: 75, y: 35, width: 15, height: 15 }
    },
    {
      id: 4,
      name: "Eastern Ghats",
      states: "Andhra Pradesh, Odisha",
      riskLevel: "Moderate",
      color: "#f59e0b",
      factors: "Seasonal rainfall, soil erosion",
      coordinates: { x: 55, y: 55, width: 10, height: 20 }
    },
    {
      id: 5,
      name: "Central India",
      states: "Madhya Pradesh, Chhattisgarh",
      riskLevel: "Low",
      color: "#84cc16",
      factors: "Mining activities, moderate slopes",
      coordinates: { x: 45, y: 45, width: 15, height: 15 }
    }
  ];

  // Historical landslide data by year
  const historicalData = {
    "2023": [
      { location: "Wayanad, Kerala", date: "2023-08-12", casualties: 48, cause: "Heavy monsoon rain", severity: "Severe" },
      { location: "Uttarakhand", date: "2023-07-30", casualties: 12, cause: "Cloudburst and slope failure", severity: "Moderate" },
      { location: "Shimla, Himachal Pradesh", date: "2023-08-14", casualties: 20, cause: "Excessive rainfall", severity: "Severe" },
      { location: "Darjeeling, West Bengal", date: "2023-06-15", casualties: 5, cause: "Construction on unstable slope", severity: "Minor" },
      { location: "Nilgiris, Tamil Nadu", date: "2023-07-05", casualties: 8, cause: "Soil erosion and heavy rain", severity: "Moderate" }
    ],
    "2022": [
      { location: "Manipur", date: "2022-07-02", casualties: 27, cause: "Heavy rainfall", severity: "Severe" },
      { location: "Kodagu, Karnataka", date: "2022-08-12", casualties: 6, cause: "Monsoon rains and slope failure", severity: "Moderate" },
      { location: "Itanagar, Arunachal Pradesh", date: "2022-09-16", casualties: 3, cause: "Excessive rainfall", severity: "Minor" },
      { location: "Sikkim", date: "2022-10-05", casualties: 9, cause: "Flash floods and landslides", severity: "Moderate" }
    ],
    "2021": [
      { location: "Mahad, Maharashtra", date: "2021-07-22", casualties: 36, cause: "Heavy rainfall and slope failure", severity: "Severe" },
      { location: "Kinnaur, Himachal Pradesh", date: "2021-08-11", casualties: 28, cause: "Rockfall triggered by rainfall", severity: "Severe" },
      { location: "Idukki, Kerala", date: "2021-07-31", casualties: 15, cause: "Monsoon rains", severity: "Moderate" },
      { location: "Uttarakhand", date: "2021-10-18", casualties: 52, cause: "Heavy rainfall", severity: "Catastrophic" }
    ],
    "2020": [
      { location: "Munnar, Kerala", date: "2020-08-07", casualties: 66, cause: "Heavy rainfall", severity: "Catastrophic" },
      { location: "Kodagu, Karnataka", date: "2020-08-06", casualties: 8, cause: "Monsoon rains", severity: "Moderate" },
      { location: "Uttarakhand", date: "2020-09-12", casualties: 17, cause: "Flash floods", severity: "Severe" }
    ],
    "2019": [
      { location: "Wayanad, Kerala", date: "2019-08-08", casualties: 59, cause: "Heavy rainfall", severity: "Catastrophic" },
      { location: "Malappuram, Kerala", date: "2019-08-09", casualties: 17, cause: "Monsoon rains", severity: "Severe" },
      { location: "Coorg, Karnataka", date: "2019-08-17", casualties: 12, cause: "Heavy rainfall", severity: "Moderate" }
    ]
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "Minor": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Moderate": return "bg-orange-100 text-orange-800 border-orange-200";
      case "Severe": return "bg-red-100 text-red-800 border-red-200";
      case "Catastrophic": return "bg-purple-100 text-purple-800 border-purple-200";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const handleRegionClick = (region) => {
    setActiveRegion(region.id === activeRegion?.id ? null : region);
  };

  const handleMouseEnter = (region) => {
    if (!activeRegion) {
      setActiveRegion(region);
    }
  };

  return (
    <div className="h-[600px] flex flex-col">
      <Tabs defaultValue="risk-map" className="w-full h-full flex flex-col">
        <TabsList className="self-center mb-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
          <TabsTrigger value="risk-map" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">Risk Map</TabsTrigger>
          <TabsTrigger value="historical" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">Historical Data</TabsTrigger>
        </TabsList>
        
        <TabsContent value="risk-map" className="flex-1 flex flex-col h-full">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 h-full">
            <div className="col-span-2 relative border rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
              {!mapLoaded ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-pulse">Loading map...</div>
                </div>
              ) : (
                <div className="absolute inset-0">
                  {/* Simple India map representation */}
                  <div className="relative w-full h-full" ref={mapRef}>
                    {/* India outline - just a simplified shape for demonstration */}
                    <div className="absolute w-[80%] h-[80%] top-[10%] left-[10%] bg-gray-200 dark:bg-gray-700 rounded-[30%] overflow-hidden border-2 border-gray-300 dark:border-gray-600 shadow-inner">
                      {/* Water bodies */}
                      <div className="absolute top-0 left-0 w-[20%] h-[20%] bg-blue-200 dark:bg-blue-900"></div>
                      <div className="absolute bottom-[10%] left-0 w-[15%] h-[40%] bg-blue-200 dark:bg-blue-900"></div>
                      <div className="absolute bottom-0 right-[20%] w-[30%] h-[20%] bg-blue-200 dark:bg-blue-900"></div>

                      {/* High risk regions */}
                      {highRiskRegions.map((region) => (
                        <div
                          key={region.id}
                          className={`absolute cursor-pointer transition-all duration-300 ${
                            activeRegion?.id === region.id ? 'ring-4 ring-white shadow-lg' : ''
                          }`}
                          style={{
                            top: `${region.coordinates.y}%`,
                            left: `${region.coordinates.x}%`,
                            width: `${region.coordinates.width}%`,
                            height: `${region.coordinates.height}%`,
                            backgroundColor: region.color,
                            opacity: activeRegion?.id === region.id ? 1 : 0.7
                          }}
                          onClick={() => handleRegionClick(region)}
                          onMouseEnter={() => handleMouseEnter(region)}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4 md:mt-0">
              <Card className="h-full border-2 border-blue-100 dark:border-blue-900">
                <CardContent className="p-4">
                  {activeRegion ? (
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400">{activeRegion.name}</h3>
                      
                      <div>
                        <p className="text-sm text-muted-foreground">States Affected</p>
                        <p className="font-medium">{activeRegion.states}</p>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground">Risk Level</p>
                        <div className={`inline-block px-2 py-1 rounded text-white ${
                          activeRegion.riskLevel === "Very High" ? "bg-gradient-to-r from-red-600 to-red-400" :
                          activeRegion.riskLevel === "High" ? "bg-gradient-to-r from-orange-600 to-orange-400" :
                          activeRegion.riskLevel === "Moderate" ? "bg-gradient-to-r from-yellow-600 to-yellow-400" : "bg-gradient-to-r from-green-600 to-green-400"
                        }`}>
                          {activeRegion.riskLevel}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground">Primary Causes</p>
                        <p>{activeRegion.factors}</p>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground">Recommended Actions</p>
                        <ul className="list-disc list-inside">
                          {activeRegion.riskLevel === "Very High" || activeRegion.riskLevel === "High" ? (
                            <>
                              <li>Establish early warning systems</li>
                              <li>Restrict construction activities</li>
                              <li>Monitor rainfall intensively</li>
                              <li>Create evacuation plans</li>
                            </>
                          ) : (
                            <>
                              <li>Regular monitoring during monsoon</li>
                              <li>Control deforestation activities</li>
                              <li>Enforce building regulations</li>
                            </>
                          )}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center p-4">
                      <div className="text-3xl mb-2 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">🗺️</div>
                      <h3 className="text-lg font-medium text-blue-700 dark:text-blue-400">Landslide Risk Zones</h3>
                      <p className="text-sm text-muted-foreground">Click on a colored region to view details about landslide risk in that area</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="historical" className="h-full">
          <Card className="h-full bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400">Historical Landslide Events in India</h3>
                  <div className="flex space-x-2">
                    {Object.keys(historicalData).map(year => (
                      <button 
                        key={year} 
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                          activeYear === year 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                        }`}
                        onClick={() => setActiveYear(year)}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
                  <Table>
                    <TableHeader className="bg-blue-50 dark:bg-blue-900/30">
                      <TableRow>
                        <TableHead className="font-bold">Location</TableHead>
                        <TableHead className="font-bold">Date</TableHead>
                        <TableHead className="font-bold">Casualties</TableHead>
                        <TableHead className="font-bold">Primary Cause</TableHead>
                        <TableHead className="font-bold">Severity</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {historicalData[activeYear].map((event, i) => (
                        <TableRow key={i} className="hover:bg-blue-50/50 dark:hover:bg-blue-900/20">
                          <TableCell className="font-medium">{event.location}</TableCell>
                          <TableCell>{new Date(event.date).toLocaleDateString()}</TableCell>
                          <TableCell>{event.casualties}</TableCell>
                          <TableCell>{event.cause}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className={`${getSeverityColor(event.severity)}`}>
                              {event.severity}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-medium mb-2 text-blue-700 dark:text-blue-400">Key Insights for {activeYear}</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Most landslides occurred during the monsoon season (June-September)</li>
                    <li>Western Ghats and Himalayan regions accounted for over 70% of all incidents</li>
                    <li>Heavy rainfall was the primary trigger in 85% of cases</li>
                    <li>Human activities like deforestation and improper construction exacerbated risk</li>
                    <li>Total casualties: {historicalData[activeYear].reduce((sum, event) => sum + event.casualties, 0)}</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LandslideMap;

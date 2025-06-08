
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mountain, CloudSun, MapPin, Map, BarChart2, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LinkedInCaption from "@/components/LinkedInCaption";

const Index = () => {
  const navigate = useNavigate();
  const [showLinkedIn, setShowLinkedIn] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/30">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 left-8 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-80 h-80 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          <div className="absolute -bottom-20 right-1/3 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3 space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight text-center lg:text-left">
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Landslide</span>
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Prediction</span><br />
                <span className="bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">For Safer India</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl text-center lg:text-left">
                Using advanced machine learning to predict, prevent, and protect communities from landslides across India's vulnerable regions.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  onClick={() => navigate("/predict")}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg hover:shadow-xl transition-all text-lg px-6 py-6 h-auto rounded-xl"
                >
                  Try Prediction Tool
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => navigate("/risk-map")}
                  className="bg-white hover:bg-blue-50 text-blue-600 border-blue-300 hover:border-blue-400 shadow-lg hover:shadow-xl transition-all text-lg px-6 py-6 h-auto rounded-xl dark:bg-gray-800 dark:text-blue-400 dark:border-blue-700 dark:hover:border-blue-600"
                >
                  View Risk Map
                </Button>
              </div>
            </div>
            <div className="lg:col-span-2 relative hidden lg:block">
              <div className="relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-blue-100 dark:border-blue-900 hover-lift glass-card">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/50 dark:to-amber-800/50 rounded-full">
                        <Mountain className="h-6 w-6 text-amber-500" />
                      </div>
                      <span className="font-medium text-gray-800 dark:text-gray-200">High Accuracy</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 pl-12">
                      95% prediction accuracy in high-risk regions
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/50 dark:to-green-800/50 rounded-full">
                        <CloudSun className="h-6 w-6 text-green-500" />
                      </div>
                      <span className="font-medium text-gray-800 dark:text-gray-200">Weather Data</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 pl-12">
                      Real-time weather integration for forecasts
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/50 dark:to-purple-800/50 rounded-full">
                        <MapPin className="h-6 w-6 text-purple-500" />
                      </div>
                      <span className="font-medium text-gray-800 dark:text-gray-200">Geo Mapping</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 pl-12">
                      Precise location-based risk assessment
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/50 dark:to-red-800/50 rounded-full">
                        <Map className="h-6 w-6 text-red-500" />
                      </div>
                      <span className="font-medium text-gray-800 dark:text-gray-200">Early Warnings</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 pl-12">
                      Alert systems for at-risk communities
                    </p>
                  </div>
                </div>
                <div className="mt-6 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600 dark:text-gray-300">System Status</span>
                    <span className="text-green-500 font-medium">Online</span>
                  </div>
                  <div className="w-full bg-white/50 dark:bg-gray-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-500 to-green-400 h-3 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Risk Areas */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-700 to-blue-500 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
              HIGH RISK ZONES
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">High-Risk Landslide Regions</h2>
            <p className="text-blue-100 max-w-3xl mx-auto">
              Our system continuously monitors these critical areas across India, providing real-time risk assessment and early warnings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Himalayas",
                location: "North India",
                risk: "Very High",
                factors: "Steep slopes, heavy rainfall",
                color: "from-red-600 to-red-400"
              },
              {
                name: "Western Ghats",
                location: "Maharashtra, Karnataka",
                risk: "High",
                factors: "Monsoon intensity, deforestation",
                color: "from-orange-600 to-orange-400"
              },
              {
                name: "Northeast Hills",
                location: "Assam, Meghalaya",
                risk: "High",
                factors: "Excessive rainfall, seismic activity",
                color: "from-yellow-600 to-yellow-400"
              },
              {
                name: "Nilgiri Hills",
                location: "Tamil Nadu",
                risk: "Moderate",
                factors: "Terrain modification, rainfall",
                color: "from-green-600 to-green-400"
              }
            ].map((area, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:-translate-y-2 transform transition-transform bg-white/10 backdrop-blur-sm">
                <div className={`h-3 bg-gradient-to-r ${area.color} w-full`}></div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-white">{area.name}</CardTitle>
                  <CardDescription className="text-blue-200">{area.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-center mb-1 text-sm font-medium">
                        <span className="text-blue-100">Risk Level</span>
                        <span className={`px-2 py-0.5 rounded-full text-white text-xs bg-gradient-to-r ${area.color}`}>
                          {area.risk}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-blue-100">
                        <span className="font-medium">Key factors:</span> {area.factors}
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary" size="sm" className="w-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm" onClick={() => navigate("/risk-map")}>
                    View on Map
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-1.5 bg-blue-100 dark:bg-blue-900/40 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
              OUR APPROACH
            </div>
            <h2 className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4">How Our Prediction System Works</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our landslide prediction process combines multiple data sources with advanced machine learning to generate accurate risk assessments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-16">
            {[
              {
                title: "Data Input",
                description: "Enter location details and environmental parameters",
                icon: "📍",
                bg: "from-blue-100 to-blue-50",
                darkBg: "from-blue-900/50 to-blue-800/30",
                border: "border-blue-200",
                darkBorder: "dark:border-blue-800"
              },
              {
                title: "Factor Analysis",
                description: "System analyzes key contributing factors",
                icon: "🔍",
                bg: "from-purple-100 to-purple-50",
                darkBg: "from-purple-900/50 to-purple-800/30",
                border: "border-purple-200",
                darkBorder: "dark:border-purple-800"
              },
              {
                title: "Risk Calculation",
                description: "Algorithm calculates probability based on multiple factors",
                icon: "🧮",
                bg: "from-amber-100 to-amber-50",
                darkBg: "from-amber-900/50 to-amber-800/30",
                border: "border-amber-200",
                darkBorder: "dark:border-amber-800"
              },
              {
                title: "Risk Assessment",
                description: "System categorizes risk level from low to very high",
                icon: "📊",
                bg: "from-green-100 to-green-50",
                darkBg: "from-green-900/50 to-green-800/30",
                border: "border-green-200",
                darkBorder: "dark:border-green-800"
              },
              {
                title: "Recommendations",
                description: "Receive tailored prevention and safety recommendations",
                icon: "📝",
                bg: "from-red-100 to-red-50",
                darkBg: "from-red-900/50 to-red-800/30",
                border: "border-red-200",
                darkBorder: "dark:border-red-800"
              }
            ].map((step, index) => (
              <Card key={index} className={`overflow-hidden border ${step.border} ${step.darkBorder} shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 transform duration-300`}>
                <CardHeader className={`pb-2 bg-gradient-to-b ${step.bg} ${step.darkBg}`}>
                  <div className="text-4xl mb-3 animate-bounce">{step.icon}</div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              size="lg" 
              onClick={() => navigate("/predict")}
              className="bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all px-8 py-6 h-auto text-lg rounded-xl"
            >
              Try the Prediction Tool Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Quick Access Links */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-2">Quick Access</h2>
            <p className="text-gray-600 dark:text-gray-400">Explore our main features</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Button 
              variant="outline"
              onClick={() => navigate("/dashboard")}
              className="flex flex-col items-center justify-center h-36 bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 border-blue-200 dark:border-blue-800 shadow-lg hover:shadow-xl transition-all rounded-xl hover:-translate-y-1 transform duration-300"
            >
              <BarChart2 className="h-10 w-10 text-blue-500 mb-3" />
              <span className="text-lg">Dashboard</span>
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => navigate("/predict")}
              className="flex flex-col items-center justify-center h-36 bg-white dark:bg-gray-800 hover:bg-amber-50 dark:hover:bg-amber-900/20 border-amber-200 dark:border-amber-800 shadow-lg hover:shadow-xl transition-all rounded-xl hover:-translate-y-1 transform duration-300"
            >
              <CloudSun className="h-10 w-10 text-amber-500 mb-3" />
              <span className="text-lg">Predict</span>
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => navigate("/risk-map")}
              className="flex flex-col items-center justify-center h-36 bg-white dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-green-900/20 border-green-200 dark:border-green-800 shadow-lg hover:shadow-xl transition-all rounded-xl hover:-translate-y-1 transform duration-300"
            >
              <Map className="h-10 w-10 text-green-500 mb-3" />
              <span className="text-lg">Risk Map</span>
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => navigate("/information")}
              className="flex flex-col items-center justify-center h-36 bg-white dark:bg-gray-800 hover:bg-purple-50 dark:hover:bg-purple-900/20 border-purple-200 dark:border-purple-800 shadow-lg hover:shadow-xl transition-all rounded-xl hover:-translate-y-1 transform duration-300"
            >
              <Info className="h-10 w-10 text-purple-500 mb-3" />
              <span className="text-lg">Information</span>
            </Button>
          </div>

         
        </div>
      </section>

    </div>
  );
};

export default Index;

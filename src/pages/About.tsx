
import { BookOpen, MapPin, Info, ChartBar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-2">
            About LandSlide
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Understanding and predicting landslides across India
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader className="pb-2">
              <Info className="h-8 w-8 text-blue-700 dark:text-blue-400 mb-2" />
              <CardTitle>Our Mission</CardTitle>
              <CardDescription>Protecting communities through prediction</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                LandSlide Prediction System aims to reduce the impact of landslides across India by providing accurate predictions and early warnings to at-risk communities, government agencies, and disaster management teams.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <ChartBar className="h-8 w-8 text-blue-700 dark:text-blue-400 mb-2" />
              <CardTitle>Our Approach</CardTitle>
              <CardDescription>Data-driven predictive modeling</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                We combine historical landslide data, meteorological information, geological factors, and advanced machine learning algorithms to create accurate risk assessments and predictions for landslide-prone areas across India.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <MapPin className="h-8 w-8 text-blue-700 dark:text-blue-400 mb-2" />
              <CardTitle>Our Focus</CardTitle>
              <CardDescription>High-risk regions in India</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                We focus on India's most vulnerable regions including the Western Ghats, Himalayas, Northeast India, and other areas with high landslide susceptibility due to terrain, rainfall patterns, and human activities.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">Our Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Data Collection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  We collect extensive data from multiple sources:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Historical landslide events across India</li>
                  <li>Meteorological data including rainfall patterns</li>
                  <li>Geological surveys and terrain models</li>
                  <li>Vegetation cover and land use data</li>
                  <li>Human activity and infrastructure information</li>
                  <li>Real-time monitoring stations in high-risk areas</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Prediction System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Our prediction system integrates multiple technologies:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Machine learning algorithms trained on historical data</li>
                  <li>GIS (Geographic Information Systems) for spatial analysis</li>
                  <li>Real-time monitoring systems for data collection</li>
                  <li>Warning dissemination systems for timely alerts</li>
                  <li>Mobile applications for public access to information</li>
                  <li>Integration with emergency response systems</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">Contact Us</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We welcome collaboration with researchers, government agencies, and communities interested in landslide prevention and mitigation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-semibold text-blue-700 dark:text-blue-400">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">Earthsensesupport@gmail.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-700 dark:text-blue-400">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400">+91 82646-67886</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-700 dark:text-blue-400">Address</h3>
                  <p className="text-gray-600 dark:text-gray-400">National Landslide Research Center<br />123 Earth Sciences Avenue<br />New Delhi, 110001, India</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};


export default About;

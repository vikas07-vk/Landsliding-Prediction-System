
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts";
import { useState } from "react";

const Dashboard = () => {
  // Updated data including 2024
  const [rainData] = useState([
    { month: 'Jan', amount: 65, year2024: 70 },
    { month: 'Feb', amount: 59, year2024: 62 },
    { month: 'Mar', amount: 80, year2024: 85 },
    { month: 'Apr', amount: 81, year2024: 90 },
    { month: 'May', amount: 120, year2024: 125 },
    { month: 'Jun', amount: 260, year2024: 280 },
    { month: 'Jul', amount: 480, year2024: 495 },
    { month: 'Aug', amount: 440, year2024: 455 },
    { month: 'Sep', amount: 310, year2024: 325 },
    { month: 'Oct', amount: 150, year2024: 165 },
    { month: 'Nov', amount: 95, year2024: 105 },
    { month: 'Dec', amount: 65, year2024: 75 }
  ]);

  const [landslideData] = useState([
    { month: 'Jan', count: 5, count2024: 6 },
    { month: 'Feb', count: 3, count2024: 4 },
    { month: 'Mar', count: 4, count2024: 5 },
    { month: 'Apr', count: 7, count2024: 8 },
    { month: 'May', count: 12, count2024: 14 },
    { month: 'Jun', count: 25, count2024: 28 },
    { month: 'Jul', count: 42, count2024: 45 },
    { month: 'Aug', count: 38, count2024: 43 },
    { month: 'Sep', count: 30, count2024: 34 },
    { month: 'Oct', count: 18, count2024: 20 },
    { month: 'Nov', count: 10, count2024: 12 },
    { month: 'Dec', count: 6, count2024: 7 }
  ]);

  const [riskFactors] = useState([
    { factor: 'Rainfall', score: 85, score2024: 88 },
    { factor: 'Slope Angle', score: 72, score2024: 72 },
    { factor: 'Deforestation', score: 68, score2024: 72 },
    { factor: 'Soil Type', score: 54, score2024: 54 },
    { factor: 'Seismic Activity', score: 42, score2024: 46 },
    { factor: 'Human Activity', score: 38, score2024: 42 }
  ]);

  const [regionalData] = useState([
    { region: 'Western Ghats', risk: 85, events: 42, risk2024: 87, events2024: 45 },
    { region: 'Himalayas', risk: 78, events: 36, risk2024: 82, events2024: 38 },
    { region: 'Northeast', risk: 75, events: 28, risk2024: 78, events2024: 32 },
    { region: 'Eastern Ghats', risk: 45, events: 12, risk2024: 48, events2024: 14 },
    { region: 'Central India', risk: 30, events: 8, risk2024: 35, events2024: 9 }
  ]);

  // 2024 Specific data - landslides by date
  const [landslideEvents2024] = useState([
    { date: '2024-01-15', location: 'Wayanad, Kerala', casualties: 3, type: 'Debris flow' },
    { date: '2024-02-08', location: 'Nilgiris, Tamil Nadu', casualties: 0, type: 'Rockfall' },
    { date: '2024-02-27', location: 'Idukki, Kerala', casualties: 1, type: 'Debris flow' },
    { date: '2024-03-12', location: 'Kodagu, Karnataka', casualties: 2, type: 'Mudslide' },
    { date: '2024-04-05', location: 'Darjeeling, West Bengal', casualties: 0, type: 'Slump' },
    { date: '2024-04-23', location: 'Wayanad, Kerala', casualties: 1, type: 'Debris flow' },
    { date: '2024-05-08', location: 'Manipur Hill region', casualties: 2, type: 'Mudslide' },
    { date: '2024-05-17', location: 'Uttarakhand', casualties: 5, type: 'Landslip' },
    { date: '2024-05-29', location: 'Sikkim', casualties: 1, type: 'Rockfall' },
    { date: '2024-06-03', location: 'Assam', casualties: 3, type: 'Mudslide' },
    { date: '2024-06-12', location: 'Himachal Pradesh', casualties: 7, type: 'Landslip' },
    { date: '2024-06-18', location: 'Meghalaya', casualties: 2, type: 'Debris flow' },
    { date: '2024-06-25', location: 'Uttarakhand', casualties: 4, type: 'Mudslide' }
  ]);

  const chartConfig = {
    rainfall: {
      color: '#3b82f6',
      label: 'Rainfall (mm)'
    },
    rainfall2024: {
      color: '#2563eb',
      label: 'Rainfall 2024 (mm)'
    },
    landslides: {
      color: '#ef4444',
      label: 'Landslide Events 2023' 
    },
    landslides2024: {
      color: '#b91c1c',
      label: 'Landslide Events 2024' 
    },
    risk: {
      color: '#f59e0b',
      label: 'Risk Score 2023'
    },
    risk2024: {
      color: '#d97706',
      label: 'Risk Score 2024'
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl mb-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-2">Landslide Dashboard</h1>
        <p className="text-lg opacity-90">Overview of landslide data and statistics across India including 2024 data</p>
      </div>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-blue-200 dark:border-blue-800 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            <CardHeader className="pb-2 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40">
              <CardTitle className="text-blue-600 dark:text-blue-400">220+</CardTitle>
              <CardDescription>Annual Landslides (2024)</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">10% increase from previous years</p>
            </CardContent>
          </Card>
          
          <Card className="border-red-200 dark:border-red-800 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            <CardHeader className="pb-2 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/40 dark:to-red-800/40">
              <CardTitle className="text-red-600 dark:text-red-400">4,750+</CardTitle>
              <CardDescription>People Affected (2024)</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">5.5% increase in affected communities</p>
            </CardContent>
          </Card>
          
          <Card className="border-amber-200 dark:border-amber-800 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            <CardHeader className="pb-2 bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-900/40 dark:to-amber-800/40">
              <CardTitle className="text-amber-600 dark:text-amber-400">65%</CardTitle>
              <CardDescription>Preventable (2024)</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Improved early warning systems</p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-2 border-blue-100 dark:border-blue-900 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-900/30 dark:to-gray-900 border-b border-blue-100 dark:border-blue-900">
            <CardTitle className="text-blue-700 dark:text-blue-400">Rainfall vs Landslide Events (2023-2024)</CardTitle>
            <CardDescription>Monthly correlation between rainfall and landslides with 2024 data</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <ChartContainer className="h-80" config={chartConfig}>
              <LineChart data={rainData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" orientation="left" stroke={chartConfig.rainfall.color} />
                <YAxis yAxisId="right" orientation="right" stroke={chartConfig.landslides.color} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line 
                  yAxisId="left"
                  type="monotone"
                  dataKey="amount"
                  name="rainfall"
                  stroke={chartConfig.rainfall.color}
                  strokeWidth={2}
                />
                <Line 
                  yAxisId="left"
                  type="monotone"
                  dataKey="year2024"
                  name="rainfall2024"
                  stroke={chartConfig.rainfall2024.color}
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
                <Line 
                  yAxisId="right"
                  type="monotone"
                  data={landslideData}
                  dataKey="count"
                  name="landslides"
                  stroke={chartConfig.landslides.color}
                  strokeWidth={2}
                />
                <Line 
                  yAxisId="right"
                  type="monotone"
                  data={landslideData}
                  dataKey="count2024"
                  name="landslides2024"
                  stroke={chartConfig.landslides2024.color}
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
                <Legend />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-2 border-green-100 dark:border-green-900 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-50 to-white dark:from-green-900/30 dark:to-gray-900 border-b border-green-100 dark:border-green-900">
              <CardTitle className="text-green-700 dark:text-green-400">Risk Factors (2023 vs 2024)</CardTitle>
              <CardDescription>Comparison of risk factors between 2023 and 2024</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ChartContainer className="h-80" config={chartConfig}>
                <BarChart data={riskFactors} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="factor" />
                  <YAxis domain={[0, 100]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar
                    dataKey="score"
                    name="risk"
                    fill={chartConfig.risk.color}
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="score2024"
                    name="risk2024"
                    fill={chartConfig.risk2024.color}
                    radius={[4, 4, 0, 0]}
                  />
                  <Legend />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-100 dark:border-purple-900 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-white dark:from-purple-900/30 dark:to-gray-900 border-b border-purple-100 dark:border-purple-900">
              <CardTitle className="text-purple-700 dark:text-purple-400">Regional Risk Assessment</CardTitle>
              <CardDescription>Landslide risk variation across major regions (2023-2024)</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ChartContainer className="h-80" config={chartConfig}>
                <AreaChart data={regionalData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="region" />
                  <YAxis domain={[0, 100]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="risk"
                    name="risk"
                    fill={chartConfig.risk.color}
                    fillOpacity={0.3}
                    stroke={chartConfig.risk.color}
                  />
                  <Area
                    type="monotone"
                    dataKey="risk2024"
                    name="risk2024"
                    fill={chartConfig.risk2024.color}
                    fillOpacity={0.3}
                    stroke={chartConfig.risk2024.color}
                    strokeDasharray="5 5"
                  />
                  <Legend />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
        
        <Card className="border-2 border-amber-100 dark:border-amber-900 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-amber-50 to-white dark:from-amber-900/30 dark:to-gray-900 border-b border-amber-100 dark:border-amber-900">
            <CardTitle className="text-amber-700 dark:text-amber-400">2024 Landslide Events (To Date)</CardTitle>
            <CardDescription>Recorded landslide events in 2024 with location and impact data</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th scope="col" className="px-6 py-3">Date</th>
                    <th scope="col" className="px-6 py-3">Location</th>
                    <th scope="col" className="px-6 py-3">Casualties</th>
                    <th scope="col" className="px-6 py-3">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {landslideEvents2024.map((event, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800"}>
                      <td className="px-6 py-4">{event.date}</td>
                      <td className="px-6 py-4 font-medium">{event.location}</td>
                      <td className="px-6 py-4">{event.casualties}</td>
                      <td className="px-6 py-4">{event.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

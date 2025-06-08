
import { useState, useEffect } from "react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  const [rainData] = useState([
    { month: 'Jan', amount: 65 },
    { month: 'Feb', amount: 59 },
    { month: 'Mar', amount: 80 },
    { month: 'Apr', amount: 81 },
    { month: 'May', amount: 120 },
    { month: 'Jun', amount: 260 },
    { month: 'Jul', amount: 480 },
    { month: 'Aug', amount: 440 },
    { month: 'Sep', amount: 310 },
    { month: 'Oct', amount: 150 },
    { month: 'Nov', amount: 95 },
    { month: 'Dec', amount: 65 }
  ]);

  const [landslideData] = useState([
    { month: 'Jan', count: 5 },
    { month: 'Feb', count: 3 },
    { month: 'Mar', count: 4 },
    { month: 'Apr', count: 7 },
    { month: 'May', count: 12 },
    { month: 'Jun', count: 25 },
    { month: 'Jul', count: 42 },
    { month: 'Aug', count: 38 },
    { month: 'Sep', count: 30 },
    { month: 'Oct', count: 18 },
    { month: 'Nov', count: 10 },
    { month: 'Dec', count: 6 }
  ]);

  const [riskFactors] = useState([
    { factor: 'Rainfall', score: 85 },
    { factor: 'Slope Angle', score: 72 },
    { factor: 'Deforestation', score: 68 },
    { factor: 'Soil Type', score: 54 },
    { factor: 'Seismic Activity', score: 42 },
    { factor: 'Human Activity', score: 38 }
  ]);

  const [regionalData] = useState([
    { region: 'Western Ghats', risk: 85, events: 42 },
    { region: 'Himalayas', risk: 78, events: 36 },
    { region: 'Northeast', risk: 75, events: 28 },
    { region: 'Eastern Ghats', risk: 45, events: 12 },
    { region: 'Central India', risk: 30, events: 8 }
  ]);

  const chartConfig = {
    rainfall: {
      color: '#3b82f6',
      label: 'Rainfall (mm)'
    },
    landslides: {
      color: '#ef4444',
      label: 'Landslide Events' 
    },
    risk: {
      color: '#f59e0b',
      label: 'Risk Score'
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-blue-600 dark:text-blue-400">200+</CardTitle>
            <CardDescription>Annual Landslides</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Across high-risk regions in India</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-red-600 dark:text-red-400">4,500+</CardTitle>
            <CardDescription>People Affected</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Annual impact on communities</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-amber-600 dark:text-amber-400">60%</CardTitle>
            <CardDescription>Preventable</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">With early warning systems</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Rainfall vs Landslide Events</CardTitle>
            <CardDescription>Monthly correlation between rainfall and landslides</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer className="h-80" config={chartConfig}>
              <LineChart data={rainData} margin={{ top: 50, right: 50, left: 50, bottom: 5 }}>
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
                  yAxisId="right"
                  type="monotone"
                  data={landslideData}
                  dataKey="count"
                  name="landslides"
                  stroke={chartConfig.landslides.color}
                  strokeWidth={2}
                />
                <Legend />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Risk Factors</CardTitle>
            <CardDescription>Major factors contributing to landslide risk</CardDescription>
          </CardHeader>
          <CardContent>
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
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Regional Risk Assessment</CardTitle>
            <CardDescription>Landslide risk variation across major regions in India</CardDescription>
          </CardHeader>
          <CardContent>
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
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

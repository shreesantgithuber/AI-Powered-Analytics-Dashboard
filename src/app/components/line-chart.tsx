
"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// Add CardDescription to imports
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { revenueData } from '../../../lib/data';

export function RevenueLineChart() {
  return (
    // Adjusted col-span for the new 5-column grid
    <Card className="col-span-1 lg:col-span-3"> 
      <CardHeader>
        <CardTitle>Revenue Overview</CardTitle>
        {/* Add a clarifying description */}
        <CardDescription>
          Monthly revenue trends for the last 6 months.
        </CardDescription>
      </CardHeader>
      <CardContent className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
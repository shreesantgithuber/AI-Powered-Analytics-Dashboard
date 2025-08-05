export const keyMetrics = [
  { title: "Revenue", value: "$405,091.00", change: "+20.1%", changeType: "positive" as const },
  { title: "Users", value: "32,150", change: "+12.5%", changeType: "positive" as const },
  { title: "Conversions", value: "2,849", change: "-1.8%", changeType: "negative" as const },
  { title: "Growth %", value: "15.7%", change: "+5.3%", changeType: "positive" as const },
];

export const revenueData = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 5000 },
  { name: 'Apr', revenue: 4500 },
  { name: 'May', revenue: 6000 },
  { name: 'Jun', revenue: 5500 },
];

export const userDemographics = [
  { name: '18-24', value: 400 },
  { name: '25-34', value: 300 },
  { name: '35-44', value: 300 },
  { name: '45+', value: 200 },
];

export const conversionSources = [
    { source: 'Organic', conversions: 2800 },
    { source: 'Paid', conversions: 1500 },
    { source: 'Referral', conversions: 980 },
    { source: 'Social', conversions: 540 },
    { source: 'Email', conversions: 320 },
];

export type Campaign = {
  id: string;
  name: string;
  status: "active" | "paused" | "completed";
  spend: number;
  revenue: number;
  cpa: number;
};

export const campaignData: Campaign[] = [
  { id: "CAM001", name: "Summer Sale 2024", status: "completed", spend: 5000, revenue: 20000, cpa: 25.00 },
  { id: "CAM002", name: "Q3 Brand Awareness", status: "active", spend: 12000, revenue: 15000, cpa: 80.00 },
  { id: "CAM003", name: "Black Friday Push", status: "paused", spend: 7500, revenue: 30000, cpa: 25.00 },
  { id: "CAM004", name: "New Year New You", status: "active", spend: 15000, revenue: 18000, cpa: 83.33 },
  { id: "CAM005", name: "Spring Collection Launch", status: "completed", spend: 8000, revenue: 25000, cpa: 32.00 },
  { id: "CAM006", name: "Influencer Collab - Wave 1", status: "active", spend: 25000, revenue: 22000, cpa: 113.64 },
  { id: "CAM007", name: "SEO Content Drive", status: "completed", spend: 2000, revenue: 10000, cpa: 20.00 },
];
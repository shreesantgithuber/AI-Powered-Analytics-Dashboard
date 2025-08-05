import { Campaign } from "../../../lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Activity,
  DollarSign,
  Hash,
  TrendingUp,
  Target,
  Type
} from "lucide-react";

interface CampaignDetailsCardProps {
  campaign: Campaign;
}

// A helper function to format currency
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

// A helper component for displaying each detail item
const DetailItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string | React.ReactNode }) => (
    <div className="flex items-start space-x-3 rounded-lg p-3 hover:bg-muted/50 transition-colors">
        <div className="flex-shrink-0">{icon}</div>
        <div className="flex-grow">
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="text-md font-semibold">{value}</p>
        </div>
    </div>
);


export function CampaignDetailsCard({ campaign }: CampaignDetailsCardProps) {
  // Calculate ROI (Return on Investment) for extra value
  const roi = ((campaign.revenue - campaign.spend) / campaign.spend) * 100;

  const statusVariant = campaign.status === 'active' ? 'default' : campaign.status === 'completed' ? 'secondary' : 'destructive';

  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
            <Type />
            <span>{campaign.name}</span>
        </CardTitle>
        <CardDescription>A detailed overview of the campaign.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <DetailItem 
                icon={<Hash className="h-5 w-5 text-primary" />}
                label="Campaign ID"
                value={campaign.id}
            />
            <DetailItem 
                icon={<Activity className="h-5 w-5 text-primary" />}
                label="Status"
                value={<Badge variant={statusVariant} className="capitalize">{campaign.status}</Badge>}
            />
            <DetailItem 
                icon={<DollarSign className="h-5 w-5 text-red-500" />}
                label="Spend"
                value={formatCurrency(campaign.spend)}
            />
            <DetailItem 
                icon={<TrendingUp className="h-5 w-5 text-green-500" />}
                label="Revenue"
                value={formatCurrency(campaign.revenue)}
            />
            <DetailItem 
                icon={<Target className="h-5 w-5 text-blue-500" />}
                label="CPA (Cost Per Acquisition)"
                value={formatCurrency(campaign.cpa)}
            />
             <DetailItem 
                icon={roi >= 0 ? <TrendingUp className="h-5 w-5 text-green-500" /> : <TrendingUp className="h-5 w-5 text-red-500"/>}
                label="ROI (Return on Investment)"
                value={`${roi.toFixed(2)}%`}
            />
        </div>
      </CardContent>
    </Card>
  );
}
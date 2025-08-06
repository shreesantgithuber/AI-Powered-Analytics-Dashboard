
"use client";

import * as React from "react";
import { keyMetrics, campaignData, Campaign } from "../../lib/data";
import { MetricCard } from "./components/metric-card";
import { RevenueLineChart } from "./components/line-chart";
import { ConversionBarChart } from "./components/bar-chart";
import { DemographicsPieChart } from "./components/pie-chart";
import { CampaignDataTable } from "./components/data-table";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddCampaignForm, NewCampaignValues } from "./components/add-campaign-form";
import { EditCampaignForm } from "./components/edit-campaign-form";

export default function DashboardPage() {
  const [campaigns, setCampaigns] = React.useState<Campaign[]>(campaignData);
  const [isAddModalOpen, setIsAddModalOpen] = React.useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
  const [campaignToEdit, setCampaignToEdit] = React.useState<Campaign | null>(null);

  const handleAddCampaign = (values: NewCampaignValues) => {
    const newCampaign: Campaign = {
      id: `CAM${Math.floor(1000 + Math.random() * 9000)}`,
      name: values.name,
      spend: values.spend,
      status: "active",
      revenue: 0,
      cpa: 0,
    };
    setCampaigns(prevCampaigns => [newCampaign, ...prevCampaigns]);
    setIsAddModalOpen(false);
  };

  const handleOpenEditModal = (campaign: Campaign) => {
    setCampaignToEdit(campaign);
    setIsEditModalOpen(true);
  };

  const handleUpdateCampaign = (updatedCampaign: Campaign) => {
    setCampaigns(prevCampaigns =>
      prevCampaigns.map(c => (c.id === updatedCampaign.id ? updatedCampaign : c))
    );
    setIsEditModalOpen(false);
  };
  
  const tableMeta = {
     editCampaign: handleOpenEditModal,
  };

  return (
    <>
      {/* THE FIX: Added overflow-x-hidden to prevent the page from getting a horizontal scrollbar */}
      <main className="flex-1 space-y-8 p-4 md:p-8 overflow-x-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <p className="text-muted-foreground">A complete overview of your marketing performance.</p>
          </div>
          <div className="flex items-center space-x-2">
            <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
              <DialogTrigger asChild>
                <Button><PlusCircle className="mr-2 h-4 w-4" /> Add New Campaign</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Create New Campaign</DialogTitle>
                  <DialogDescription>Fill in the details below to launch your next campaign.</DialogDescription>
                </DialogHeader>
                <AddCampaignForm onFormSubmit={handleAddCampaign} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {keyMetrics.map((metric) => <MetricCard key={metric.title} {...metric} />)}
        </div>
        
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-5">
          <div className="lg:col-span-3">
             <RevenueLineChart />
          </div>
          <div className="lg:col-span-2 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
            <ConversionBarChart />
            <DemographicsPieChart />
          </div>
        </div>
        
        {/* <CampaignDataTable data={campaigns} meta={tableMeta} /> */}
        <CampaignDataTable data={campaigns} setData={setCampaigns} meta={tableMeta} />
      </main>

      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Campaign</DialogTitle>
            <DialogDescription>Make changes to your campaign here. Click save when you&apos;re done.</DialogDescription>
          </DialogHeader>
          {campaignToEdit && (
            <EditCampaignForm
              campaign={campaignToEdit}
              onFormSubmit={handleUpdateCampaign}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
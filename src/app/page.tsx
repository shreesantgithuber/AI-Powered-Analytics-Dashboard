// // // "use client"

// // // import { keyMetrics } from "../../lib/data";
// // // import { MetricCard } from "./components/metric-card";
// // // import { RevenueLineChart } from "./components/line-chart";
// // // import { ConversionBarChart } from "./components/bar-chart";
// // // import { DemographicsPieChart } from "./components/pie-chart";
// // // import { CampaignDataTable } from "./components/data-table";
// // // import { Button } from "@/components/ui/button";
// // // import { PlusCircle } from "lucide-react";
// // // import { AddCampaignForm, NewCampaignValues } from "./components/add-campaign-form";
// // // import { campaignData } from "../../lib/data";

// // // import {
// // //   Dialog,
// // //   DialogContent,
// // //   DialogDescription,
// // //   DialogHeader,
// // //   DialogTitle,
// // //   DialogTrigger,
// // // } from "@/components/ui/dialog";

// // // // export default function DashboardPage() {
// // // //   return (
// // // //     <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">
// // // //       <div className="flex items-center justify-between space-y-2">
// // // //         <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
// // // //       </div>

// // // //       {/* Key Metrics Cards */}
// // // //       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
// // // //         {keyMetrics.map((metric) => (
// // // //           <MetricCard key={metric.title} {...metric} />
// // // //         ))}
// // // //       </div>

// // // //       {/* Charts */}
// // // //       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
// // // //         <RevenueLineChart />
// // // //         <div className="grid gap-4 col-span-1 lg:col-span-2 md:grid-cols-2">
// // // //             <ConversionBarChart />
// // // //             <DemographicsPieChart />
// // // //         </div>
// // // //       </div>

// // // //       {/* Data Table */}
// // // //       <CampaignDataTable />

// // // //     </main>
// // // //   );
// // // // }

// // // // export default function DashboardPage() {
// // // //   return (
// // // //     // Add more vertical spacing and padding
// // // //     <main className="flex-1 space-y-8 p-6 md:p-10">
// // // //       {/* Enhanced Header */}
// // // //       <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
// // // //         <div>
// // // //             <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
// // // //             <p className="text-muted-foreground">
// // // //                 A complete overview of your marketing performance.
// // // //             </p>
// // // //         </div>
// // // //         <div className="flex items-center space-x-2">
// // // //             <Button>
// // // //                 <PlusCircle className="mr-2 h-4 w-4" />
// // // //                 Add New Campaign
// // // //             </Button>
// // // //         </div>
// // // //       </div>

// // // //       {/* Key Metrics Cards with increased gap */}
// // // //       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
// // // //         {keyMetrics.map((metric) => (
// // // //           <MetricCard key={metric.title} {...metric} />
// // // //         ))}
// // // //       </div>

// // // //       {/* Charts with increased gap */}
// // // //       <div className="grid gap-6 grid-cols-1 lg:grid-cols-5">
// // // //         <RevenueLineChart />
// // // //         <div className="grid gap-6 col-span-1 lg:col-span-2 md:grid-cols-2 lg:grid-cols-1">
// // // //             <ConversionBarChart />
// // // //             <DemographicsPieChart />
// // // //         </div>
// // // //       </div>

// // // //       {/* Data Table */}
// // // //       <CampaignDataTable />
// // // //     </main>
// // // //   );
// // // // }

// // // // Add "use client" at the top because we're using state

// // // //import * as React from "react"; // Import React for state management
// // // // import { keyMetrics } from "../lib/data";
// // // // import { MetricCard } from "./components/metric-card";
// // // // import { RevenueLineChart } from "./components/line-chart";
// // // // import { ConversionBarChart } from "./components/bar-chart";
// // // // import { DemographicsPieChart } from "./components/pie-chart";
// // // // import { CampaignDataTable } from "./components/data-table";
// // // // import { Button } from "@/components/ui/button";
// // // // import { PlusCircle } from "lucide-react";

// // // // Import Dialog components and the new form
// // // // import {
// // // // Dialog,
// // // // DialogContent,
// // // // DialogDescription,
// // // // DialogHeader,
// // // // DialogTitle,
// // // // DialogTrigger,
// // // // } from "@/components/ui/dialog";
// // // // import { AddCampaignForm } from "./components/add-campaign-form";

// // // // export default function DashboardPage() {
// // // //   // State to control the visibility of the Add Campaign dialog
// // // //   const [isAddModalOpen, setIsAddModalOpen] = React.useState(false);

// // // //   return (
// // // //     <>
// // // //       <main className="flex-1 space-y-8 p-6 md:p-10">
// // // //         {/* Enhanced Header */}
// // // //         <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
// // // //           <div>
// // // //               <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
// // // //               <p className="text-muted-foreground">
// // // //                   A complete overview of your marketing performance.
// // // //               </p>
// // // //           </div>
// // // //           <div className="flex items-center space-x-2">
// // // //               {/* This Dialog component wraps the trigger and the content */}
// // // //               <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
// // // //                   <DialogTrigger asChild>
// // // //                       <Button>
// // // //                           <PlusCircle className="mr-2 h-4 w-4" />
// // // //                           Add New Campaign
// // // //                       </Button>
// // // //                   </DialogTrigger>
// // // //                   <DialogContent className="sm:max-w-[425px]">
// // // //                       <DialogHeader>
// // // //                           <DialogTitle>Create New Campaign</DialogTitle>
// // // //                           <DialogDescription>
// // // //                               Fill in the details below to launch your next campaign.
// // // //                           </DialogDescription>
// // // //                       </DialogHeader>
// // // //                       <AddCampaignForm onFormSubmit={() => setIsAddModalOpen(false)} />
// // // //                   </DialogContent>
// // // //               </Dialog>
// // // //           </div>
// // // //         </div>

// // // //         {/* Key Metrics Cards */}
// // // //         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
// // // //           {keyMetrics.map((metric) => (
// // // //             <MetricCard key={metric.title} {...metric} />
// // // //           ))}
// // // //         </div>

// // // //         {/* Charts */}
// // // //         <div className="grid gap-6 grid-cols-1 lg:grid-cols-5">
// // // //           <RevenueLineChart />
// // // //           <div className="grid gap-6 col-span-1 lg:col-span-2 md:grid-cols-2 lg:grid-cols-1">
// // // //               <ConversionBarChart />
// // // //               <DemographicsPieChart />
// // // //           </div>
// // // //         </div>

// // // //         {/* Data Table */}
// // // //         <CampaignDataTable />
// // // //       </main>
// // // //     </>
// // // //   );
// // // // }


// // // // app/page.tsx
// // // // "use client";

// // // import * as React from "react";
// // // // import { keyMetrics, campaignData, Campaign } from "../lib/data"; // Import Campaign type and initial data
// // // // import { MetricCard } from "./components/metric-card";
// // // // import { RevenueLineChart } from "./components/line-chart";
// // // // import { ConversionBarChart } from "./components/bar-chart";
// // // // import { DemographicsPieChart } from "./components/pie-chart";
// // // // import { CampaignDataTable } from "./components/data-table";
// // // // import { Button } from "@/components/ui/button";
// // // // import { PlusCircle } from "lucide-react";
// // // // import {
// // // //   Dialog,
// // // //   DialogContent,
// // // //   DialogDescription,
// // // //   DialogHeader,
// // // //   DialogTitle,
// // // //   DialogTrigger,
// // // // } from "@/components/ui/dialog";
// // // // import { AddCampaignForm, NewCampaignValues } from "./components/add-campaign-form"; // Import form and its value type
// // // import { Campaign } from "../../lib/data";

// // // export default function DashboardPage() {
// // //   // STATE LIFTED UP to the parent component
// // //   const [campaigns, setCampaigns] = React.useState<Campaign[]>(campaignData);
// // //   const [isAddModalOpen, setIsAddModalOpen] = React.useState(false);

// // //   // FUNCTION TO HANDLE ADDING a new campaign to the state
// // //   const handleAddCampaign = (values: NewCampaignValues) => {
// // //     const newCampaign: Campaign = {
// // //       // Create a full campaign object from the form values
// // //       id: `CAM${Math.floor(1000 + Math.random() * 9000)}`, // Generate a random temporary ID
// // //       name: values.name,
// // //       spend: values.spend,
// // //       status: "active", // Default status
// // //       revenue: 0, // Default value
// // //       cpa: 0, // Default value
// // //     };

// // //     // Update the state, adding the new campaign to the top of the list
// // //     setCampaigns(prevCampaigns => [newCampaign, ...prevCampaigns]);

// // //     // Close the dialog after submission
// // //     setIsAddModalOpen(false);
// // //   };

// // //   return (
// // //     <>
// // //       <main className="flex-1 space-y-8 p-6 md:p-10">
// // //         <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
// // //           <div>
// // //             <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
// // //             <p className="text-muted-foreground">A complete overview of your marketing performance.</p>
// // //           </div>
// // //           <div className="flex items-center space-x-2">
// // //             <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
// // //               <DialogTrigger asChild>
// // //                 <Button><PlusCircle className="mr-2 h-4 w-4" /> Add New Campaign</Button>
// // //               </DialogTrigger>
// // //               <DialogContent className="sm:max-w-[425px]">
// // //                 <DialogHeader>
// // //                   <DialogTitle>Create New Campaign</DialogTitle>
// // //                   <DialogDescription>Fill in the details below to launch your next campaign.</DialogDescription>
// // //                 </DialogHeader>
// // //                 {/* Pass the handler function to the form */}
// // //                 <AddCampaignForm onFormSubmit={handleAddCampaign} />
// // //               </DialogContent>
// // //             </Dialog>
// // //           </div>
// // //         </div>

// // //         {/* Metric cards remain the same */}
// // //         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
// // //           {keyMetrics.map((metric) => <MetricCard key={metric.title} {...metric} />)}
// // //         </div>

// // //         {/* Charts remain the same */}
// // //         <div className="grid gap-6 grid-cols-1 lg:grid-cols-5">
// // //           <RevenueLineChart />
// // //           <div className="grid gap-6 col-span-1 lg:col-span-2 md:grid-cols-2 lg:grid-cols-1">
// // //             <ConversionBarChart />
// // //             <DemographicsPieChart />
// // //           </div>
// // //         </div>

// // //         {/* Pass the managed state down to the data table */}
// // //         <CampaignDataTable data={campaigns} />
// // //       </main>
// // //     </>
// // //   );
// // // }

// // "use client";

// // import * as React from "react";
// // // import { keyMetrics, campaignData, Campaign } from "../lib/data";
// // import { keyMetrics, campaignData, Campaign  } from "../../lib/data";
// // import { MetricCard } from "./components/metric-card";
// // import { RevenueLineChart } from "./components/line-chart";
// // import { ConversionBarChart } from "./components/bar-chart";
// // import { DemographicsPieChart } from "./components/pie-chart";
// // import { CampaignDataTable } from "./components/data-table";
// // import { Button } from "@/components/ui/button";
// // import { PlusCircle } from "lucide-react";
// // import {
// //   Dialog,
// //   DialogContent,
// //   DialogDescription,
// //   DialogHeader,
// //   DialogTitle,
// //   DialogTrigger,
// // } from "@/components/ui/dialog";
// // import { AddCampaignForm, NewCampaignValues } from "./components/add-campaign-form";
// // import { EditCampaignForm } from "./components/edit-campaign-form"; // Import the new Edit form

// // export default function DashboardPage() {
// //   // Master state for the campaign list
// //   const [campaigns, setCampaigns] = React.useState<Campaign[]>(campaignData);

// //   // State for the modals
// //   const [isAddModalOpen, setIsAddModalOpen] = React.useState(false);
// //   const [isEditModalOpen, setIsEditModalOpen] = React.useState(false); // NEW state for edit modal
// //   const [campaignToEdit, setCampaignToEdit] = React.useState<Campaign | null>(null); // NEW state for campaign being edited

// //   // Handler for adding a new campaign
// //   const handleAddCampaign = (values: NewCampaignValues) => {
// //     const newCampaign: Campaign = {
// //       id: `CAM${Math.floor(1000 + Math.random() * 9000)}`,
// //       name: values.name,
// //       spend: values.spend,
// //       status: "active",
// //       revenue: 0,
// //       cpa: 0,
// //     };
// //     setCampaigns(prevCampaigns => [newCampaign, ...prevCampaigns]);
// //     setIsAddModalOpen(false);
// //   };

// //   // NEW: Handler for opening the edit modal
// //   const handleOpenEditModal = (campaign: Campaign) => {
// //     setCampaignToEdit(campaign);
// //     setIsEditModalOpen(true);
// //   };

// //   // NEW: Handler for submitting the updated campaign data
// //   const handleUpdateCampaign = (updatedCampaign: Campaign) => {
// //     setCampaigns(prevCampaigns =>
// //       prevCampaigns.map(c => (c.id === updatedCampaign.id ? updatedCampaign : c))
// //     );
// //     setIsEditModalOpen(false);
// //   };
  
// //   // Pass the edit handler down to the data table's meta property
// //   const tableMeta = {
// //      editCampaign: handleOpenEditModal
// //   };

// //   return (
// //     <>
// //       <main className="flex-1 space-y-8 p-6 md:p-10">
// //         <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
// //           <div>
// //             <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
// //             <p className="text-muted-foreground">A complete overview of your marketing performance.</p>
// //           </div>
// //           <div className="flex items-center space-x-2">
// //             <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
// //               <DialogTrigger asChild>
// //                 <Button><PlusCircle className="mr-2 h-4 w-4" /> Add New Campaign</Button>
// //               </DialogTrigger>
// //               <DialogContent className="sm:max-w-[425px]">
// //                 <DialogHeader>
// //                   <DialogTitle>Create New Campaign</DialogTitle>
// //                   <DialogDescription>Fill in the details below to launch your next campaign.</DialogDescription>
// //                 </DialogHeader>
// //                 <AddCampaignForm onFormSubmit={handleAddCampaign} />
// //               </DialogContent>
// //             </Dialog>
// //           </div>
// //         </div>
        
// //         {/* Metric cards and Charts remain the same */}
// //         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
// //           {keyMetrics.map((metric) => <MetricCard key={metric.title} {...metric} />)}
// //         </div>
// //         <div className="grid gap-6 grid-cols-1 lg:grid-cols-5">
// //           <RevenueLineChart />
// //           <div className="grid gap-6 col-span-1 lg:col-span-2 md:grid-cols-2 lg:grid-cols-1">
// //             <ConversionBarChart />
// //             <DemographicsPieChart />
// //           </div>
// //         </div>
        
// //         {/* Pass the managed state AND the edit handler down to the data table */}
// //         <CampaignDataTable data={campaigns} meta={tableMeta} />
// //       </main>

// //       {/* NEW: Dialog for Editing Campaigns */}
// //       <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
// //         <DialogContent className="sm:max-w-[425px]">
// //           <DialogHeader>
// //             <DialogTitle>Edit Campaign</DialogTitle>
// //             <DialogDescription>
// //               Make changes to your campaign here. Click save when you're done.
// //             </DialogDescription>
// //           </DialogHeader>
// //           {campaignToEdit && (
// //             <EditCampaignForm
// //               campaign={campaignToEdit}
// //               onFormSubmit={handleUpdateCampaign}
// //             />
// //           )}
// //         </DialogContent>
// //       </Dialog>
// //     </>
// //   );
// // }

// "use client";

// import * as React from "react";
// import { keyMetrics, campaignData, Campaign } from "../../lib/data";
// import { MetricCard } from "./components/metric-card";
// import { RevenueLineChart } from "./components/line-chart";
// import { ConversionBarChart } from "./components/bar-chart";
// import { DemographicsPieChart } from "./components/pie-chart";
// import { CampaignDataTable } from "./components/data-table";
// import { Button } from "@/components/ui/button";
// import { PlusCircle } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { AddCampaignForm, NewCampaignValues } from "./components/add-campaign-form";
// import { EditCampaignForm } from "./components/edit-campaign-form";

// export default function DashboardPage() {
//   const [campaigns, setCampaigns] = React.useState<Campaign[]>(campaignData);
//   const [isAddModalOpen, setIsAddModalOpen] = React.useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
//   const [campaignToEdit, setCampaignToEdit] = React.useState<Campaign | null>(null);

//   const handleAddCampaign = (values: NewCampaignValues) => {
//     const newCampaign: Campaign = {
//       id: `CAM${Math.floor(1000 + Math.random() * 9000)}`,
//       name: values.name,
//       spend: values.spend,
//       status: "active",
//       revenue: 0,
//       cpa: 0,
//     };
//     setCampaigns(prevCampaigns => [newCampaign, ...prevCampaigns]);
//     setIsAddModalOpen(false);
//   };

//   const handleOpenEditModal = (campaign: Campaign) => {
//     setCampaignToEdit(campaign);
//     setIsEditModalOpen(true);
//   };

//   const handleUpdateCampaign = (updatedCampaign: Campaign) => {
//     setCampaigns(prevCampaigns =>
//       prevCampaigns.map(c => (c.id === updatedCampaign.id ? updatedCampaign : c))
//     );
//     setIsEditModalOpen(false);
//   };
  
//   const tableMeta = {
//      editCampaign: handleOpenEditModal,
//   };

//   return (
//     <>
//       <main className="flex-1 space-y-8 p-4 md:p-8">
//         {/* RESPONSIVE HEADER: Stacks on mobile, row on medium+ screens */}
//         <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
//           <div>
//             <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
//             <p className="text-muted-foreground">A complete overview of your marketing performance.</p>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
//               <DialogTrigger asChild>
//                 <Button><PlusCircle className="mr-2 h-4 w-4" /> Add New Campaign</Button>
//               </DialogTrigger>
//               <DialogContent className="sm:max-w-[425px]">
//                 <DialogHeader>
//                   <DialogTitle>Create New Campaign</DialogTitle>
//                   <DialogDescription>Fill in the details below to launch your next campaign.</DialogDescription>
//                 </DialogHeader>
//                 <AddCampaignForm onFormSubmit={handleAddCampaign} />
//               </DialogContent>
//             </Dialog>
//           </div>
//         </div>
        
//         {/* RESPONSIVE CARD GRID: 1 col on mobile, 2 on medium, 4 on large screens */}
//         <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//           {keyMetrics.map((metric) => <MetricCard key={metric.title} {...metric} />)}
//         </div>
        
//         {/* RESPONSIVE CHART GRID: All stack on mobile, complex layout on large screens */}
//         <div className="grid gap-4 grid-cols-1 lg:grid-cols-5">
//           <div className="lg:col-span-3">
//              <RevenueLineChart />
//           </div>
//           <div className="lg:col-span-2 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
//             <ConversionBarChart />
//             <DemographicsPieChart />
//           </div>
//         </div>
        
//         <CampaignDataTable data={campaigns} meta={tableMeta} />
//       </main>

//       {/* Edit Campaign Dialog */}
//       <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
//         <DialogContent className="sm:max-w-[425px]">
//           <DialogHeader>
//             <DialogTitle>Edit Campaign</DialogTitle>
//             <DialogDescription>Make changes to your campaign here. Click save when you're done.</DialogDescription>
//           </DialogHeader>
//           {campaignToEdit && (
//             <EditCampaignForm
//               campaign={campaignToEdit}
//               onFormSubmit={handleUpdateCampaign}
//             />
//           )}
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// }

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
        
        <CampaignDataTable data={campaigns} meta={tableMeta} />
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
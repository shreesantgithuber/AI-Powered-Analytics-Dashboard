// // // // "use client";

// // // // import * as React from "react";
// // // // import {
// // // //   ColumnDef,
// // // //   flexRender,
// // // //   getCoreRowModel,
// // // //   useReactTable,
// // // //   getPaginationRowModel,
// // // //   getSortedRowModel,
// // // //   SortingState,
// // // //   getFilteredRowModel,
// // // // } from "@tanstack/react-table";
// // // // import {
// // // //   Table,
// // // //   TableBody,
// // // //   TableCell,
// // // //   TableHead,
// // // //   TableHeader,
// // // //   TableRow,
// // // // } from "@/components/ui/table";
// // // // import { Button } from "@/components/ui/button";
// // // // import { Input } from "@/components/ui/input";
// // // // // import { Campaign, campaignData } from "@/lib/data";
// // // // import { Campaign, campaignData } from "../../../lib/data";
// // // // import { ArrowUpDown } from "lucide-react";

// // // // export const columns: ColumnDef<Campaign>[] = [
// // // //   {
// // // //     accessorKey: "name",
// // // //     header: "Campaign Name",
// // // //   },
// // // //   {
// // // //     accessorKey: "status",
// // // //     header: "Status",
// // // //      cell: ({ row }) => {
// // // //       const status = row.getValue("status") as string;
// // // //       const statusClass = status === 'active' ? 'text-green-500' : status === 'paused' ? 'text-yellow-500' : 'text-gray-500';
// // // //       return <div className={`capitalize font-medium ${statusClass}`}>{status}</div>
// // // //     },
// // // //   },
// // // //   {
// // // //     accessorKey: "spend",
// // // //     header: ({ column }) => {
// // // //       return (
// // // //         <Button
// // // //           variant="ghost"
// // // //           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
// // // //         >
// // // //           Spend
// // // //           <ArrowUpDown className="ml-2 h-4 w-4" />
// // // //         </Button>
// // // //       )
// // // //     },
// // // //     cell: ({ row }) => {
// // // //         const amount = parseFloat(row.getValue("spend"))
// // // //         const formatted = new Intl.NumberFormat("en-US", {
// // // //             style: "currency",
// // // //             currency: "USD",
// // // //         }).format(amount)
// // // //         return <div className="text-right font-medium">{formatted}</div>
// // // //     }
// // // //   },
// // // //   {
// // // //     accessorKey: "revenue",
// // // //     header: ({ column }) => (
// // // //        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
// // // //           Revenue<ArrowUpDown className="ml-2 h-4 w-4" />
// // // //         </Button>
// // // //     ),
// // // //      cell: ({ row }) => {
// // // //         const amount = parseFloat(row.getValue("revenue"))
// // // //         const formatted = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount)
// // // //         return <div className="text-right font-medium">{formatted}</div>
// // // //     }
// // // //   },
// // // // ];

// // // // export function CampaignDataTable() {
// // // //   const [data, setData] = React.useState(() => [...campaignData]);
// // // //   const [sorting, setSorting] = React.useState<SortingState>([]);
// // // //   const [globalFilter, setGlobalFilter] = React.useState("");

// // // //   const table = useReactTable({
// // // //     data,
// // // //     columns,
// // // //     getCoreRowModel: getCoreRowModel(),
// // // //     getPaginationRowModel: getPaginationRowModel(),
// // // //     onSortingChange: setSorting,
// // // //     getSortedRowModel: getSortedRowModel(),
// // // //     onGlobalFilterChange: setGlobalFilter,
// // // //     getFilteredRowModel: getFilteredRowModel(),
// // // //     state: {
// // // //       sorting,
// // // //       globalFilter,
// // // //     },
// // // //   });

// // // //   return (
// // // //     <div className="rounded-md border p-4 col-span-1 lg:col-span-4">
// // // //       <div className="flex items-center py-4">
// // // //         <Input
// // // //           placeholder="Filter campaigns..."
// // // //           value={globalFilter ?? ""}
// // // //           onChange={(event) => setGlobalFilter(event.target.value)}
// // // //           className="max-w-sm"
// // // //         />
// // // //       </div>
// // // //       <Table>
// // // //         <TableHeader>
// // // //           {table.getHeaderGroups().map((headerGroup) => (
// // // //             <TableRow key={headerGroup.id}>
// // // //               {headerGroup.headers.map((header) => {
// // // //                 return (
// // // //                   <TableHead key={header.id}>
// // // //                     {header.isPlaceholder
// // // //                       ? null
// // // //                       : flexRender(
// // // //                           header.column.columnDef.header,
// // // //                           header.getContext()
// // // //                         )}
// // // //                   </TableHead>
// // // //                 );
// // // //               })}
// // // //             </TableRow>
// // // //           ))}
// // // //         </TableHeader>
// // // //         <TableBody>
// // // //           {table.getRowModel().rows?.length ? (
// // // //             table.getRowModel().rows.map((row) => (
// // // //               <TableRow
// // // //                 key={row.id}
// // // //                 data-state={row.getIsSelected() && "selected"}
// // // //               >
// // // //                 {row.getVisibleCells().map((cell) => (
// // // //                   <TableCell key={cell.id}>
// // // //                     {flexRender(cell.column.columnDef.cell, cell.getContext())}
// // // //                   </TableCell>
// // // //                 ))}
// // // //               </TableRow>
// // // //             ))
// // // //           ) : (
// // // //             <TableRow>
// // // //               <TableCell colSpan={columns.length} className="h-24 text-center">
// // // //                 No results.
// // // //               </TableCell>
// // // //             </TableRow>
// // // //           )}
// // // //         </TableBody>
// // // //       </Table>
// // // //        <div className="flex items-center justify-end space-x-2 py-4">
// // // //         <Button
// // // //           variant="outline"
// // // //           size="sm"
// // // //           onClick={() => table.previousPage()}
// // // //           disabled={!table.getCanPreviousPage()}
// // // //         >
// // // //           Previous
// // // //         </Button>
// // // //         <Button
// // // //           variant="outline"
// // // //           size="sm"
// // // //           onClick={() => table.nextPage()}
// // // //           disabled={!table.getCanNextPage()}
// // // //         >
// // // //           Next
// // // //         </Button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // "use client";

// // // import * as React from "react";
// // // import {
// // //   ColumnDef,
// // //   flexRender,
// // //   getCoreRowModel,
// // //   useReactTable,
// // //   getPaginationRowModel,
// // //   getSortedRowModel,
// // //   SortingState,
// // //   getFilteredRowModel,
// // //   ColumnFiltersState,
// // // } from "@tanstack/react-table";

// // // // Icons and UI Components
// // // import { MoreHorizontal, ArrowUpDown } from "lucide-react";
// // // import { Button } from "@/components/ui/button";
// // // import {
// // //   DropdownMenu,
// // //   DropdownMenuContent,
// // //   DropdownMenuItem,
// // //   DropdownMenuLabel,
// // //   DropdownMenuSeparator,
// // //   DropdownMenuTrigger,
// // // } from "@/components/ui/dropdown-menu";
// // // import {
// // //   Dialog,
// // //   DialogContent,
// // //   DialogHeader,
// // //   DialogTitle,
// // //   DialogFooter,
// // //   DialogClose,
// // // } from "@/components/ui/dialog";
// // // import {
// // //   Table,
// // //   TableBody,
// // //   TableCell,
// // //   TableHead,
// // //   TableHeader,
// // //   TableRow,
// // // } from "@/components/ui/table";
// // // import { Input } from "@/components/ui/input";
// // // import { Badge } from "@/components/ui/badge";
// // // import { Campaign, campaignData } from "../../../lib/data";
// // // import { CampaignDetailsCard } from "./campaign-details-card";// Import the new component

// // // // The column definition can now be simplified, as the action logic will be in the main component
// // // export const columns: ColumnDef<Campaign>[] = [
// // //   // ... (name, status, spend, revenue columns are unchanged)
// // //    {
// // //     accessorKey: "name",
// // //     header: ({ column }) => (
// // //       <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
// // //         Campaign Name <ArrowUpDown className="ml-2 h-4 w-4" />
// // //       </Button>
// // //     ),
// // //     cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>,
// // //   },
// // //   {
// // //     accessorKey: "status",
// // //     header: "Status",
// // //     cell: ({ row }) => {
// // //       const status = row.getValue("status") as string;
// // //       const variant = status === 'active' ? 'default' : status === 'completed' ? 'secondary' : 'destructive';
// // //       return <Badge variant={variant} className="capitalize">{status}</Badge>;
// // //     },
// // //   },
// // //   {
// // //     accessorKey: "spend",
// // //     header: ({ column }) => (
// // //       <div className="text-right">
// // //         <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
// // //           Spend <ArrowUpDown className="ml-2 h-4 w-4" />
// // //         </Button>
// // //       </div>
// // //     ),
// // //     cell: ({ row }) => {
// // //       const amount = parseFloat(row.getValue("spend"));
// // //       const formatted = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
// // //       return <div className="text-right font-medium">{formatted}</div>;
// // //     }
// // //   },
// // //   {
// // //     accessorKey: "revenue",
// // //     header: ({ column }) => (
// // //       <div className="text-right">
// // //         <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
// // //           Revenue <ArrowUpDown className="ml-2 h-4 w-4" />
// // //         </Button>
// // //       </div>
// // //     ),
// // //     cell: ({ row }) => {
// // //       const amount = parseFloat(row.getValue("revenue"));
// // //       const formatted = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
// // //       return <div className="text-right font-medium">{formatted}</div>;
// // //     }
// // //   },
// // //   {
// // //     id: "actions",
// // //     cell: ({ row, table }) => {
// // //       const campaign = row.original;
// // //       // Access the meta property to call the view handler
// // //       const meta = table.options.meta as {
// // //         viewCampaign: (campaign: Campaign) => void;
// // //       };

// // //       return (
// // //         <div className="text-right">
// // //           <DropdownMenu>
// // //             <DropdownMenuTrigger asChild>
// // //               <Button variant="ghost" className="h-8 w-8 p-0">
// // //                 <span className="sr-only">Open menu</span>
// // //                 <MoreHorizontal className="h-4 w-4" />
// // //               </Button>
// // //             </DropdownMenuTrigger>
// // //             <DropdownMenuContent align="end">
// // //               <DropdownMenuLabel>Actions</DropdownMenuLabel>
// // //               <DropdownMenuItem onClick={() => meta.viewCampaign(campaign)}>
// // //                 View Details
// // //               </DropdownMenuItem>
// // //               <DropdownMenuItem onClick={() => alert(`Editing: ${campaign.name}`)}>
// // //                 Edit Campaign
// // //               </DropdownMenuItem>
// // //               <DropdownMenuItem
// // //                 className="text-red-600 focus:text-red-600 focus:bg-red-50 dark:focus:bg-red-900/50"
// // //                 onClick={() => alert(`This would delete: ${campaign.name}`)}
// // //               >
// // //                 Delete Campaign
// // //               </DropdownMenuItem>
// // //             </DropdownMenuContent>
// // //           </DropdownMenu>
// // //         </div>
// // //       );
// // //     },
// // //   },
// // // ];

// // // export function CampaignDataTable() {
// // //   const [data] = React.useState(() => [...campaignData]);
// // //   const [sorting, setSorting] = React.useState<SortingState>([]);
// // //   const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);

// // //   // STATE MANAGEMENT FOR THE DIALOG
// // //   const [isViewModalOpen, setIsViewModalOpen] = React.useState(false);
// // //   const [selectedCampaign, setSelectedCampaign] = React.useState<Campaign | null>(null);

// // //   const viewCampaign = (campaign: Campaign) => {
// // //     setSelectedCampaign(campaign);
// // //     setIsViewModalOpen(true);
// // //   };

// // //   const table = useReactTable({
// // //     data,
// // //     columns,
// // //     getCoreRowModel: getCoreRowModel(),
// // //     getPaginationRowModel: getPaginationRowModel(),
// // //     onSortingChange: setSorting,
// // //     getSortedRowModel: getSortedRowModel(),
// // //     onColumnFiltersChange: setColumnFilters,
// // //     getFilteredRowModel: getFilteredRowModel(),
// // //     state: {
// // //       sorting,
// // //       columnFilters,
// // //     },
// // //     // Pass the viewCampaign function to the table's meta object
// // //     meta: {
// // //       viewCampaign,
// // //     },
// // //   });

// // //   return (
// // //     <>
// // //       <div className="rounded-xl border bg-card text-card-foreground shadow">
// // //         {/* ... (The rest of the table structure remains the same) */}
// // //         <div className="p-4"><h3 className="font-semibold text-lg">Campaign Performance</h3></div>
// // //         <div className="flex items-center px-4 pb-4"><Input placeholder="Filter by campaign name..." value={(table.getColumn("name")?.getFilterValue() as string) ?? ""} onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)} className="max-w-sm"/></div>
// // //         <div className="border-t"><Table>{/* TableHeader and TableBody */}<TableHeader>{table.getHeaderGroups().map((headerGroup) => (<TableRow key={headerGroup.id}>{headerGroup.headers.map((header) => (<TableHead key={header.id}>{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}</TableHead>))}</TableRow>))}</TableHeader><TableBody>{table.getRowModel().rows?.length ? (table.getRowModel().rows.map((row) => (<TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>{row.getVisibleCells().map((cell) => (<TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>))}</TableRow>))) : (<TableRow><TableCell colSpan={columns.length} className="h-24 text-center">No results.</TableCell></TableRow>)}</TableBody></Table></div>
// // //         <div className="flex items-center justify-end space-x-2 p-4 border-t"><Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>Previous</Button><Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>Next</Button></div>
// // //       </div>

// // //       {/* DIALOG COMPONENT FOR VIEWING DETAILS */}
// // //       <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
// // //         <DialogContent className="sm:max-w-2xl">
// // //           <DialogHeader>
// // //             <DialogTitle>Campaign Details</DialogTitle>
// // //           </DialogHeader>
// // //           {selectedCampaign && <CampaignDetailsCard campaign={selectedCampaign} />}
// // //           <DialogFooter>
// // //             <DialogClose asChild>
// // //                 <Button type="button" variant="secondary">Close</Button>
// // //             </DialogClose>
// // //           </DialogFooter>
// // //         </DialogContent>
// // //       </Dialog>
// // //     </>
// // //   );
// // // }

// // "use client";

// // import * as React from "react";
// // import {
// //   ColumnDef,
// //   flexRender,
// //   getCoreRowModel,
// //   useReactTable,
// //   getPaginationRowModel,
// //   getSortedRowModel,
// //   SortingState,
// //   getFilteredRowModel,
// //   ColumnFiltersState,
// // } from "@tanstack/react-table";

// // // Icons and UI Components
// // import { MoreHorizontal, ArrowUpDown } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import {
// //   DropdownMenu,
// //   DropdownMenuContent,
// //   DropdownMenuItem,
// //   DropdownMenuLabel,
// //   DropdownMenuSeparator,
// //   DropdownMenuTrigger,
// // } from "@/components/ui/dropdown-menu";
// // import {
// //   Dialog,
// //   DialogContent,
// //   DialogHeader,
// //   DialogTitle,
// //   DialogFooter,
// //   DialogClose,
// // } from "@/components/ui/dialog";
// // import {
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableHead,
// //   TableHeader,
// //   TableRow,
// // } from "@/components/ui/table";
// // import { Input } from "@/components/ui/input";
// // import { Badge } from "@/components/ui/badge";
// // import { Campaign } from "../../../lib/data";
// // import { CampaignDetailsCard } from "./campaign-details-card";

// // // Define the props interface for the component
// // interface CampaignDataTableProps {
// //   data: Campaign[];
// // }

// // // Column definitions remain the same
// // export const columns: ColumnDef<Campaign>[] = [
// //   {
// //     accessorKey: "name",
// //     header: ({ column }) => (
// //       <Button
// //         variant="ghost"
// //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
// //       >
// //         Campaign Name <ArrowUpDown className="ml-2 h-4 w-4" />
// //       </Button>
// //     ),
// //     cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>,
// //   },
// //   {
// //     accessorKey: "status",
// //     header: "Status",
// //     cell: ({ row }) => {
// //       const status = row.getValue("status") as string;
// //       const variant =
// //         status === "active"
// //           ? "default"
// //           : status === "completed"
// //           ? "secondary"
// //           : "destructive";
// //       return (
// //         <Badge variant={variant} className="capitalize">
// //           {status}
// //         </Badge>
// //       );
// //     },
// //   },
// //   {
// //     accessorKey: "spend",
// //     header: ({ column }) => (
// //       <div className="text-right">
// //         <Button
// //           variant="ghost"
// //           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
// //         >
// //           Spend <ArrowUpDown className="ml-2 h-4 w-4" />
// //         </Button>
// //       </div>
// //     ),
// //     cell: ({ row }) => {
// //       const amount = parseFloat(row.getValue("spend"));
// //       const formatted = new Intl.NumberFormat("en-US", {
// //         style: "currency",
// //         currency: "USD",
// //       }).format(amount);
// //       return <div className="text-right font-medium">{formatted}</div>;
// //     },
// //   },
// //   {
// //     accessorKey: "revenue",
// //     header: ({ column }) => (
// //       <div className="text-right">
// //         <Button
// //           variant="ghost"
// //           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
// //         >
// //           Revenue <ArrowUpDown className="ml-2 h-4 w-4" />
// //         </Button>
// //       </div>
// //     ),
// //     cell: ({ row }) => {
// //       const amount = parseFloat(row.getValue("revenue"));
// //       const formatted = new Intl.NumberFormat("en-US", {
// //         style: "currency",
// //         currency: "USD",
// //       }).format(amount);
// //       return <div className="text-right font-medium">{formatted}</div>;
// //     },
// //   },
// //   {
// //     id: "actions",
// //     cell: ({ row, table }) => {
// //       const campaign = row.original;
// //       const meta = table.options.meta as {
// //         viewCampaign: (campaign: Campaign) => void;
// //       };

// //       return (
// //         <div className="text-right">
// //           <DropdownMenu>
// //             <DropdownMenuTrigger asChild>
// //               <Button variant="ghost" className="h-8 w-8 p-0">
// //                 <span className="sr-only">Open menu</span>
// //                 <MoreHorizontal className="h-4 w-4" />
// //               </Button>
// //             </DropdownMenuTrigger>
// //             <DropdownMenuContent align="end">
// //               <DropdownMenuLabel>Actions</DropdownMenuLabel>
// //               <DropdownMenuItem onClick={() => meta.viewCampaign(campaign)}>
// //                 View Details
// //               </DropdownMenuItem>
// //               <DropdownMenuItem onClick={() => alert(`Editing: ${campaign.name}`)}>
// //                 Edit Campaign
// //               </DropdownMenuItem>
// //               <DropdownMenuItem
// //                 className="text-red-600 focus:text-red-600 focus:bg-red-50 dark:focus:bg-red-900/50"
// //                 onClick={() => alert(`This would delete: ${campaign.name}`)}
// //               >
// //                 Delete Campaign
// //               </DropdownMenuItem>
// //             </DropdownMenuContent>
// //           </DropdownMenu>
// //         </div>
// //       );
// //     },
// //   },
// // ];

// // export function CampaignDataTable({ data }: CampaignDataTableProps) {
// //   // Local state for UI functionality (sorting, filtering, modals) is kept
// //   const [sorting, setSorting] = React.useState<SortingState>([]);
// //   const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
// //     []
// //   );
// //   const [isViewModalOpen, setIsViewModalOpen] = React.useState(false);
// //   const [selectedCampaign, setSelectedCampaign] =
// //     React.useState<Campaign | null>(null);

// //   const viewCampaign = (campaign: Campaign) => {
// //     setSelectedCampaign(campaign);
// //     setIsViewModalOpen(true);
// //   };

// //   const table = useReactTable({
// //     data, // THE FIX: Use the 'data' prop directly
// //     columns,
// //     getCoreRowModel: getCoreRowModel(),
// //     getPaginationRowModel: getPaginationRowModel(),
// //     onSortingChange: setSorting,
// //     getSortedRowModel: getSortedRowModel(),
// //     onColumnFiltersChange: setColumnFilters,
// //     getFilteredRowModel: getFilteredRowModel(),
// //     state: {
// //       sorting,
// //       columnFilters,
// //     },
// //     meta: {
// //       viewCampaign,
// //     },
// //   });

// //   return (
// //     <>
// //       <div className="rounded-xl border bg-card text-card-foreground shadow">
// //         <div className="p-4">
// //           <h3 className="font-semibold text-lg">Campaign Performance</h3>
// //         </div>
// //         <div className="flex items-center px-4 pb-4">
// //           <Input
// //             placeholder="Filter by campaign name..."
// //             value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
// //             onChange={(event) =>
// //               table.getColumn("name")?.setFilterValue(event.target.value)
// //             }
// //             className="max-w-sm"
// //           />
// //         </div>
// //         <div className="border-t">
// //           <Table>
// //             <TableHeader>
// //               {table.getHeaderGroups().map((headerGroup) => (
// //                 <TableRow key={headerGroup.id}>
// //                   {headerGroup.headers.map((header) => (
// //                     <TableHead key={header.id}>
// //                       {header.isPlaceholder
// //                         ? null
// //                         : flexRender(
// //                             header.column.columnDef.header,
// //                             header.getContext()
// //                           )}
// //                     </TableHead>
// //                   ))}
// //                 </TableRow>
// //               ))}
// //             </TableHeader>
// //             <TableBody>
// //               {table.getRowModel().rows?.length ? (
// //                 table.getRowModel().rows.map((row) => (
// //                   <TableRow
// //                     key={row.id}
// //                     data-state={row.getIsSelected() && "selected"}
// //                   >
// //                     {row.getVisibleCells().map((cell) => (
// //                       <TableCell key={cell.id}>
// //                         {flexRender(
// //                           cell.column.columnDef.cell,
// //                           cell.getContext()
// //                         )}
// //                       </TableCell>
// //                     ))}
// //                   </TableRow>
// //                 ))
// //               ) : (
// //                 <TableRow>
// //                   <TableCell
// //                     colSpan={columns.length}
// //                     className="h-24 text-center"
// //                   >
// //                     No results.
// //                   </TableCell>
// //                 </TableRow>
// //               )}
// //             </TableBody>
// //           </Table>
// //         </div>
// //         <div className="flex items-center justify-end space-x-2 p-4 border-t">
// //           <Button
// //             variant="outline"
// //             size="sm"
// //             onClick={() => table.previousPage()}
// //             disabled={!table.getCanPreviousPage()}
// //           >
// //             Previous
// //           </Button>
// //           <Button
// //             variant="outline"
// //             size="sm"
// //             onClick={() => table.nextPage()}
// //             disabled={!table.getCanNextPage()}
// //           >
// //             Next
// //           </Button>
// //         </div>
// //       </div>

// //       {/* DIALOG COMPONENT FOR VIEWING DETAILS */}
// //       <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
// //         <DialogContent className="sm:max-w-2xl">
// //           <DialogHeader>
// //             <DialogTitle>Campaign Details</DialogTitle>
// //           </DialogHeader>
// //           {selectedCampaign && <CampaignDetailsCard campaign={selectedCampaign} />}
// //           <DialogFooter>
// //             <DialogClose asChild>
// //               <Button type="button" variant="secondary">
// //                 Close
// //               </Button>
// //             </DialogClose>
// //           </DialogFooter>
// //         </DialogContent>
// //       </Dialog>
// //     </>
// //   );
// // }

// "use client";

// import * as React from "react";
// import {
//   ColumnDef,
//   flexRender,
//   getCoreRowModel,
//   useReactTable,
//   getPaginationRowModel,
//   getSortedRowModel,
//   SortingState,
//   getFilteredRowModel,
//   ColumnFiltersState,
//   TableMeta, // Import TableMeta for typing
// } from "@tanstack/react-table";

// // Icons and UI Components
// import { MoreHorizontal, ArrowUpDown } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
//   DialogClose,
// } from "@/components/ui/dialog";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Input } from "@/components/ui/input";
// import { Badge } from "@/components/ui/badge";
// import { Campaign } from "../../../lib/data";
// import { CampaignDetailsCard } from "./campaign-details-card";

// // Define an interface for our custom meta object
// interface CampaignTableMeta extends TableMeta<Campaign> {
//   viewCampaign: (campaign: Campaign) => void;
//   editCampaign: (campaign: Campaign) => void;
// }

// // Define the props interface for the component
// interface CampaignDataTableProps {
//   data: Campaign[];
//   meta: { // Define the meta prop
//     editCampaign: (campaign: Campaign) => void;
//   };
// }

// // Column definitions with updated actions cell
// export const columns: ColumnDef<Campaign>[] = [
//   {
//     accessorKey: "name",
//     header: ({ column }) => (
//       <Button
//         variant="ghost"
//         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//       >
//         Campaign Name <ArrowUpDown className="ml-2 h-4 w-4" />
//       </Button>
//     ),
//     cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>,
//   },
//   {
//     accessorKey: "status",
//     header: "Status",
//     cell: ({ row }) => {
//       const status = row.getValue("status") as string;
//       const variant =
//         status === "active"
//           ? "default"
//           : status === "completed"
//           ? "secondary"
//           : "destructive";
//       return <Badge variant={variant} className="capitalize">{status}</Badge>;
//     },
//   },
//   {
//     accessorKey: "spend",
//     header: ({ column }) => (
//       <div className="text-right">
//         <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
//           Spend <ArrowUpDown className="ml-2 h-4 w-4" />
//         </Button>
//       </div>
//     ),
//     cell: ({ row }) => {
//       const amount = parseFloat(row.getValue("spend"));
//       const formatted = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
//       return <div className="text-right font-medium">{formatted}</div>;
//     },
//   },
//   {
//     accessorKey: "revenue",
//     header: ({ column }) => (
//       <div className="text-right">
//         <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
//           Revenue <ArrowUpDown className="ml-2 h-4 w-4" />
//         </Button>
//       </div>
//     ),
//     cell: ({ row }) => {
//       const amount = parseFloat(row.getValue("revenue"));
//       const formatted = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
//       return <div className="text-right font-medium">{formatted}</div>;
//     },
//   },
//   {
//     id: "actions",
//     cell: ({ row, table }) => {
//       const campaign = row.original;
//       // THE FIX: Use the custom CampaignTableMeta interface for strong typing
//       const meta = table.options.meta as CampaignTableMeta;

//       return (
//         <div className="text-right">
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" className="h-8 w-8 p-0">
//                 <span className="sr-only">Open menu</span>
//                 <MoreHorizontal className="h-4 w-4" />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuLabel>Actions</DropdownMenuLabel>
//               <DropdownMenuItem onClick={() => meta.viewCampaign(campaign)}>View Details</DropdownMenuItem>
//               <DropdownMenuItem onClick={() => meta.editCampaign(campaign)}>Edit Campaign</DropdownMenuItem>
//               <DropdownMenuItem
//                 className="text-red-600 focus:text-red-600 focus:bg-red-50 dark:focus:bg-red-900/50"
//                 onClick={() => alert(`This would delete: ${campaign.name}`)}
//               >
//                 Delete Campaign
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       );
//     },
//   },
// ];

// export function CampaignDataTable({ data, meta }: CampaignDataTableProps) {
//   const [sorting, setSorting] = React.useState<SortingState>([]);
//   const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
//   const [isViewModalOpen, setIsViewModalOpen] = React.useState(false);
//   const [selectedCampaign, setSelectedCampaign] = React.useState<Campaign | null>(null);

//   const viewCampaign = (campaign: Campaign) => {
//     setSelectedCampaign(campaign);
//     setIsViewModalOpen(true);
//   };

//   const table = useReactTable({
//     data,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     onSortingChange: setSorting,
//     getSortedRowModel: getSortedRowModel(),
//     onColumnFiltersChange: setColumnFilters,
//     getFilteredRowModel: getFilteredRowModel(),
//     state: {
//       sorting,
//       columnFilters,
//     },
//     // Pass both handlers to the table's meta object
//     meta: {
//       viewCampaign,
//       editCampaign: meta.editCampaign, // Pass the handler from props
//     },
//   });

//   return (
//     <>
//       <div className="rounded-xl border bg-card text-card-foreground shadow">
//         <div className="p-4">
//           <h3 className="font-semibold text-lg">Campaign Performance</h3>
//         </div>
//         <div className="flex items-center px-4 pb-4">
//           <Input
//             placeholder="Filter by campaign name..."
//             value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
//             onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)}
//             className="max-w-sm"
//           />
//         </div>
//         <div className="border-t">
//           <Table>
//             <TableHeader>
//               {table.getHeaderGroups().map((headerGroup) => (
//                 <TableRow key={headerGroup.id}>
//                   {headerGroup.headers.map((header) => (
//                     <TableHead key={header.id}>
//                       {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
//                     </TableHead>
//                   ))}
//                 </TableRow>
//               ))}
//             </TableHeader>
//             <TableBody>
//               {table.getRowModel().rows?.length ? (
//                 table.getRowModel().rows.map((row) => (
//                   <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
//                     {row.getVisibleCells().map((cell) => (
//                       <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
//                     ))}
//                   </TableRow>
//                 ))
//               ) : (
//                 <TableRow>
//                   <TableCell colSpan={columns.length} className="h-24 text-center">No results.</TableCell>
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </div>
//         <div className="flex items-center justify-end space-x-2 p-4 border-t">
//           <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>Previous</Button>
//           <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>Next</Button>
//         </div>
//       </div>

//       <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
//         <DialogContent className="sm:max-w-2xl">
//           <DialogHeader><DialogTitle>Campaign Details</DialogTitle></DialogHeader>
//           {selectedCampaign && <CampaignDetailsCard campaign={selectedCampaign} />}
//           <DialogFooter><DialogClose asChild><Button type="button" variant="secondary">Close</Button></DialogClose></DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// }

"use client";

import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  getFilteredRowModel,
  ColumnFiltersState,
  TableMeta,
} from "@tanstack/react-table";

// Icons and UI Components
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Campaign } from "../../../lib/data";
import { CampaignDetailsCard } from "./campaign-details-card";

// Interface for our custom meta object for table actions
interface CampaignTableMeta extends TableMeta<Campaign> {
  viewCampaign: (campaign: Campaign) => void;
  editCampaign: (campaign: Campaign) => void;
}

// Props interface for the component
interface CampaignDataTableProps {
  data: Campaign[];
  meta: {
    editCampaign: (campaign: Campaign) => void;
  };
}

// Column definitions
export const columns: ColumnDef<Campaign>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Campaign Name <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const variant = status === "active" ? "default" : status === "completed" ? "secondary" : "destructive";
      return <Badge variant={variant} className="capitalize">{status}</Badge>;
    },
  },
  {
    accessorKey: "spend",
    header: ({ column }) => (
      <div className="text-right">
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Spend <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("spend"));
      const formatted = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "revenue",
    header: ({ column }) => (
      <div className="text-right">
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Revenue <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("revenue"));
      const formatted = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row, table }) => {
      const campaign = row.original;
      const meta = table.options.meta as CampaignTableMeta;

      return (
        <div className="text-right">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0"><span className="sr-only">Open menu</span><MoreHorizontal className="h-4 w-4" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => meta.viewCampaign(campaign)}>View Details</DropdownMenuItem>
              <DropdownMenuItem onClick={() => meta.editCampaign(campaign)}>Edit Campaign</DropdownMenuItem>
              <DropdownMenuItem className="text-red-600 focus:text-red-600 focus:bg-red-50 dark:focus:bg-red-900/50" onClick={() => alert(`This would delete: ${campaign.name}`)}>Delete Campaign</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];

export function CampaignDataTable({ data, meta }: CampaignDataTableProps) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [isViewModalOpen, setIsViewModalOpen] = React.useState(false);
  const [selectedCampaign, setSelectedCampaign] = React.useState<Campaign | null>(null);

  const viewCampaign = (campaign: Campaign) => {
    setSelectedCampaign(campaign);
    setIsViewModalOpen(true);
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: { sorting, columnFilters },
    meta: { viewCampaign, editCampaign: meta.editCampaign },
  });

  return (
    <>
      <div className="rounded-xl border bg-card text-card-foreground shadow">
        <div className="p-4">
          <h3 className="font-semibold text-lg">Campaign Performance</h3>
        </div>
        <div className="flex items-center px-4 pb-4">
          <Input placeholder="Filter by campaign name..." value={(table.getColumn("name")?.getFilterValue() as string) ?? ""} onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)} className="max-w-sm" />
        </div>
        
        {/* RESPONSIVENESS FIX: This wrapper makes the table scroll horizontally on small screens */}
        <div className="relative w-full overflow-auto">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}</TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">No results.</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-end space-x-2 p-4 border-t">
          <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>Previous</Button>
          <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>Next</Button>
        </div>
      </div>

      <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader><DialogTitle>Campaign Details</DialogTitle></DialogHeader>
          {selectedCampaign && <CampaignDetailsCard campaign={selectedCampaign} />}
          <DialogFooter><DialogClose asChild><Button type="button" variant="secondary">Close</Button></DialogClose></DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
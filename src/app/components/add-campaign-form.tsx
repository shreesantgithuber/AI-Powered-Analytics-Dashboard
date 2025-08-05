// "use client"

// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import * as z from "zod"
// import { toast } from "sonner"

// import { Button } from "@/components/ui/button"
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"

// // Define the validation schema for the form
// const formSchema = z.object({
//   name: z.string().min(5, {
//     message: "Campaign name must be at least 5 characters.",
//   }),
//   spend: z.coerce.number().positive({
//     message: "Spend must be a positive number.",
//   }),
// });

// // ADD THE `export` KEYWORD HERE
// export type NewCampaignValues = z.infer<typeof formSchema>;

// interface AddCampaignFormProps {
//   onFormSubmit: () => void;
// }

// export function AddCampaignForm({ onFormSubmit }: AddCampaignFormProps) {
//   // 1. Define your form.
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       spend: 0,
//     },
//   });

//   // 2. Define a submit handler.
//   function onSubmit(values: z.infer<typeof formSchema>) {
//     console.log("New Campaign Data:", values);

//   toast.success("Campaign Created Successfully!", {
//       description: `Campaign "${values.name}" with a spend of $${values.spend} has been added.`,
//   });
  
//   // Pass the form values to the parent component's function
//   onFormSubmit(values);
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//         <FormField
//           control={form.control}
//           name="name"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Campaign Name</FormLabel>
//               <FormControl>
//                 <Input placeholder="e.g. 'Summer 2025 Blockbuster Sale'" {...field} />
//               </FormControl>
//               <FormDescription>
//                 This will be the public name for your new campaign.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="spend"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Budgeted Spend</FormLabel>
//               <FormControl>
//                 <Input type="number" placeholder="e.g. 15000" {...field} />
//               </FormControl>
//               <FormDescription>
//                 Enter the total budget for this campaign in USD.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <div className="flex justify-end">
//             <Button type="submit">Create Campaign</Button>
//         </div>
//       </form>
//     </Form>
//   )
// }


// "use client"

// import * as React from "react"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import * as z from "zod"
// import { toast } from "sonner"

// import { Button } from "@/components/ui/button"
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Input } from "@/components/ui/input"
// import { Campaign } from "../../../lib/data"

// const formSchema = z.object({
//   name: z.string().min(5, { message: "Campaign name must be at least 5 characters." }),
//   spend: z.coerce.number().positive({ message: "Spend must be a positive number." }),
//   status: z.enum(["active", "paused", "completed"]),
// });

// interface EditCampaignFormProps {
//   campaign: Campaign; 
//   onFormSubmit: (values: Campaign) => void;
// }

// export function EditCampaignForm({ campaign, onFormSubmit }: EditCampaignFormProps) {
//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: campaign.name,
//       spend: campaign.spend,
//       status: campaign.status,
//     },
//   });

//   React.useEffect(() => {
//     form.reset(campaign);
//   }, [campaign, form]);

//   function onSubmit(values: z.infer<typeof formSchema>) {
//     const updatedCampaign = { ...campaign, ...values };
//     onFormSubmit(updatedCampaign);
//     toast.success("Campaign Updated Successfully!", {
//         description: `Changes to "${values.name}" have been saved.`,
//     });
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//         <FormField
//           control={form.control}
//           name="name"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Campaign Name</FormLabel>
//               <FormControl>
//                 {/* THE FIX: Explicitly handle the field.value type */}
//                 <Input {...field} value={String(field.value ?? '')} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="status"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Status</FormLabel>
//               <Select onValueChange={field.onChange} defaultValue={field.value}>
//                 <FormControl><SelectTrigger><SelectValue placeholder="Select a status" /></SelectTrigger></FormControl>
//                 <SelectContent>
//                   <SelectItem value="active">Active</SelectItem>
//                   <SelectItem value="paused">Paused</SelectItem>
//                   <SelectItem value="completed">Completed</SelectItem>
//                 </SelectContent>
//               </Select>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="spend"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Budgeted Spend</FormLabel>
//               <FormControl>
//                 {/* THE FIX: Explicitly handle the field.value type */}
//                 <Input type="number" {...field} value={String(field.value ?? '')} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <div className="flex justify-end">
//             <Button type="submit">Save Changes</Button>
//         </div>
//       </form>
//     </Form>
//   )
// }


"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

// 1. Define the validation schema
const formSchema = z.object({
  name: z.string().min(5, {
    message: "Campaign name must be at least 5 characters.",
  }),
  spend: z.coerce.number().positive({
    message: "Spend must be a positive number.",
  }),
});

// 2. Export the type for the parent component to use
export type NewCampaignValues = z.infer<typeof formSchema>;

// 3. Define the props interface
interface AddCampaignFormProps {
  onFormSubmit: (values: NewCampaignValues) => void;
}

// 4. THE CRITICAL FIX: Ensure the function is EXPORTED
export function AddCampaignForm({ onFormSubmit }: AddCampaignFormProps) {
  // Let useForm infer types from the resolver to avoid type conflicts
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      spend: 0,
    },
  });

  // The 'values' type is correctly inferred here
  function onSubmit(values: z.infer<typeof formSchema>) {
    onFormSubmit(values);
    toast.success("Campaign Created Successfully!", {
        description: `Campaign "${values.name}" has been added.`,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Campaign Name</FormLabel>
              <FormControl>
                {/* Ensure value is explicitly handled to satisfy TypeScript */}
                <Input placeholder="e.g. 'Summer 2025 Sale'" {...field} value={String(field.value ?? '')} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="spend"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Budgeted Spend</FormLabel>
              <FormControl>
                 {/* Ensure value is explicitly handled to satisfy TypeScript */}
                <Input type="number" placeholder="e.g. 15000" {...field} value={String(field.value ?? '')} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
            <Button type="submit">Create Campaign</Button>
        </div>
      </form>
    </Form>
  )
}
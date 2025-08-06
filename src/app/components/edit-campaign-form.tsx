
"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Campaign } from "../../../lib/data"

// Schema remains the same
const formSchema = z.object({
  name: z.string().min(5, { message: "Campaign name must be at least 5 characters." }),
  spend: z.coerce.number().positive({ message: "Spend must be a positive number." }),
  status: z.enum(["active", "paused", "completed"]),
});

// The exported type for the parent component
export type EditCampaignValues = z.infer<typeof formSchema>;

interface EditCampaignFormProps {
  campaign: Campaign; 
  onFormSubmit: (values: Campaign) => void;
}

// Ensure the component is exported
export function EditCampaignForm({ campaign, onFormSubmit }: EditCampaignFormProps) {
  // THE CRITICAL FIX: Remove the explicit <EditCampaignValues> generic.
  // Let useForm infer types from the zodResolver.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: campaign.name,
      spend: campaign.spend,
      status: campaign.status,
    },
  });

  React.useEffect(() => {
    form.reset(campaign);
  }, [campaign, form]);

  // The 'values' type is now correctly inferred here from the schema
  function onSubmit(values: z.infer<typeof formSchema>) {
    const updatedCampaign = { ...campaign, ...values };
    toast.success("Campaign Updated Successfully!", {
        description: `Changes to "${values.name}" have been saved.`,
    });
    onFormSubmit(updatedCampaign);
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
                <Input {...field} value={String(field.value ?? '')} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="paused">Paused</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
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
                <Input type="number" {...field} value={String(field.value ?? '')} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
            <Button type="submit">Save Changes</Button>
        </div>
      </form>
    </Form>
  )
}
"use client"

import React from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"

// Validation schema
const formSchema = z.object({
  issueName: z.string().min(2, "Issue name must be at least 2 characters"),
  description: z.string().min(5, "Description must be at least 5 characters"),
})

const CreateIssueForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
     issueName:"",
        description:""
    },
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <Form {...form}>
        <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="issueName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Issue Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border w-full border-gray-700 py-5 px-5"
                    placeholder="issue name ..."
                  />
                </FormControl>
                <FormDescription>
                  Enter the email of the user you want to invite.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border w-full border-gray-700 py-5 px-5"
                    placeholder="description..."
                  />
                </FormControl>
                <FormDescription>
                  Enter the email of the user you want to invite.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogClose>
            <Button type="submit">Create Issue</Button>
          </DialogClose>
        </form>
      </Form>
    </div>
  )
}

export default CreateIssueForm

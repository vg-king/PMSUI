import React from 'react';
"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const CreateCommentForm = ({ issueId }) => {
  const form = useForm({
    defaultValues: {
      content: "",
    }
  });

  const onSubmit = (data) => {
    console.log("Create Project Data", data);
  };

  return (
    <div className="bg-[#1e1f24] p-4 rounded-xl border border-gray-700">
      <Form {...form}>
        <form
          className="space-y-3"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className="bg-orange-500 text-white font-semibold">
                      R
                    </AvatarFallback>
                  </Avatar>

                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      className="bg-[#2b2c31] border border-gray-600 text-gray-200 placeholder-gray-400 rounded-lg px-4 py-2 w-full focus:border-orange-500 focus:ring-2 focus:ring-orange-400/50"
                      placeholder="Write a comment..."
                    />
                  </FormControl>
                </div>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-2 transition-all font-medium"
          >
            Create Comment
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateCommentForm;

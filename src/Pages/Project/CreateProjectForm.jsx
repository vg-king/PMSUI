"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DialogClose } from "@radix-ui/react-dialog";

// ✅ Validation Schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Project name must be at least 2 characters." }),
  description: z.string().min(5, { message: "Description must be at least 5 characters." }),
  category: z.string().min(1, { message: "Category is required." }),
  tags: z.array(z.string()).nonempty({ message: "At least one tag is required." }),
});

const CreateProjectForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      category: "",
      tags: ["javascript", "react"],
    },
  });

  const onSubmit = (data) => {
    console.log("Create project Data", data);
  };

  // Change this to `true` if user exceeds free limit
  const hasReachedLimit = false;

  return (
    <div className="max-w-lg mx-auto mt-6">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800"
        >
          <h2 className="text-2xl font-semibold text-white">Create New Project</h2>
          <p className="text-gray-400 text-sm">
            Fill out the form below to create a new project for your team.
          </p>

          {/* Project Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Project Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Enter project name..."
                    className="border border-gray-700 bg-gray-800 text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Description</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Describe your project..."
                    className="border border-gray-700 bg-gray-800 text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Category */}
<FormField
  control={form.control}
  name="category"
  render={({ field }) => (
    <FormItem>
      <FormLabel className="text-gray-300">Category</FormLabel>
      <Select
        onValueChange={field.onChange}
        defaultValue={field.value}
      >
        <FormControl>
          <SelectTrigger className="border border-gray-700 bg-gray-800 text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition w-full">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
        </FormControl>
        <SelectContent className="bg-gray-800 text-white border border-gray-700">
          {/* Popular Tech Stacks */}
          <SelectItem value="javascript">JavaScript</SelectItem>
          <SelectItem value="typescript">TypeScript</SelectItem>
          <SelectItem value="react">React</SelectItem>
          <SelectItem value="nextjs">Next.js</SelectItem>
          <SelectItem value="vue">Vue.js</SelectItem>
          <SelectItem value="angular">Angular</SelectItem>
          <SelectItem value="svelte">Svelte</SelectItem>
          <SelectItem value="nodejs">Node.js</SelectItem>
          <SelectItem value="express">Express.js</SelectItem>
          <SelectItem value="nestjs">NestJS</SelectItem>
          <SelectItem value="python">Python</SelectItem>
          <SelectItem value="django">Django</SelectItem>
          <SelectItem value="flask">Flask</SelectItem>
          <SelectItem value="fastapi">FastAPI</SelectItem>
          <SelectItem value="java">Java</SelectItem>
          <SelectItem value="springboot">Spring Boot</SelectItem>
          <SelectItem value="kotlin">Kotlin</SelectItem>
          <SelectItem value="swift">Swift</SelectItem>
          <SelectItem value="flutter">Flutter</SelectItem>
          <SelectItem value="reactnative">React Native</SelectItem>
          <SelectItem value="php">PHP</SelectItem>
          <SelectItem value="laravel">Laravel</SelectItem>
          <SelectItem value="ruby">Ruby</SelectItem>
          <SelectItem value="rails">Ruby on Rails</SelectItem>
          <SelectItem value="golang">Go (Golang)</SelectItem>
          <SelectItem value="rust">Rust</SelectItem>
          <SelectItem value="csharp">C#</SelectItem>
          <SelectItem value="dotnet">.NET</SelectItem>
          <SelectItem value="cplusplus">C++</SelectItem>
          <SelectItem value="c">C</SelectItem>
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  )}
/>

          {/* Tags */}
<FormField
  control={form.control}
  name="tags"
  render={({ field }) => {
    const selectedTags = field.value || [];

    const allTags = [
      "javascript", "typescript", "react", "nextjs", "vue", "angular", "nodejs",
      "python", "django", "flask", "java", "springboot", "golang", "rust", "csharp"
    ];

    const toggleTag = (tag) => {
      if (selectedTags.includes(tag)) {
        field.onChange(selectedTags.filter(t => t !== tag));
      } else {
        field.onChange([...selectedTags, tag]);
      }
    };

    return (
      <FormItem>
        <FormLabel className="text-gray-300">Tags</FormLabel>
        <FormDescription className="text-gray-400 text-sm">
          Add keywords related to your project.
        </FormDescription>

        {/* Selected Tag Bubbles */}
        <div className="flex gap-2 flex-wrap mt-2">
          {selectedTags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-2 px-3 py-1 bg-blue-600 text-white rounded-full text-sm shadow-sm"
            >
              {tag}
              <button
                type="button"
                onClick={() => toggleTag(tag)}
                className="text-xs text-white hover:text-red-200"
              >
                ✕
              </button>
            </span>
          ))}
        </div>

        {/* Tag Selector */}
        <div className="mt-3 border border-gray-700 rounded-lg">
          <Select
            onValueChange={(val) => toggleTag(val)}
          >
            <FormControl>
              <SelectTrigger className="bg-gray-800 text-white border-none">
                <SelectValue placeholder="Select tags..." />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="bg-gray-800 text-white border border-gray-700">
              {allTags.map((tag) => (
                <SelectItem key={tag} value={tag}>
                  {tag}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <FormMessage />
      </FormItem>
    );
  }}
/>

          {/* Submit / Limit Message */}
          <DialogClose asChild>
            {hasReachedLimit ? (
              <div className="text-center text-red-400 text-sm">
                You can create only 3 projects with the free plan,
                please upgrade your plan.
              </div>
            ) : (
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 transition"
              >
                Create Project
              </Button>
            )}
          </DialogClose>
        </form>
      </Form>
    </div>
  );
};

export default CreateProjectForm;

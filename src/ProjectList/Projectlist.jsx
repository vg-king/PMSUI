import React, { useState } from 'react'
import { MagnifyingGlassIcon, MixerHorizontalIcon } from '@radix-ui/react-icons'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"

import { cn } from "@/lib/utils"
import ProjectCard from '../Pages/Project/ProjectCard'

const categories = ["all", "fullstack", "frontend", "backend"]
const tags = [
  "all", "react", "nextjs", "spring boot", "mysql",
  "mongodb", "angular", "python", "flask", "django"
]

const Projectlist = () => {
  const[keyword,setKeyword]=useState("");
  const handleFilterChange = (filterType, value) => {
    console.log(`${filterType}:`, value);
  };
  
  const handleSearchChange = (e) => {
    console.log('Search:', e.target.value);
    setKeyword(e.target.value)
  }

  return (
    <div className='relative px-5 lg:px-0 lg:flex gap-5 justify-center py-5'>
      <section className='filter-section hidden lg:block'>
        <Card className="p-5 sticky top-10">
          <div className='flex justify-between lg:w-[20rem]'>
            <p className='text-xl -tracking-wider'>Filters</p>
            <Button variant="ghost" size="icon">
              <MixerHorizontalIcon />
            </Button>
          </div>
          <CardContent className='mt-5'>
            <ScrollArea className="h-[calc(100vh-8rem)] pr-4">
              {/* Category */}
              <div>
                <h2 className="pb-3 text-sm font-semibold tracking-wide text-gray-400 border-b border-gray-700">
                  Category
                </h2>
                <div className="pt-4 space-y-3">
                  <RadioGroup
                    defaultValue="all"
                    onValueChange={(value) => handleFilterChange("category", value)}
                  >
                    {categories.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-800 transition-colors"
                      >
                        <RadioGroupItem
                          value={item}
                          id={`cat-${item}`}
                          className="h-4 w-4 rounded-full border border-gray-400 data-[state=checked]:border-orange-500 data-[state=checked]:bg-orange-500 flex items-center justify-center"
                        >
                          <div className="h-2 w-2 rounded-full bg-white" />
                        </RadioGroupItem>
                        <Label
                          htmlFor={`cat-${item}`}
                          className="capitalize cursor-pointer text-gray-200"
                        >
                          {item}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>

              {/* Tag */}
              <div className="mt-8">
                <h2 className="pb-3 text-sm font-semibold tracking-wide text-gray-400 border-b border-gray-700">
                  Tag
                </h2>
                <div className="pt-4 space-y-3">
                  <RadioGroup
                    defaultValue="all"
                    onValueChange={(value) => handleFilterChange("tag", value)}
                  >
                    {tags.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-800 transition-colors"
                      >
                        <RadioGroupItem
                          value={item}
                          id={`tag-${item}`}
                          className="h-4 w-4 rounded-full border border-gray-400 data-[state=checked]:border-orange-500 data-[state=checked]:bg-orange-500 flex items-center justify-center"
                        >
                          <div className="h-2 w-2 rounded-full bg-white" />
                        </RadioGroupItem>
                        <Label
                          htmlFor={`tag-${item}`}
                          className="capitalize cursor-pointer text-gray-200"
                        >
                          {item}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </section>

      <section className='projectListSection w-full lg:w-[48rem]'>
        <div className='flex gap-2 items-center pb-5 justify-between'>
          <div className='relative w-full'>
            <MagnifyingGlassIcon className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 z-10' />
            <Input
              onChange={handleSearchChange}
              placeholder="search project"
              className="w-full pl-10 pr-4"
            />
          </div>
        </div>
       <div className='space-y-5 min-h-[74vh]'>
  {
    keyword 
      ? [1,1,1].map((item, index) => <ProjectCard key={index}/>)
      : [1,1,1,1].map((item, index) => <ProjectCard key={index}/>) // Changed this line
  }
</div>

      </section>
    </div>
  )
}

export default Projectlist

import React from 'react'
import { useParams } from 'react-router-dom'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import CreateCommentForm from './CreateCommentForm'
import CommentCard from './CommentCard'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
const IssueDetatils = () => {
    const { projectId, issueId } = useParams()
    const handleUpdateIssueStatus = (status) => {
        console.log(status);

    }
    return (
        <div className='px-20 py-8 text-gray-400'>
            <div className='flex justify-between border p-10 rounded-lg'>
                <ScrollArea className="h-[80vh]  w-[60%]">
                    <div>
                        <h1 className='text-lg font-semibold text-gray-400'>Create NavBar</h1>
                        <div className='py-5'>
                            <h2 className='font-semibold text-gray-400'>Description</h2>
                            <p className='text-gray-400 text-sm mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae minus aliquam libero inventore ab. Atque quaerat laborum, voluptas veniam alias ipsam obcaecati ipsum magnam ab, quae, magni aliquam! Possimus, facilis.</p>
                        </div>
                        <div className='mt-5'>
                            <h1 className='pb-3'>Activity</h1>
                            <Tabs defaultValue="comments" className="w-[400px]">
                                <TabsList>
                                    <TabsTrigger value="all">
                                        All
                                    </TabsTrigger>
                                    <TabsTrigger value="comments">
                                        comments
                                    </TabsTrigger>
                                    <TabsTrigger value="history">
                                        History
                                    </TabsTrigger>
                                </TabsList>
                                <TabsContent value="all">
                                    All Make changes to your Account here
                                </TabsContent>
                                <TabsContent value="history">
                                    histoy
                                </TabsContent>
                                <TabsContent value="comments">
                                    <CreateCommentForm issueId={issueId}>
                                    </CreateCommentForm>
                                    <div className='mt-8 space-y-6'>
                                        {[1, 1, 1].map((item) => <CommentCard key={item}>

                                        </CommentCard>)}
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </ScrollArea>
                <div className='w-full lg:w-[30%] space-y-2'>
                    <Select onValueChange={handleUpdateIssueStatus}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="To DO" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="pending">To DO</SelectItem>
                            <SelectItem value="in_progress">In Progress</SelectItem>
                            <SelectItem value="done">Done</SelectItem>
                        </SelectContent>
                    </Select>
                    <div className='border rounded-lg'>
                        <p className='border-b py-3 px-5'>Details</p>
                        <div className='p-5'>
                            <div className='space-y-7'>
                                <div className='flex gap-10 items-center'>
                                    <p className='w-[7rem]'>Assignee</p>
                                </div  >
                                <div className="flex items-center gap-3">

                                    <Avatar className="h-8 w-8 text-xs">
                                        <AvatarFallback>
                                            R
                                        </AvatarFallback>
                                    </Avatar>
                                    <p>Vishnu</p>

                                </div>
                                <div className='flex gap-10 items-center'>
                                    <p className='w-[7rem]'>Labels</p>
                                </div  >
                                <div className="flex items-center gap-3">


                                    <p>None</p>

                                </div>
                                <div className='flex gap-10 items-center'>
                                    <p className='w-[7rem]'>Status</p>
                                    <Badge>
                                        in_progress
                                    </Badge>
                                </div  >
                                <div className="flex items-center gap-3">
                                    <p className='w-[7rem]'>Realase</p>


                                    <p>10-04-24</p>


                                </div>
                                 <div className='flex gap-10 items-center'>
                                    <p className='w-[7rem]'>Reported By</p>
                                </div  >
                                 <div className="flex items-center gap-3">

                                    <Avatar className="h-8 w-8 text-xs">
                                        <AvatarFallback>
                                            R
                                        </AvatarFallback>
                                    </Avatar>
                                    <p>Raam</p>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default IssueDetatils

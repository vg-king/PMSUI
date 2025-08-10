import { DotFilledIcon, DotsVerticalIcon } from '@radix-ui/react-icons'
import { Card } from '../../components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { useNavigate } from 'react-router-dom'

const ProjectCard = () => {
    const navigate = useNavigate()
    return (
        <Card className='p-5 w-full lg:max-w-3xl'>
            <div className='space-y-5'>
                <div className='space-y-2'>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-5'>
                            <h1 onClick={()=>navigate("/project/3")} className='cursor-pointer font-bold text-lg'>
                                Create Ecommerce Project
                            </h1>
                            <DotFilledIcon/>
                            <p className='text-sm text-gray-400'>Full Stack</p>
                        </div>
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger className='rounded-full p-2 hover:bg-gray-400 transition-colors'>
                                    <DotsVerticalIcon />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>
                                        Update
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                    </div>
                   <div>
                    <p className='text-gray-500 text-sm'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni quis ipsa aspernatur repellat, nam totam voluptas eligendi commodi doloribus eaque accusamus voluptatem eveniet vel odit nesciunt explicabo. Ratione, nihil.
                    </p>
                   </div>
                   <div className='flex flex-wrap gap-2 items-center'>
                    {["frontend", "react", "javascript", "tailwind"].map((item, index)=><Badge key={index} variant= "outline">{item}</Badge>)}
                   </div>
                </div>
                
            </div>
        </Card>
    )
}

export default ProjectCard

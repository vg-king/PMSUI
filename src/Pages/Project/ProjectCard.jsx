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
        <Card className='p-5 w-full lg:max-w-3xl hover:shadow-lg transition-shadow'>
            <div className='space-y-5'>
                <div className='space-y-2'>
                    <div className='flex justify-between items-start'>
                        <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5'>
                            <h2
                              onClick={()=>navigate("/project/3")}
                              className='cursor-pointer font-bold text-lg hover:text-blue-400 transition-colors'
                              role="button"
                              tabIndex={0}
                              onKeyDown={(e) => e.key === 'Enter' && navigate("/project/3")}
                              aria-label="Open Create Ecommerce Project"
                            >
                                Create Ecommerce Project
                            </h2>
                            <div className='flex items-center gap-2'>
                              <DotFilledIcon className="hidden sm:block"/>
                              <p className='text-sm text-gray-400'>Full Stack</p>
                            </div>
                        </div>
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger
                                  className='rounded-full p-2 hover:bg-gray-400 transition-colors'
                                  aria-label="Project options"
                                >
                                    <DotsVerticalIcon />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem role="menuitem">
                                        Update
                                    </DropdownMenuItem>
                                    <DropdownMenuItem role="menuitem">
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

import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { TrashIcon } from 'lucide-react'
const CommentCard = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex items-center gap-4'>
        <Avatar>
            <AvatarFallback>
                R
            </AvatarFallback>
        </Avatar>
        <div className='space-y-1'>
            <p>Vishnu</p>
            <p>How much work is Pending</p>
        </div>

      </div>
      <Button className="rounded-full " variant="ghost" size="icon">
<TrashIcon></TrashIcon>
      </Button>
    </div>
  )
}

export default CommentCard

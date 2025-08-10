import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import CreateProjectForm from '../Project/CreateProjectForm';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { PersonIcon } from '@radix-ui/react-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate=useNavigate()
  return (
    <div className='border-b py-4 px-5 flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <h1
          onClick={()=>navigate("/")}
          className='cursor-pointer font-bold text-lg hover:text-gray-300 transition-colors'
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && navigate("/")}
          aria-label="Go to home page"
        >
          Project Management
        </h1>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant='ghost'>New Project</Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Create New Project</DialogTitle>
              <DialogDescription>
                Fill out the form below to create a new project for your team.
              </DialogDescription>
            </DialogHeader>
            <CreateProjectForm />
          </DialogContent>
        </Dialog>

        <Button variant='ghost'>Upgrade</Button>
      </div>

      <div className='flex gap-3 items-center'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant='outline'
              size='icon'
              className='rounded-full border-2 border-gray-500'
            >
              <PersonIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <p>Vishnu</p>
      </div>
    </div>
  );
};

export default Navbar;

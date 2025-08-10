import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DotsVerticalIcon, PersonIcon } from '@radix-ui/react-icons';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import UserList from './UserList';

const IssueCard = ({ title = "Create NavBar", issueId = 1, assignee = "FBP" }) => {
  return (
    <Card className="rounded-xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.01] p-3">
      {/* Header */}
      <CardHeader className="flex justify-between items-center p-0 pb-3">
        <CardTitle className="text-white text-base font-medium">
          {title}
        </CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="rounded-full" size="icon" variant="ghost" aria-label="Issue options">
              <DotsVerticalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-slate-800 border border-slate-700 text-white">
            <DropdownMenuItem>In Progress</DropdownMenuItem>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Done</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>

      {/* Content */}
      <CardContent className="flex items-center justify-between p-0">
        <p className="text-slate-300">{assignee} - {issueId}</p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="icon"
              className="bg-slate-700 hover:bg-slate-600 rounded-full p-1 h-8 w-8"
              aria-label="Assign user to issue"
            >
              <Avatar className="h-7 w-7">
                <AvatarFallback className="bg-slate-600">
                  <PersonIcon />
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-slate-800 border border-slate-700 text-white p-2 rounded-lg">
            <UserList />
          </DropdownMenuContent>
        </DropdownMenu>
      </CardContent>
    </Card>
  );
};

export default IssueCard;

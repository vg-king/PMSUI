import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import IssueCard from "./IssueCard";
import { Button } from "@/components/ui/button";
import { PlusIcon } from 'lucide-react';
import CreateIssueForm from './CreateIssueForm';

const IssueList = ({ title }) => {
  return (
    <div>
      <Dialog>
        <Card className="w-full max-w-[300px] lg:w-[310px] rounded-2xl shadow-lg bg-slate-900/60 backdrop-blur border border-slate-700 flex flex-col">
          
          {/* Header */}
          <CardHeader className="pb-3 border-b border-slate-700">
            <CardTitle className="text-white font-semibold text-lg">{title}</CardTitle>
          </CardHeader>

          {/* Content */}
          <CardContent className="px-3 py-4 space-y-4">
            {[1, 1, 1].map((_, idx) => (
              <IssueCard key={idx} />
            ))}
          </CardContent>

          {/* Footer */}
          <CardFooter className="pt-3 border-t border-slate-700">
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 rounded-lg border-slate-600 hover:bg-slate-800 hover:text-white transition"
              >
                <PlusIcon size={16} /> Create Issue
              </Button>
            </DialogTrigger>
          </CardFooter>
        </Card>

        {/* Modal */}
        <DialogContent className="bg-slate-900 text-white border border-slate-700 rounded-xl max-w-lg">
          <DialogHeader>
            <DialogTitle>Create New Issue</DialogTitle>
          </DialogHeader>
          <CreateIssueForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default IssueList;

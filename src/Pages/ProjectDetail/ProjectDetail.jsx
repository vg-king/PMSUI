import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import IssueList from "./IssueList";
import ChatBox from "./ChatBox";

const ProjectDetail = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // success or error

  const handleProjectInvitation = async () => {
    if (!email.trim()) {
      setStatus({ type: "error", message: "Please enter an email address." });
      return;
    }

    try {
      // Example API call
      // await fetch("/api/invite", {
      //   method: "POST",
      //   body: JSON.stringify({ email }),
      //   headers: { "Content-Type": "application/json" },
      // });

      console.log("Invitation sent to:", email);

      setStatus({ type: "success", message: `Invitation sent to ${email}` });
      setEmail("");
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send invite. Please try again.",
      });
    }
  };

  return (
    <div className="mt-6 lg:px-10">
      <div className="lg:flex gap-6 justify-between pb-4">
        <ScrollArea className="h-screen lg:w-[70%] pr-2">
          <div className="text-gray-300 pb-10 w-full">
            {/* Title */}
            <h1 className="text-2xl font-semibold text-white pb-5">
              Create Ecommerce Multivendor Project
            </h1>

            {/* Description */}
            <p className="w-full md:max-w-2xl text-gray-400 leading-relaxed pb-8">
              Create platform for multiple sellers, where multiple sellers can
              register themselves and sell their projects online with ease.
            </p>

            {/* Project Lead */}
            <div className="flex items-center pb-4">
              <p className="w-36 font-medium text-gray-400">Project Lead:</p>
              <p className="text-white">Raam</p>
            </div>

            {/* Members */}
            <div className="flex items-center pb-4">
              <p className="w-36 font-medium text-gray-400">Members:</p>
              <div className="flex items-center gap-2">
                {["R", "Z"].map((initial, index) => (
                  <Avatar key={index} className="cursor-pointer">
                    <AvatarFallback>{initial}</AvatarFallback>
                  </Avatar>
                ))}
              </div>

              {/* Invite Button + Dialog */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="sm"
                    variant="outline"
                    className="ml-3 flex items-center gap-1"
                  >
                    Invite
                    <PlusIcon className="w-4 h-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gray-900 text-white border border-gray-700 rounded-lg">
                  <DialogHeader>
                    <DialogTitle className="text-lg font-semibold">
                      Invite a Member
                    </DialogTitle>
                  </DialogHeader>
                  <p className="text-gray-400 text-sm">
                    Search and invite team members to join this project.
                  </p>

                  {/* Email Input */}
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email..."
                    className="w-full mt-4 px-3 py-2 rounded-md bg-gray-800 border border-gray-700 text-white"
                  />

                  {/* Status Message */}
                  {status && (
                    <p
                      className={`mt-2 text-sm ${
                        status.type === "error"
                          ? "text-red-400"
                          : "text-green-400"
                      }`}
                    >
                      {status.message}
                    </p>
                  )}

                  {/* Send Button */}
                  <Button
                    className="mt-4 w-full"
                    onClick={handleProjectInvitation}
                  >
                    Send Invite
                  </Button>
                </DialogContent>
              </Dialog>
            </div>

            {/* Category */}
            <div className="flex items-center pb-4">
              <p className="w-36 font-medium text-gray-400">Category:</p>
              <p className="capitalize text-white">Fullstack</p>
            </div>

            {/* Status */}
            <div className="flex items-center">
              <p className="w-36 font-medium text-gray-400">Status:</p>
              <Badge className="bg-yellow-400 text-black px-3 py-1">
                In Progress
              </Badge>
            </div>
            <section>
                <p className="py-5 border-b text-lg -tracking-wider">Tasks</p>
                <div className="lg:flex md:flex gap-3 justify-between py-5">
                    <IssueList status="pending" title="Todo List"></IssueList>
                    <IssueList status="In progreess" title="Todo List"></IssueList>
                    <IssueList status="done" title="Todo List"></IssueList>
                </div>
            </section>
          </div>
        </ScrollArea>
        <div className="lg:w-[30%] rounded-md sticky right-5 top-0">
          
          <ChatBox></ChatBox>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

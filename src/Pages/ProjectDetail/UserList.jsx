import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const UserList = () => {
  return (
    <>
      <div className="space-y-2">
        {/* Assigned User */}
        <div className="border rounded-md">
          <p className="py-2 px-3">
            {"Raam" || "Unassignee"}
          </p>
        </div>

        {/* User Item */}
       {[1,1,1,1].map((item)=> <div key={item} className="py-2 group hover:bg-slate-800 cursor-pointer flex items-center gap-3 rounded-md border px-4">
          <Avatar>
            <AvatarImage src="" alt="@Vishnu" />
            <AvatarFallback>Z</AvatarFallback>
          </Avatar>

          {/* User Details */}
          <div className="space-y-1">
            <p className="text-sm leading-none">@Vishnu</p>
            <p className="text-sm text-muted-foreground">@Vishnu</p>
          </div>
        </div>)
        }
      </div>
    </>
  );
};

export default UserList;

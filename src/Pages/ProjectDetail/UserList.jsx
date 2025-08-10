import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const UserList = () => {
  const users = [
    { id: 1, name: "Vishnu", username: "@vishnu", avatar: "", initials: "V" },
    { id: 2, name: "Raam", username: "@raam", avatar: "", initials: "R" },
    { id: 3, name: "Zara", username: "@zara", avatar: "", initials: "Z" },
    { id: 4, name: "Alex", username: "@alex", avatar: "", initials: "A" }
  ];

  return (
    <>
      <div className="space-y-2">
        {/* Assigned User */}
        <div className="border rounded-md">
          <p className="py-2 px-3">
            Assigned: Raam
          </p>
        </div>

        {/* User Items */}
       {users.map((user)=>
        <div
          key={user.id}
          className="py-2 group hover:bg-slate-800 cursor-pointer flex items-center gap-3 rounded-md border px-4"
          role="button"
          tabIndex={0}
          aria-label={`Assign to ${user.name}`}
        >
          <Avatar>
            <AvatarImage src={user.avatar} alt={`${user.name} avatar`} />
            <AvatarFallback>{user.initials}</AvatarFallback>
          </Avatar>

          {/* User Details */}
          <div className="space-y-1">
            <p className="text-sm leading-none">{user.name}</p>
            <p className="text-sm text-muted-foreground">{user.username}</p>
          </div>
        </div>)
        }
      </div>
    </>
  );
};

export default UserList;

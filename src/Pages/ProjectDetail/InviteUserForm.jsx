import React from 'react'

const InviteUserForm = () => {
  return (
    <div>
      <DialogHeader>
        <DialogTitle className="text-lg font-semibold">
          Invite a Member
        </DialogTitle>
      </DialogHeader>
      <p className="text-gray-400 text-sm">
        Search and invite team members to join this project.
      </p>
      {/* Placeholder for invite form */}
      <input
        type="text"
        placeholder="Enter email..."
        className="w-full mt-4 px-3 py-2 rounded-md bg-gray-800 border border-gray-700 text-white"
      />
      <Button className="mt-4 w-full">Send Invite</Button>
    </div>
  )
}

export default InviteUserForm

import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "Ram", text: "How are you?", fromMe: false },
    { id: 2, sender: "Me", text: "I'm good! How about you?", fromMe: true },
    { id: 3, sender: "Ram", text: "Doing great!", fromMe: false },
    { id: 4, sender: "Me", text: "Awesome to hear!", fromMe: true },
  ]);

  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (!message.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: "Me", text: message, fromMe: true },
    ]);
    setMessage("");
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="sticky top-0">
      <div className="border rounded-lg bg-slate-900/70 backdrop-blur border-slate-700">
        <h1 className="border-b border-slate-700 p-5 font-semibold text-white">
          Chat Box
        </h1>

        {/* Chat messages */}
        <ScrollArea className="h-[32rem] w-full p-5 flex flex-col gap-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-end gap-2 ${
                msg.fromMe ? "justify-end" : "justify-start"
              }`}
            >
              {!msg.fromMe && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback>
                    {msg.sender.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              )}

              <div
                className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
                  msg.fromMe
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-slate-800 text-gray-200 rounded-bl-none"
                }`}
              >
                {!msg.fromMe && (
                  <p className="text-xs text-gray-400 mb-1">{msg.sender}</p>
                )}
                <p>{msg.text}</p>
              </div>

              {msg.fromMe && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback>M</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
        </ScrollArea>

        {/* Chat input */}
        <div className="flex items-center border-t border-slate-700 p-2">
          <Input
            value={message}
            onChange={handleMessageChange}
            placeholder="Type a message..."
            className="flex-1 border-none focus-visible:ring-0 bg-transparent text-white"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            aria-label="Type your message"
          />
          <Button
            onClick={handleSendMessage}
            size="icon"
            variant="ghost"
            className="rounded-full text-blue-400 hover:text-blue-600 disabled:opacity-50"
            disabled={!message.trim()}
            aria-label="Send message"
          >
            <PaperPlaneIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;

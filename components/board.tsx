"use client";

import { Plus, Star } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useState } from "react";
import { Button } from "./ui/button";

const Board = () => {
  const [val, setVal] = useState(0);

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="relative w-[800px] flex flex-col rounded px-4 py-2 border-slate-100 border-[1.2px]">
      <div className="absolute top-2 right-2 z-20 rounded-md shadow-md px-2 py-1">
        hello
      </div>
      <Link href="/">
        <h1 className="text-[32px] h-30 flex items-center py-3">
          header {val}
        </h1>
      </Link>
      <p className=" text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        corrupti facilis autem earum sint architecto labore provident ducimus.
        Quasi aperiam sed laboriosam similique cum eveniet illum voluptates
        temporibus repellendus quia!
      </p>
      <div className="flex justify-end gap-2 items-center">
        {/* <button
          className="rounded bg-rose-500 py-1 px-2 text-white hover:bg-blue-400/80"
          onClick={() => alert("delete")}
        >
          削除する
        </button> */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">削除する</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delte Item</DialogTitle>
              <DialogDescription>
                本当に削除してよいですか？ 元に戻すことはできません。
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-end items-center gap-2">
              <Button
                variant="ghost"
                onClick={() => {
                  alert("delted");
                  setOpen(false);
                }}
                className="bg-rose-500 hover:bg-rose-500/80"
              >
                Yes
              </Button>
              <Button onClick={() => setOpen(false)}>No</Button>
            </div>
          </DialogContent>
        </Dialog>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Plus
              className="text-indigo-600 cursor-pointer"
              strokeWidth={0.5}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" sideOffset={10}>
            <DropdownMenuItem>
              <Link href="/ok">ok</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <TooltipProvider delayDuration={0.1}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Star
                strokeWidth={0.7}
                onClick={() => setVal((prev) => prev + 1)}
              />
            </TooltipTrigger>
            <TooltipContent side="top" sideOffset={5}>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default Board;

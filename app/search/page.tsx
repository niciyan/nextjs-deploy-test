"use client";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function Page() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="m-5">
      <button
        onClick={() => setOpen(true)}
        className="flex items-center justify-between px-2 py-2 w-[180px] rounded-sm border text-zinc-600 hover:bg-zinc-100"
      >
        <div className="flex items-center">
          <Search className="size-4 mr-2" />
          <p className="text-sm text-mu">検索する</p>
        </div>
        <p className="rounded-sm bg-zinc-500 text-zinc-100 text-sm px-2">
          ctrl+k
        </p>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>あらすじ</CommandItem>
            <CommandItem>コミュニケーション</CommandItem>
            <CommandItem>必要です</CommandItem>
            <CommandItem>あらすじ</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}

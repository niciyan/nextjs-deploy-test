import { Button } from "@/components/ui/button";
import { Edit2, MenuIcon } from "lucide-react";
import { Metadata } from "next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const metadata: Metadata = {
  title: "Nishi",
  description: "Nishiyama app",
};

export default function Page() {
  return (
    <div className="p-4 space-y-3">
      <div className="group w-[600px] relative border rounded-md p-6 text-slate-600 shadow-sm">
        <h1 className="text-2xl font-bold mb-4">羅生門</h1>
        <div className="space-y-2">
          <div className="flex items-center cursor-pointer">
            <Edit2 className="size-4 mr-2" />
            <p className="text-[15px]">川田歳三</p>
          </div>
          <div className="flex items-center cursor-pointer">
            <Edit2 className="size-4 mr-2" />
            <p className="text-[15px]">ルクセンブルク</p>
          </div>
        </div>
        <div className="absolute top-0 left-0 group-hover:opacity-100 opacity-0 transition-opacity w-full h-full bg-slate-50 p-6">
          <h1>transition</h1>
        </div>
        {/* <div className="absolute top-1 right-1 group-hover:opacity-100 opacity-0 transition-opacity">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" className="p-1">
                <MenuIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 w-auto" side="right">
              <div className="flex flex-col space-y-1">
                <Button variant="ghost">ok</Button>
                <Button
                  variant="ghost"
                  className="text-rose-700 hover:text-rose-700"
                >
                  Delete
                </Button>
                <Button variant="ghost">ok</Button>
              </div>
            </PopoverContent>
          </Popover>
        </div> */}
      </div>
    </div>
  );
}

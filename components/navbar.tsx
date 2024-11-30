import { Menu } from "lucide-react";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="h-full w-60 flex justify-start gap-x-2 items-center z-20 ">
      <Button variant="outline">button</Button>
      <Link href="/dash" className="underline">
        Dash page
      </Link>
      <Link href="/search" className="underline">
        Search Page
      </Link>
    </div>
    // <div className="h-[90px] flex p-4 items-center justify-between sticky top-0 z-10 bg-slate-50">
    //   <div className="text-[30px] font-semibold text-blue-400 hover:opacity-70">
    //     <Link href="/">Logo Good</Link>
    //   </div>
    //   <div className="flex gap-5">
    //     <Link href="/" className="hover:text-blue-400">
    //       撮影する
    //     </Link>
    //     <Link href="/" className="hover:text-blue-400">
    //       場所を調べる
    //     </Link>
    //     <Link href="/" className="hover:text-blue-400">
    //       サービスについて
    //     </Link>
    //     <DropdownMenu>
    //       <DropdownMenuTrigger>
    //         <Menu className="hover:text-blue-400" strokeWidth={1} />
    //       </DropdownMenuTrigger>
    //       <DropdownMenuContent>
    //         <DropdownMenuItem>
    //           <Link href="/ok">ok</Link>
    //         </DropdownMenuItem>
    //         <DropdownMenuItem>Team</DropdownMenuItem>
    //         <DropdownMenuItem>Subscription</DropdownMenuItem>
    //       </DropdownMenuContent>
    //     </DropdownMenu>

    //     {/* <Link href="/" className="hover:opacity-70">
    //         <Menu size={30} />
    //       </Link> */}
    //     {/* <Link href="/" className="" */}
    //   </div>
    // </div>
  );
};

export default Navbar;

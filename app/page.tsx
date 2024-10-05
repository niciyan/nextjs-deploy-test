import Board from "@/components/board";
import Image from "next/image";

export default function Home() {
  const list = Array(10).fill(0);

  return (
    <div className="flex ">
      <div className="grid grid-cols-1 p-4 gap-4 z-0">
        {list.map((v, i) => (
          <Board key={i} />
        ))}
      </div>
    </div>
  );
}

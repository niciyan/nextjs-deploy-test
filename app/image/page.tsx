import Image from "next/image";

export default function Page() {
  return (
    <div className="flex items-center">
      <div className="relative w-[200px] h-[240px] bg-slate-200 overflow-hidden rounded-md">
        <Image
          src="/beach_1.jpg"
          alt=""
          fill
          className="object-contain hover:scale-110 transition"
        />
      </div>
      <div className="relative w-[200px] h-[240px] bg-slate-200 overflow-hidden rounded-md">
        <Image
          src="/beach_1.jpg"
          alt=""
          fill
          className="object-contain hover:scale-110 transition"
        />
      </div>
      <div className="relative w-[200px] h-[240px] bg-slate-200 overflow-hidden rounded-md">
        <Image
          src="/beach_1.jpg"
          alt=""
          fill
          className="object-contain hover:scale-110 transition"
        />
      </div>
      <div className="relative w-[200px] h-[240px] bg-slate-200 overflow-hidden rounded-md">
        <Image
          src="/beach_1.jpg"
          alt=""
          fill
          className="object-contain hover:scale-110 transition"
        />
      </div>
    </div>
  );
}

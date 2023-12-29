import { IoSunny } from "react-icons/io5";
export default function Nav() {
  // bg-[#9277ff] animation color for header
  return (
    <nav className="bg-[#252945] h-[72px] flex justify-between items-center">
      <figure className=" bg-[#7c5dfa] relative h-full w-[72px] flex rounded-r-2xl justify-center items-center">
        <img src="/assets/logo.svg" alt="" />
        <img src="" alt="" />
      </figure>

      <div className="flex items-center gap-x-10 pr-7">
        <IoSunny className="text-2xl text-[#858BB2]" />
        <div className="h-[72px] border-r  border-[#494e6e] "></div>
        <img src="/assets/image-avatar.jpg" className="h-8 w-8 rounded-full" alt="" />
      </div>
    </nav>
  );
}

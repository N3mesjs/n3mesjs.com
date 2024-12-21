import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav className="flex justify-center text-white mt-2 items-center gap-3 bg-[#272727] rounded-full">
        <h1 className="text-[20px]">N3mesjs</h1>
        <a href="home" className="nav-link">Home</a>
      </nav>
    </>
  );
}

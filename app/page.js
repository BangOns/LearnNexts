import Feed from "@/components/Feed";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br />
        <span className="orange_gradient text-center">AI Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Ini adalah sebuah webiste yang menggunakan framework next js
      </p>
      {/* Feed */}
      <Feed />
    </main>
  );
}

"use client";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";
// import ImageLogo1 from "../assets/images/logo.svg";
// import ImageLogo2 from "..assets/images/logo-text.svg";
// import ImageLogo3 from "..assets/images/logos.svg";
export default function Nav() {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    async function setProviders() {
      const response = await getProviders();
      setProviders(response);
    }
    setProviders();
  }, []);
  return (
    <nav className="flex-between w-full mb-16 pt-3 ">
      <Link href={"/"} className="flex gap-2 flex-center">
        <Image
          src="assets/images/logos.svg"
          alt="SyahroniPromtopia"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">SyahroniPropia</p>
      </Link>
      {/* Mobile Navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href={"/create-prompt"} className="black_btn">
              Create Post
            </Link>
            <button type="button" className="outline_btn" onClick={signOut}>
              Sign out
            </button>
            <Link href={"/profile"}>
              <Image
                src="/assets/images/logos.svg"
                alt="profile"
                width={37}
                height={37}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => {
                <button
                  type="button"
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                  key={provider.name}
                >
                  Sign In
                </button>;
              })}
          </>
        )}
      </div>
    </nav>
  );
}

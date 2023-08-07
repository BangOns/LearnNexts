"use client";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Nav() {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);
  const [toggleDropDown, setToggleDropDown] = useState(false);
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
      {/* Desktop Navigation */}
      <div className="sm:flex hidden ">
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
      {/* Mobile navigation */}
      <div className="sm:hidden flex relative ">
        {isUserLoggedIn ? (
          <div className="flex">
            <Image
              src="/assets/images/logos.svg"
              alt="profile"
              width={37}
              height={37}
              className="rounded-full"
              onClick={() => setToggleDropDown((prev) => !prev)}
            />
            {toggleDropDown && (
              <div className="dropdown">
                <Link
                  href={"/profile"}
                  className="dropdown_link"
                  onClick={() => setToggleDropDown(false)}
                >
                  My Profile
                </Link>
                <Link href={"/create-prompt"} className="dropdown_link">
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropDown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black-btn"
                >
                  Sign Out
                </button>
              </div>
            )}
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

"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#090909] text-white pt-24">
      <Image
        src="/images/logo.png"
        alt="Logo Rolteatro"
        width={180}
        height={180}
        priority
      />

      <h1 className="mt-8 text-6xl font-bold">
        <span className="text-red-600">ROL</span>TEATRO
      </h1>

      <p className="mt-4 text-gray-300 text-xl">
        Escuela y Compañía de Teatro
      </p>
    </section>
  );
}
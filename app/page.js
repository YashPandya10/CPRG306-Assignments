import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to CPRG Assignments</h1>
      <p>
        <Link href="/week-2">Assignments</Link>
      </p>
    </main>
  );
}

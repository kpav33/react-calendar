import React from "react";
import Link from "next/link";

export default function Clone() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "10px", margin: "20px 10px" }}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/clone">
          <a>Clone</a>
        </Link>
      </nav>
    </div>
  );
}

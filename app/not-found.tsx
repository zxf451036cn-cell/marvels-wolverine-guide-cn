import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found shell">
      <p>FILE LOST / 404</p>
      <h1>THE TRAIL WENT COLD.</h1>
      <span>This file may have moved—or it never existed.</span>
      <Link className="button button--primary" href="/">Return to the archive</Link>
    </main>
  );
}

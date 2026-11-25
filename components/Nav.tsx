import Link from "next/link";
import { nav } from "@/lib/data";

export default function Nav() {
  return (
    <header className="nav-enter sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link
          href="/"
          className="focus-ring flex items-center gap-2.5 rounded-sm font-semibold tracking-tight"
        >
          <span aria-hidden="true" className="grid h-7 w-7 place-items-center rounded-md bg-ink font-mono text-[0.7rem] text-paper">
            TA
          </span>
          <span className="hidden sm:inline">Tolulope Adegoke</span>
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-5 text-sm text-ink-soft sm:gap-7">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="nav-link focus-ring rounded-sm transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="focus-ring rounded-full bg-ink px-4 py-2 text-paper transition-colors hover:bg-accent"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

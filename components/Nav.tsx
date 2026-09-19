import Link from "next/link";
import { nav } from "@/lib/data";

export default function Nav() {
  return (
    <header className="nav-enter border-b border-line">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 sm:px-8">
        <Link
          href="/"
          className="focus-ring nav-name rounded-sm font-display text-lg font-medium tracking-tight"
        >
          Tolulope Adegoke
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-6 text-sm text-ink-soft">
            {nav.slice(1).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="nav-link focus-ring rounded-sm transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

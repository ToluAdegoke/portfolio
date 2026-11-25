import { site } from "@/lib/data";

const links = [
  { href: `mailto:${site.email}`, label: site.email },
  { href: site.github, label: "GitHub" },
  { href: site.linkedin, label: "LinkedIn" },
  { href: site.twitter, label: "Twitter / X" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-4xl leading-tight sm:text-5xl">Let&rsquo;s build something.</p>
            <p className="mt-3 max-w-sm text-sm text-paper/70">
              Open to conversations about products, internships, and
              freelance projects.
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="footer-link focus-ring rounded-sm underline decoration-paper/30 underline-offset-4 transition-colors hover:decoration-paper"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noreferrer noopener"
                      : undefined
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-10 text-xs text-paper/50">
          © {new Date().getFullYear()} Tolulope Adegoke. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}

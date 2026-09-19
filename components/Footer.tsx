import { site } from "@/lib/data";

const links = [
  { href: `mailto:${site.email}`, label: site.email },
  { href: site.github, label: "GitHub" },
  { href: site.linkedin, label: "LinkedIn" },
  { href: site.twitter, label: "Twitter / X" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-10 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-xl">Let&rsquo;s talk.</p>
            <p className="mt-1 max-w-sm text-sm text-ink-soft">
              Open to conversations about products, internships, and
              freelance projects.
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="footer-link focus-ring rounded-sm underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
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
        <p className="mt-10 text-xs text-ink-soft">
          © {new Date().getFullYear()} Tolulope Adegoke. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}

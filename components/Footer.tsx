import { site } from "@/lib/data";

const links = [
  { href: site.github, label: "GitHub" },
  { href: site.linkedin, label: "LinkedIn" },
  { href: site.twitter, label: "Twitter / X" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-20 sm:px-8 sm:pt-24">
        <p className="label !text-paper/50">Contact</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-6xl">
          Have a role, a project or an idea? Let&rsquo;s talk.
        </h2>
        <a
          href={`mailto:${site.email}`}
          className="footer-link focus-ring mt-8 inline-block rounded-sm text-lg text-paper/90 sm:text-2xl"
        >
          {site.email} <span aria-hidden="true">→</span>
        </a>

        <div className="mt-20 flex flex-col gap-6 border-t border-paper/15 pt-6 text-sm text-paper/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Tolulope Adegoke · Ibadan, Nigeria</p>
          <ul className="flex flex-wrap gap-6">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="footer-link focus-ring rounded-sm transition-colors hover:text-paper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import Image from "next/image";
import { DesktopShot, PhoneShot } from "@/components/Shot";
import Reveal from "@/components/Reveal";
import { demos, services, site, stack } from "@/lib/data";

export default function Home() {
  return (
    <>
      <div className="hero-bg">
      <section className="mx-auto grid max-w-5xl items-center gap-12 px-6 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24 md:grid-cols-[1fr_280px] md:gap-16">
        <div>
          <p className="hero-kicker inline-flex items-center gap-2 rounded-full border border-line bg-paper/80 px-3 py-1.5 text-sm text-ink-soft backdrop-blur">
            <span aria-hidden="true" className="pulse-dot" />
            Open to internships &amp; freelance work
          </p>
          <h1 className="hero-title mt-4 max-w-3xl font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            Building products from idea to working software.
          </h1>
          <p className="hero-copy mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            I&rsquo;m a Computer Science student and product-focused builder,
            currently shipping Sabi and Genpay while figuring out how
            AI-assisted development fits into building real web and mobile
            software.
          </p>
          <div className="hero-copy mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="btn-primary focus-ring rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper"
            >
              See my work
            </a>
            <a
              href={`mailto:${site.email}`}
              className="btn-ghost focus-ring rounded-full border border-ink/20 px-6 py-3 text-sm font-medium"
            >
              Get in touch
            </a>
          </div>
          <p className="hero-copy mt-5 text-sm text-ink-soft">
            Ibadan, Nigeria
          </p>
        </div>

        <div className="hero-portrait-wrap mx-auto w-full max-w-[280px] md:mx-0">
          <div className="portrait-frame relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-paper-dim">
            <Image
              src="/images/tolulope-profile.jpeg"
              alt="Tolulope Adegoke"
              fill
              priority
              className="object-cover object-[52%_center]"
              sizes="(min-width: 768px) 280px, 70vw"
            />
            <span aria-hidden="true" className="portrait-sheen" />
          </div>
        </div>
      </section>
      </div>

      <div className="border-y border-line bg-paper-dim/60 py-5" aria-label="Tools I build with">
        <div className="marquee">
          <ul className="marquee-track">
            {[...stack, ...stack].map((t, i) => (
              <li key={i} aria-hidden={i >= stack.length} className="font-display text-xl text-ink-soft">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section
        id="work"
        aria-labelledby="work-heading"
        className="mx-auto max-w-5xl border-t border-line px-6 py-16 sm:px-8 sm:py-24"
      >
        <h2 id="work-heading" className="sr-only">
          Selected work
        </h2>

        <Reveal>
        <Link
          href="/work/sabi"
          className="project-card focus-ring group grid grid-cols-1 items-center gap-8 rounded-sm py-8 md:grid-cols-[1.1fr_0.9fr] md:gap-14"
        >
          <div className="order-2 md:order-1">
            <p className="text-sm text-ink-soft">Case study - 2026</p>
            <h3 className="mt-2 font-display text-3xl leading-tight">
              Sabi
            </h3>
            <p className="mt-3 max-w-md text-ink-soft">
              An AI-powered JAMB and WAEC exam-prep platform for Nigerian
              secondary school students, built with a co-founder from an
              early hypothesis to a live product with real users.
            </p>
            <span className="project-link mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent underline decoration-accent-soft underline-offset-4 group-hover:decoration-accent">
              Read the case study <span aria-hidden="true">↗</span>
            </span>
          </div>
          <div className="order-1 md:order-2">
            <DesktopShot
              src="/images/sabi-landing.png"
              alt="Sabi landing page, headline: You go sabi this exam."
              width={3072}
              height={1536}
              priority
            />
          </div>
        </Link>
        </Reveal>

        <Reveal delay={80}>
        <Link
          href="/work/sonix"
          className="project-card focus-ring group grid grid-cols-1 items-center gap-8 border-t border-line py-8 md:grid-cols-[0.9fr_1.1fr] md:gap-14"
        >
          <div>
            <p className="text-sm text-ink-soft">Personal project - 2026</p>
            <h3 className="mt-2 font-display text-3xl leading-tight">
              Sonix
            </h3>
            <p className="mt-3 max-w-md text-ink-soft">
              A cross-platform Flutter music player built to explore mobile
              development end to end, from browsing and search to playback
              through the Deezer API.
            </p>
            <span className="project-link mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent underline decoration-accent-soft underline-offset-4 group-hover:decoration-accent">
              Read the case study <span aria-hidden="true">↗</span>
            </span>
          </div>
          <div className="mx-auto w-full max-w-[240px]">
            <PhoneShot
              src="/images/sonix-home.jpeg"
              alt="Sonix home screen showing featured playlists and trending tracks"
              width={540}
              height={1170}
            />
          </div>
        </Link>
        </Reveal>

        <Reveal delay={80}>
          <div className="grid grid-cols-1 gap-4 border-t border-line py-8 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
            <div>
              <p className="text-sm text-ink-soft">Co-founder - In progress</p>
              <h3 className="mt-2 font-display text-3xl leading-tight">Genpay</h3>
            </div>
            <div>
              <p className="max-w-md text-ink-soft">
                An event ticketing and merchandise platform. I build the
                Flutter mobile app and the Next.js web dashboard, with
                Supabase and Paystack behind it.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {["Flutter", "Next.js", "Supabase", "Paystack"].map((t) => (
                  <li key={t} className="rounded-full border border-line bg-paper-dim px-3 py-1 text-xs text-ink-soft">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      <section
        id="websites"
        aria-labelledby="websites-heading"
        className="mx-auto max-w-5xl scroll-mt-4 border-t border-line px-6 py-16 sm:px-8 sm:py-24"
      >
        <Reveal>
          <p className="text-sm text-ink-soft">Freelance - 2026</p>
          <h2
            id="websites-heading"
            className="mt-2 font-display text-3xl leading-tight sm:text-4xl"
          >
            Websites for small businesses
          </h2>
          <p className="mt-3 max-w-xl text-ink-soft">
            I build fast, mobile-friendly websites for cafes, brands and
            creatives. These three demo projects each have their own look and
            work on a phone.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-8 md:grid-cols-3">
          {demos.map((demo, i) => (
            <li key={demo.name}>
              <Reveal delay={i * 80}>
                <a
                  href={demo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card focus-ring group block rounded-sm"
                >
                  <div className="shot-frame overflow-hidden rounded-md border border-line bg-paper-dim">
                    <Image
                      src={demo.image}
                      alt={demo.alt}
                      width={demo.width}
                      height={demo.height}
                      className="shot-image aspect-[3/2] h-auto w-full object-cover"
                      sizes="(min-width: 768px) 320px, 100vw"
                    />
                  </div>
                  <p className="mt-4 text-sm text-ink-soft">
                    Demo - {demo.kind}
                  </p>
                  <h3 className="mt-1 font-display text-2xl leading-tight">
                    {demo.name}
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft">{demo.blurb}</p>
                  <span className="project-link mt-3 inline-flex items-center gap-2 text-sm font-medium text-accent underline decoration-accent-soft underline-offset-4 group-hover:decoration-accent">
                    View the demo <span aria-hidden="true">↗</span>
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal>
          <p className="mt-12 max-w-xl text-lg leading-relaxed text-ink-soft">
            Want one for your business?{" "}
            <a
              href={`mailto:${site.email}?subject=Website%20project`}
              className="focus-ring rounded-sm text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
            >
              Email me
            </a>{" "}
            and tell me what you need.
          </p>
        </Reveal>
      </section>

      <section
        aria-labelledby="services-heading"
        className="mx-auto max-w-5xl border-t border-line px-6 py-16 sm:px-8 sm:py-24"
      >
        <Reveal>
          <h2 id="services-heading" className="font-display text-3xl leading-tight sm:text-4xl">
            What I can build for you
          </h2>
        </Reveal>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((x, i) => (
            <li key={x.title}>
              <Reveal delay={i * 80}>
                <div className="service-card h-full rounded-2xl border border-line bg-paper-dim/50 p-6">
                  <span className="font-display text-sm text-accent">0{i + 1}</span>
                  <h3 className="mt-3 font-display text-2xl leading-tight">{x.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{x.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-5xl border-t border-line px-6 py-16 sm:px-8 sm:py-24">
        <Reveal>
        <p className="max-w-xl text-lg leading-relaxed text-ink-soft">
          I&rsquo;m early in my career, but I&rsquo;ve shipped things that
          real people use.{" "}
          <Link
            href="/about"
            className="focus-ring rounded-sm text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
          >
            More about me
          </Link>
          .
        </p>
        </Reveal>
      </section>
    </>
  );
}

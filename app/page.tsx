import Link from "next/link";
import Image from "next/image";
import { DesktopShot, PhoneShot } from "@/components/Shot";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-5xl items-center gap-12 px-6 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24 md:grid-cols-[1fr_280px] md:gap-16">
        <div>
          <p className="hero-kicker text-sm text-ink-soft">Lagos, Nigeria</p>
          <h1 className="hero-title mt-4 max-w-3xl font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            Building products from idea to working software.
          </h1>
          <p className="hero-copy mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            I&rsquo;m a Computer Science student and product-focused builder,
            currently shipping Sabi and Genpay while figuring out how
            AI-assisted development fits into building real web and mobile
            software.
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

      <section
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

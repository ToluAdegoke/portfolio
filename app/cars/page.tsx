import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { cars, carsByMake, type Car } from "@/lib/cars";

export const metadata: Metadata = {
  title: "Cars I love | Tolulope Adegoke",
  description: "The cars Tolu would absolutely slow down to look at, by brand.",
};

function CarCard({ car, priority }: { car: Car; priority: boolean }) {
  return (
    <figure className="group">
      <div className="overflow-hidden rounded-2xl border-[1.5px] border-ink bg-ink shadow-[4px_4px_0_var(--ink)]">
        <Image
          src={`/images/cars/${car.slug}.jpg`}
          alt={`${car.make} ${car.model}`}
          width={car.width}
          height={car.height}
          className="aspect-[3/2] h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(min-width: 1152px) 350px, (min-width: 640px) 50vw, 100vw"
          priority={priority}
        />
      </div>
      <figcaption className="mt-3">
        <p className="text-lg font-semibold tracking-tight">{car.model}</p>
        <p className="mt-1 text-xs text-ink-soft">
          Photo:{" "}
          <a
            href={car.source}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-line underline-offset-2 hover:text-ink"
          >
            {car.credit}
          </a>
          ,{" "}
          <a
            href={car.licenseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-line underline-offset-2 hover:text-ink"
          >
            {car.license}
          </a>
          , resized
        </p>
      </figcaption>
    </figure>
  );
}

export default function CarsPage() {
  const groups = carsByMake();
  const multi = groups.filter((g) => g.cars.length > 1);
  const singles = groups.filter((g) => g.cars.length === 1);

  return (
    <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 sm:py-20">
      <Link
        href="/"
        className="nav-link focus-ring rounded-sm text-sm text-ink-soft hover:text-ink"
      >
        ← Back home
      </Link>

      <h1 className="hero-title mt-8 text-5xl font-semibold leading-[1] sm:text-6xl">
        Cars I love
      </h1>
      <p className="hero-copy mt-5 max-w-xl text-xl leading-snug text-ink-soft">
        {cars.length} cars I&rsquo;d absolutely slow down to look at, by brand.
      </p>

      {/* Jump to a brand */}
      <nav aria-label="Brands" className="hero-copy mt-8">
        <ul className="flex flex-wrap gap-2">
          {groups.map((g) => (
            <li key={g.slug}>
              <a
                href={`#${g.slug}`}
                className="focus-ring inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-ink bg-paper px-3.5 py-1.5 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
              >
                {g.make}
                <span className="font-mono text-xs opacity-60">{g.cars.length}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-12">
        {multi.map((g, gi) => (
          <section
            key={g.slug}
            id={g.slug}
            aria-labelledby={`${g.slug}-heading`}
            className="scroll-mt-24 border-t border-line pb-14 pt-10"
          >
            <Reveal>
              <h2 id={`${g.slug}-heading`} className="text-3xl font-semibold sm:text-4xl">
                {g.make}
              </h2>
            </Reveal>
            <ul className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {g.cars.map((car, i) => (
                <li key={car.slug}>
                  <Reveal delay={(i % 3) * 60}>
                    <CarCard car={car} priority={gi === 0 && i < 3} />
                  </Reveal>
                </li>
              ))}
            </ul>
          </section>
        ))}

        {/* Brands with one car sit side by side, each under its own name */}
        <ul className="grid gap-x-6 gap-y-14 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {singles.map((g, i) => (
            <li key={g.slug} id={g.slug} className="scroll-mt-24">
              <Reveal delay={(i % 3) * 60}>
                <h2 className="mb-5 text-3xl font-semibold sm:text-4xl">{g.make}</h2>
                <CarCard car={g.cars[0]} priority={false} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

import Image from "next/image";

type ShotProps = {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  priority?: boolean;
};

export function DesktopShot({
  src,
  alt,
  caption,
  width,
  height,
  priority,
}: ShotProps) {
  return (
    <figure>
      <div className="shot-frame overflow-hidden rounded-md border border-line bg-paper-dim shadow-[0_1px_0_0_rgba(22,22,26,0.04)]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="shot-image h-auto w-full"
          sizes="(min-width: 1024px) 800px, 100vw"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-ink-soft">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function PhoneShot({
  src,
  alt,
  caption,
  width,
  height,
  priority,
}: ShotProps) {
  return (
    <figure>
      <div className="shot-frame mx-auto w-full max-w-[220px] overflow-hidden rounded-[1.75rem] border border-line bg-paper-dim p-1.5 shadow-[0_1px_0_0_rgba(22,22,26,0.04)]">
        <div className="overflow-hidden rounded-[1.25rem]">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className="shot-image h-auto w-full"
            sizes="220px"
          />
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-ink-soft">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

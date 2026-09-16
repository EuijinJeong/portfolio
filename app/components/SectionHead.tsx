import Reveal from "./Reveal";

export default function SectionHead({
  kicker,
  title,
  sub,
}: {
  kicker: string;
  title: string;
  sub?: string;
}) {
  return (
    <Reveal className="flex flex-col gap-3">
      <span className="font-mono text-sm text-accent">{kicker}</span>
      <h2 className="text-2xl font-semibold leading-snug sm:text-3xl">
        {title}
      </h2>
      {sub && (
        <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          {sub}
        </p>
      )}
    </Reveal>
  );
}

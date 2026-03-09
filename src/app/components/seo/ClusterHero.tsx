import Link from "next/link";

interface ClusterHeroProps {
  title: string;
  subtitle: string;
  icon: string;
  contentCount: number;
  contentLabel: string;
  ctaUtmCampaign: string;
}

export default function ClusterHero({
  title,
  subtitle,
  icon,
  contentCount,
  contentLabel,
  ctaUtmCampaign,
}: ClusterHeroProps) {
  const utmUrl = `https://calangostudio.com.br/?utm_source=site&utm_medium=seo&utm_campaign=${encodeURIComponent(ctaUtmCampaign)}`;

  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-bg-tertiary via-bg-secondary to-bg-tertiary mb-12">
      {/* Background glow effect */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/[0.07] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-accent-end/[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="relative px-6 py-10 sm:px-10 sm:py-14 text-center">
        {/* Icon */}
        <span className="inline-block text-5xl sm:text-6xl mb-5" role="img" aria-hidden="true">
          {icon}
        </span>

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-1.5 bg-accent/[0.12] text-accent text-sm font-semibold px-4 py-1.5 rounded-full border border-accent/[0.2]">
            {contentCount} {contentLabel}
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-white leading-tight mb-4">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-txt-secondary text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          {subtitle}
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={utmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-black font-semibold text-sm px-8 py-3.5 rounded-lg hover:bg-accent-hover transition-colors"
          >
            Começar agora no Calango Studio
          </a>
          <Link
            href="/#pricing"
            className="border border-white/[0.1] text-white font-semibold text-sm px-6 py-3.5 rounded-lg hover:border-white/[0.2] transition-colors"
          >
            Ver planos
          </Link>
        </div>
      </div>
    </section>
  );
}

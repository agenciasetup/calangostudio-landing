import Link from "next/link";

interface RelatedItem {
  href: string;
  title: string;
  description: string;
}

interface RelatedPagesProps {
  items: RelatedItem[];
}

export default function RelatedPages({ items }: RelatedPagesProps) {
  return (
    <section className="mt-12 pt-8 border-t border-white/[0.06]">
      <h2 className="text-lg font-poppins font-bold text-white mb-4">
        Veja também
      </h2>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block group"
            >
              <span className="text-accent group-hover:text-accent-hover transition-colors font-semibold">
                {item.title}
              </span>
              <span className="block text-sm text-txt-secondary mt-0.5">
                {item.description}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

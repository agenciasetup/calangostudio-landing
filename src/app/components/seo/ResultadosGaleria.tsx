import Image from "next/image";

const resultados = Array.from({ length: 13 }, (_, i) => ({
  src: `/images/resultados/resultado-${i + 1}.jpg`,
  alt: `Resultado ${i + 1} criado com Calango Studio`,
}));

const ctaUrl =
  "https://calangostudio.com.br/?utm_source=site&utm_medium=seo&utm_campaign=resultados-galeria";

export default function ResultadosGaleria() {
  return (
    <section className="mt-12">
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-2xl font-poppins font-bold text-white mb-2">
          Resultados reais criados com o Calango Studio
        </h2>
        <p className="text-sm text-txt-secondary">
          Tudo gerado com IA, em segundos
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {resultados.map((img, i) => (
          <div
            key={i}
            className="group relative aspect-square rounded-xl overflow-hidden shadow-md"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-xs md:text-sm font-semibold text-center px-3">
                Gerado com Calango Studio
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent text-black font-semibold text-sm px-6 py-3 rounded-lg hover:bg-accent-hover transition-colors"
        >
          Crie resultados como esses
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

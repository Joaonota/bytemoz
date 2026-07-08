"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section id="depoimentos" className="section-padding bg-white dark:bg-[#070C1A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <ScrollReveal>
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Feedback dos Clientes
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              O que dizem os <span className="gradient-text">Nossos Clientes</span>
            </h2>
          </ScrollReveal>

          {/* Navigation buttons */}
          <ScrollReveal className="flex gap-3 mt-6 md:mt-0">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:border-primary hover:text-primary transition-all active:scale-95"
              aria-label="Anterior"
              id="testimonial-prev-btn"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:border-primary hover:text-primary transition-all active:scale-95"
              aria-label="Seguinte"
              id="testimonial-next-btn"
            >
              <ArrowRight size={20} />
            </button>
          </ScrollReveal>
        </div>

        {/* Slider */}
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex gap-6">
            {TESTIMONIALS.map((item, index) => (
              <div
                key={index}
                className="embla__slide flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
              >
                <div className="h-full bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-primary/20 transition-all card-hover relative group">
                  <div className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors">
                    <Quote size={40} />
                  </div>

                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 italic">
                      "{item.comment}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4 border-t border-gray-200/50 dark:border-white/5 pt-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-sm"
                      style={{ background: "linear-gradient(135deg, #0A84FF, #00C853)" }}
                    >
                      {item.avatar}
                    </div>
                    <div>
                      <h4 className="text-gray-900 dark:text-white font-semibold text-sm">{item.name}</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">
                        {item.role}, {item.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

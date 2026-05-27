import { useEffect, useRef, useState, useCallback } from "react";
import { CTAButton } from "./CTAButton";
import therapyGoldImg from "../../../images/therapy-gold-selagem-termica-bancada-salao-profissional.webp";
import depoimento01 from "../../../images/depoimento_01.webp";
import depoimento02 from "../../../images/depoimento_02.webp";
import depoimento03 from "../../../images/depoimento_03.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sparkles, ShieldCheck, Clock, TrendingUp, Lock, Instagram } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero-banner.webp')",
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundPositionX: "70%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay — left-heavy gradient for text readability */}
      <div
        aria-hidden
        className="hero-overlay absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-10 pb-24 md:pt-14 md:pb-32">
        <div className="mt-16 md:mt-24 max-w-3xl reveal">
          <h1
            className="hero-headline font-display text-4xl md:text-5xl leading-[1.15] mt-7 max-w-[600px]"
            style={{ color: "#FFFFFF" }}
          >
            A Selagem Térmica que está transformando os resultados dos salões.
          </h1>

          <p
            className="hero-subheadline mt-7 text-lg md:text-xl max-w-2xl leading-relaxed"
            style={{ color: "#FFFFFF" }}
          >
            Pré-venda com condição especial até 10/06.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5">
            <CTAButton pulse size="lg">
              Garantir minha condição de pré-venda
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustBar() {
  const items = [
    { icon: Sparkles, text: "Aprovado por profissionais especializados" },
    { icon: ShieldCheck, text: "Livre de Metais Pesados" },
    { icon: Clock, text: "Fórmula 100% Profissional" },
    { icon: TrendingUp, text: "Fios selados, alinhados e com efeito duradouro" },
  ];
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-4" style={{ gap: "48px" }}>
          {items.map((it, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 ${
                i < items.length - 1 ? "md:border-r md:border-champagne-dark" : ""
              }`}
              style={{ padding: "16px" }}
            >
              <it.icon className="text-gold shrink-0" style={{ width: 32, height: 32 }} strokeWidth={1.4} />
              <span className="text-olive leading-snug" style={{ fontSize: "1rem" }}>{it.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfterSlider() {
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePos = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((clientX - left) / width) * 100));
    setPos(pct);
  }, []);

  const onMouseDown = () => { dragging.current = true; };
  const onMouseMove = (e: React.MouseEvent) => { if (dragging.current) updatePos(e.clientX); };
  const onMouseUp = () => { dragging.current = false; };
  const onTouchMove = (e: React.TouchEvent) => { updatePos(e.touches[0].clientX); };

  useEffect(() => {
    const up = () => { dragging.current = false; };
    window.addEventListener("mouseup", up);
    return () => window.removeEventListener("mouseup", up);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-2xl select-none cursor-ew-resize"
      style={{ width: "100%", maxWidth: 500, aspectRatio: "3/4", margin: "0 auto" }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onTouchMove={onTouchMove}
    >
      {/* DEPOIS (right, full width base) */}
      <div className="absolute inset-0">
        <img
          src="/images/depois-liso.webp"
          alt="Depois — cabelo liso"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
          draggable={false}
        />
        <span className="absolute bottom-4 right-4 font-display font-bold text-white text-xl tracking-[0.25em] drop-shadow">DEPOIS</span>
      </div>
      {/* ANTES (left, clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src="/images/antes-frizz.webp"
          alt="Antes — cabelo com frizz"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
          draggable={false}
        />
        <span className="absolute bottom-4 left-4 font-display font-bold text-white text-xl tracking-[0.25em] drop-shadow">ANTES</span>
      </div>
      {/* Handle */}
      <div
        className="absolute top-0 bottom-0 flex flex-col items-center justify-center"
        style={{ left: `${pos}%`, transform: "translateX(-50%)", zIndex: 10 }}
      >
        <div className="w-[2px] h-full" style={{ background: "var(--color-gold)" }} />
        <div
          className="absolute flex items-center justify-center rounded-full shadow-lg"
          style={{ width: 44, height: 44, background: "var(--color-gold)", border: "3px solid white" }}
        >
          <span className="text-white font-bold text-base leading-none select-none">⇔</span>
        </div>
      </div>
    </div>
  );
}

export function Problem() {
  const painPoints = [
    {
      title: "Retoque antes da hora",
      text: "A cliente volta insatisfeita antes do prazo. Você refaz com desconto. O serviço que deveria durar semanas desaparece na primeira lavagem — e o prejuízo fica no seu caixa.",
    },
    {
      title: "Resultado que não convence",
      text: "Fio sem selagem perde o alinhamento rápido. O antes e depois que deveria virar indicação vira reclamação no WhatsApp.",
    },
    {
      title: "Concorrência por preço",
      text: "Sem diferencial técnico, o salão ao lado sempre cobra menos. Você fica preso numa guerra que não tem vencedor.",
    },
  ];

  const benefits = [
    {
      title: "Cutícula selada, resultado que fica",
      text: "Sela a cutícula completamente — bloqueando o frizz e mantendo o alinhamento mesmo após várias lavagens.",
    },
    {
      title: "Resultado visível desde a primeira aplicação",
      text: "Fios mais lisos, macios e com brilho intenso. O tipo de resultado que a cliente mostra para as amigas.",
    },
    {
      title: "Aprovado por profissionais especializados",
      text: "Desenvolvida com especialistas em química capilar. Livre de metais pesados. Segura para todos os tipos de cabelo.",
    },
    {
      title: "Efeito duradouro, cliente fidelizada",
      text: "Com a cutícula selada e os fios tratados, o resultado se mantém por semanas. A cliente sai satisfeita — e volta.",
    },
  ];

  return (
    <section className="bg-white">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-6 pt-24 md:pt-32 pb-16 text-center reveal">
        <h2 className="font-display text-heading font-bold leading-tight" style={{ width: "100%", fontSize: "3rem", textAlign: "center", paddingLeft: 0, paddingRight: 0 }}>
          A Selagem Térmica que está mudando os resultados dos salões.
        </h2>
      </div>

      {/* Pain points intro */}
      <p
        style={{
          fontFamily: "var(--font-display)",
          color: "#3D3530",
          fontSize: "1.4rem",
          textAlign: "center",
          maxWidth: 650,
          margin: "0 auto 2.5rem auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
      >
        A realidade de muitos salões que trabalham com produtos sem fórmula profissional é sempre uma dessas situações:
      </p>

      {/* Pain points */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
          {painPoints.map((p) => (
            <div key={p.title} className="relative rounded-2xl p-7 overflow-hidden" style={{ background: "#F6F1E4" }}>
              <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gold" />
              <h3 className="font-display text-heading font-bold text-xl mb-3">{p.title}</h3>
              <p className="text-olive text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Gold divider */}
      <div className="gold-divider" />

      {/* Active ingredients */}
      <div style={{ background: "#FFFFFF", padding: "80px 0" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center reveal">

            {/* Left: text */}
            <div className="flex flex-col">
              <h3
                className="font-display font-bold leading-tight"
                style={{ color: "#3D3530", fontSize: "2.5rem" }}
              >
                Ativos nobres que fazem a diferença.
              </h3>

              <ul className="mt-8 space-y-4">
                {[
                  "Ácido Hialurônico — hidratação profunda e duradoura",
                  "Óleo de Argan — nutrição e brilho intenso",
                  "Colágeno Hidrolisado — fortalecimento da fibra capilar",
                  "Proteína do Trigo — resistência e anti-quebra",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span style={{ color: "#C7A44E", fontWeight: 700, fontSize: "1.1rem", lineHeight: 1.4, flexShrink: 0 }}>✓</span>
                    <span className="font-display" style={{ color: "#3D3530", fontSize: "1rem", lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>

              <p
                className="font-display"
                style={{ color: "#7A6E65", fontSize: "1rem", marginTop: "1.5rem", lineHeight: 1.7 }}
              >
                Trabalhamos com ativos nobres selecionados para garantir cabelos selados, nutridos e com resultado duradouro.
              </p>
            </div>

            {/* Right: image */}
            <div className="order-first md:order-last">
              <img
                src="/images/selagem-termica-therapy-gold-ativos-naturais.webp"
                alt="Ativos naturais da Selagem Térmica Therapy Gold"
                style={{
                  width: "100%",
                  aspectRatio: "4/5",
                  objectFit: "cover",
                  borderRadius: 12,
                  display: "block",
                }}
              />
            </div>

          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="max-w-4xl mx-auto px-6 pb-16 pt-16">
        <h3 className="font-display text-heading font-bold text-3xl md:text-4xl text-center reveal" style={{ marginBottom: "1rem" }}>
          O resultado fala por si.
        </h3>

        {/* Before / After slider */}
        <div className="max-w-4xl mx-auto px-6 py-8 reveal" style={{ marginTop: "0" }}>
          <BeforeAfterSlider />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-white rounded-2xl p-7 border border-champagne-dark shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)] flex gap-4"
            >
              <span className="text-gold font-bold text-lg leading-none mt-0.5 shrink-0">✓</span>
              <div>
                <h4 className="font-display text-heading font-bold text-base mb-2">{b.title}</h4>
                <p className="text-olive text-sm leading-relaxed">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="pb-24 md:pb-32 text-center px-6 reveal">
        <p className="text-olive text-sm mb-6">Condição especial de pré-venda disponível até 10/06.</p>
        <CTAButton pulse size="lg">
          Garantir minha Selagem Térmica agora
        </CTAButton>
      </div>
    </section>
  );
}

export function Protocol() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const stepEls = Array.from(grid.querySelectorAll<HTMLElement>("[data-step]"));
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        stepEls.forEach((el, i) => {
          const delays = [0, 600, 1200];
          setTimeout(() => { el.style.opacity = "1"; }, delays[i]);
        });
        io.disconnect();
      },
      { threshold: 0.2 }
    );
    io.observe(grid);
    return () => io.disconnect();
  }, []);

  const steps = [
    {
      n: 1,
      name: "Sérum Booster Capilar",
      size: "90ml",
      desc: "Potencializa o resultado da Selagem Térmica. Aplicado antes do procedimento, prepara o fio para absorção máxima — e o resultado dura muito mais.",
    },
    {
      n: 2,
      name: "Selagem Térmica",
      size: "1L",
      desc: "O produto principal. Sela a cutícula, elimina o frizz e entrega brilho intenso desde a primeira aplicação. A base do protocolo.",
    },
    {
      n: 3,
      name: "Uso Obrigatório",
      size: "200ml",
      desc: "Mantém o resultado em casa e abre uma nova fonte de receita para o seu salão. Recomende para a cliente levar — e venda no balcão.",
    },
  ];
  return (
    <section className="bg-champagne">
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-10 md:pt-32 md:pb-12">
        <div className="max-w-3xl reveal">
          <h2 className="font-display text-heading text-4xl md:text-5xl leading-tight mt-5">
            Complete o protocolo e transforme resultado em receita.
          </h2>
          <p className="text-olive mt-5 leading-relaxed max-w-[600px] mb-8" style={{ fontSize: "1.1rem" }}>
            Com os produtos do protocolo completo, você potencializa o resultado da selagem e cria uma experiência que fideliza a cliente e aumenta o ticket do salão.
          </p>
        </div>

        <div ref={gridRef} className="relative mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div
            className="hidden md:block absolute top-8 left-[12%] right-[12%] border-t-2 border-dashed"
            style={{ borderColor: "var(--gold)" }}
            aria-hidden
          />
          {steps.map((s) => (
            <div
              key={s.n}
              data-step
              className="relative flex flex-col items-start"
              style={{ opacity: 0, transition: "opacity 600ms ease-in-out" }}
            >
              <div className="relative z-10 h-16 w-16 rounded-full bg-white border-2 border-gold flex items-center justify-center font-display text-2xl text-heading">
                {s.n}
              </div>
              <h3 className="font-display text-heading text-2xl md:text-3xl mt-6">{s.name}</h3>
              {s.size && <span className="text-olive text-sm mt-1">{s.size}</span>}
              <p className="mt-4 text-olive leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBridge() {
  return (
    <section className="bg-champagne">
      <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center reveal">
        <span className="label-eyebrow">Pré-venda aberta</span>
        <h2 className="font-display text-heading text-4xl md:text-6xl leading-tight mt-5">
          Seja um dos 50 salões parceiros neste lançamento.
        </h2>
        <p className="mt-7 text-olive text-lg leading-relaxed">
          Condições exclusivas de pré-venda, suporte técnico e materiais de apoio para apresentar o protocolo às suas clientes. Cadastre-se agora e receba tudo no WhatsApp.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <CTAButton size="lg" pulse>
            Quero garantir minha cota de parceiro
          </CTAButton>
          <p className="text-olive text-sm inline-flex items-center gap-2">
            <Lock className="h-3.5 w-3.5" /> Seus dados são 100% seguros. Sem spam.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  const tiers = [
    { icon: "1", label: "Primeiros 10 pedidos", original: "R$ 269", current: "R$ 179" },
    { icon: "2", label: "Próximos 20 pedidos",  original: "R$ 269", current: "R$ 210" },
    { icon: "3", label: "Últimos 20 pedidos",   original: "R$ 269", current: "R$ 245" },
  ];
  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-6 pb-24 md:pb-32 reveal" style={{ marginTop: 0, paddingTop: 48 }}>
        <h2 className="font-display text-heading text-4xl md:text-5xl leading-tight mt-5" style={{ textAlign: "center" }}>
          Garanta agora com condição exclusiva de pré-venda.
        </h2>

        <div className="mt-12 rounded-2xl border border-champagne-dark overflow-hidden">
          {tiers.map((tier, i) => (
            <div key={i}>
              <div className="flex items-center justify-between gap-6 px-7 py-6">
                <div className="flex items-center gap-4">
                  <span className="text-gold font-bold text-lg w-5 text-center">{tier.icon}</span>
                  <span className="text-heading font-medium text-base md:text-lg">{tier.label}</span>
                </div>
                <div className="flex items-baseline gap-3 shrink-0">
                  <span className="text-olive text-sm line-through">{tier.original}</span>
                  <span className="text-heading font-bold text-xl md:text-2xl">{tier.current}</span>
                </div>
              </div>
              {i < tiers.length - 1 && <div className="gold-divider" />}
            </div>
          ))}
        </div>

        <div className="mt-8">
          <CTAButton pulse size="lg" className="w-full">
            Garantir minha condição de pré-venda
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

export function BonusSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const text = grid.querySelector<HTMLElement>("[data-fade='text']");
    const image = grid.querySelector<HTMLElement>("[data-fade='image']");

    const ioText = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (text) text.style.opacity = "1";
        ioText.disconnect();
      },
      { threshold: 0.2 }
    );

    const ioImage = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (image) setTimeout(() => { image.style.opacity = "1"; }, 400);
        ioImage.disconnect();
      },
      { threshold: 0.8 }
    );

    ioText.observe(grid);
    ioImage.observe(grid);
    return () => { ioText.disconnect(); ioImage.disconnect(); };
  }, []);

  const items = [
    "Selagem Térmica",
    "Sérum Booster Capilar 90ml",
    "Uso Obrigatório 200ml",
  ];
  return (
    <section className="bg-champagne">
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-24 md:pt-12 md:pb-32">
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left: text */}
          <div data-fade="text" className="flex flex-col items-start" style={{ opacity: 0, transition: "opacity 800ms ease-in-out" }}>
            <h2
              className="font-display text-heading font-bold leading-tight"
              style={{ fontSize: "2rem" }}
            >
              Garanta o protocolo completo por apenas R$&nbsp;119 a mais.
            </h2>

            <p className="mt-6 text-olive text-base md:text-lg leading-relaxed">
              Comprou a Selagem Térmica na pré-venda? Leve também o Sérum Booster e o Uso Obrigatório com condição exclusiva — só até 10/06.
            </p>

            <ul className="mt-8 space-y-3">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-gold font-bold text-base leading-none">✓</span>
                  <span className="text-heading font-medium text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 w-full sm:w-auto">
              <CTAButton pulse size="lg" className="w-full sm:w-auto">
                Garantir meu protocolo completo
              </CTAButton>
            </div>
          </div>

          {/* Right: image */}
          <div data-fade="image" className="order-first md:order-last" style={{ opacity: 0, transition: "opacity 800ms ease-in-out" }}>
            <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl">
              <img
                src={therapyGoldImg}
                alt="Therapy Gold — Selagem Térmica em bancada de salão profissional"
                className="h-full w-full object-cover object-bottom"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const columns = [
    { src: depoimento01, alt: "Depoimento de salão parceiro 1" },
    { src: depoimento02, alt: "Depoimento de salão parceiro 2" },
    { src: depoimento03, alt: "Depoimento de salão parceiro 3" },
  ];

  return (
    <section className="bg-white py-24 md:py-32">
      {/* Headline */}
      <div className="max-w-3xl mx-auto px-6 mb-14 text-center reveal">
        <h2 className="font-display text-heading font-bold text-3xl md:text-4xl leading-tight">
          O que dizem os salões parceiros.
        </h2>
        <p
          className="mt-5 font-display text-center"
          style={{ fontSize: "1.5rem", color: "#3D3530", fontWeight: 500 }}
        >
          Junte-se aos salões que já transformaram a experiência das suas clientes.
        </p>
      </div>

      {/* Masonry grid with overflow peek */}
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="relative overflow-hidden"
          style={{ maxHeight: 560 }}
        >
          {/* 3-column masonry grid — items-start so each column height is driven by image */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
            {columns.map((col, i) => (
              <div
                key={i}
                className="bg-white rounded-[12px] overflow-hidden"
                style={{
                  boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
                  borderRadius: 12,
                }}
              >
                <img
                  src={col.src}
                  alt={col.alt}
                  className="w-full h-auto block"
                  draggable={false}
                />
              </div>
            ))}
          </div>

          {/* Fade gradient — creates the "peek" illusion at the section bottom */}
          <div
            aria-hidden
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: 200,
              background: "linear-gradient(to bottom, transparent, white)",
            }}
          />
        </div>
      </div>

      {/* CTA below the masonry grid */}
      <div className="mt-16 text-center px-6">
        <CTAButton pulse size="lg">
          Garantir minha condição de pré-venda
        </CTAButton>
      </div>
    </section>
  );
}

export function FAQ() {
  const qs = [
    {
      q: "Quais são os ativos da Selagem Térmica Therapy Gold?",
      a: "A fórmula é composta por Ácido Hialurônico, Óleo de Argan, Colágeno Hidrolisado, Proteína do Trigo Hidrolisada, Óleo de Abacate, Óleo de Macadâmia, Óleo de Coco e Pantenol — ativos nobres selecionados para selar a cutícula, nutrir profundamente e garantir brilho e alinhamento duradouros.",
    },
    {
      q: "Posso usar em todos os tipos de cabelo?",
      a: "Sim. A Selagem Térmica Therapy Gold é indicada para todos os tipos de cabelo — lisos, ondulados, cacheados e crespos. Também é segura para cabelos quimicamente tratados, tingidos e com luzes.",
    },
    {
      q: "Quanto tempo dura o efeito?",
      a: "O efeito dura em média de 4 a 6 semanas, variando conforme o tipo de cabelo e a rotina de cuidados da cliente em casa.",
    },
    {
      q: "Quanto rende por aplicação?",
      a: "O frasco de 1L rende em média de 8 a 12 aplicações, dependendo do comprimento e volume do cabelo.",
    },
    {
      q: "A cliente pode lavar o cabelo no mesmo dia?",
      a: "Recomendamos aguardar 48 horas após a aplicação para a primeira lavagem, garantindo maior fixação e durabilidade do resultado.",
    },
    {
      q: "Precisa de escova após a aplicação?",
      a: "Sim. A escova é parte do processo de ativação térmica da selagem. A prancha pode ser usada em seguida para potencializar o alinhamento e o brilho.",
    },
    {
      q: "O preço da pré-venda vale só até 10/06?",
      a: "Sim. A condição especial de pré-venda é válida até 10/06. Após essa data o produto será comercializado pelo valor cheio.",
    },
    {
      q: "Qual o prazo de entrega após o pagamento?",
      a: "O prazo de entrega é de até 7 dias úteis após a confirmação do pagamento, mais o prazo de frete para sua região.",
    },
    {
      q: "O bônus do Sérum e Uso Obrigatório vem junto com o pedido?",
      a: "Sim. O bônus é enviado junto com a Selagem Térmica no mesmo pedido.",
    },
    {
      q: "Quais formas de pagamento são aceitas?",
      a: "Aceitamos boleto bancário e cartão de crédito.",
    },
  ];
  return (
    <section className="bg-champagne" style={{ marginTop: 0 }}>
      <div className="gold-divider" style={{ opacity: 0.2 }} />
      <div className="max-w-3xl mx-auto px-6 pb-24 md:pb-32 reveal" style={{ paddingTop: 64 }}>
        <h2 className="font-display text-heading text-4xl md:text-5xl leading-tight mt-5">
          Tudo o que você precisa saber.
        </h2>
        <Accordion type="single" collapsible className="mt-10">
          {qs.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-champagne-dark">
              <AccordionTrigger className="text-left font-display text-xl md:text-2xl text-heading hover:no-underline py-6">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-olive text-base leading-relaxed pb-6">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function LeadForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log("Lead capturado:", {
      salao: data.get("salao"),
      whatsapp: data.get("whatsapp"),
    });
    alert("Tudo certo! Em instantes você receberá o convite do grupo VIP no WhatsApp.");
  }
  return (
    <section id="lead" className="bg-champagne">
      <div className="max-w-2xl mx-auto px-6 py-24 md:py-32">
        <div className="reveal relative bg-white border border-champagne-dark rounded-3xl p-8 md:p-12 shadow-[0_30px_80px_-40px_color-mix(in_oklab,var(--gold)_45%,transparent)] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold" />
          <div className="text-center">
            <span className="label-eyebrow">Pré-venda · 50 unidades</span>
            <h2 className="font-display text-heading text-3xl md:text-4xl leading-tight mt-4">
              Garanta sua cota na pré-venda
            </h2>
            <p className="mt-4 text-olive leading-relaxed">
              Preencha abaixo e entre para o grupo VIP no WhatsApp. Você recebe condições exclusivas de parceiro antes que as 50 unidades se esgotem.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="salao" className="block text-xs uppercase tracking-[0.18em] text-olive mb-2">
                Nome do salão
              </label>
              <input
                id="salao"
                name="salao"
                required
                placeholder="Ex: Studio Hair by Ana"
                className="w-full rounded-xl border border-champagne-dark bg-champagne/40 px-4 py-3.5 text-olive placeholder:text-olive/60 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition"
              />
            </div>
            <div>
              <label htmlFor="whatsapp" className="block text-xs uppercase tracking-[0.18em] text-olive mb-2">
                WhatsApp
              </label>
              <input
                id="whatsapp"
                name="whatsapp"
                required
                inputMode="tel"
                placeholder="🇧🇷 +55 (11) 90000-0000"
                className="w-full rounded-xl border border-champagne-dark bg-champagne/40 px-4 py-3.5 text-olive placeholder:text-olive/60 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-gold text-white font-medium tracking-wide py-4 text-base md:text-lg transition-all duration-300 hover:brightness-105 hover:-translate-y-0.5 animate-[gold-pulse_2.4s_ease-in-out_infinite]"
            >
              Garantir minha vaga no grupo VIP
            </button>
            <p className="text-olive text-xs text-center inline-flex items-center justify-center gap-2 w-full">
              <Lock className="h-3 w-3" /> Seus dados são protegidos. Usamos apenas para entrar em contato sobre a pré-venda.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer style={{ background: "#3D3530" }}>
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col items-center text-center gap-5">
        <div className="flex flex-col items-center leading-none">
          <span className="font-display tracking-[0.2em] text-2xl md:text-3xl" style={{ color: "#FFFFFF" }}>
            THERAPY GOLD
          </span>
          <span className="text-sm mt-2" style={{ color: "#FFFFFF" }}>Terapia <span className="font-script text-base">capilar</span> profissional</span>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 transition-colors text-sm hover:text-gold"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          <Instagram className="h-4 w-4" /> @therapygold
        </a>
        <div className="gold-divider w-40" />
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>© 2025 Therapy Gold. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

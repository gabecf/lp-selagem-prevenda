import { CTAButton } from "./CTAButton";
import { BrandMark } from "./Brand";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sparkles, ShieldCheck, Clock, TrendingUp, Lock, Instagram } from "lucide-react";

export function Hero() {
  return (
    <section className="grain-bg relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-24 md:pt-14 md:pb-32">
        <BrandMark />

        <div className="mt-16 md:mt-24 max-w-3xl reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold bg-champagne-dark px-4 py-1.5 text-xs md:text-sm text-gold tracking-wide">
            <Clock className="h-3.5 w-3.5" /> Pré-venda exclusiva — 50 unidades para salões parceiros
          </span>

          <h1 className="font-display text-gold text-5xl md:text-7xl leading-[1.05] mt-7">
            Ofereça a progressiva que a cliente <em className="not-italic font-script text-gold-light">volta</em> para repetir.
          </h1>

          <p className="mt-7 text-olive text-lg md:text-xl max-w-2xl leading-relaxed">
            O protocolo Therapy Gold prepara, trata e sela os fios — aumentando a durabilidade da progressiva e o ticket médio do seu salão.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5">
            <CTAButton pulse size="lg">
              Quero ser um salão parceiro Therapy Gold
            </CTAButton>
            <p className="text-olive text-sm max-w-xs">
              Sem compromisso. Você recebe condições exclusivas de revendedor no WhatsApp.
            </p>
          </div>
        </div>
      </div>
      <div className="gold-divider" />
    </section>
  );
}

export function TrustBar() {
  const items = [
    { icon: Sparkles, text: "Fórmula profissional para uso em salão" },
    { icon: ShieldCheck, text: "Livre de Metais Pesados" },
    { icon: Clock, text: "Aumenta a durabilidade da progressiva" },
    { icon: TrendingUp, text: "Margem de revenda para o salão" },
  ];
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
          {items.map((it, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 px-2 md:px-6 ${
                i < items.length - 1 ? "md:border-r md:border-champagne-dark" : ""
              }`}
            >
              <it.icon className="h-6 w-6 text-gold shrink-0" strokeWidth={1.4} />
              <span className="text-olive text-sm leading-snug">{it.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Problem() {
  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 reveal">
        <span className="label-eyebrow">A realidade de todo salão</span>
        <h2 className="font-display text-gold text-4xl md:text-5xl leading-tight mt-5">
          A cliente sai linda. Em duas semanas, já está reclamando.
        </h2>
        <div className="mt-10 space-y-6 text-olive text-lg leading-relaxed">
          <p>
            A progressiva perde efeito rápido porque o fio não foi preparado e a cutícula não foi selada corretamente após o procedimento. O problema não é a progressiva — é o que falta antes e depois dela.
          </p>
          <p>
            Resultado: cliente insatisfeita, retoque precoce com desconto, e você absorvendo o custo de um serviço que poderia ter durado o dobro do tempo.
          </p>
          <p className="text-gold">
            O protocolo Therapy Gold resolve isso. E ainda abre uma nova fonte de receita para o seu salão.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Protocol() {
  const steps = [
    {
      n: 1,
      name: "Sérum Booster Capilar",
      size: "90ml",
      desc: "Aplique antes da progressiva. Limpa o couro cabeludo, remove resíduos e abre o fio para absorção máxima — potencializando o resultado do procedimento.",
    },
    {
      n: 2,
      name: "Selagem / Progressiva",
      size: "",
      desc: "Com o fio preparado, a progressiva penetra mais fundo, fixa melhor e dura semanas a mais. Menos retoque, mais satisfação.",
    },
    {
      n: 3,
      name: "Uso Obrigatório",
      size: "200ml",
      desc: "O pós-tratamento que o mercado esquece. Sela a cutícula, trata a fibra e mantém o efeito liso mesmo após várias lavagens. Pode ser revendido diretamente para a cliente levar pra casa.",
    },
  ];
  return (
    <section className="bg-champagne">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl reveal">
          <span className="label-eyebrow">O protocolo Therapy Gold</span>
          <h2 className="font-display text-gold text-4xl md:text-5xl leading-tight mt-5">
            3 passos que mudam o resultado — e a percepção da cliente.
          </h2>
        </div>

        <div className="relative mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div
            className="hidden md:block absolute top-8 left-[12%] right-[12%] border-t-2 border-dashed"
            style={{ borderColor: "var(--gold)" }}
            aria-hidden
          />
          {steps.map((s) => (
            <div key={s.n} className="relative reveal flex flex-col items-start">
              <div className="relative z-10 h-16 w-16 rounded-full bg-white border-2 border-gold flex items-center justify-center font-display text-2xl text-gold">
                {s.n}
              </div>
              <h3 className="font-display text-gold text-2xl md:text-3xl mt-6">{s.name}</h3>
              {s.size && <span className="text-olive text-sm mt-1">{s.size}</span>}
              <p className="mt-4 text-olive leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 reveal rounded-2xl border border-gold bg-champagne-dark p-7 md:p-9">
          <p className="font-display text-gold text-2xl md:text-3xl leading-snug">
            O Elixir e a Máscara complementam o protocolo e aumentam o ticket de revenda no balcão do seu salão.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Products() {
  const items = [
    {
      name: "Elixir Capilar",
      size: "30ml",
      desc: "Proteção térmica, antifrizz e brilho. Ideal para oferecer na finalização e revender como produto de manutenção.",
    },
    {
      name: "Sérum Booster Capilar",
      size: "90ml",
      desc: "Protocolo de preparação pré-progressiva. Diferencial técnico que poucos salões oferecem.",
    },
    {
      name: "Máscara Capilar",
      size: "150g",
      desc: "Hidratação profunda com Argila Branca e Carvão Ativado. Para usar na cadeira e revender para casa.",
    },
    {
      name: "Uso Obrigatório",
      size: "200ml",
      desc: "O produto de manutenção que a cliente precisa levar para casa após qualquer tratamento químico. Alta rotatividade de revenda.",
    },
  ];
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl reveal">
          <span className="label-eyebrow">Linha completa</span>
          <h2 className="font-display text-gold text-4xl md:text-5xl leading-tight mt-5">
            Cada produto, uma oportunidade de receita.
          </h2>
          <p className="mt-6 text-olive text-lg leading-relaxed">
            Use no serviço do salão e revenda no balcão. A Therapy Gold foi desenvolvida para trabalhar nas duas frentes.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {items.map((p) => (
            <article
              key={p.name}
              className="reveal group relative bg-white border border-champagne-dark rounded-2xl p-8 md:p-10 shadow-[0_10px_40px_-20px_color-mix(in_oklab,var(--gold)_30%,transparent)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gold rounded-full" />
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-gold text-2xl md:text-3xl">{p.name}</h3>
                <span className="text-olive text-sm tracking-wide whitespace-nowrap">{p.size}</span>
              </div>
              <p className="mt-4 text-olive leading-relaxed">{p.desc}</p>
            </article>
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
        <h2 className="font-display text-gold text-4xl md:text-6xl leading-tight mt-5">
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

export function FAQ() {
  const qs = [
    {
      q: "Já trabalho com outra marca. Por que mudar?",
      a: "Não precisa mudar — o protocolo Therapy Gold complementa qualquer progressiva que você já usa. Ele atua na preparação e selagem, não substitui o produto principal.",
    },
    {
      q: "É difícil de aplicar ou precisa de treinamento?",
      a: "O protocolo é simples e direto. Disponibilizamos um guia técnico completo e suporte via WhatsApp para qualquer dúvida.",
    },
    {
      q: "Posso revender os produtos avulsos para as clientes?",
      a: "Sim. Todos os produtos foram desenvolvidos para uso profissional e revenda no balcão. Você define sua própria margem.",
    },
    {
      q: "Como funciona a pré-venda?",
      a: "Cadastre-se, entre no grupo VIP do WhatsApp e receba as condições exclusivas antes do lançamento. Apenas 50 unidades disponíveis nesta primeira lota.",
    },
  ];
  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 reveal">
        <span className="label-eyebrow">Perguntas frequentes</span>
        <h2 className="font-display text-gold text-4xl md:text-5xl leading-tight mt-5">
          Tudo o que você precisa saber.
        </h2>
        <Accordion type="single" collapsible className="mt-10">
          {qs.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-champagne-dark">
              <AccordionTrigger className="text-left font-display text-xl md:text-2xl text-gold hover:no-underline py-6">
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
            <h2 className="font-display text-gold text-3xl md:text-4xl leading-tight mt-4">
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
    <footer className="bg-champagne border-t border-champagne-dark">
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col items-center text-center gap-5">
        <div className="flex flex-col items-center leading-none">
          <span className="font-display tracking-[0.2em] text-gold text-2xl md:text-3xl">
            THERAPY GOLD
          </span>
          <span className="text-olive text-sm mt-2">Terapia <span className="font-script text-base">capilar</span> profissional</span>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-olive hover:text-gold transition-colors text-sm"
        >
          <Instagram className="h-4 w-4" /> @therapygold
        </a>
        <div className="gold-divider w-40" />
        <p className="text-olive text-xs">© 2025 Therapy Gold. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

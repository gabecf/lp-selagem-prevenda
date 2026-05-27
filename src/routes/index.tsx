import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import {
  Hero,
  TrustBar,
  Problem,
  Protocol,
  CtaBridge,
  Pricing,
  BonusSection,
  Testimonials,
  FAQ,
  Footer,
} from "@/components/therapy/sections";
import { ModalProvider } from "@/components/therapy/ModalContext";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Therapy Gold — Terapia Capilar Profissional | Pré-venda para Salões" },
      {
        name: "description",
        content:
          "Pré-venda exclusiva Therapy Gold: 50 unidades para salões parceiros. Protocolo profissional que aumenta a durabilidade da progressiva e o ticket médio do seu salão.",
      },
      { property: "og:title", content: "Therapy Gold — Pré-venda para Salões Parceiros" },
      {
        property: "og:description",
        content:
          "Protocolo profissional de terapia capilar. Aumente a durabilidade da progressiva e crie uma nova fonte de receita no seu salão.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <ModalProvider>
      <main className="bg-white text-olive">
        <Hero />
        <TrustBar />
        <Problem />
        <Pricing />
        <Protocol />
        <BonusSection />
        <Testimonials />
        <FAQ />
        <Footer />
      </main>
    </ModalProvider>
  );
}

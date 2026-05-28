import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

const ModalContext = createContext<{ open: () => void }>({ open: () => {} });

export function useModal() {
  return useContext(ModalContext);
}

const WA_URL =
  "https://wa.me/5519986068490?text=Olá%2C%20acabei%20de%20me%20cadastrar%20e%20quero%20saber%20mais%20sobre%20a%20pré-venda%20da%20Selagem%20Térmica%20Therapy%20Gold";

function LeadModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data = new FormData(e.currentTarget as HTMLFormElement);
    const nameFieldValue = (data.get("salao") as string) ?? "";
    const phoneFieldValue = (data.get("whatsapp") as string) ?? "";
    console.log("Lead:", { salao: nameFieldValue, whatsapp: phoneFieldValue });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "form_submit",
      form_name: "modal_prevenda",
      phone: phoneFieldValue,
      first_name: nameFieldValue,
    });
    console.log('Submitting form, sending to Make...');
    fetch("https://hook.us2.make.com/toe18bk5hcvbvx748iujycf8lxfl0dp7", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: nameFieldValue,
        phone: phoneFieldValue,
        date: new Date().toISOString(),
      }),
    });
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      window.open(WA_URL, "_blank");
    }, 3000);
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.55)" }}
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl w-full max-w-md p-8 md:p-10 overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold" />

        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-5 text-olive hover:text-heading transition-colors text-xl leading-none"
        >
          ✕
        </button>

        {submitted ? (
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#3D3530",
              textAlign: "center",
              fontSize: "1.1rem",
              marginTop: "2rem",
            }}
          >
            Pronto! Nossa equipe já está te esperando no WhatsApp para garantir seu pedido.
          </p>
        ) : (
          <>
            <h2 className="font-display text-heading font-bold text-2xl md:text-3xl leading-tight pr-6">
              Reserve sua unidade na pré-venda
            </h2>
            <p className="mt-3 text-olive text-sm leading-relaxed">
              Preencha abaixo e entraremos em contato pelo WhatsApp com todos os detalhes da sua reserva.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-[0.18em] text-olive mb-2">
                  Nome completo
                </label>
                <input
                  name="salao"
                  required
                  placeholder="Ex: Ana Paula Silva"
                  className="w-full rounded-xl border border-champagne-dark bg-champagne/40 px-4 py-3.5 text-olive placeholder:text-olive/60 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.18em] text-olive mb-2">
                  WhatsApp 🇧🇷 +55
                </label>
                <input
                  name="whatsapp"
                  required
                  inputMode="tel"
                  placeholder="+55 (11) 90000-0000"
                  className="w-full rounded-xl border border-champagne-dark bg-champagne/40 px-4 py-3.5 text-olive placeholder:text-olive/60 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-gold text-white font-medium tracking-wide py-4 text-base transition-all duration-300 hover:brightness-105 hover:-translate-y-0.5 animate-[gold-pulse_2.4s_ease-in-out_infinite]"
              >
                Garantir minha condição de pré-venda
              </button>
              <p className="text-olive text-xs text-center">
                🔒 Seus dados são 100% seguros.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ModalContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      {isOpen && <LeadModal onClose={() => setIsOpen(false)} />}
    </ModalContext.Provider>
  );
}

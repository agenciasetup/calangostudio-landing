"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target } from "lucide-react";

const names = [
  "Lucas M.", "Ana C.", "Pedro H.", "Mariana S.", "Gabriel L.",
  "Fábio P.", "Amanda A.", "Rafael T.", "Juliana K.", "Bruno R.",
  "Carolina D.", "Diego F.", "Fernanda B.", "Thiago N.", "Letícia V.",
  "Matheus O.", "Camila P.", "Rodrigo S.", "Isabela M.", "Gustavo A.",
  "Larissa C.", "Felipe E.", "Natália R.", "Leonardo G.", "Beatriz F.",
];

const businesses = [
  "um advogado", "uma barbearia", "uma dentista", "uma loja de construção",
  "um político", "uma construtora", "uma empresa de energia solar",
  "um coaching", "um infoprodutor", "um ecommerce", "uma loja online",
  "um influencer", "uma clínica estética", "um restaurante",
  "uma academia", "um pet shop", "uma padaria", "uma imobiliária",
  "um escritório de contabilidade", "uma agência de viagens",
  "um studio de pilates", "uma oficina mecânica", "uma floricultura",
  "um hotel", "uma escola de idiomas",
];

const cities = [
  "São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba",
  "Salvador", "Brasília", "Fortaleza", "Recife", "Porto Alegre",
  "Campinas", "Santos", "Ribeirão Preto", "Goiânia",
  "Manaus", "Belém", "Florianópolis", "Vitória",
  "João Pessoa", "Natal", "Maceió", "Uberlândia",
  "Joinville", "Londrina", "Niterói", "Maringá",
];

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

interface PopupData {
  id: number;
  name: string;
  business: string;
  city: string;
}

export default function ProspectPopup() {
  const [popups, setPopups] = useState<PopupData[]>([]);
  const [nextId, setNextId] = useState(0);

  const addPopup = useCallback(() => {
    const newPopup: PopupData = {
      id: nextId,
      name: pickRandom(names),
      business: pickRandom(businesses),
      city: pickRandom(cities),
    };
    setPopups((prev) => [...prev.slice(-2), newPopup]);
    setNextId((prev) => prev + 1);

    // Sometimes add a second popup 1s later
    if (Math.random() > 0.6) {
      setTimeout(() => {
        const bonus: PopupData = {
          id: nextId + 1000,
          name: pickRandom(names),
          business: pickRandom(businesses),
          city: pickRandom(cities),
        };
        setPopups((prev) => [...prev.slice(-2), bonus]);
        setNextId((prev) => prev + 1);
      }, 1000);
    }

    // Auto-remove after 4s
    setTimeout(() => {
      setPopups((prev) => prev.filter((p) => p.id !== newPopup.id));
    }, 4000);
  }, [nextId]);

  useEffect(() => {
    // Wait 8s before first popup
    const initialDelay = setTimeout(() => {
      addPopup();
    }, 8000);

    return () => clearTimeout(initialDelay);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (nextId === 0) return;
    // Schedule next popup with variable timing (5-10s)
    const delay = 5000 + Math.random() * 5000;
    const timer = setTimeout(addPopup, delay);
    return () => clearTimeout(timer);
  }, [nextId, addPopup]);

  // Remove stale popups
  useEffect(() => {
    const cleanup = setInterval(() => {
      setPopups((prev) => prev.slice(-3));
    }, 10000);
    return () => clearInterval(cleanup);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-40 flex flex-col gap-2 pointer-events-none max-w-[340px]">
      <AnimatePresence>
        {popups.map((popup) => (
          <motion.div
            key={popup.id}
            initial={{ opacity: 0, y: 20, x: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, x: -30, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="pointer-events-auto"
          >
            <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-[#0a0a0c]/95 border border-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-sm">
              <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                <Target size={12} className="text-accent" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] text-white leading-snug">
                  <span className="font-bold text-accent">{popup.name}</span>{" "}
                  <span className="text-zinc-400">prospectou</span>{" "}
                  <span className="text-zinc-300">{popup.business}</span>{" "}
                  <span className="text-zinc-400">em</span>{" "}
                  <span className="text-zinc-300">{popup.city}</span>
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

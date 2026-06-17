import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "About",      id: "about" },
  { label: "Education",  id: "education" },
  { label: "Programs",   id: "programs" },
  { label: "Contact",    id: "contact" },
];

function smoothScroll(id: string) {
  const section = document.getElementById(id);
  if (!section) return;

  window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);

  section.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    block: "start",
  });
}


export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // clear stale hash on mount
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
  }, []);

  const handleClick = (id: string) => {
    setOpen(false);
    smoothScroll(id);
  };

  return (
    <motion.div
      data-site-navbar
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      style={{ zIndex: 9999, pointerEvents: "auto", isolation: "isolate" }}
      className={`sticky top-0 z-[9999] transition-all duration-300 ${
        scrolled
          ? "bg-[#F8F5EF]/92 backdrop-blur-md border-b border-[#DDD8CE] shadow-[0_2px_20px_rgba(28,28,28,0.06)]"
          : "bg-[#F8F5EF] border-b border-transparent"
      }`}
    >
      {/* top accent bar */}
      <div className="h-[3px] bg-gradient-to-r from-[#1C1C1C] via-[#6B8F71] to-[#D6E5D8]" />

      <nav className="mx-auto flex max-w-[1220px] items-center justify-between gap-6 px-6 py-4 md:px-12">
        {/* Logo */}
        <motion.button
          type="button"
          onClick={() => handleClick("about")}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="font-['Playfair_Display'] text-[15px] font-semibold tracking-[-0.02em] text-[#1C1C1C]"
        >
          Donia Essam
        </motion.button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.id} label={item.label} onClick={() => handleClick(item.id)} />
          ))}
          <BookButton onClick={() => handleClick("contact")} />
        </div>

        {/* Mobile toggle */}
        <motion.button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          whileTap={{ scale: 0.9 }}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#DDD8CE] bg-[#F8F5EF] text-[#1C1C1C] transition-colors hover:border-[#6B8F71] hover:text-[#6B8F71] md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "x" : "menu"}
              initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
              transition={{ duration: 0.18 }}
            >
              {open ? <X size={18} strokeWidth={1.8} /> : <Menu size={18} strokeWidth={1.8} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-[#DDD8CE] bg-[#F8F5EF] md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.id}
                  type="button"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => handleClick(item.id)}
                  className="rounded-xl px-4 py-3 text-left text-[14px] font-medium text-[#3F3B35] transition-colors hover:bg-[#EEE9DF] hover:text-[#6B8F71]"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.05, duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="pt-2"
              >
                <BookButton onClick={() => handleClick("contact")} fullWidth />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function NavLink({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative text-[13px] font-medium tracking-[0.03em] text-[#4A4A4A] transition-colors duration-200 hover:text-[#1C1C1C]"
    >
      {label}
      {/* underline slide-in */}
      <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 rounded-full bg-[#6B8F71] transition-all duration-300 group-hover:w-full" />
    </button>
  );
}

function BookButton({ onClick, fullWidth }: { onClick: () => void; fullWidth?: boolean }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className={`rounded-xl bg-[#1C1C1C] px-5 py-2.5 text-[13px] font-semibold tracking-[0.04em] text-[#F8F5EF] transition-all duration-300 hover:bg-[#6B8F71] hover:shadow-[0_4px_18px_rgba(107,143,113,0.35)] ${
        fullWidth ? "w-full text-center" : ""
      }`}
    >
      Book Session
    </motion.button>
  );
}
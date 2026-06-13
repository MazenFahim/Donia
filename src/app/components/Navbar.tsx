import { useState, useEffect } from "react";
import { T } from "./tokens";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = ["About", "Education", "Programs", "Contact"];

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled ? "rgba(247,248,252,0.92)" : T.bgPage,
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid ${T.border}` : "1px solid transparent",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div
        style={{
          height: 3,
          background: `linear-gradient(90deg, ${T.navy} 0%, ${T.blue} 60%, ${T.gold} 100%)`,
        }}
      />
      <nav
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: T.navy,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          Donia<span style={{ color: T.blue }}>.</span>
        </span>

        {/* Desktop links */}
        <div className="nav-links" style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: T.textSecondary,
                textDecoration: "none",
                letterSpacing: "0.04em",
                transition: "color 0.15s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = T.navy)}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = T.textSecondary)}
            >
              {item}
            </a>
          ))}
          <button
            style={{
              background: T.blue,
              color: T.white,
              border: "none",
              height: 40,
              padding: "0 22px",
              fontSize: 13,
              fontWeight: 600,
              fontFamily: "Poppins, sans-serif",
              cursor: "pointer",
              letterSpacing: "0.04em",
              borderRadius: 10,
              transition: "background 0.15s, box-shadow 0.15s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#2a45e8";
              el.style.boxShadow = "0 4px 16px rgba(61,90,254,0.35)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = T.blue;
              el.style.boxShadow = "none";
            }}
          >
            Book Session
          </button>
        </div>

        {/* Hamburger button — mobile only */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 4,
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
          aria-label="Toggle menu"
        >
          <span style={{ width: 22, height: 2, background: T.navy, display: "block", transition: "transform 0.2s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <span style={{ width: 22, height: 2, background: T.navy, display: "block", opacity: menuOpen ? 0 : 1, transition: "opacity 0.2s" }} />
          <span style={{ width: 22, height: 2, background: T.navy, display: "block", transition: "transform 0.2s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          className="nav-mobile-menu"
          style={{
            borderTop: `1px solid ${T.border}`,
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: T.navy,
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}
            >
              {item}
            </a>
          ))}
          <button
            style={{
              background: T.blue,
              color: T.white,
              border: "none",
              height: 44,
              padding: "0 22px",
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "Poppins, sans-serif",
              cursor: "pointer",
              letterSpacing: "0.04em",
              borderRadius: 10,
              marginTop: 4,
            }}
          >
            Book Session
          </button>
        </div>
      )}
    </div>
  );
}
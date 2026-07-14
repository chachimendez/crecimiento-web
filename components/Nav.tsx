"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getDict, type Lang } from "@/lib/i18n";

// Route pairs for the EN/ES switch. Individual posts have no direct
// counterpart (each language has its own posts), so they map to the
// other language's blog index. Pages that only exist in English
// (media kit) fall back to the Spanish home.
function counterpartPath(pathname: string, isEs: boolean): string {
  if (isEs) {
    if (pathname === "/es") return "/";
    if (pathname === "/es/about") return "/about";
    if (pathname.startsWith("/es/blog")) return "/blog";
    return "/";
  }
  if (pathname === "/") return "/es";
  if (pathname === "/about") return "/es/about";
  if (pathname.startsWith("/blog")) return "/es/blog";
  return "/es";
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isEs = pathname === "/es" || pathname.startsWith("/es/");
  const lang: Lang = isEs ? "es" : "en";
  const t = getDict(lang).nav;
  const homeHref = isEs ? "/es" : "/";
  const isDark = pathname === "/about" || pathname === "/es/about";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar el menu mobile al navegar
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // On the home page, "Home" and the sun scroll to the top.
  // Anywhere else, they navigate back to the home page.
  const goHome = (e: React.MouseEvent) => {
    if (pathname === homeHref) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setOpen(false);
    }
  };

  const links = [
    { href: homeHref, label: t.home, onClick: goHome },
    { href: isEs ? "/es/blog" : "/blog", label: t.blog, onClick: undefined },
    { href: isEs ? "/es/about" : "/about", label: t.about, onClick: undefined },
  ];

  const langOptions: { code: Lang; href: string; active: boolean }[] = [
    { code: "en", href: isEs ? counterpartPath(pathname, true) : pathname, active: !isEs },
    { code: "es", href: isEs ? pathname : counterpartPath(pathname, false), active: isEs },
  ];

  const fg = isDark ? "var(--visionary-white)" : "var(--foundation-black)";

  const LangSwitch = ({ className = "" }: { className?: string }) => (
    <div
      className={`flex items-center gap-1.5 text-xs tracking-wide ${className}`}
      style={{ color: fg }}
    >
      {langOptions.map(({ code, href, active }, i) => (
        <span key={code} className="flex items-center gap-1.5">
          {i > 0 && <span style={{ opacity: 0.35 }}>/</span>}
          {active ? (
            <span style={{ fontWeight: 700 }}>{code.toUpperCase()}</span>
          ) : (
            <a
              href={href}
              className="transition-opacity hover:opacity-100"
              style={{ fontWeight: 400, opacity: 0.55 }}
              aria-label={code === "es" ? "Versión en español" : "English version"}
            >
              {code.toUpperCase()}
            </a>
          )}
        </span>
      ))}
    </div>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "shadow-sm" : ""
      }`}
      style={{
        backgroundColor:
          scrolled || open
            ? isDark
              ? "rgba(22,22,22,0.96)"
              : "var(--visionary-white)"
            : "transparent",
      }}
    >
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        {/* Logomark: back home */}
        <a
          href={homeHref}
          onClick={goHome}
          className="shrink-0 w-16"
          aria-label="Crecimiento"
        >
          <Image
            src={isDark ? "/assets/sun-mark-white.png" : "/assets/sun-black.png"}
            alt="Crecimiento"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
            priority
          />
        </a>

        {/* Center pill (desktop) */}
        <div
          className="hidden md:flex items-center gap-0.5 rounded-full px-1.5 py-1.5"
          style={{
            backgroundColor: "var(--visionary-white)",
            border: "1px solid var(--adaptable-gray)",
          }}
        >
          {links.map(({ href, label, onClick }) => (
            <a
              key={label}
              href={href}
              onClick={onClick}
              className="text-xs font-medium px-4 py-1.5 rounded-full transition-colors tracking-wide whitespace-nowrap"
              style={{ color: "var(--foundation-black)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "var(--adaptable-gray)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "transparent";
              }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Language switch (desktop, same width as the logomark: keeps the pill centered) */}
        <LangSwitch className="hidden md:flex w-16 justify-end" />

        {/* Hamburger (mobile) */}
        <button
          type="button"
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span
            className="block h-[2px] w-5 transition-transform duration-200"
            style={{
              backgroundColor: fg,
              transform: open ? "translateY(7px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block h-[2px] w-5 transition-opacity duration-200"
            style={{ backgroundColor: fg, opacity: open ? 0 : 1 }}
          />
          <span
            className="block h-[2px] w-5 transition-transform duration-200"
            style={{
              backgroundColor: fg,
              transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-1 border-t"
          style={{
            backgroundColor: isDark ? "rgba(22,22,22,0.98)" : "var(--visionary-white)",
            borderColor: isDark ? "rgba(250,250,250,0.15)" : "var(--adaptable-gray)",
          }}
        >
          {links.map(({ href, label, onClick }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => {
                onClick?.(e);
                setOpen(false);
              }}
              className="py-3 text-base tracking-wide border-b"
              style={{
                color: fg,
                fontWeight: 500,
                borderColor: isDark ? "rgba(250,250,250,0.1)" : "var(--adaptable-gray)",
              }}
            >
              {label}
            </a>
          ))}
          <LangSwitch className="pt-4" />
        </div>
      )}
    </nav>
  );
}

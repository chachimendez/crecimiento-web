import Image from "next/image";
import { getDict, type Lang } from "@/lib/i18n";

export default function Footer({ lang = "en" }: { lang?: Lang }) {
  const t = getDict(lang).footer;

  return (
    <footer
      className="w-full px-8 md:px-14 pt-12 pb-8"
      style={{ backgroundColor: "#161616", color: "var(--visionary-white)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/assets/sun-white.png"
              alt="Crecimiento"
              width={3170}
              height={620}
              className="h-8 w-auto"
            />
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-16 md:gap-x-24 gap-y-8">
            {t.columns.map((links, i) => (
              <div key={i} className="flex flex-col gap-4">
                {links.map(({ label, href, external }) => (
                  <a
                    key={label}
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-sm transition-opacity hover:opacity-70"
                    style={{ color: "var(--visionary-white)" }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <p
          className="mt-16 text-center text-xs"
          style={{ color: "var(--transition-gray)" }}
        >
          © {new Date().getFullYear()} Crecimiento. {t.rights}
        </p>
      </div>
    </footer>
  );
}

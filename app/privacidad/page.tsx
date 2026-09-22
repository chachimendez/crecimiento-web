import type { Metadata } from "next";
import Nav from "@/components/Nav";
import CursorGlow from "@/components/CursorGlow";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de privacidad",
  alternates: { canonical: "/privacidad" },
  description:
    "Política de privacidad de las herramientas internas de Crecimiento que se conectan con Google Workspace.",
  robots: { index: false, follow: false },
};

const h2 = "text-sm tracking-[0.15em] mb-4";
const h2Style = { fontWeight: 700, color: "var(--ambition-blue)" } as const;
const p = "text-base leading-relaxed max-w-3xl";
const pStyle = { fontWeight: 300, color: "var(--foundation-black)" } as const;

export default function PrivacidadPage() {
  return (
    <>
      <CursorGlow />
      <Nav />
      <main className="px-6 pt-32 md:pt-40 pb-24">
        <div className="max-w-5xl mx-auto">
          <p
            className="text-xs tracking-[0.25em]"
            style={{ fontWeight: 500, color: "var(--transition-gray)" }}
          >
            HERRAMIENTAS INTERNAS
          </p>
          <h1
            className="mt-4 text-5xl md:text-6xl leading-[1.05] tracking-tight"
            style={{ color: "var(--foundation-black)" }}
          >
            <span style={{ fontWeight: 400 }}>POLÍTICA DE </span>
            <span style={{ fontWeight: 700 }}>PRIVACIDAD</span>
          </h1>
          <p className={`mt-6 ${p}`} style={pStyle}>
            Esta política describe cómo las herramientas internas de
            Crecimiento, entre ellas la aplicación &quot;Crecimiento
            Comms&quot;, acceden a datos de Google Workspace. Última
            actualización: 22 de septiembre de 2026.
          </p>

          <section className="mt-14">
            <h2 className={h2} style={h2Style}>/QUÉ SON ESTAS HERRAMIENTAS</h2>
            <p className={p} style={pStyle}>
              Son aplicaciones de uso interno del equipo de Crecimiento. Se
              conectan con Google Drive, Google Docs, Google Sheets, Google
              Slides, Gmail y Google Calendar para leer y editar archivos y
              datos que pertenecen a las cuentas del propio equipo. No están
              disponibles para el público ni para terceros.
            </p>
          </section>

          <section className="mt-10">
            <h2 className={h2} style={h2Style}>/QUÉ DATOS SE USAN</h2>
            <p className={p} style={pStyle}>
              Las herramientas acceden únicamente a los archivos, mensajes y
              eventos de las cuentas de Google que sus titulares autorizan de
              forma explícita mediante el mecanismo de consentimiento de
              Google. El acceso se usa para leer, crear y modificar documentos
              y planillas de trabajo de Crecimiento, y para consultar correos
              y eventos de calendario en modo de solo lectura.
            </p>
          </section>

          <section className="mt-10">
            <h2 className={h2} style={h2Style}>/CÓMO SE ALMACENAN Y COMPARTEN</h2>
            <p className={p} style={pStyle}>
              Los datos permanecen en las cuentas de Google de sus titulares.
              Las herramientas no copian, almacenan ni transfieren esos datos a
              servidores de terceros, no los venden ni los comparten con
              nadie, y no los utilizan con fines publicitarios. Las
              credenciales de acceso se guardan únicamente en los equipos de
              las personas autorizadas.
            </p>
          </section>

          <section className="mt-10">
            <h2 className={h2} style={h2Style}>/CÓMO REVOCAR EL ACCESO</h2>
            <p className={p} style={pStyle}>
              Cualquier persona puede revocar el acceso en cualquier momento
              desde la configuración de seguridad de su cuenta de Google, en la
              sección de aplicaciones de terceros con acceso a la cuenta.
            </p>
          </section>

          <section className="mt-10">
            <h2 className={h2} style={h2Style}>/CONTACTO</h2>
            <p className={p} style={pStyle}>
              Ante cualquier consulta sobre esta política, escribir a{" "}
              <a
                href="mailto:mendezprandinif@gmail.com"
                style={{ color: "var(--ambition-blue)" }}
              >
                mendezprandinif@gmail.com
              </a>
              .
            </p>
          </section>

          <section className="mt-14 pt-10" style={{ borderTop: "1px solid #E5E5E5" }}>
            <h2 className={h2} style={h2Style}>/PRIVACY POLICY (ENGLISH)</h2>
            <p className={p} style={pStyle}>
              Crecimiento&apos;s internal tools, including the &quot;Crecimiento
              Comms&quot; application, connect to Google Drive, Docs, Sheets,
              Slides, Gmail and Calendar to read and edit files and data owned
              by the Crecimiento team&apos;s own accounts. They are not
              available to the public or to third parties. Access is granted
              only through Google&apos;s explicit consent flow. Data stays in
              the owners&apos; Google accounts and is never copied to
              third-party servers, sold, shared or used for advertising.
              Credentials are stored only on the devices of authorized team
              members. Access can be revoked at any time from the Google
              account security settings. Questions: mendezprandinif@gmail.com.
              Last updated: September 22, 2026.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

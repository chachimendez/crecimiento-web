import type { Metadata } from "next";
import Nav from "@/components/Nav";
import CursorGlow from "@/components/CursorGlow";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Código de conducta",
  alternates: { canonical: "/conducta" },
  description:
    "Código de conducta de Crecimiento. Vale en toda actividad de la comunidad, en cualquier sede, presencial o virtual.",
};

const h2 = "text-sm tracking-[0.15em] mb-4";
const h2Style = { fontWeight: 700, color: "var(--ambition-blue)" } as const;
const p = "text-base leading-relaxed max-w-3xl";
const pStyle = { fontWeight: 300, color: "var(--foundation-black)" } as const;
const li = "text-base leading-relaxed max-w-3xl pl-5 relative before:content-['→'] before:absolute before:left-0";
const mail = (
  <a href="mailto:comms@crecimiento.build" style={{ color: "var(--ambition-blue)" }}>
    comms@crecimiento.build
  </a>
);

export default function ConductaPage() {
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
            COMUNIDAD
          </p>
          <h1
            className="mt-4 text-5xl md:text-6xl leading-[1.05] tracking-tight"
            style={{ color: "var(--foundation-black)" }}
          >
            <span style={{ fontWeight: 400 }}>CÓDIGO DE </span>
            <span style={{ fontWeight: 700 }}>CONDUCTA</span>
          </h1>
          <p className={`mt-6 ${p}`} style={pStyle}>
            Para disfrutar de los beneficios de la comunidad, quienes
            participan deberán respetar este código de conducta. Está pensado
            para generar un ambiente de colaboración y respeto mutuo, libre de
            cualquier forma de discriminación, acoso o intimidación. Todos nos
            beneficiamos cuando creamos juntos.
          </p>

          <section className="mt-14">
            <h2 className={h2} style={h2Style}>/ALCANCE</h2>
            <p className={p} style={pStyle}>
              Crecimiento reúne a personas que construyen, aprenden y se
              encuentran en actividades muy distintas: coworking, meetups,
              hackathons, conferencias y programas. Este código aplica a todas
              ellas, en cualquier sede, y a sus espacios virtuales: grupos de
              Telegram, comunidades de programas y redes. Alcanza a toda
              persona que participe, sea asistente, speaker, mentor, sponsor,
              voluntario o parte del equipo.
            </p>
          </section>

          <section className="mt-10">
            <h2 className={h2} style={h2Style}>/RESPETO MUTUO</h2>
            <p className={p} style={pStyle}>
              Todas las personas tienen derecho a participar con comodidad,
              seguridad y dignidad. Construir eso es responsabilidad de todos.
            </p>
            <p className={`mt-4 ${p}`} style={pStyle}>
              Está terminantemente prohibida cualquier forma de acoso,
              discriminación o trato degradante, ya sea explícita o mediante
              microagresiones. Esto incluye, sin limitación, intimidación
              deliberada, comentarios ofensivos, contacto físico no deseado,
              atención sexual no solicitada, imágenes de contenido sexual en
              espacios comunes o en pantalla, y toda conducta basada en, o
              dirigida a, el color de piel, la nacionalidad, el género, la
              identidad de género, la orientación sexual, la orientación
              política, la edad, la apariencia, el tamaño corporal, las
              capacidades físicas o mentales, la religión o el estado de
              embarazo.
            </p>
            <p className={`mt-4 ${p}`} style={pStyle}>
              Toda conversación se lleva adelante en un tono que respete al
              interlocutor y que permita trabajar a quienes están cerca.
              Hagamos de la cortesía un hábito. Y si alguien te pide que
              pares, pará.
            </p>
          </section>

          <section className="mt-10">
            <h2 className={h2} style={h2Style}>/GÉNERO, DIVERSIDAD Y DISCRIMINACIÓN</h2>
            <p className={p} style={pStyle}>
              Crecimiento tiene tolerancia cero frente a la violencia de
              género, el acoso y la discriminación. Para actuar ante estas
              situaciones contamos con un Protocolo de género y
              discriminación, público, que establece cómo se recibe un
              reporte, quién lo acompaña y qué pasos se siguen. Lo publicamos
              en esta misma página en cuanto esté acordado con la comunidad.
            </p>
          </section>

          <section className="mt-10">
            <h2 className={h2} style={h2Style}>/CÓMO REPORTAR</h2>
            <p className={p} style={pStyle}>
              Si sos víctima o testigo de acoso, discriminación o de cualquier
              conducta contraria a este código, podés reportarlo de dos
              maneras:
            </p>
            <ul className="mt-4 space-y-2">
              <li className={li} style={pStyle}>
                En persona, a cualquier integrante del equipo de Crecimiento
                presente en la actividad.
              </li>
              <li className={li} style={pStyle}>Por mail, a {mail}.</li>
            </ul>
            <p className={`mt-4 ${p}`} style={pStyle}>
              Si te cuesta hacerlo directamente, podés pedirle a una persona de
              confianza que reporte por vos. En cada actividad hay cartelería
              con este canal a la vista.
            </p>
            <p className={`mt-4 ${p}`} style={pStyle}>
              Cuando reportás, Crecimiento acusa recibo, escucha a la persona
              afectada y toma medidas inmediatas si la situación lo requiere.
              Todo reporte se trata con
              confidencialidad, y nadie sufre consecuencias por reportar de
              buena fe. Este canal complementa y no reemplaza las vías legales
              disponibles según la legislación vigente.
            </p>
          </section>

          <section className="mt-10">
            <h2 className={h2} style={h2Style}>/EN LAS ACTIVIDADES</h2>
            <ul className="space-y-3">
              <li className={li} style={pStyle}>
                Seguí las indicaciones del equipo de Crecimiento. Están ahí
                para que la actividad funcione bien para todos.
              </li>
              <li className={li} style={pStyle}>
                Respetá las reglas propias de cada sede. Muchos de los lugares
                donde nos reunimos son prestados por aliados.
              </li>
              <li className={li} style={pStyle}>
                Respetá a quien está hablando. Este código vale también para el
                contenido de las charlas y lo que se muestra en pantalla.
              </li>
              <li className={li} style={pStyle}>
                Fotografiá o filmá a otras personas solo con su consentimiento.
                Respetá a quien pida no ser registrado.
              </li>
              <li className={li} style={pStyle}>
                El consumo de alcohol se limita a los momentos y espacios
                habilitados por la organización. No se permiten sustancias
                ilegales ni armas de ningún tipo.
              </li>
              <li className={li} style={pStyle}>
                Las actividades de Crecimiento son para construir comunidad. No
                se permite usarlas para vender productos financieros, promover
                esquemas fraudulentos ni hacer promoción agresiva de proyectos.
              </li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className={h2} style={h2Style}>/ACCESIBILIDAD</h2>
            <p className={p} style={pStyle}>
              Si necesitás algo para poder participar de una actividad,
              escribinos a {mail} antes y vemos cómo resolverlo.
            </p>
          </section>

          <section className="mt-10">
            <h2 className={h2} style={h2Style}>/IMAGEN</h2>
            <p className={p} style={pStyle}>
              Durante las actividades de Crecimiento se toman fotografías y
              videos que pueden incluir tu imagen. Al participar, autorizás a
              Crecimiento a usarlos con fines institucionales y de difusión, en
              redes, web, newsletters y materiales de comunicación. Podés
              revocar esta autorización en cualquier momento escribiendo a{" "}
              {mail}; la revocación no afecta el material ya publicado.
            </p>
          </section>

          <section className="mt-10">
            <h2 className={h2} style={h2Style}>/INCUMPLIMIENTO</h2>
            <p className={p} style={pStyle}>
              Quien incumpla este código puede ser invitado a retirarse de la
              actividad en el momento, y Crecimiento puede negarle el acceso a
              actividades futuras. Las situaciones vinculadas a género y
              discriminación siguen además el procedimiento del protocolo.
            </p>
          </section>

          <section className="mt-10">
            <h2 className={h2} style={h2Style}>/ACEPTACIÓN</h2>
            <p className={p} style={pStyle}>
              Al inscribirte en una actividad de Crecimiento aceptás este
              código. La versión vigente está siempre publicada en esta página
              y cualquier actualización rige desde su publicación. Última
              actualización: 1 de octubre de 2026.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

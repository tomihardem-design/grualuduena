import Image from "next/image";

export default function Home() {
  return (
    <main style={{
      fontFamily: "system-ui",
      backgroundColor: "#0a0a0a",
      color: "white"
    }}>

      {/* TOP BAR */}
      <div style={{
        backgroundColor: "#111",
        padding: 10,
        textAlign: "center",
        fontSize: 14,
        color: "#25D366"
      }}>
        🚨 Grúas 24hs en Córdoba · Av. Fuerza Aérea Argentina
      </div>

      {/* HEADER */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        borderBottom: "1px solid #222"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Image src="/images/logo.png" alt="Logo" width={55} height={55} />
          <strong>Grúas Ludueña</strong>
        </div>

        <span style={{ color: "#25D366", fontWeight: "bold" }}>
          Disponible 24/7
        </span>
      </header>

      {/* HERO */}
      <section style={{ position: "relative" }}>
        <Image
          src="/images/banner.jpg"
          alt="Grúa"
          width={1600}
          height={650}
          style={{ width: "100%", height: "auto", filter: "brightness(0.55)" }}
        />

        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          padding: 20
        }}>
          <h1 style={{ fontSize: 34 }}>Asistencia vial inmediata</h1>
          <p style={{ fontSize: 18, opacity: 0.9 }}>
            Llegamos en menos de 30 minutos 🚚
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        display: "flex",
        justifyContent: "center",
        gap: 15,
        padding: 20,
        flexWrap: "wrap"
      }}>
        <a
          href="https://wa.me/5493513754754"
          target="_blank"
          style={{
            backgroundColor: "#25D366",
            color: "black",
            padding: "14px 22px",
            borderRadius: 10,
            fontWeight: "bold",
            textDecoration: "none"
          }}
        >
          💬 WhatsApp
        </a>

        <a
          href="tel:+5493513754754"
          style={{
            backgroundColor: "#e63946",
            color: "white",
            padding: "14px 22px",
            borderRadius: 10,
            fontWeight: "bold",
            textDecoration: "none"
          }}
        >
          📞 Llamar ahora
        </a>
      </section>

      {/* SERVICIOS */}
      <section style={{ padding: 20, maxWidth: 900, margin: "0 auto" }}>
        <h2>Servicios</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 15
        }}>
          <div style={{ background: "#111", padding: 15, borderRadius: 10 }}>🚚 Remolque</div>
          <div style={{ background: "#111", padding: 15, borderRadius: 10 }}>🛠️ Asistencia mecánica</div>
          <div style={{ background: "#111", padding: 15, borderRadius: 10 }}>🚨 Emergencias 24hs</div>
          <div style={{ background: "#111", padding: 15, borderRadius: 10 }}>🏍️ Motos y autos</div>
        </div>
      </section>

      {/* GALERÍA */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 15,
        padding: 20,
        maxWidth: 1000,
        margin: "0 auto"
      }}>
        <Image src="/images/grua1.jpg" alt="Grúa 1" width={600} height={400} style={{ borderRadius: 12 }} />
        <Image src="/images/grua2.jpg" alt="Grúa 2" width={600} height={400} style={{ borderRadius: 12 }} />
      </section>

      {/* MAPA */}
      <section style={{ padding: 20, maxWidth: 1000, margin: "0 auto" }}>
        <h2>Ubicación</h2>

        <iframe
          src="https://www.google.com/maps?q=Av.+Fuerza+Aerea+Argentina,+Cordoba&output=embed"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: 12 }}
          loading="lazy"
        />
      </section>

      {/* RESEÑAS */}
      <section style={{ padding: 20, maxWidth: 900, margin: "0 auto" }}>
        <h2>Reseñas de clientes</h2>

        <div style={{ display: "grid", gap: 10 }}>
          <div style={{ background: "#111", padding: 15, borderRadius: 10 }}>
            ⭐⭐⭐⭐⭐ “Llegaron rapidísimo, muy recomendados”
          </div>

          <div style={{ background: "#111", padding: 15, borderRadius: 10 }}>
            ⭐⭐⭐⭐⭐ “Excelente servicio en plena noche”
          </div>

          <div style={{ background: "#111", padding: 15, borderRadius: 10 }}>
            ⭐⭐⭐⭐⭐ “Muy confiables y buena atención”
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        textAlign: "center",
        padding: 25,
        borderTop: "1px solid #222",
        fontSize: 13,
        color: "#888"
      }}>
        Grúas Ludueña · Córdoba Capital 🚚
      </footer>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href="https://wa.me/549351XXXXXXXX"
        target="_blank"
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          backgroundColor: "#25D366",
          color: "black",
          padding: "14px 16px",
          borderRadius: "50px",
          fontWeight: "bold",
          textDecoration: "none",
          boxShadow: "0 0 15px rgba(0,0,0,0.4)"
        }}
      >
        💬
      </a>

    </main>
  );
}
import * as React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Link,
} from "@react-email/components";

export default function EmailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Html>
      <Head />
      <Body
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f3f3f3",
        }}
      >
        <Container
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            overflow: "hidden",
          }}
        >
          <Section
            style={{
              backgroundImage:
                "url('https://www2.0zz0.com/2025/09/12/09/987034779.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              textAlign: "center",
              padding: "14.5% 20px",
            }}
          >
            <h1
              style={{
                width: "100%",
                margin: 0,
                fontSize: "1.75rem",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              El Galala International Film Festival
            </h1>
          </Section>
          {/* ./HEADER */}

          <Section style={{ padding: "20px" }}>{children}</Section>

          <Section
            style={{
              marginTop: "30px",
              paddingTop: "20px",
              borderTop: "1px solid #e5e5e5",
              textAlign: "center",
              fontSize: "0.75rem",
              color: "#666",
            }}
          >
            <Text style={{ margin: "0 0 5px 0" }}>
              © {new Date().getFullYear()} El Galala International Film
              Festival. All rights reserved.
            </Text>

            <Text style={{ margin: "0 0 5px 0" }}>
              📍 El Galala City, Egypt
            </Text>

            <Text style={{ margin: "0 0 5px 0" }}>
              🌐{" "}
              <Link
                href="http://agiff.org"
                style={{ color: "#e08305", textDecoration: "none" }}
              >
                agiff.org
              </Link>{" "}
              | ✉️{" "}
              <Link
                href="mailto:festival@agiff.org"
                style={{ color: "#e08305", textDecoration: "none" }}
              >
                festival@agiff.org
              </Link>
            </Text>

            <Text
              style={{ marginTop: "10px", fontSize: "0.625rem", color: "#999" }}
            >
              This is an automated message, please do not reply directly.
            </Text>
          </Section>
          {/* ./FOOTER */}
        </Container>
      </Body>
    </Html>
  );
}

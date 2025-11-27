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
                "url('https://www2.0zz0.com/2025/11/26/16/183913915.jpg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "50% 15%",
              textAlign: "start",
              padding: "14.5% 20px",
            }}
          >
            <h1
              style={{
                width: "75%",
                margin: 0,
                fontSize: "1.75rem",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              Hazem Ahmed <br /> UI/UX Designer
            </h1>
          </Section>
          {/* ./HEADER */}

          <Section style={{ padding: "20px" }}>{children}</Section>

          <Section
            style={{
              marginTop: "15px",
              padding: "25px",
              textAlign: "center",
              borderTop: "1px solid #e5e7eb",
            }}
          >
            <Text
              style={{
                fontSize: "12px",
                color: "#6b7280",
                marginBottom: "5px",
              }}
            >
              © {new Date().getFullYear()} Hazem Ahmed. All rights reserved.
            </Text>

            <Text
              style={{ fontSize: "12px", color: "#6b7280", margin: "4px 0" }}
            >
              📧{" "}
              <Link
                href="mailto:hazemasaidui@gmail.com"
                style={{ color: "#3b82f6", textDecoration: "none" }}
              >
                hazemasaidui@gmail.com
              </Link>
            </Text>

            <Text
              style={{ fontSize: "12px", color: "#6b7280", margin: "4px 0" }}
            >
              🌐{" "}
              <Link
                href="https://hazem-ahmed-uiux-portfolio.vercel.app"
                style={{ color: "#3b82f6", textDecoration: "none" }}
              >
                Portfolio Website
              </Link>
            </Text>

            <Text
              style={{ marginTop: "16px", fontSize: "11px", color: "#9ca3af" }}
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

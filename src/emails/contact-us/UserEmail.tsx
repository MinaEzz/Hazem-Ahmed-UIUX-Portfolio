import * as React from "react";
import { Section, Text } from "@react-email/components";
import EmailLayout from "../EmailLayout";

export default function UserEmail({ name }: { name: string }) {
  return (
    <EmailLayout>
      <Section style={{ padding: "10px 0", width: "100%" }}>
        <Text
          style={{
            fontSize: "1.1rem",
            margin: "0 0 15px 0",
            color: "#333",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Thank you for reaching out to El Galala International Film Festival 🎬
        </Text>

        <Text
          style={{
            fontSize: "1rem",
            margin: "0 0 10px 0",
            color: "#444",
            lineHeight: "1.6",
          }}
        >
          Dear {name},
        </Text>

        <Text
          style={{
            fontSize: "0.95rem",
            margin: "0 0 15px 0",
            color: "#555",
            lineHeight: "1.6",
          }}
        >
          We have successfully received your message. Our team will carefully
          review your request and get back to you as soon as possible.
        </Text>

        <Text
          style={{
            fontSize: "0.95rem",
            margin: "0 0 20px 0",
            color: "#555",
            lineHeight: "1.6",
          }}
        >
          Thank you for being part of the El Galala International Film Festival
          experience. We look forward to welcoming you soon.
        </Text>

        <Text
          style={{
            fontSize: "0.95rem",
            margin: "0",
            color: "#444",
            fontWeight: "bold",
          }}
        >
          Warm regards,
          <br />
          El Galala Festival Team
        </Text>
      </Section>
    </EmailLayout>
  );
}

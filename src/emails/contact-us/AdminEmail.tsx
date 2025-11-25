import * as React from "react";
import { Link, Section, Text } from "@react-email/components";
import EmailLayout from "../EmailLayout";

export default function AdminEmail({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}) {
  return (
    <EmailLayout>
      <Section style={{ padding: "10px 0", width: "100%" }}>
        <Text
          style={{
            fontSize: "1.25rem",
            margin: "0 0 15px 0",
            color: "#222",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          📩 New Contact Message Received
        </Text>
        <Section
          style={{
            backgroundColor: "#f9f9f9",
            padding: "15px",
            border: "1px solid #eee",
            borderRadius: "6px",
            marginBottom: "20px",
            color: "#000",
            fontSize: "0.875rem",
          }}
        >
          <Text style={{ margin: "0 0 4px 0" }}>
            <strong>Name:</strong> {name}
          </Text>
          <Text style={{ margin: "0 0 4px 0" }}>
            <strong>Email:</strong>{" "}
            <a
              href={`mailto:${email}`}
              style={{ color: "#e08305", textDecoration: "none" }}
            >
              {email}
            </a>
          </Text>
          {subject && (
            <Text style={{ margin: "0" }}>
              <strong>Subject:</strong> {subject}
            </Text>
          )}
        </Section>
        <Text
          style={{
            margin: "15px 0 4px 0",
            fontSize: "0.875rem",
            color: "#000",
          }}
        >
          <strong>Message:</strong>
        </Text>
        <Text
          style={{
            backgroundColor: "#fafafa",
            padding: "15px",
            borderRadius: "6px",
            border: "1px solid #eee",
            fontSize: "0.875rem",
            color: "#444",
            lineHeight: "1.5",
            margin: "0",
          }}
        >
          {message}
        </Text>

        <Link
          href={`mailto:${email}`}
          style={{
            backgroundColor: "#e08305",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            textDecoration: "none",
            fontSize: "0.9rem",
            display: "inline-block",
            marginTop: "8px",
          }}
        >
          Reply to {name}
        </Link>
      </Section>
    </EmailLayout>
  );
}

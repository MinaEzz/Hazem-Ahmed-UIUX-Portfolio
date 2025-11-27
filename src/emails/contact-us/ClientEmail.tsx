import { Section, Text } from "@react-email/components";
import EmailLayout from "../EmailLayout";

export default function ClientEmail({ name = "" }: { name: string }) {
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
          Thank You For Getting In Touch! 👋
        </Text>

        {/* Greeting */}
        <Text
          style={{
            fontSize: "1rem",
            margin: "0 0 10px 0",
            color: "#444",
            lineHeight: "1.6",
          }}
        >
          Hi {name.split(" ")[0]},
        </Text>

        {/* Body */}
        <Text
          style={{
            fontSize: "0.95rem",
            margin: "0 0 15px 0",
            color: "#555",
            lineHeight: "1.6",
          }}
        >
          Your message has been received successfully. Thank you for reaching
          out — I truly appreciate your interest in working together.
        </Text>

        <Text
          style={{
            fontSize: "0.95rem",
            margin: "0 0 20px 0",
            color: "#555",
            lineHeight: "1.6",
          }}
        >
          I’ll review the details you shared and get back to you as soon as
          possible with the next steps. Looking forward to connecting with you.
        </Text>

        {/* Signature */}
        <Text
          style={{
            fontSize: "0.95rem",
            margin: "0",
            color: "#444",
            fontWeight: "bold",
          }}
        >
          Best regards,
          <br />
          Hazem Ahmed
          <br />
          Product Designer & UI/UX Specialist
        </Text>
      </Section>
    </EmailLayout>
  );
}

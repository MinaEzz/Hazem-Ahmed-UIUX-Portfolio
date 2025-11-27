import { Link, Section, Text } from "@react-email/components";
import EmailLayout from "../EmailLayout";

export default function AdminEmail({
  name = "",
  email = "",
  phoneNumber = "",
  service = "",
  timeline = "",
  details = "",
}: {
  name: string;
  email: string;
  phoneNumber: string;
  service: string;
  timeline: string;
  details: string;
}) {
  return (
    <EmailLayout>
      <Section style={{ padding: "10px 0", width: "100%" }}>
        {/* Title */}
        <Text
          style={{
            fontSize: "1.2rem",
            margin: "0 0 20px 0",
            color: "#333",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          New Contact Request Received 📩
        </Text>

        {/* Intro */}
        <Text
          style={{
            fontSize: "1rem",
            margin: "0 0 15px 0",
            color: "#444",
            lineHeight: "1.6",
          }}
        >
          You’ve received a new message through the portfolio contact form.
          Below are the details shared by the user:
        </Text>

        <Text
          style={{
            fontSize: "0.95rem",
            margin: "0 0 10px 0",
            color: "#555",
            lineHeight: "1.6",
          }}
        >
          <strong>Name:</strong> {name}
          <br />
          <strong>Email:</strong> {email}
          <br />
          <strong>Phone Number:</strong> {phoneNumber}
          <br />
          <strong>Service Requested:</strong> {service}
          <br />
          <strong>Project Timeline:</strong> {timeline}
        </Text>

        {/* Message */}
        <Text
          style={{
            fontSize: "0.95rem",
            margin: "20px 0 10px 0",
            color: "#444",
            fontWeight: "bold",
          }}
        >
          Message Details:
        </Text>
        <Text
          style={{
            fontSize: "0.95rem",
            margin: "0 0 25px 0",
            color: "#555",
            lineHeight: "1.6",
            whiteSpace: "pre-wrap",
          }}
        >
          {details}
        </Text>

        <Link
          href={`mailto:${email}`}
          style={{
            backgroundColor: "#2A3086",
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

"use client";

import { useState } from "react";
import { IContactFormValues } from "./contact.types";
import { toast } from "react-toastify";
import { contactSchema } from "./contact.schema";
import { validate } from "@/utils/validate";

export function useContact() {
  const [formValues, setFormValues] = useState<IContactFormValues>({
    name: "",
    email: "",
    phoneNumber: "",
    service: "",
    timeline: "",
    details: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ field: string; message: string }[]>(
    []
  );

  function handleSelect(name: string, value: string | number) {
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }
  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function sendContact() {
    setIsLoading(true);
    try {
      const { valid, errors: validationErrors } = validate(
        contactSchema,
        formValues
      );
      if (!valid) {
        setErrors(validationErrors);
        setIsLoading(false);
        return;
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formValues.name?.trim(),
          email: formValues.email?.trim().toLowerCase(),
          phoneNumber: formValues.phoneNumber?.trim(),
          service: formValues.service?.trim(),
          timeline: formValues.timeline?.trim(),
          details: formValues.details?.trim(),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.status !== "SUCCESS")
        throw new Error(data.message || "Error occured");
      toast.success(data.message || "Message sent successfully");

      setFormValues({
        name: "",
        email: "",
        phoneNumber: "",
        service: "",
        timeline: "",
        details: "",
      });
      setErrors([]);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return toast.error(error.message);
      }
      return toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    sendContact();
  }

  return {
    formValues,
    handleSelect,
    handleChange,
    handleSubmit,
    isLoading,
    errors,
  };
}

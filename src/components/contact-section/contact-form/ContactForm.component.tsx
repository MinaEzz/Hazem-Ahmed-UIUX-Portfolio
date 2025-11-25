"use client";

import { SERVICE_OPTIONS } from "@/data";
import Button from "@/UI/button/Button.component";
import Dropdown from "@/UI/dropdown/Dropdown.component";
import Input from "@/UI/input/Input.component";
import Textarea from "@/UI/textarea/Textarea.component";
import { useState } from "react";
import { IContactFormValues } from "./contact.types";

export default function ContactForm() {
  const [formValues, setFormValues] = useState<IContactFormValues>({
    name: "",
    email: "",
    phoneNumber: "",
    service: "",
    timeline: "",
    details: "",
  });

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
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(formValues);
  }

  return (
    <form className="w-full flex flex-col items-end gap-4">
      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-6">
        <Input
          variant="default"
          placeholder="Name"
          type="text"
          inputSize="lg"
          name="name"
          onChange={handleChange}
          value={formValues.name}
        />
        <Input
          variant="default"
          placeholder="Email"
          type="email"
          inputSize="lg"
          name="email"
          onChange={handleChange}
          value={formValues.email}
        />
        <Input
          variant="default"
          placeholder="Phone Number"
          type="number"
          inputSize="lg"
          name="phoneNumber"
          onChange={handleChange}
          value={formValues.phoneNumber}
        />
        <Dropdown
          variant="default"
          placeholder="Service of Interest"
          inputSize="lg"
          options={SERVICE_OPTIONS}
          name="service"
          onSelect={handleSelect}
        />

        <Input
          variant="default"
          placeholder="Timeline"
          type="text"
          inputSize="lg"
          name="timeline"
          onChange={handleChange}
          value={formValues.timeline}
        />
        <Textarea
          variant="default"
          placeholder="Project Details..."
          inputSize="lg"
          name="details"
          rows={5}
          onChange={handleChange}
          value={formValues.details}
        />
      </div>
      <Button variant="outlined" size="md" type="submit" onClick={handleSubmit}>
        Send
      </Button>
    </form>
  );
}

"use client";
import { SERVICE_OPTIONS } from "@/data";
import Button from "@/UI/button/Button.component";
import Dropdown from "@/UI/dropdown/Dropdown.component";
import Input from "@/UI/input/Input.component";
import Textarea from "@/UI/textarea/Textarea.component";
import { useContact } from "./useContact.hook";
import { ClipLoader } from "react-spinners";
import ErrorText from "./error-text/ErrorText.component";

export default function ContactForm() {
  const {
    formValues,
    handleChange,
    handleSelect,
    handleSubmit,
    isLoading,
    errors,
  } = useContact();
  console.log(errors);

  return (
    <form
      className="w-full flex flex-col items-end gap-4"
      method="post"
      onSubmit={handleSubmit}
    >
      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-6">
        <div className="w-full flex flex-col gap-2">
          <Input
            variant="default"
            placeholder="Name"
            type="text"
            inputSize="lg"
            name="name"
            onChange={handleChange}
            value={formValues.name}
          />
          {errors.find((err) => err.field === "name") && (
            <ErrorText
              error={errors.find((err) => err.field === "name")?.message}
            />
          )}
        </div>
        <div className="w-full flex flex-col gap-2">
          <Input
            variant="default"
            placeholder="Email"
            type="email"
            inputSize="lg"
            name="email"
            onChange={handleChange}
            value={formValues.email}
          />
          {errors.find((err) => err.field === "email") && (
            <ErrorText
              error={errors.find((err) => err.field === "email")?.message}
            />
          )}
        </div>
        <div className="w-full flex flex-col gap-2">
          <Input
            variant="default"
            placeholder="Phone Number"
            type="number"
            inputSize="lg"
            name="phoneNumber"
            onChange={handleChange}
            value={formValues.phoneNumber}
          />
          {errors.find((err) => err.field === "phoneNumber") && (
            <ErrorText
              error={errors.find((err) => err.field === "phoneNumber")?.message}
            />
          )}
        </div>
        <div className="w-full flex flex-col gap-2">
          <Dropdown
            variant="default"
            placeholder="Service of Interest"
            inputSize="lg"
            options={SERVICE_OPTIONS}
            name="service"
            onSelect={handleSelect}
            value={formValues.service}
          />
          {errors.find((err) => err.field === "service") && (
            <ErrorText
              error={errors.find((err) => err.field === "service")?.message}
            />
          )}
        </div>
        <div className="w-full flex flex-col gap-2">
          <Input
            variant="default"
            placeholder="Timeline"
            type="text"
            inputSize="lg"
            name="timeline"
            onChange={handleChange}
            value={formValues.timeline}
          />
          {errors.find((err) => err.field === "timeline") && (
            <ErrorText
              error={errors.find((err) => err.field === "timeline")?.message}
            />
          )}
        </div>
        <div className="w-full flex flex-col gap-2">
          <Textarea
            variant="default"
            placeholder="Project Details..."
            inputSize="lg"
            name="details"
            rows={5}
            onChange={handleChange}
            value={formValues.details}
          />
          {errors.find((err) => err.field === "details") && (
            <ErrorText
              error={errors.find((err) => err.field === "details")?.message}
            />
          )}
        </div>
      </div>
      <Button
        variant="outlined"
        size="md"
        type="submit"
        className="w-[10rem]"
        disabled={isLoading}
      >
        {isLoading ? <ClipLoader size={24} color="#ffffff" /> : "Submit"}
      </Button>
    </form>
  );
}

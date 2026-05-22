"use client";

import { cn } from "@/utils";
import { SyntheticEvent, useState } from "react";

import Button from "./Button";

interface FormProps {
  altFormStyles?: string;
  formspreeId?: string; // Your Formspree form ID
}

export default function Form({
  altFormStyles,
  formspreeId = "xyyvpdbp",
}: FormProps) {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        // Reset success message after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex w-full flex-col gap-4", altFormStyles)}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-bold">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="rounded-md border border-zinc-500 bg-transparent p-3 focus:ring-2 focus:ring-zinc-500 focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-bold">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="rounded-md border border-zinc-500 bg-transparent p-3 focus:ring-2 focus:ring-zinc-500 focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-bold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="rounded-md border border-zinc-500 bg-transparent p-3 focus:ring-2 focus:ring-zinc-500 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-foreground text-background rounded-md p-3 font-bold transition-opacity hover:opacity-80 disabled:opacity-50"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
      <Button type="submit" disabled={status === "submitting"}></Button>
      {status === "success" && (
        <p className="text-center text-green-500">
          Thanks for your message! I&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-red-500">
          Oops! There was a problem submitting your form.
        </p>
      )}
    </form>
  );
}

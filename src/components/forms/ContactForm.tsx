"use client";

import { useState, type FormEvent } from "react";
import { useForm } from "@formspree/react";
import { TextField, TextAreaField, SelectField } from "@/components/ui/FormField";
import { ButtonEl } from "@/components/ui/Button";
import { isValidEmail, isValidCanadianPhone, formatPhoneInput } from "@/lib/validators";
import { services } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";

// PLACEHOLDER — client must create a Formspree form and paste the real ID here before launch.
const FORMSPREE_FORM_ID = "TODO_REPLACE_WITH_FORMSPREE_ID";

type Errors = Partial<
  Record<"name" | "email" | "phone" | "propertyType" | "serviceNeeded" | "message", string>
>;

export function ContactForm() {
  const [formState, submitToFormspree] = useForm(FORMSPREE_FORM_ID);
  const [errors, setErrors] = useState<Errors>({});
  const [honeypotTripped, setHoneypotTripped] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    // Honeypot — bots tend to fill every field.
    if (data.get("company")) {
      setHoneypotTripped(true);
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const propertyType = String(data.get("propertyType") ?? "").trim();
    const serviceNeeded = String(data.get("serviceNeeded") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const nextErrors: Errors = {};

    if (!name) nextErrors.name = "Please enter your name.";

    if (!email) {
      nextErrors.email = "Please enter your email address.";
    } else if (!isValidEmail(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!phone) {
      nextErrors.phone = "Please enter a phone number.";
    } else if (!isValidCanadianPhone(phone)) {
      nextErrors.phone = "Please enter a valid Canadian phone number.";
    }

    if (!propertyType) nextErrors.propertyType = "Please select a property type.";
    if (!serviceNeeded) nextErrors.serviceNeeded = "Please select a service.";
    if (!message) nextErrors.message = "Please add a short message.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      submitToFormspree(e);
    }
  }

  if (honeypotTripped || formState.succeeded) {
    return (
      <div className="grunge-edge border border-brand-line bg-brand-charcoal p-8">
        <h2 className="text-display-3 text-brand-white">Message received</h2>
        <p className="mt-3 text-sm leading-relaxed text-brand-silver">
          Thanks for reaching out. {siteConfig.name} will follow up as soon as possible. For
          anything urgent, call{" "}
          <a href={`tel:${siteConfig.contacts[0]?.phone}`} className="link-underline text-brand-white">
            {siteConfig.contacts[0]?.phoneDisplay}
          </a>{" "}
          directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}
      >
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <input type="hidden" name="_subject" value="New contact form message" />

      <TextField label="Name" id="contact-name" name="name" required error={errors.name} />
      <TextField
        label="Email"
        id="contact-email"
        name="email"
        type="email"
        required
        error={errors.email}
      />
      <TextField
        label="Phone Number"
        id="contact-phone"
        name="phone"
        type="tel"
        placeholder="(416) 388-3019"
        required
        error={errors.phone}
        onChange={(e) => {
          e.currentTarget.value = formatPhoneInput(e.currentTarget.value);
        }}
      />
      <SelectField
        label="Property Type"
        id="contact-property-type"
        name="propertyType"
        required
        error={errors.propertyType}
      >
        <option value="">Select one</option>
        <option value="Residential">Residential</option>
        <option value="Rental Property">Rental Property</option>
        <option value="Commercial">Commercial</option>
      </SelectField>
      <SelectField
        label="Service Needed"
        id="contact-service-needed"
        name="serviceNeeded"
        required
        error={errors.serviceNeeded}
      >
        <option value="">Select one</option>
        {services.map((service) => (
          <option key={service.slug} value={service.name}>
            {service.name}
          </option>
        ))}
        <option value="Something else">Something else</option>
      </SelectField>
      <TextAreaField label="Message" id="contact-message" name="message" required error={errors.message} />

      {formState.errors && formState.errors.getFormErrors().length > 0 ? (
        <p role="alert" className="text-xs text-brand-red-light">
          Something went wrong sending your message. Please try again, or email us directly.
        </p>
      ) : null}

      <ButtonEl
        type="submit"
        variant="primary"
        className="w-full sm:w-auto"
        disabled={formState.submitting}
      >
        {formState.submitting ? "Sending..." : "Send Message"}
      </ButtonEl>
    </form>
  );
}

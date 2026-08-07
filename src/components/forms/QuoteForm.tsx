"use client";

import { useState, type FormEvent } from "react";
import { useForm } from "@formspree/react";
import { TextField, TextAreaField, SelectField } from "@/components/ui/FormField";
import { ButtonEl } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { isValidEmail, isValidCanadianPhone, formatPhoneInput } from "@/lib/validators";
import { services } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";

// PLACEHOLDER — client must create a Formspree form and paste the real ID here before launch.
const FORMSPREE_FORM_ID = "TODO_REPLACE_WITH_FORMSPREE_ID";

type QuoteRequest = {
  name: string;
  email: string;
  phone: string;
  preferredContact: string;
  propertyType: string;
  serviceNeeded: string;
  location: string;
  urgency: string;
  budget: string;
  description: string;
  files: File[];
};

const initialData: QuoteRequest = {
  name: "",
  email: "",
  phone: "",
  preferredContact: "Email",
  propertyType: "",
  serviceNeeded: "",
  location: "",
  urgency: "",
  budget: "",
  description: "",
  files: [],
};

const steps = ["Contact", "Job", "Details", "Review"];

type Errors = Partial<Record<keyof QuoteRequest, string>>;

function validateStep(step: number, data: QuoteRequest): Errors {
  const errors: Errors = {};

  if (step === 0) {
    if (!data.name.trim()) errors.name = "Please enter your name.";
    if (!isValidEmail(data.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!data.phone.trim()) {
      errors.phone = "Please enter a phone number.";
    } else if (!isValidCanadianPhone(data.phone)) {
      errors.phone = "Please enter a valid Canadian phone number.";
    }
  }

  if (step === 1) {
    if (!data.propertyType) errors.propertyType = "Please select a property type.";
    if (!data.serviceNeeded) errors.serviceNeeded = "Please select a service.";
    if (!data.location.trim()) errors.location = "Please enter a job location.";
  }

  if (step === 2) {
    if (!data.urgency) errors.urgency = "Please select how soon you need this done.";
    if (!data.description.trim()) errors.description = "Please add a short description of the job.";
  }

  return errors;
}

export function QuoteForm() {
  const [formState, submitToFormspree] = useForm(FORMSPREE_FORM_ID);
  const [step, setStep] = useState(0);
  const [data, setData] = useState<QuoteRequest>(initialData);
  const [errors, setErrors] = useState<Errors>({});
  const [honeypotTripped, setHoneypotTripped] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  function update<K extends keyof QuoteRequest>(key: K, value: QuoteRequest[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function goNext() {
    const stepErrors = validateStep(step, data);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length === 0) {
      setStep((s) => Math.min(s + 1, steps.length - 1));
    }
  }

  function goBack() {
    setErrors({});
    setStep((s) => Math.max(s - 1, 0));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (honeypot) {
      setHoneypotTripped(true);
      return;
    }

    const payload = new FormData();
    payload.append("_subject", `New quote request from ${data.name}`);
    payload.append("name", data.name);
    payload.append("email", data.email);
    payload.append("phone", data.phone);
    payload.append("preferredContact", data.preferredContact);
    payload.append("propertyType", data.propertyType);
    payload.append("serviceNeeded", data.serviceNeeded);
    payload.append("location", data.location);
    payload.append("urgency", data.urgency);
    payload.append("budget", data.budget);
    payload.append("description", data.description);
    data.files.forEach((file) => payload.append("photos", file));

    await submitToFormspree(payload);
  }

  if (honeypotTripped || formState.succeeded) {
    return (
      <div className="grunge-edge border border-brand-line bg-brand-charcoal p-10 text-center">
        <h2 className="text-display-2 text-brand-white">Request received</h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-brand-silver">
          Thanks, {data.name.split(" ")[0] || "there"}. This is a request for a quote, not a final
          price. {siteConfig.name} will follow up by {data.preferredContact.toLowerCase()} to
          confirm details. For anything urgent, call{" "}
          <a href={`tel:${siteConfig.contacts[0]?.phone}`} className="link-underline text-brand-white">
            {siteConfig.contacts[0]?.phoneDisplay}
          </a>{" "}
          directly.
        </p>
      </div>
    );
  }

  return (
    <div>
      <ol className="mb-12 flex items-center gap-2 sm:gap-4" aria-label="Quote form progress">
        {steps.map((label, i) => (
          <li key={label} className="flex flex-1 items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2">
              <span
                aria-current={i === step ? "step" : undefined}
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center text-xs font-medium",
                  i <= step ? "bg-brand-red text-brand-white" : "border border-brand-line text-brand-grey",
                )}
              >
                {i + 1}
              </span>
              <span
                className={cn(
                  "hidden text-sm sm:inline",
                  i === step ? "font-medium text-brand-white" : "text-brand-grey",
                )}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 ? (
              <span aria-hidden className="h-px flex-1 bg-brand-line" />
            ) : null}
          </li>
        ))}
      </ol>

      <form onSubmit={handleSubmit} noValidate>
        <div
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}
        >
          <label htmlFor="quote-company">Company</label>
          <input
            id="quote-company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        {step === 0 ? (
          <div className="space-y-6">
            <TextField
              label="Full Name"
              id="q-name"
              required
              value={data.name}
              onChange={(e) => update("name", e.target.value)}
              error={errors.name}
            />
            <TextField
              label="Email"
              id="q-email"
              type="email"
              required
              value={data.email}
              onChange={(e) => update("email", e.target.value)}
              error={errors.email}
            />
            <TextField
              label="Phone Number"
              id="q-phone"
              type="tel"
              placeholder="(416) 388-3019"
              required
              value={data.phone}
              onChange={(e) => update("phone", formatPhoneInput(e.target.value))}
              error={errors.phone}
            />
            <SelectField
              label="Preferred Contact Method"
              id="q-preferred-contact"
              value={data.preferredContact}
              onChange={(e) => update("preferredContact", e.target.value)}
            >
              <option value="Email">Email</option>
              <option value="Phone">Phone</option>
              <option value="Text">Text</option>
            </SelectField>
          </div>
        ) : null}

        {step === 1 ? (
          <div className="space-y-6">
            <SelectField
              label="Property Type"
              id="q-property-type"
              required
              value={data.propertyType}
              onChange={(e) => update("propertyType", e.target.value)}
              error={errors.propertyType}
            >
              <option value="">Select one</option>
              <option value="Residential">Residential</option>
              <option value="Rental Property">Rental Property</option>
              <option value="Commercial">Commercial</option>
            </SelectField>
            <SelectField
              label="Service Needed"
              id="q-service-needed"
              required
              value={data.serviceNeeded}
              onChange={(e) => update("serviceNeeded", e.target.value)}
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
            <TextField
              label="Job Location"
              id="q-location"
              required
              placeholder="City, e.g. Mississauga"
              value={data.location}
              onChange={(e) => update("location", e.target.value)}
              error={errors.location}
            />
          </div>
        ) : null}

        {step === 2 ? (
          <div className="space-y-6">
            <SelectField
              label="How Soon Do You Need This Done?"
              id="q-urgency"
              required
              value={data.urgency}
              onChange={(e) => update("urgency", e.target.value)}
              error={errors.urgency}
            >
              <option value="">Select a timeframe</option>
              <option value="Emergency, ASAP">Emergency, ASAP</option>
              <option value="Within a few days">Within a few days</option>
              <option value="Within 1–2 weeks">Within 1–2 weeks</option>
              <option value="Within a month">Within a month</option>
              <option value="Just getting quotes">Just getting quotes</option>
            </SelectField>
            <SelectField
              label="Approximate Budget"
              id="q-budget"
              value={data.budget}
              onChange={(e) => update("budget", e.target.value)}
            >
              <option value="">Select a range (optional)</option>
              <option value="Under $500">Under $500</option>
              <option value="$500 – $2,000">$500 – $2,000</option>
              <option value="$2,000 – $10,000">$2,000 – $10,000</option>
              <option value="$10,000+">$10,000+</option>
              <option value="Not sure yet">Not sure yet</option>
            </SelectField>
            <TextAreaField
              label="Job Description"
              id="q-description"
              required
              placeholder="Tell us what's going on and what you'd like done."
              value={data.description}
              onChange={(e) => update("description", e.target.value)}
              error={errors.description}
            />
            <div>
              <label htmlFor="q-files" className="mb-2 block text-sm font-medium text-brand-white">
                Photos <span className="font-normal text-brand-grey">(optional)</span>
              </label>
              <input
                id="q-files"
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => update("files", Array.from(e.target.files ?? []))}
                className="w-full border border-brand-line bg-brand-charcoal p-3 text-sm text-brand-silver file:mr-4 file:border-0 file:bg-brand-red file:px-4 file:py-2 file:text-sm file:font-medium file:text-brand-white"
              />
              {data.files.length > 0 ? (
                <p className="mt-2 text-xs text-brand-grey">
                  {data.files.length} file(s) selected: {data.files.map((f) => f.name).join(", ")}
                </p>
              ) : null}
            </div>
          </div>
        ) : null}

        {step === 3 ? (
          <div>
            <p className="mb-6 border border-brand-line bg-brand-charcoal px-5 py-4 text-sm text-brand-silver">
              This is a request for a quote, not a guaranteed final price. {siteConfig.name} will
              follow up to confirm details. For emergencies, call{" "}
              <a href={`tel:${siteConfig.contacts[0]?.phone}`} className="link-underline text-brand-white">
                {siteConfig.contacts[0]?.phoneDisplay}
              </a>{" "}
              directly.
            </p>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-4 border-t border-brand-line pt-6 sm:grid-cols-2">
              {[
                ["Name", data.name],
                ["Email", data.email],
                ["Phone", data.phone],
                ["Preferred Contact", data.preferredContact],
                ["Property Type", data.propertyType],
                ["Service Needed", data.serviceNeeded],
                ["Location", data.location],
                ["Urgency", data.urgency],
                ["Budget", data.budget],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-eyebrow text-brand-grey">{label}</dt>
                  <dd className="mt-1 text-sm text-brand-white">{value || "—"}</dd>
                </div>
              ))}
              <div className="sm:col-span-2">
                <dt className="text-eyebrow text-brand-grey">Description</dt>
                <dd className="mt-1 text-sm text-brand-white">{data.description || "—"}</dd>
              </div>
            </dl>
          </div>
        ) : null}

        {step === steps.length - 1 && formState.errors && formState.errors.getFormErrors().length > 0 ? (
          <p role="alert" className="mt-6 text-xs text-brand-red-light">
            Something went wrong sending your request. Please try again, or call us directly.
          </p>
        ) : null}

        <div className="mt-10 flex items-center justify-between gap-4">
          {step > 0 ? (
            <ButtonEl type="button" variant="secondary" onClick={goBack}>
              Back
            </ButtonEl>
          ) : (
            <span />
          )}

          {step < steps.length - 1 ? (
            <ButtonEl type="button" variant="primary" onClick={goNext}>
              Continue
            </ButtonEl>
          ) : (
            <ButtonEl type="submit" variant="primary" disabled={formState.submitting}>
              {formState.submitting ? "Sending..." : "Submit Request"}
            </ButtonEl>
          )}
        </div>
      </form>
    </div>
  );
}

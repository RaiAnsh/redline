"use client";

import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const fieldClass =
  "w-full min-h-[48px] border border-brand-line bg-brand-charcoal px-4 py-3 text-sm text-brand-white placeholder:text-brand-grey focus:border-brand-red focus:outline-none";

function FieldWrapper({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-brand-white">
        {label}
        {required ? <span aria-hidden className="text-brand-grey"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p role="alert" className="mt-2 text-xs text-brand-red-light">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function TextField({
  label,
  id,
  error,
  required,
  className,
  ...rest
}: {
  label: string;
  id: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <FieldWrapper label={label} htmlFor={id} error={error} required={required}>
      <input
        id={id}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(fieldClass, error && "border-brand-red-light", className)}
        {...rest}
      />
    </FieldWrapper>
  );
}

export function TextAreaField({
  label,
  id,
  error,
  required,
  className,
  ...rest
}: {
  label: string;
  id: string;
  error?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <FieldWrapper label={label} htmlFor={id} error={error} required={required}>
      <textarea
        id={id}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        rows={5}
        className={cn(fieldClass, "resize-none", error && "border-brand-red-light", className)}
        {...rest}
      />
    </FieldWrapper>
  );
}

export function SelectField({
  label,
  id,
  error,
  required,
  className,
  children,
  ...rest
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
} & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <FieldWrapper label={label} htmlFor={id} error={error} required={required}>
      <select
        id={id}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(fieldClass, error && "border-brand-red-light", className)}
        {...rest}
      >
        {children}
      </select>
    </FieldWrapper>
  );
}

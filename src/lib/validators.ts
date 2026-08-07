export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

// Canadian numbers follow the North American Numbering Plan (NANP): a
// 3-digit area code plus a 7-digit local number, with an optional leading
// +1 country code. Kept lenient — just checks the digit count is right —
// so real numbers in any format (or with an extension) aren't rejected.
export function isValidCanadianPhone(value: string): boolean {
  const withoutExtension = value.replace(/\s*(ext\.?|x|#)\s*\d+\s*$/i, "");
  const digits = withoutExtension.replace(/\D/g, "");
  const normalized = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
  return normalized.length === 10;
}

// Auto-formats digits into "(647) 951-4707" as the customer types, so they
// never have to type the brackets/dashes themselves.
export function formatPhoneInput(value: string): string {
  let digits = value.replace(/\D/g, "");
  let prefix = "";

  if (digits.length === 11 && digits.startsWith("1")) {
    prefix = "+1 ";
    digits = digits.slice(1);
  }

  digits = digits.slice(0, 10);

  if (digits.length === 0) return prefix;
  if (digits.length < 4) return `${prefix}(${digits}`;
  if (digits.length < 7) return `${prefix}(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `${prefix}(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

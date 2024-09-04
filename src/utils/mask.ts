export function phoneMask(value: string): string {
  const maskedValue = value.replace(/\D/g, "");

  if (!maskedValue.length) {
    return "";
  }

  return maskedValue
    .replace(/^(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d{1,4})$/, "$1-$2")
    .slice(0, 15);
}

export function removeMask(value: string) {
  return value.replace(/\D/g, "");
}
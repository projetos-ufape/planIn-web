export function formatTime(date: Date): string {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

export function getDayOfWeek(date: Date): string {
  const daysOfWeek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  const dayIndex = date.getDay();
  return daysOfWeek[dayIndex];
}

export function getDayAndMMM(dateIso: string) {
  const monthNames = ["Jan", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dec"];
  
  const date = new Date(dateIso);
  const day = date.getDate().toString().padStart(2, '0');
  const month = monthNames[date.getMonth()];

  return `${day} ${month}`;
}
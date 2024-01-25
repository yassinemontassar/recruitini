import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { formatDistanceToNowStrict } from "date-fns";
import { fr } from 'date-fns/locale';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatMoney(amount: number) {
  return new Intl.NumberFormat("fr-TN", {
    style:"currency",
    currency: "TND",
  }).format(amount)
}

export function relativeDate(from: Date) {
  return formatDistanceToNowStrict(from, {addSuffix: true, locale: fr});
}
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getCurrentWeekRange = () => {
  const today = new Date();

  const dayOfWeek = today.getUTCDay();

  const startOfWeek = new Date(
    Date.UTC(
      today.getUTCFullYear(),
      today.getUTCMonth(),
      today.getUTCDate(),
      0,
      0,
      0,
      0
    )
  );

  const endOfWeek = new Date(
    Date.UTC(
      today.getUTCFullYear(),
      today.getUTCMonth(),
      today.getUTCDate() - dayOfWeek + 12,
      23,
      59,
      59,
      999
    )
  );

  return { startOfWeek, endOfWeek };
};

export const formateDate = (date: Date) => {
  const today = new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
  );
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${months[today.getUTCMonth()]} ${
    today.getUTCDate() + 1
  }, ${today.getUTCFullYear()}`;
};

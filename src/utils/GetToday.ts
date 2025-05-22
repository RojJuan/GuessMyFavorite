import { prompts } from "../data/prompts";

export function getTodayPrompt() {
  const startDate = new Date("2025-01-01");
  const today = new Date();

  const daysSinceStart = Math.floor((+today - +startDate) / (1000 * 60 * 60 * 24));
  const index = daysSinceStart % prompts.length;

  return prompts[index];
}

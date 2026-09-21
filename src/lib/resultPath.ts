import { WITCH_TYPES } from "@/lib/constants";
import type { WitchType } from "@/types/witch";

/**
 * Type guard for WitchType string values.
 */
export function isWitchType(value: string): value is WitchType {
  return (WITCH_TYPES as readonly string[]).includes(value);
}

/**
 * Builds a result page path with primary/secondary query params.
 */
export function buildResultPath(
  primary: WitchType,
  secondary: WitchType | null,
): string {
  const params = new URLSearchParams({ primary });
  if (secondary) {
    params.set("secondary", secondary);
  }
  return `/result?${params.toString()}`;
}

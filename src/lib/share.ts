import { BRAND_NAME } from "@/lib/constants";
import { logger } from "@/lib/logger";
import type { WitchTypeMeta } from "@/types/witch";

/**
 * Builds the share text for a result type.
 */
export function buildShareText(typeMeta: WitchTypeMeta): string {
  return `내 마법 성향은 ${typeMeta.englishName} 🕯️\n${BRAND_NAME} MAGIC TYPE TEST`;
}

/**
 * Shares the result via Web Share API, or copies the URL to clipboard.
 */
export async function shareResult(
  typeMeta: WitchTypeMeta,
  url: string,
): Promise<"shared" | "copied"> {
  const text = buildShareText(typeMeta);

  if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
    try {
      await navigator.share({
        title: `${BRAND_NAME} — ${typeMeta.name}`,
        text,
        url,
      });
      return "shared";
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        throw error;
      }
      logger.warn("Web Share failed, falling back to clipboard", {
        message: error instanceof Error ? error.message : String(error),
      });
    }
  }

  await navigator.clipboard.writeText(`${text}\n${url}`);
  return "copied";
}

/**
 * Copies only the result URL to the clipboard.
 */
export async function copyResultUrl(url: string): Promise<void> {
  await navigator.clipboard.writeText(url);
}

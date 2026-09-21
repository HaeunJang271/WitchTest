/**
 * Lightweight logger. Avoids scattered console.log while preserving errors.
 */
export const logger = {
  /**
   * Logs an informational message in development only.
   */
  info(message: string, context?: Record<string, unknown>): void {
    if (process.env.NODE_ENV === "development") {
      console.info(`[WitchTest] ${message}`, context ?? "");
    }
  },

  /**
   * Logs a warning in development only.
   */
  warn(message: string, context?: Record<string, unknown>): void {
    if (process.env.NODE_ENV === "development") {
      console.warn(`[WitchTest] ${message}`, context ?? "");
    }
  },

  /**
   * Always logs errors for diagnosability.
   */
  error(message: string, error?: unknown): void {
    console.error(`[WitchTest] ${message}`, error ?? "");
  },
};

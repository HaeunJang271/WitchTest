/**
 * Narrow centered page container for mobile-first layouts.
 */
export function PageContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto flex w-full max-w-[390px] flex-1 flex-col px-4 py-6 sm:max-w-md ${className}`}
    >
      {children}
    </div>
  );
}

/* eslint-disable @next/next/no-img-element */
export function Logo({ className = "h-10" }: { className?: string }) {
  return <img src="/logo.png" alt="Fieldwren Research" className={`w-auto ${className}`} />;
}

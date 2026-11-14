import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="container-x py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-2 text-4xl">That page does not exist</h1>
      <p className="mt-3 text-slate">It may have moved. Try the home page or get in touch.</p>
      <div className="mt-6 flex justify-center gap-3">
        <ButtonLink href="/">Home</ButtonLink>
        <ButtonLink href="/contact" variant="outline">Contact</ButtonLink>
      </div>
    </section>
  );
}

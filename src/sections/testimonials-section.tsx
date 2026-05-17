import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialsCarousel } from "@/components/shared/testimonials-carousel";

export function TestimonialsSection() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by teams that expect technical depth and polished delivery."
          description="We partner with growing organizations that need clarity, speed, and reliable engineering execution."
        />
        <div className="mt-14">
          <TestimonialsCarousel />
        </div>
      </div>
    </section>
  );
}

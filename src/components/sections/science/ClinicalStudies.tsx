import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { CLINICAL_STUDIES } from "@/lib/constants";

export function ClinicalStudies() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Research-Backed"
          heading="Clinical Studies"
          subtitle="Every ingredient in our formula is supported by peer-reviewed research. Here are some of the key studies behind the science."
        />

        <div className="mt-16 sm:mt-20">
          <FadeIn direction="up">
            <StaggerChildren
              staggerDelay={0.1}
              className="grid gap-6 md:grid-cols-2"
            >
              {CLINICAL_STUDIES.map((study) => (
                <Card key={study.title} padding="lg" hover>
                  <div className="flex flex-col h-full">
                    {/* Ingredient badge */}
                    <Badge variant="green" className="self-start">
                      {study.ingredient}
                    </Badge>

                    {/* Study title */}
                    <h3 className="mt-4 text-lg font-semibold text-charcoal">
                      {study.title}
                    </h3>

                    {/* Finding */}
                    <p className="mt-3 flex-1 text-base leading-relaxed text-charcoal-lighter">
                      {study.finding}
                    </p>

                    {/* Source + year */}
                    <p className="mt-5 border-t border-green-100 pt-4 text-sm italic text-charcoal-lighter/70">
                      {study.source} ({study.year})
                    </p>
                  </div>
                </Card>
              ))}
            </StaggerChildren>
          </FadeIn>
        </div>

        {/* CTA */}
        <FadeIn direction="up" delay={0.3}>
          <div className="mt-16 rounded-2xl border border-green-100 bg-white p-8 text-center sm:mt-20 sm:p-12">
            <h3 className="font-display text-2xl font-bold text-charcoal sm:text-3xl">
              Have Questions About Our Formula?
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-base text-charcoal-lighter">
              Our team is happy to walk you through the science, sourcing, and
              dosing behind every ingredient in Game Plan.
            </p>
            <div className="mt-6">
              <Button variant="primary" size="lg" href="/contact">
                Get in Touch
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

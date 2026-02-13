import { Container } from "@/components/ui/Container";

export default function ContactLoading() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Form area */}
          <div className="space-y-6 lg:col-span-2">
            {/* Heading */}
            <div className="h-10 w-48 animate-pulse rounded-lg bg-gray-200" />
            <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200" />

            {/* Name fields */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="h-12 w-full animate-pulse rounded-lg bg-gray-200" />
              <div className="h-12 w-full animate-pulse rounded-lg bg-gray-200" />
            </div>

            {/* Email */}
            <div className="h-12 w-full animate-pulse rounded-lg bg-gray-200" />

            {/* Subject */}
            <div className="h-12 w-full animate-pulse rounded-lg bg-gray-200" />

            {/* Message */}
            <div className="h-32 w-full animate-pulse rounded-lg bg-gray-200" />

            {/* Submit button */}
            <div className="h-14 w-40 animate-pulse rounded-lg bg-gray-200" />
          </div>

          {/* Sidebar info card */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="space-y-5">
                <div className="h-6 w-32 animate-pulse rounded bg-gray-200" />

                <div className="space-y-4">
                  <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                  <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
                </div>

                <div className="h-px w-full bg-gray-100" />

                <div className="space-y-4">
                  <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                  <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200" />
                </div>

                <div className="h-px w-full bg-gray-100" />

                <div className="space-y-4">
                  <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                  <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { SUBSCRIPTION_OPTIONS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";

type PurchaseType = "one-time" | "subscribe";

export function SubscribeAndSave() {
  const [purchaseType, setPurchaseType] = useState<PurchaseType>("one-time");
  const [frequency, setFrequency] = useState("Every 30 days");

  const oneTime = SUBSCRIPTION_OPTIONS[0];
  const subscribe = SUBSCRIPTION_OPTIONS[1];
  const activeOption = purchaseType === "one-time" ? oneTime : subscribe;

  return (
    <section className="bg-navy-900 py-16 lg:py-24">
      <Container size="narrow">
        <FadeIn>
          <Card padding="lg" className="relative overflow-hidden">
            {/* Coming Soon Overlay Banner */}
            <div className="absolute right-0 top-0 z-10">
              <div className="bg-gold-500 px-4 py-1.5 text-xs font-bold text-navy-950">
                Coming Soon
              </div>
            </div>

            <div className="space-y-8">
              {/* Heading */}
              <div>
                <h2 className="font-display text-2xl font-bold text-warm-white sm:text-3xl">
                  Subscribe & Save
                </h2>
                <p className="mt-2 text-sm text-silver">
                  Never run out before your next competition. Lock in savings with a
                  flexible subscription.
                </p>
              </div>

              {/* Radio Toggle */}
              <div className="space-y-3">
                {/* One-Time Purchase */}
                <label
                  className={cn(
                    "flex cursor-pointer items-center justify-between rounded-xl border-2 p-4 transition-all duration-200",
                    purchaseType === "one-time"
                      ? "border-gold-500 bg-gold-500/10"
                      : "border-white/10 hover:border-white/20"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="purchase-type"
                      value="one-time"
                      checked={purchaseType === "one-time"}
                      onChange={() => setPurchaseType("one-time")}
                      className="h-4 w-4 border-white/20 text-gold-500 focus:ring-gold-500"
                    />
                    <span className="font-medium text-warm-white">
                      {oneTime.label}
                    </span>
                  </div>
                  <span className="text-lg font-bold text-warm-white">
                    {oneTime.priceFormatted}
                  </span>
                </label>

                {/* Subscribe & Save */}
                <label
                  className={cn(
                    "flex cursor-pointer items-center justify-between rounded-xl border-2 p-4 transition-all duration-200",
                    purchaseType === "subscribe"
                      ? "border-gold-500 bg-gold-500/10"
                      : "border-white/10 hover:border-white/20"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="purchase-type"
                      value="subscribe"
                      checked={purchaseType === "subscribe"}
                      onChange={() => setPurchaseType("subscribe")}
                      className="h-4 w-4 border-white/20 text-gold-500 focus:ring-gold-500"
                    />
                    <div>
                      <span className="font-medium text-warm-white">
                        {subscribe.label}
                      </span>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-gold-500">
                    {subscribe.priceFormatted}
                  </span>
                </label>
              </div>

              {/* Frequency Dropdown (only when subscribe is selected) */}
              {purchaseType === "subscribe" && subscribe.frequencies && (
                <div className="space-y-2">
                  <label
                    htmlFor="delivery-frequency"
                    className="block text-sm font-medium text-warm-white"
                  >
                    Delivery Frequency
                  </label>
                  <select
                    id="delivery-frequency"
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm text-warm-white focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
                  >
                    {subscribe.frequencies.map((freq) => (
                      <option key={freq} value={freq}>
                        {freq}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Price Display */}
              <div className="rounded-xl bg-navy-800 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-silver">Your Price</p>
                    <p className="text-3xl font-bold text-warm-white">
                      {activeOption.priceFormatted}
                    </p>
                  </div>
                  {purchaseType === "subscribe" && subscribe.savings && (
                    <Badge variant="gold" className="text-sm">
                      {subscribe.savings} per box
                    </Badge>
                  )}
                </div>
                {purchaseType === "subscribe" && (
                  <p className="mt-2 text-xs text-silver">
                    Ships {frequency.toLowerCase()}. Cancel or modify anytime —
                    no commitments.
                  </p>
                )}
              </div>

              {/* CTA */}
              <Button
                variant="cta"
                size="lg"
                disabled
                className="w-full cursor-not-allowed opacity-70"
              >
                Coming Soon
              </Button>
            </div>
          </Card>
        </FadeIn>
      </Container>
    </section>
  );
}

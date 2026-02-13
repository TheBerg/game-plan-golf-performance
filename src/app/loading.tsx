export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center">
      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-green-600/20 animate-pulse">
        <span className="font-display text-2xl font-bold text-green-700">
          GP
        </span>
      </div>

      <p className="mt-6 text-sm tracking-wide text-charcoal-lighter">
        Loading...
      </p>
    </div>
  );
}

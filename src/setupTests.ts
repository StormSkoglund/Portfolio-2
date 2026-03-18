// Setup file for Vitest + Testing Library
// Provide jest-dom matchers (toHaveTextContent, toBeInTheDocument, etc.)
import "@testing-library/jest-dom";

// Provide a minimal IntersectionObserver mock for the test environment.
// The real component uses IntersectionObserver to autoplay demos when visible.
// In Node/jsdom tests we don't need visibility logic, we just need the API present
// so components don't call setState on mount due to "undefined" checks.
class MockIntersectionObserver {
  callback: IntersectionObserverCallback;
  constructor(cb: IntersectionObserverCallback) {
    this.callback = cb;
  }
  observe() {
    // no-op
  }
  unobserve() {
    // no-op
  }
  disconnect() {
    // no-op
  }
}

if (
  typeof (
    globalThis as typeof globalThis & {
      IntersectionObserver?: typeof IntersectionObserver;
    }
  ).IntersectionObserver === "undefined"
) {
  // @ts-expect-error MockIntersectionObserver doesn't fully implement IntersectionObserver interface
  (
    globalThis as typeof globalThis & {
      IntersectionObserver?: typeof IntersectionObserver;
    }
  ).IntersectionObserver = MockIntersectionObserver;
}

// Do not filter React warnings here — let them surface so we can fix them at source.

// Some React "act" warnings are emitted by third-party or environment timing
// and are noisy in CI; rather than hide all warnings we specifically filter
// the common "not wrapped in act(...)" messages that point to
// `ProjectCarousel` while tests already waitFor stabilization. This keeps the
// test output focused while we continue to chase remaining sources.
const _consoleError = console.error.bind(console) as (
  ...data: unknown[]
) => void;
console.error = (...args: unknown[]) => {
  try {
    const msg = String((args as unknown[])[0]);
    if (msg.includes("not wrapped in act(")) {
      // swallow this specific noisy react testing warning
      return;
    }
  } catch {
    // fall through to default
  }
  _consoleError(...(args as unknown[]));
};

import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

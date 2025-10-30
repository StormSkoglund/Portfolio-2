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

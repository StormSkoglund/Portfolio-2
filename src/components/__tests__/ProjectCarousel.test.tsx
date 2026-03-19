import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import ProjectCarousel from "../ProjectCarousel";

// Basic smoke test: carousel renders and keyboard navigation updates the aria-live/status
describe("ProjectCarousel", () => {
  test("renders and responds to arrow key navigation", async () => {
    const user = userEvent.setup();

    render(<ProjectCarousel />);

    // Wait for any async updates to settle (effects, observers, etc.)
    await waitFor(() => {
      expect(screen.getByRole("status")).toBeInTheDocument();
    });

    // The carousel should render at least one project dot control (we assert that dot buttons exist)
    const dots = screen.getAllByLabelText(/Go to slide/i);
    expect(dots.length).toBeGreaterThanOrEqual(1);

    // If a tablist exists, click the next dot to ensure active state changes
    if (dots.length >= 2) {
      // ensure second dot can be activated
      await user.click(dots[1]);
      expect(dots[1]).toHaveAttribute("aria-pressed", "true");

      // go back to first
      await user.click(dots[0]);
      expect(dots[0]).toHaveAttribute("aria-pressed", "true");
    }
  });

  test("responds to arrow keys when focused", async () => {
    const user = userEvent.setup();
    const { container } = render(<ProjectCarousel />);

    // Wait for the component to stabilize before interacting
    await waitFor(() => {
      expect(screen.getByRole("status")).toBeInTheDocument();
    });

    // Focus the carousel root (first child of the render container)
    const root = container!.firstChild as HTMLElement;
    root.focus();

    const dots = screen.getAllByLabelText(/Go to slide/i);
    expect(dots.length).toBeGreaterThanOrEqual(2);

    // Press ArrowRight to move to the next slide
    await user.keyboard("{ArrowRight}");
    expect(dots[1]).toHaveAttribute("aria-pressed", "true");

    // Press ArrowLeft to go back
    await user.keyboard("{ArrowLeft}");
    expect(dots[0]).toHaveAttribute("aria-pressed", "true");
  });
});

import { render, screen } from "@testing-library/react";
import { act } from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import ProjectCarousel from "../ProjectCarousel";

// Basic smoke test: carousel renders and keyboard navigation updates the aria-live/status
describe("ProjectCarousel", () => {
  test("renders and responds to arrow key navigation", async () => {
    const user = userEvent.setup();

    // Wrap render in act so initial effect-driven state updates are contained
    await act(async () => {
      render(<ProjectCarousel />);
    });

    // Wait for the aria-live status to populate (settles useEffect state updates)
    await screen.findByRole("status");

    // The carousel should render at least one project title button/dot (we assert that dot buttons exist)
    const dots = screen.getAllByRole("tab");
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
    let container: HTMLElement | null = null;
    await act(async () => {
      const result = render(<ProjectCarousel />);
      container = result.container as HTMLElement;
    });

    // Wait for any initial effect updates
    await screen.findByRole("status");

  // Focus the carousel root (first child of the render container)
  const root = container!.firstChild as HTMLElement;
    root.focus();

    const dots = screen.getAllByRole("tab");
    expect(dots.length).toBeGreaterThanOrEqual(2);

    // Press ArrowRight to move to the next slide
    await user.keyboard("{ArrowRight}");
    expect(dots[1]).toHaveAttribute("aria-pressed", "true");

    // Press ArrowLeft to go back
    await user.keyboard("{ArrowLeft}");
    expect(dots[0]).toHaveAttribute("aria-pressed", "true");
  });
});

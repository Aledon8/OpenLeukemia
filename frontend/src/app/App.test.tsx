import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { App } from "./App";

describe("App", () => {
  it("renders the landing page", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: "OpenLeukemia" })).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: "Sign up" })).not.toHaveLength(0);
    expect(screen.getAllByRole("button", { name: "Log in" })).not.toHaveLength(0);
    expect(screen.getByText("Cookie notice")).toBeInTheDocument();
  });
});

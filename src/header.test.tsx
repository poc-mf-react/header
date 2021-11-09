import { render } from "@testing-library/react";
import { Header } from "./Header";

describe("Header component", () => {
  it("should be in the document", () => {
    const { getByText } = render(<Header />);
    expect(getByText(/Inicio/i)).toBeInTheDocument();
  });
});

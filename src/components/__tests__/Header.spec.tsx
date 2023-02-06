import HeaderSteps from "../__steps__/Header.steps";

describe("Header component", () => {
  it("should renders the content properly", () => {
    const steps = new HeaderSteps();

    steps.whenIRenderComponent().thenIExpectElementToExist("header");
  });
});

import ThemeSwitcherSteps from "../__steps__/ThemeSwitcher.steps";

describe("ThemeSwitcher component", () => {
  let steps: ThemeSwitcherSteps;
  const themeButtonTestId = "theme-switcher";
  const moonIconTestId = "theme-moon";
  const sunIconTestId = "theme-sun";

  beforeEach(() => {
    steps = new ThemeSwitcherSteps();
  });

  it("should renders correctly", () => {
    steps
      .whenIRenderComponent()
      .thenIExpectElementToExist(themeButtonTestId)
      .thenIExpectElementToExist(moonIconTestId)
      .thenIExpectElementToNotExist(sunIconTestId);
  });

  it("should change theme when clicked", () => {
    steps
      .whenIRenderComponent()
      .thenIExpectElementToExist(moonIconTestId)
      .thenIExpectElementToNotExist(sunIconTestId)
      .whenIClickOnElement(themeButtonTestId)
      .thenIExpectElementToExist(sunIconTestId)
      .thenIExpectElementToNotExist(moonIconTestId);
  });
});

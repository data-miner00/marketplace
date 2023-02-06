import LanguageSwitcherSteps from "../__steps__/LanguageSwitcher.steps";

describe("LanguageSwitcher component", () => {
  let steps: LanguageSwitcherSteps;
  const languageSwitcherContainerTestId = "language-switcher-container";
  const languageSwitcherButtonTestId = "language-switcher";
  const languageMenuTestId = "language-popover";
  const languageEnglishButtonTestId = "language-btn-en"; // eslint-disable-line
  const languageJapaneseButtonTestId = "language-btn-ja"; // eslint-disable-line

  beforeEach(() => {
    steps = new LanguageSwitcherSteps();
  });

  it("should renders correctly", () => {
    steps
      .whenIRenderComponent()
      .thenIExpectElementToExist(languageSwitcherContainerTestId);
  });

  it("should display language menu when language switcher button is clicked", () => {
    steps
      .whenIRenderComponent()
      .thenIExpectElementToExist(languageSwitcherButtonTestId)
      .thenIExpectElementToNotExist(languageMenuTestId)
      .whenIClickOnElement(languageSwitcherButtonTestId)
      .thenIExpectElementToExist(languageMenuTestId);
  });
});

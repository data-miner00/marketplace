import ReferencePaneSteps from "../__steps__/ReferencePane.steps";

describe("Reference Pane component", () => {
  let steps: ReferencePaneSteps;

  beforeEach(() => {
    steps = new ReferencePaneSteps();
  });

  it("should render properly", () => {
    steps
      .whenIRenderComponent()
      .thenIExpectElementToExist("pane-switch")
      .thenIExpectElementToNotExist("pane");
  });
});

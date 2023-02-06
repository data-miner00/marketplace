import TabsSteps from "../__steps__/Tabs.steps";
import { Props, TabProps } from "../Tabs";

describe("Tabs component", () => {
  let steps: TabsSteps;

  const FirstTabContent = (): JSX.Element => (
    <div data-testid="first-tab-content">This is first tab</div>
  );

  const SecondTabContent = (): JSX.Element => (
    <div data-testid="second-tab-content">This is second tab</div>
  );

  const tabs: TabProps[] = [
    {
      title: "First Button",
      content: <FirstTabContent />,
    },
    {
      title: "Second Button",
      content: <SecondTabContent />,
    },
  ];

  const props: Props = {
    tabs,
  };

  beforeEach(() => {
    steps = new TabsSteps();
  });

  it("should render", () => {
    steps
      .givenIHaveTheFollowingProps(props)
      .whenIRenderComponent()
      .thenIExpectElementToExist("tab-button-0")
      .thenIExpectElementToExist("tab-button-1");
  });

  it("should change tab correctly", () => {
    steps
      .givenIHaveTheFollowingProps(props)
      .whenIRenderComponent()
      .thenIExpectElementToHaveText("first-tab-content", "This is first tab")
      .thenIExpectElementToNotExist("second-tab-content")
      .whenIClickOnElement("tab-button-1")
      .thenIExpectElementToNotExist("first-tab-content")
      .thenIExpectElementToHaveText("second-tab-content", "This is second tab");
  });
});

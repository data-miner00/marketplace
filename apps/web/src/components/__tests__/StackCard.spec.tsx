import StackCardSteps from "../__steps__/StackCard.steps";
import { Props } from "../StackCard";

describe("StackCard component", () => {
  const stackCardTestId = "stackcard";
  const stackCardTitleTestId = "stackcard-title";
  const stackCardDescriptionTestId = "stackcard-description";

  it("should renders the content with props correctly", () => {
    const steps = new StackCardSteps();
    const props: Props = {
      title: "My cool technology",
      description: "This is my very cool description",
      url: "https://www.my-cool-tech.com",
    };

    steps
      .givenIHaveTheFollowingProps(props)
      .whenIRenderComponent()
      .thenIExpectElementToExist(stackCardTestId)
      .thenIExpectElementToHaveAttributeWithValue(
        stackCardTestId,
        "href",
        props.url
      )
      .thenIExpectElementToExist(stackCardTitleTestId)
      .thenIExpectElementToHaveText(stackCardTitleTestId, props.title)
      .thenIExpectElementToExist(stackCardDescriptionTestId)
      .thenIExpectElementToHaveText(
        stackCardDescriptionTestId,
        props.description
      );
  });
});

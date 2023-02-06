import { render } from "@testing-library/react";

import StackCard, { Props } from "../StackCard";
import BaseSteps from "./Base.steps";

class StackCardSteps extends BaseSteps<StackCardSteps, Props> {
    public whenIRenderComponent(): StackCardSteps {
        render(<StackCard {...this.props} />);
        return this;
    }

    public getSteps(): StackCardSteps {
        return this;
    }
}

export default StackCardSteps;

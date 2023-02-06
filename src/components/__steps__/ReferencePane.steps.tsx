import { render } from "@testing-library/react";

import ReferencePane from "../ReferencePane";
import BaseSteps from "./Base.steps";

class ReferencePaneSteps extends BaseSteps<ReferencePaneSteps> {
    public getSteps(): ReferencePaneSteps {
        return this;
    }

    public whenIRenderComponent(): ReferencePaneSteps {
        render(<ReferencePane />);
        return this;
    }
}

export default ReferencePaneSteps;

import { render } from "@testing-library/react";

import Tabs, { Props } from "../Tabs";
import BaseSteps from "./Base.steps";

class TabsSteps extends BaseSteps<TabsSteps, Props> {
    public whenIRenderComponent(): TabsSteps {
        render(<Tabs {...this.props} />);
        return this;
    }

    public getSteps(): TabsSteps {
        return this;
    }
}

export default TabsSteps;

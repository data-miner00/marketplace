import { render, RenderResult } from "@testing-library/react";

import LanguageSwitcher from "../LanguageSwitcher";
import BaseSteps from "./Base.steps";

class LanguageSwitcherSteps extends BaseSteps<LanguageSwitcherSteps> {
    private instance: RenderResult;

    public whenIRenderComponent(): LanguageSwitcherSteps {
        this.instance = render(<LanguageSwitcher />);
        return this;
    }

    public getSteps(): LanguageSwitcherSteps {
        return this;
    }
}

export default LanguageSwitcherSteps;

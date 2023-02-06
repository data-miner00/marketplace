import { render } from "@testing-library/react";

import ThemeSwitcher from "../ThemeSwitcher";
import BaseSteps from "./Base.steps";

class ThemeSwitcherSteps extends BaseSteps<ThemeSwitcherSteps> {
    public getSteps(): ThemeSwitcherSteps {
        return this;
    }

    public whenIRenderComponent(): ThemeSwitcherSteps {
        render(<ThemeSwitcher />);
        return this;
    }
}

export default ThemeSwitcherSteps;

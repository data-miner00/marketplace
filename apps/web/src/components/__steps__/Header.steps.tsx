import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Header from "../Header";
import BaseSteps from "./Base.steps";

class HeaderSteps extends BaseSteps<HeaderSteps> {
    public getSteps(): HeaderSteps {
        return this;
    }

    public whenIRenderComponent(): HeaderSteps {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );
        return this;
    }
}

export default HeaderSteps;

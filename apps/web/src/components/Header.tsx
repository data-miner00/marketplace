import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";

function Header(): JSX.Element {
  const { t } = useTranslation();

  return (
    <header data-testid="header">
      <div className="max-w-[1400px] mx-auto md:px-8 items-center flex justify-between h-24">
        <div
          data-testid="header-logo"
          className="font-bold uppercase text-2xl text tracking-wide"
        >
          React + Esbuild
        </div>
        <nav data-testid="header-nav" className="flex">
          <Link to="/" className="px-4 font-semibold">
            {t("home")}
          </Link>
          <Link to="/features" className="px-4 font-semibold">
            {t("features")}
          </Link>
          <Link to="/about" className="px-4 font-semibold">
            {t("about")}
          </Link>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}

export default Header;

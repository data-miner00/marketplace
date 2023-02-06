import { useState } from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher(): JSX.Element {
  const [popoverOpen, setPopoverOpen] = useState<boolean>(false);
  const { i18n } = useTranslation();

  function handleLanguageSwitch(locale: string): void {
    void i18n.changeLanguage(locale);
    localStorage.locale = locale;
    setPopoverOpen((state) => !state);
  }

  return (
    <div
      data-testid="language-switcher-container"
      className="relative flex items-center"
    >
      <button
        data-testid="language-switcher"
        className="flex items-center justify-between px-2"
        onClick={() => setPopoverOpen((state) => !state)}
      >
        <svg
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          className="block"
        >
          <path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
        </svg>
        <svg
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className={`h-4 w-4 block ${popoverOpen ? "text-green-300" : ""}`}
        >
          <g transform="rotate(90 12 12)">
            <path d="M9 5l7 7-7 7"></path>
          </g>
        </svg>
      </button>
      {popoverOpen && (
        <div
          data-testid="language-popover"
          className="before:h-2 before:w-2 before:rotate-45 before:bg-gray-200 dark:before:bg-gray-600 before:absolute before:left-1/2 before:-translate-x-1/2 before:top-[37px]"
        >
          <div className="absolute w-24 -bottom-28 -left-5 z-20 flex flex-col rounded shadow-md overflow-hidden">
            <button
              data-testid="language-btn-en"
              className="px-2 py-3 block bg-gray-200 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500"
              onClick={() => handleLanguageSwitch("en")}
            >
              English
            </button>
            <button
              data-testid="language-btn-ja"
              className="px-2 py-3 block bg-gray-200 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500"
              onClick={() => handleLanguageSwitch("ja")}
            >
              日本語
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;

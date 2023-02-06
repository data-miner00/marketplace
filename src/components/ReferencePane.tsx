import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RxHamburgerMenu } from "react-icons/rx";

import techData from "../data/TechnologyData.json";
import features from "../data/PanelFeatures.json";
import Tabs from "./Tabs";

function ReferencePane(): JSX.Element {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const DocsLinksContent = (): JSX.Element => (
    <div>
      <ol className="flex flex-wrap px-5 gap-5">
        {techData.map((data, index) => (
          <li key={index}>
            <a
              className="flex flex-col items-center group"
              href={data.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="flex justify-center items-center h-16 w-16 border border-solid dark:border-gray-600 border-gray-200 group-hover:border-pink-400 group-hover:text-pink-400">
                <span className="block font-bold text-2xl">{index + 1}</span>
              </div>
              <div className="w-16 overflow-hidden overflow-ellipsis text-center group-hover:text-pink-400">
                {data.title}
              </div>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );

  const TemplateFeaturesContent = (): JSX.Element => (
    <ul className="px-5 flex flex-col gap-5">
      {features.map(({ feature, id, disabled }) => (
        <li key={feature}>
          <div className="">
            <h3 className="text-xl font-bold mb-1">{feature}</h3>
            <p dangerouslySetInnerHTML={{ __html: t(id) }}></p>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-gray-50/80 dark:bg-gray-700/80 z-10"
          onClick={() => setOpen((open) => !open)}
        >
          <aside
            onClick={(event) => event.stopPropagation()}
            data-testid="pane"
            className="w-96 bg-gray-100 dark:bg-gray-700 h-screen overflow-y-auto border-gray-200 dark:border-gray-600 border-r border-solid"
          >
            <header className="border-b border-solid border-gray-200 dark:border-gray-600 flex">
              <div className="border-r border-solid border-gray-200 dark:border-gray-600 w-16"></div>
              <div className="p-5">{t("Reference Panel")}</div>
            </header>
            <main>
              <section className="p-5 border-b border-solid border-gray-200 dark:border-gray-600 bg-gray-300/50 dark:bg-gray-800/50">
                <p>{t("panel_disclaimer")}</p>
              </section>

              <Tabs
                tabs={[
                  {
                    title: t("Docs Links"),
                    content: <DocsLinksContent />,
                  },
                  {
                    title: t("Template Features"),
                    content: <TemplateFeaturesContent />,
                  },
                ]}
              />
            </main>
          </aside>
        </div>
      )}

      <button
        data-testid="pane-switch"
        className="h-10 w-10 rounded-full flex place-items-center fixed left-5 top-3 z-20"
        onClick={() => setOpen((open) => !open)}
      >
        <RxHamburgerMenu className="block" size="24px" />
      </button>
    </>
  );
}

export default ReferencePane;

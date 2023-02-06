import { useTranslation } from "react-i18next";

export interface Props {
  title: string;
  description: string;
  url: string;
}

function StackCard({ title, description, url }: Props): JSX.Element {
  const { t } = useTranslation();

  return (
    <a
      href={url}
      target="_blank"
      data-testid="stackcard"
      rel="noreferrer"
      className="block p-6 w-80 group group-hover:shadow-md border border-solid border-gray-300 hover:border-gray-400 dark:border-gray-500 rounded dark:hover:border-gray-400"
    >
      <h4 data-testid="stackcard-title" className="font-bold text-lg">
        {title}
      </h4>
      <p
        data-testid="stackcard-description"
        className="my-3 text-gray-500 dark:text-gray-300"
      >
        {description}
      </p>
      <button className="text-blue-400 dark:text-green-300 group-hover:underline hover:text-blue-300">
        {t("documentation")} →
      </button>
    </a>
  );
}

export default StackCard;

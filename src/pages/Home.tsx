import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import StackCard from "../components/StackCard";
import techData from "../data/TechnologyData.json";
import {
  headingMotion,
  paragraphMotion,
  stackCardContainerMotion,
  stackCardItemMotion,
} from "../motions/homePageMotion";

function Home(): JSX.Element {
  const { t } = useTranslation();

  return (
    <main className="">
      <header className="mt-4 mb-16">
        <motion.h1
          className="my-awesome-h1"
          variants={headingMotion}
          initial="hidden"
          animate="show"
        >
          {t("template_title")}
        </motion.h1>
        <motion.p
          variants={paragraphMotion}
          initial="hidden"
          animate="show"
          className="text-center text-gray-500 dark:text-gray-300"
        >
          {t("template_description")}
        </motion.p>
      </header>

      <motion.div
        variants={stackCardContainerMotion}
        initial="hidden"
        animate="show"
        className="mx-auto w-2/3 flex flex-wrap gap-7 justify-center items-center"
      >
        {techData.slice(0, 9).map((data, index) => (
          <motion.div variants={stackCardItemMotion} key={index}>
            <StackCard
              title={data.title}
              description={t(data.title)}
              url={data.url}
            />
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}

export default Home;

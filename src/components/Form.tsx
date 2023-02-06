import { FormEvent, useRef } from "react";
import { useTranslation } from "react-i18next";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string().max(10).min(5),
  age: z.number().min(1),
  email: z.string().email(),
});

function Form(): JSX.Element {
  const { t } = useTranslation();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const nameErrorRef = useRef<HTMLParagraphElement>(null);
  const emailErrorRef = useRef<HTMLParagraphElement>(null);
  const ageErrorRef = useRef<HTMLParagraphElement>(null);

  function submit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const formData = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      age: emailRef.current?.value,
    };

    const results = FormSchema.safeParse(formData);

    if (!results.success) {
      console.log(results.error.format());

      if (ageErrorRef.current != null)
        ageErrorRef.current.innerText =
          results.error.format().age?._errors.join(" ") ?? "";

      if (emailErrorRef.current != null)
        emailErrorRef.current.innerText =
          results.error.format().email?._errors.join(" ") ?? "";

      if (nameErrorRef.current != null)
        nameErrorRef.current.innerText =
          results.error.format().name?._errors.join(" ") ?? "";
    }
  }

  return (
    <form
      onSubmit={submit}
      className="border rounded border-solid border-gray-300 dark:border-gray-500 p-10 w-96 mx-auto"
    >
      <h1 className="text-lg text-center font-bold">
        {t("Simple Form Element")}
      </h1>
      <p className="text-center mb-7 font-semibold">
        {t(
          "This form component is capable to perform data validation with Zod"
        )}
      </p>

      <label htmlFor="name" className="mb-2 block">
        {t("Name")}
      </label>
      <input
        name="name"
        className="block bg-gray-200 dark:bg-gray-600 outline-none focus:border-gray-400 border-solid border border-transparent px-5 py-2 rounded-lg w-full mb-2"
        type="text"
        placeholder={t("Name") ?? "Name"}
        ref={nameRef}
      />
      <p className="text-red-500 italic text-sm my-2" ref={nameErrorRef}></p>
      <label htmlFor="email" className="mb-2 block">
        {t("Email")}
      </label>
      <input
        name="email"
        className="block bg-gray-200 dark:bg-gray-600 outline-none focus:border-gray-400 border-solid border border-transparent px-5 py-2 rounded-lg w-full mb-2"
        type="text"
        placeholder={t("Email") ?? "Email"}
        ref={emailRef}
      />
      <p className="text-red-500 italic text-sm my-2" ref={emailErrorRef}></p>
      <label htmlFor="age" className="mb-2 block">
        {t("Age")}
      </label>
      <input
        name="age"
        className="block bg-gray-200 dark:bg-gray-600 outline-none focus:border-gray-400 border-solid border border-transparent px-5 py-2 rounded-lg w-full mb-2"
        type="number"
        placeholder={t("Age") ?? "Age"}
        ref={ageRef}
      />
      <p className="text-red-500 italic text-sm my-2" ref={ageErrorRef}></p>
      <button
        type="submit"
        className="mt-7 px-5 py-2 text-center block bg-blue-400 text-white rounded-xl w-full"
      >
        {t("Submit")}
      </button>
    </form>
  );
}

export default Form;

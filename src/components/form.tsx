import { PaperClipIcon } from "@heroicons/react/20/solid";
import { useForm } from "react-hook-form";
import { useState } from "react";

type FormProps = {
  data: (array: any) => void;
};

export default function Form(prop: FormProps) {
  const [loading, setLoading] = useState(false);

  type FormInputs = {
    title: string;
    description: string;
    file: any;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const handleForm = async (data: FormInputs) => {
    const formData = new FormData();

    setLoading(true);

    formData.set("title", data.title);
    formData.set("file", data.file[0]);

    const result = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/emails/classificar`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (result.status !== 200) throw new Error("request error");

    prop.data(await result.json());
  };

  return (
    <>
      {loading ? (
        <span className="text-gray-300 text-2xl">Loading...</span>
      ) : (
        <form
          id="form"
          onSubmit={handleSubmit(handleForm)}
          className="sm:w-2xl w-full"
        >
          <div className="rounded-lg bg-white outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600 dark:bg-gray-800/50 dark:outline-white/10 dark:focus-within:outline-indigo-500">
            <input
              id="title"
              {...register("title", { required: "Este campo é obrigatório" })}
              type="text"
              placeholder="Assunto do email"
              className="block w-full px-3 pt-2.5 text-lg font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none dark:text-white dark:placeholder:text-gray-500"
            />
            {errors.title && (
              <span className="p-2 text-sm text-red-300">
                {errors.title.message}
              </span>
            )}
          </div>
          <div className="flex items-center justify-between space-x-3 px-2 py-2 sm:px-3 dark:border-white/10">
            <div className="flex">
              <PaperClipIcon
                aria-hidden="true"
                className="mr-2 -ml-1 size-5 text-gray-100 dark:group-hover:text-gray-100"
              />
              <input
                type="file"
                {...register("file", {
                  required: "O envio do arquivo em txt é obrigatório.",
                })}
                className="group -my-2 -ml-2 inline-flex items-center rounded-full px-3 py-2 text-left text-gray-400 dark:text-gray-500"
              />
              {errors.file && (
                <span className="text-sm text-red-300">
                  'O envio do arquivo em txt é obrigatório.'
                </span>
              )}
            </div>
            <button
              type="submit"
              className="p-2 items-center rounded-md bg-indigo-600 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
            >
              Enviar
            </button>
          </div>
        </form>
      )}
    </>
  );
}

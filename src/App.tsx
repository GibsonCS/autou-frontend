import Card from "./components/card";
import Form from "./components/form";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState(null);

  const handleCard = () => {
    setData(null);
  };

  return (
    <div className="dark:bg-gray-900 flex flex-col min-h-[calc(100vh-120px)] justify-center w-full items-center">
      {!data ? (
        <main className="isolate">
          <div className="relative pt-14 flex flex-col items-center p-3">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75 dark:opacity-20"
              />
            </div>
            <div className="py-24 sm:py-32 lg:pb-40">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                  <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-8xl dark:text-white">
                    Classifique seus e-mails e ganhe tempo
                  </h1>
                  <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
                    A Ferramenta de Análise e Classificação de E-mails foi
                    desenvolvida para automatizar o processo de leitura,
                    categorização e resposta de mensagens recebidas, oferecendo
                    uma solução ágil e inteligente para equipes que lidam com
                    grande volume de comunicação.
                  </p>

                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                      href="#form"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                    >
                      Iniciar
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Form data={setData} />
          </div>
        </main>
      ) : (
        <div className="flex flex-col w-1/2 items-center space-y-3">
          <Card content={data} />
          <button
            onClick={() => handleCard()}
            className="border rounded text-gray-300 w-max p-1"
          >
            Voltar
          </button>
        </div>
      )}
    </div>
  );
}

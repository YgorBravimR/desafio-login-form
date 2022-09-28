import { SignIn } from "phosphor-react";

export function Home() {
  return (
    <main className="md:h-full md:flex md:justify-center">
      <div className="m-auto md:w-[32rem] md:bg-formBackground md:pt-6 md:pb-16">
        <div className="max-w-[21.5rem] m-auto">
          <div className="my-8">
            <SignIn size={24} className="text-primaryColor inline" />
            <p className="inline align-middle ml-2 text-2xl text-textTitle">
              Faça seu login
            </p>
            <p className="font-roboto">
              Entre com suas informaçoes de cadastro
            </p>
          </div>
          <form>
            <div className="mb-4">
              <label htmlFor="" className="block mb-1">
                E-mail
              </label>
              <input
                type="text"
                placeholder="Digite seu e-mail"
                className="bg-transparent border-[1px] border-textBase rounded p-2 w-full placeholder:text-sm focus:border-transparent focus:outline-2 focus:outline-primaryColor"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="" className="block mb-1">
                Senha
              </label>
              <input
                type="password"
                placeholder="Digite sua senha"
                className="bg-transparent border-[1px] border-textBase rounded p-2 w-full placeholder:text-sm focus:border-transparent focus:outline-2 focus:outline-primaryColor"
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <input
                  type="checkbox"
                  className="w-5 h-5 bg-transparent checked:text-primaryColor rounded focus:outline-none focus:ring-primaryColor "
                />
                <label
                  htmlFor="checkbox"
                  className="ml-2 font-roboto tracking-wider"
                >
                  Lembre-me
                </label>
              </div>
              <a href="#" className="text-primaryColor text-sm font-bold">
                Esqueci minha senha
              </a>
            </div>
            <button
              type="submit"
              className="my-6 py-4 w-full bg-primaryColor text-center text-background font-bold text-lg uppercase rounded"
            >
              Entrar
            </button>
          </form>
          <a href="#" className="text-center text-primaryColor text-sm">
            <p>
              Não tem uma conta?<strong className="ml-2">Registre-se</strong>
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}

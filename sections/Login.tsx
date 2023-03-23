export default function Login() {
  return (
    <section>
        <div class="mt-24 md:mt-44"></div>
        <p class="text-center text-3xl font-berkshire font-normal">Conecte-se aqui</p>
        <div class="grid gap-8 mx-auto max-w-[1440px] px-[5%] w-full md:grid-cols-2 pt-12 pb-32">
            <div class="px-10 flex flex-col gap-4">
                <p class="font-roboto text-2xl font-bold">Já tem uma conta?</p>
                <p class="font-roboto text-lg">Clique no botão abaixo e faça o login para acessar sua conta.</p>
                <button class="bg-black font-roboto text-lg w-full py-2 font-bold text-white">Entrar</button>
            </div>
            <div class="px-10 flex flex-col gap-4">
                <p class="font-roboto text-2xl font-bold">Não possui cadastro?</p>
                <p class="font-roboto text-lg">Clique no botão abaixo e cadastra-se</p>
                <button class="bg-black font-roboto text-lg w-full py-2 font-bold text-white">Criar conta</button>
            </div>
        </div>
    </section>
  );
}
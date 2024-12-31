import { Outlet } from 'react-router-dom';
import Logo from '../../assets/logo-forja.png';
import { Toaster } from 'sonner';

export function AuthLayout() {
  return (
    <div className="grid min-h-screen sm:grid-cols-[3fr_2fr]">
      <div className="relative hidden max-h-screen bg-muted p-16 sm:block">
        <strong className="text-bright-orange-600">Forja Tech</strong>
      </div>
      <div className="flex h-screen flex-col justify-center">
        <div className="mx-auto flex w-full max-w-[460px] flex-col items-center p-16">
          <img src={Logo} alt="Logo" width={100} height={100} />
          <h2 className="my-2 text-center text-lg font-bold dark:text-gray-200 sm:text-xl">
            Bem-vindo à <strong>Forja Tech</strong>
          </h2>
          <p className="text-center text-base dark:text-gray-300 sm:text-lg">Seu sistema de gerenciamento</p>

          <div className="my-4 grid w-full grid-cols-3 items-center gap-4">
            <div className="h-[1px] bg-gray-500" />
            <span className="text-center text-sm font-medium dark:text-gray-400">Ou entre com</span>
            <div className="h-[1px] bg-gray-500" />
          </div>
          <Outlet />
        </div>
      </div>
      <Toaster position="bottom-right" richColors expand />
    </div>
  );
}

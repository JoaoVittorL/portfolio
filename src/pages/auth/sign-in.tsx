import { zodResolver } from '@hookform/resolvers/zod';
import { EyeClosedIcon } from '@radix-ui/react-icons';
import { Eye, LogIn } from 'lucide-react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FieldErrors, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const schema = z.object({
  username: z.string().min(1, { message: 'Por favor, insira um usuário' }).trim(),
  password: z.string().min(1, { message: 'Por favor, insira sua senha' }).trim(),
});
type FormData = z.infer<typeof schema>;

export function SignIn() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'all',
    criteriaMode: 'all',
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmitForm = async (values: FormData) => {
    console.log(values);
  };

  const onError = (errors: FieldErrors<FormData>) => {
    Object.values(errors).forEach((error) => {
      if (error && error.message) {
        toast.error(error.message);
      }
    });
  };

  return (
    <>
      <Helmet title="Login" />
      <form onSubmit={handleSubmit(handleSubmitForm, onError)} className="flex w-full flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label className="dark:text-gray-200">Usuário</Label>
          <Input
            type="text"
            {...register('username')}
            className={`${errors.username ? 'border-red-500' : ''}`}
            aria-invalid={!!errors.username}
            aria-describedby="username-error"
            placeholder="Digite seu nome de usuário"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="dark:text-gray-200">Senha:</Label>
          <div
            className={`flex h-8 items-center rounded-md border bg-transparent text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-gray-400 ${errors.password ? 'border border-red-500' : ''}`}
          >
            <Input
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              className="border-none bg-transparent text-sm outline-none placeholder:text-gray-400 focus:no-underline"
              aria-invalid={!!errors.password}
              aria-describedby="password-error"
              placeholder="Digite sua senha"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              aria-label={showPassword ? 'Esconder senha' : 'Mostrar senha'}
              className="px-2"
            >
              {showPassword ? (
                <Eye className="h-4 w-4 dark:text-gray-400" />
              ) : (
                <EyeClosedIcon className="h-4 w-4 dark:text-gray-400" />
              )}
            </button>
          </div>
        </div>
        <Button type="submit" variant="default" title="Entrar" icon={<LogIn />} />
      </form>
    </>
  );
}

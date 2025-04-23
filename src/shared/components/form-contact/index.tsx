import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import { useFormContactModel } from "./form-contact-model"

export function FormContact() {
  const {handleSubmitForm,handleSubmit,register,errors,isLoading} = useFormContactModel()
  return  <form onSubmit={(e) => {
    handleSubmit((values) => {
      console.log(values);
      handleSubmitForm(e);
    })(e);
  }}  className="space-y-2">
    <div>
        <Label htmlFor="name">Nome</Label>
        <Input id="name" {...register('name')} placeholder="Digite seu nome" error={errors.name?.message} disabled={isLoading}/>
    </div>
    <div>
        <Label htmlFor="email">E-mail</Label>
        <Input  type="email" id="email" {...register('email')}  placeholder="Digite seu email" error={errors.email?.message} disabled={isLoading}/>
    </div>
    <div>
        <Label htmlFor="message">Mensagem</Label>
        <Textarea id="message" {...register('message')} rows={10} placeholder="Digite sua mensagem" disabled={isLoading} className={errors.message?.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''} />
    </div>
    <Button type="submit" size={'full'} disabled={isLoading}>{isLoading ? 'Enviando...' : 'Enviar'}</Button>
</form>
}
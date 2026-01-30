import { useForm } from "react-hook-form";

function SimpleForm() {
const { register, handleSubmit } = useForm();
const onSubmit = (data) => console.log(data);

return (
<form onSubmit={handleSubmit(onSubmit)}>
<input {...register("Nome")} placeholder="Nome" /> <br></br>
<input {...register("Email")} placeholder="Email" /> <br></br>
<input {...register("Senha")} placeholder="Senha" /> <br></br>
<button type="submit">Enviar</button>
</form>
);
}
export default SimpleForm
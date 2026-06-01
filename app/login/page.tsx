export default function LoginPage() {
  return (
    <div>
      <form action=''>
        <label htmlFor='email'>E-mail</label>
        <input id='email' type='text' />

        <label htmlFor='password'>Senha</label>
        <input id='password' type='password' />

        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

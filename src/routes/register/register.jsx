import "./register.scss";

function RegisterPage() {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder="username" name="username" />
        <input required type="email" placeholder="email" name="email" />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
        />
        <input
          required
          type="password"
          placeholder="re-write password"
          name="password"
        />
        <button className="signup">Sign up</button>
        <span>
          Do you have an account?<a href="/login">Login</a>
        </span>
      </form>
    </div>
  );
}

export default RegisterPage;

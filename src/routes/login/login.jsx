import "./login.scss";

function LoginPage() {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder="username" name="username" />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
        />
        <button className="btnSignIn">Sign in</button>
        <span>
          Don`t have an account?<a href="/register">Register</a>
        </span>
      </form>
    </div>
  );
}

export default LoginPage;

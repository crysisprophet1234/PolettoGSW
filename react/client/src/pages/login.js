const Login = () => {

    return (

        <div className="login-central-wrapper">

            <div className="form">

                <h1>PolettoGSW</h1>

                <form id="login-form" action="https://localhost:3001/api/v1/usuario/loginUsuario">

                    <div className="input-group">
                        <label htmlFor="user">Nome de usuário</label>
                        <input type="text" name="user" maxLength="20" minLength="1" placeholder="Usuário" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Senha</label>
                        <input type="password" name="password" minLength="1" placeholder="Senha" required />
                    </div>

                    <button type="submit" id="submit-btn">Fazer Login</button>

                    <a href="index.html">Esqueceu sua senha?</a>

                </form>

            </div>

            <div className="brand">

            </div>

        </div>

    )

}

export default Login;
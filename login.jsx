export function Login(){
    return(
        <div>
            <h2 data-testid="title">Customer Login</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" /></dd>
                <dt>Password</dt>
                <dd><input type="password" /></dd>
            </dl>
            <button>Login</button>
            <a href="/recover">Recover Password</a>
        </div>
    )
}
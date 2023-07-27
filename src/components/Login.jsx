import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext.jsx";

function Login() {
    // con useContext uso el estado global del UserContext
    const { user, handleLogin, handleLogout } = useContext(UserContext);

    // el campo nombre de usuario y el campo contraseña son estados
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // listado de usuarios y errores
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    //get a la api
    const initialUrl = "";

    const fetchUsers = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            //Acá seteo los users como objeto de js
            //Guardo los users en
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    };

    // maneja el estado de los usuarios cada vez que se monte el componente
    useEffect(() => {
        fetchUsers(initialUrl);
    }, []);

    //logica que maneja envio de formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        // Realiza la lógica de validación del formulario aquí
        const user = users.find(
            (u) => u.name === username && u.password === password
        );
        console.log(user);

        if (user) {
            //guarda el usuario en contexto global y en localstorage
            handleLogin(user);
            setError("Loggeado Correctamente");
        } else {
            setError("Nombre de usuario o contraseña incorrectos");
        }
    };

    return (
        <>
            <div>
                {user ? (
                    <div>
                        <h2 className="text-center"></h2>
                        <div className="text-success">
                            <hr />
                        </div>
                        <button className="btn btn-primary mx-1" type='button' onClick={handleLogout}>Cerrar sesión</button>
                    </div>
                ) : (
                    <div>
                        <h2 className="text-center">Iniciar sesión</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Usuario
                                </label>
                                <input
                                    name="name"
                                    id="name"
                                    className="form-control"
                                    type="text"
                                    placeholder="Nombre de usuario"
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Contraseña
                                </label>
                                <input
                                    name="password"
                                    id="password"
                                    className="form-control"
                                    type="password"
                                    placeholder="Contraseña"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Iniciar sesión
                            </button>
                            {error && <p>{error}</p>}
                        </form>
                    </div>
                )}
            </div>
        </>
    );
}

export default Login;

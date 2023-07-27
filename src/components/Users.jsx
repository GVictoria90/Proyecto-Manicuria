import React, { useState } from "react";

const [users, setUsers] = useState([]);

const fetchUsers = async () => {
    const BASE_URL = 'https://648b137217f1536d65ea4c77.mockapi.io/api/users'; // Reemplaza con la URL real

    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error('Error fetching users');
        }
        const data = await response.json();
        setUsers(data);
    } catch (error) {
        console.error(error);
    }
}

  
    function Users({ users }) {
        return (
            <>
                { //iteracion
                    users.map((user, index) => (
                        <div key={index} className="card">
                            <div>
                                <img src={user.avatar} />
                                <div>
                                    <h5> Name: {user.name}</h5>
                                    <hr />
                                    <p> Id : {user.id}</p>
                                    <p> Password : {user.password}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </>
        )
    }

    export default Users;     

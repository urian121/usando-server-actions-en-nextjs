/**
 * Client-Side Communication with API Routes
 * Comunicación cliente-side con rutas API
 * Next.js hace que sea perfecto comunicarse con las rutas de la API desde el código del lado del cliente.
 * Puedes usar el fetch API o cualquier otra biblioteca HTTP para hacer solicitudes a sus endpoints API.
 */

import { useEffect, useState } from "react";

function MyComponent() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

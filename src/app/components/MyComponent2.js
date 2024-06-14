/**
 * Client-Side Data Fetching
 * Secando los datos de los clientes-side
 * Next.js ofrece funciones que permiten obtener datos en el lado del cliente, proporcionando actualizaciones dinámicas sin una recarga de página completa.
 * La función más comúnmente usada useEffect de React, que nos permite ejecutar código después de que el componente ha prestado.
 * Dentro del useEffect, podemos utilizar el fetch API o cualquier otra biblioteca de datos que reclaba para recuperar datos de un endpoint API.
 */
import { useEffect, useState } from "react";

function MyComponent2() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Display the fetched data */}
      {data && <p>{data.message}</p>}
    </div>
  );
}

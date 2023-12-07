import React, { useState, useEffect } from "react";  // Importación de React, useState y useEffect desde 'react'
import axios from 'axios';  // Importación de axios para realizar solicitudes HTTP
import './conection.scss';  // Importación de estilos CSS o SCSS para el componente

const ConectionExample: React.FC = () => {  // Definición de un componente funcional llamado ConectionExample
    const [connectionStatus, setConnectionStatus] = useState<string>('');  // Declaración de un estado 'connectionStatus' utilizando el hook useState

    useEffect(() => {  // Uso del hook useEffect para realizar efectos secundarios en el componente
        const fetchDataFromBackend = async () => {  // Definición de una función asincrónica fetchDataFromBackend
            try {
                const response = await axios.get('http://localhost:3000/midnightmysteries/conection');  // Realización de una solicitud GET a la ruta especificada en el backend
                setConnectionStatus(response.data);  // Actualización del estado 'connectionStatus' con la respuesta recibida del backend
            } catch (error) {
                console.error('Hubo un problema con la solicitud:', error);  // Manejo de errores en caso de que la solicitud falle
            }
        };

        fetchDataFromBackend();  // Llamada a la función fetchDataFromBackend al montar el componente
    }, []);  // El useEffect se ejecuta solo una vez después del montaje del componente, debido al array de dependencias vacío

    return (
        <div className="ConectionExample">  // Devolución de JSX que representa la estructura del componente
            <p>{connectionStatus}</p>  // Renderización del estado 'connectionStatus' dentro de un párrafo en el componente
        </div>
    );
};

export default ConectionExample;  // Exportación del componente ConectionExample para su uso en otros archivos
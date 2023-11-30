import { ReactNode, createContext, useEffect, useState } from "react";
import { TUser } from "./interfaces&types/TUser";

// Importa la librería 'axios' para realizar solicitudes HTTP.
import axios from "axios";

// Define una interfaz para los campos que se esperan en las entradas de inicio de sesión.
interface LoginInputs {
  email: string;
  password: string;
}

// Define una interfaz para el contexto de autenticación que contendrá la información del usuario actual y métodos para manejar la autenticación.
interface AuthContextType {
  currentUser: TUser | null;
  login: (inputs: LoginInputs) => Promise<void>;
  logout: () => Promise<void>;
  updateCurrentUser: (user: TUser) => void;
}

// Define un valor inicial para el contexto de autenticación.
const initialContextValue: AuthContextType = {
  currentUser: null,
  login: async () => {},
  logout: async () => {},
  updateCurrentUser: () => {}
};

// Crea un contexto de React para manejar la información de autenticación.
export const AuthContext = createContext(initialContextValue);

// Crea un componente funcional AuthContextProvider que actuará como proveedor de contexto para los componentes secundarios.
export const AuthContextProvider = ({ children }: { children: ReactNode }) => {

  // Obtiene el usuario almacenado en el almacenamiento local del navegador.
  const storedUser = localStorage.getItem("user");
  
  // Define un estado para almacenar y actualizar el usuario actual.
  const [currentUser, setCurrentUser] = useState<TUser | null>(
    // Verifica si hay un usuario almacenado y lo parsea a JSON si existe.
    typeof storedUser === "string" ? JSON.parse(storedUser) : null
  );

  // Define una función asincrónica para realizar el inicio de sesión, enviando una solicitud POST a un endpoint específico.
  const login = async ( inputs:LoginInputs ) => {

    const res = await axios.post("http://localhost:8800/midnightmysteries/auth/login", inputs, {
      withCredentials: true,
    });
    setCurrentUser(res.data); // Establece el usuario actual después del inicio de sesión.
  };

  // Define una función asincrónica para realizar el cierre de sesión, enviando una solicitud POST a un endpoint específico.
  const logout = async () => {
    await axios.post("http://localhost:8800/apiForum/auth/logout");
    setCurrentUser(null); // Establece el usuario actual como nulo después del cierre de sesión.
  };

  // Define una función para actualizar los detalles del usuario actual.
  const updateCurrentUser = (user: TUser) => {
    if (currentUser) {
      // Crea una copia actualizada del usuario con los datos proporcionados.
      const updatedUser: TUser = {
        ...currentUser, 
        username: user.username,
        id: user.id,
        email: user.email,
        age: user.age,
        unlocked_characters: user.unlocked_characters,
        unlocked_endings: user.unlocked_endings,
        unlocked_objects: user.unlocked_objects,
        times_played: user.times_played,
        member_since: user.member_since
      };
      setCurrentUser(updatedUser); // Actualiza el usuario actual con los nuevos detalles.
    }
  };

  // Almacena el usuario actual en el almacenamiento local cuando cambia.
  useEffect(() => {
    if (currentUser !== null) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    }
  }, [currentUser]);

   // Crea un objeto que contiene el contexto de autenticación y sus valores.
  const contextValue: AuthContextType = {
    currentUser,
    login,
    logout,
    updateCurrentUser
  };

  // Devuelve el proveedor de contexto con el valor del contexto y los componentes secundarios.
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
// Array de usuarios (objetos)
const usuarios = [
    { usuario: "admin", clave: "admin123" },
    { usuario: "valeria", clave: "coder2024" }
];

// Variables
let intentos = 0;
const MAX_INTENTOS = 3;
7
// Función flecha para buscar usuario
const buscarUsuario = (usuarioIngresado, claveIngresada) => {
    return usuarios.find(user => user.usuario === usuarioIngresado && user.clave === claveIngresada);
};

// Función anónima para registrar
const registrarUsuario = function() {
    const nuevoUsuario = prompt("Ingrese un nombre de usuario:");
    const nuevaClave = prompt("Ingrese una contraseña:");

    if (!nuevoUsuario || !nuevaClave) {
        alert("Datos inválidos");
        return;
    }

    // Verificamos si ya existe
    const existe = usuarios.some(user => user.usuario === nuevoUsuario);
    
    if (existe) {
        alert("Ese nombre ya está registrado");
    } else {
        usuarios.push({ usuario: nuevoUsuario, clave: nuevaClave });
        alert("Usuario registrado con éxito 🎉");
    }
};

// Función para iniciar sesión
const login = () => {
    while (intentos < MAX_INTENTOS) {
        const nombre = prompt("Usuario:");
        const clave = prompt("Contraseña:");
        
        const usuarioValido = buscarUsuario(nombre, clave);

        if (usuarioValido) {
            alert("Bienvenido/a " + nombre + " 😄");
            return;
        } else {
            intentos++;
            alert("Usuario o clave incorrectos. Intento " + intentos + " de " + MAX_INTENTOS);
        }
    }

    alert("Se agotaron los intentos. Bloqueado 🔒");
};

// Menú principal
const menu = () => {
    let opcion = prompt("Seleccione una opción:\n1. Iniciar sesión\n2. Registrarse\n3. Salir");

    if (opcion === "1") {
        login();
    } else if (opcion === "2") {
        registrarUsuario();
    } else if (opcion === "3") {
        alert("¡Hasta la próxima!");
    } else {
        alert("Opción inválida");
    }
};

// Iniciar simulador
console.log("Iniciando sistema de login...");
alert("Bienvenido al sistema de login");
menu();

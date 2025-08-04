import axios from 'axios';

export const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// --- Interceptors ---

// Comentário: Interceptors permitem executar código antes de uma requisição ser enviada
// ou depois de uma resposta ser recebida.

// Exemplo de um interceptor de requisição (request).
// Útil para injetar um token de autenticação em todas as chamadas.
apiClient.interceptors.request.use((config) => {
    // const token = localStorage.getItem('authToken');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
});

apiClient.interceptors.response.use(
    (response) => response,

    (error) => {
        // Aqui podemos adicionar lógicas mais complexas, como redirecionar
        // para a página de login em caso de erro 401 (Não Autorizado),
        // ou mostrar uma notificação de erro padrão.
        if (error.response) {
            console.error('API Error Response:', error.response.data);
        } else if (error.request) {
            console.error('API Error Request:', error.request);
        } else {
            console.error('API Error Message:', error.message);
        }
        return Promise.reject(error);
    }
);
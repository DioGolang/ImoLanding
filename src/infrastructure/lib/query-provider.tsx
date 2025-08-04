'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState, type ReactNode } from 'react';

/**
 * @component QueryProvider
 * @description Um wrapper que fornece o QueryClient para a aplicação.
 * É configurado como um Client Component ('use client') porque utiliza
 * o hook `useState` para garantir que o QueryClient seja criado apenas uma vez
 * durante o ciclo de vida do componente, evitando recriações a cada renderização.
 */
export function QueryProvider({ children }: { children: ReactNode }) {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false,
                        staleTime: 1000 * 60 * 5, // 5 minutos
                    },
                },
            })
    );

    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
}
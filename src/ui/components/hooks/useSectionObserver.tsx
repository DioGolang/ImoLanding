'use client';
import { useEffect } from 'react';

export function useSectionObserver(
    ids: string[],
    onActive: (id: string) => void,
    options: IntersectionObserverInit = { rootMargin: '-40% 0px -40% 0px', threshold: [0, 0.25, 0.5] }
) {
    useEffect(() => {
        const observers: IntersectionObserver[] = [];
        ids.forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            const io = new IntersectionObserver(entries => {
                entries.forEach(e => {
                    if (e.isIntersecting) onActive(id);
                });
            }, options);
            io.observe(el);
            observers.push(io);
        });
        return () => observers.forEach(o => o.disconnect());
    }, [ids, onActive, options]);
}
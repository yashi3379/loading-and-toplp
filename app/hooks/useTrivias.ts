import { useState, useEffect } from 'react';
import { client } from '@/lib/microCMS/client';
import { Trivia } from '@/types/type';

export const useTrivias = () => {
    const [trivias, setTrivias] = useState<Trivia[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTrivias = async () => {
            try {
                const response = await client.getList<Trivia>({
                    endpoint: 'trivia-loading',
                });
                setTrivias(response.contents || []);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError('Failed to fetch trivias');
            }
        };

        fetchTrivias();
    }, []);

    return { trivias, error };
};

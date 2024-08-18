import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Error() {
    const navigate = useNavigate();

    useEffect(() => {
        const timerId = setTimeout(() => navigate('/', { replace: true }));

        return () => {
            clearTimeout(timerId);
        };
    }, []);

    return (
        <div className="flex min-h-screen w-full items-center justify-center text-3xl font-black text-primary-900">
            Sorry...
        </div>
    );
}

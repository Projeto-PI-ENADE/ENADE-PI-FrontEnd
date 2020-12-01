import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
    const router = useRouter();

    useEffect(() => {
        console.log('entrei');
        router.push('/dashboard/2018');
    }, []);
    return '';
};

export default Home;

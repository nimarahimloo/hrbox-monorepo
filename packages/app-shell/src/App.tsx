import { useSelector } from 'react-redux';
import * as React from 'react';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { RootState } from '@hrbox/shared-services';

interface AppProps {
    children: React.ReactNode;
}
export const App = ({ children }: AppProps) => {
    const lang = useSelector((state: RootState) => state.language.lang);
    const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
    const [dir, setDir] = useState<'ltr' | 'rtl'>(lang === 'en' ? 'ltr' : 'rtl');

    useEffect(() => {
        setDir(lang === 'en' ? 'ltr' : 'rtl');
    }, [lang]);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1441);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
            <AnimatePresence mode="wait">
                <motion.div
                    key={lang}
                    animate={{ opacity: 1 }}
                    className={`${dir} h-full min-h-fit 2xl:container 2xl:mx-auto`}
                    dir={dir}
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    style={{ zoom: '1', margin: '0 64px 0 32px' }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                >
                    {children}
                    <ToastContainer />
                </motion.div>
            </AnimatePresence>
    );
}

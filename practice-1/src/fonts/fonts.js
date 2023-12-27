import { PT_Sans, Montserrat, Lato } from 'next/font/google';

export const ptSans = PT_Sans({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['cyrillic'],
    display: 'swap',
    variable: '--primary-text-font',
    fallback: ['system-ui', 'arial'],
});

export const montserrat = Montserrat({
    weight: [ '800'],
    style: ['normal'],
    subsets: ['cyrillic'],
    display: 'swap',
    variable: "--title-font",
    fallback: ['system-ui', 'verdana'],
});

export const lato = Lato({
    weight: ['700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    variable: "--secondary-text-font",
    fallback: ['system-ui', 'arial'],
});




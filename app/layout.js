import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
    display: 'swap',
});

export const metadata = {
    title: 'Prabish Khanal — Frontend Engineer',
    description:
        'Experienced Frontend Engineer with 5+ years crafting high-performance web applications with Angular, React, Next.js, and modern JavaScript. Based in Kathmandu, Nepal.',
    keywords: [
        'Frontend Engineer',
        'React',
        'Angular',
        'Next.js',
        'Node.js',
        'JavaScript',
        'TypeScript',
        'Web Development',
        'Prabish Khanal',
        'Portfolio',
    ],
    icons: {
        icon: '/icon.svg',
    },
    openGraph: {
        title: 'Prabish Khanal — Frontend Engineer',
        description:
            'Experienced Frontend Engineer crafting high-performance web applications with modern technologies.',
        type: 'website',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans`}
            >
                {children}
            </body>
        </html>
    );
}

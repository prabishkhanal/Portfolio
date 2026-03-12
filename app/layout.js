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
    metadataBase: new URL('https://prabishkhanal.com.np'),
    title: {
        default: 'Prabish Khanal — Frontend Engineer',
        template: '%s | Prabish Khanal',
    },
    description:
        'Experienced Frontend Engineer with 5+ years crafting high-performance web applications with Angular, React, Next.js, and modern JavaScript. Based in Kathmandu, Nepal.',
    keywords: [
        'Frontend Engineer',
        'React Developer',
        'Angular Developer',
        'Next.js Expert',
        'Node.js',
        'JavaScript',
        'TypeScript',
        'Web Development',
        'Prabish Khanal',
        'Portfolio',
        'Software Engineer Nepal',
        'Frontend Architecture',
        'Web Performance',
    ],
    authors: [{ name: 'Prabish Khanal', url: 'https://prabishkhanal.com.np' }],
    creator: 'Prabish Khanal',
    publisher: 'Prabish Khanal',
    alternates: {
        canonical: '/',
        languages: {
            'en-US': '/en-US',
        },
    },
    icons: {
        icon: '/icon.svg',
        apple: '/apple-touch-icon.png',
    },
    openGraph: {
        title: 'Prabish Khanal — Frontend Engineer',
        description:
            'Experienced Frontend Engineer crafting high-performance web applications with modern technologies.',
        url: 'https://prabishkhanal.com.np',
        siteName: 'Prabish Khanal Portfolio',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Prabish Khanal — Frontend Engineer',
        description:
            'Experienced Frontend Engineer crafting high-performance web applications with modern technologies.',
        creator: '@prabishkhanal', // Update with actual handle if available, otherwise just use name or omit
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
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

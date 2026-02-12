'use client';

import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

const contactInfo = [
    {
        title: 'Email',
        value: 'khanalprabish@gmail.com',
        href: 'mailto:khanalprabish@gmail.com',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
        ),
    },
    {
        title: 'Phone',
        value: '+977 9860421145',
        href: 'tel:+9779860421145',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
        ),
    },
    {
        title: 'LinkedIn',
        value: 'Connect with me',
        href: 'https://linkedin.com/in/prabishkhanal',
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        title: 'GitHub',
        value: 'View my code',
        href: 'https://github.com/prabishkhanal',
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
        ),
    },
];

const Contact = () => {
    const [state, handleSubmit] = useForm('xnnqrqkz');

    return (
        <section id="contact" className="relative py-28 overflow-hidden">
            {/* Background */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
            <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-accent/5 blur-[80px]" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-sm font-mono text-primary-light tracking-widest uppercase">
                        Contact
                    </span>
                    <h2 className="mt-3 text-4xl md:text-5xl font-bold">
                        Let&apos;s Work{' '}
                        <span className="text-gradient">Together</span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-xl mx-auto">
                        I&apos;m currently open to new opportunities and collaborations.
                        Feel free to reach out — I&apos;d love to hear from you!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
                    {/* Left — Contact Cards */}
                    <motion.div
                        className="lg:col-span-2 space-y-4"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {contactInfo.map((info, i) => (
                            <motion.a
                                key={i}
                                href={info.href}
                                target={info.href.startsWith('http') ? '_blank' : undefined}
                                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="group flex items-center gap-4 p-5 rounded-2xl glass border border-dark-border hover:border-primary/30 transition-all duration-300"
                                whileHover={{
                                    x: 6,
                                    boxShadow: '0 0 20px rgba(124, 58, 237, 0.1)',
                                }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-light group-hover:bg-primary/20 transition-colors">
                                    {info.icon}
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider font-mono">
                                        {info.title}
                                    </div>
                                    <div className="text-white font-medium group-hover:text-primary-light transition-colors">
                                        {info.value}
                                    </div>
                                </div>
                            </motion.a>
                        ))}

                        {/* Location */}
                        <div className="p-6 rounded-2xl glass border border-dark-border text-center">
                            <p className="text-gray-500 text-sm">
                                Based in <span className="text-white font-medium">Kathmandu, Nepal 🇳🇵</span>
                            </p>
                            <p className="text-gray-600 text-xs mt-1">
                                Available for remote work worldwide
                            </p>
                        </div>
                    </motion.div>

                    {/* Right — Contact Form */}
                    <motion.div
                        className="lg:col-span-3"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="rounded-2xl glass border border-dark-border p-8">
                            {state.succeeded ? (
                                <motion.div
                                    className="text-center py-16"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        Message Sent!
                                    </h3>
                                    <p className="text-gray-400">
                                        Thanks for reaching out. I&apos;ll get back to you soon!
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="email" className="block text-xs text-gray-500 uppercase tracking-wider font-mono mb-2">
                                                Email
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                name="email"
                                                placeholder="your@email.com"
                                                className="w-full px-4 py-3 rounded-xl bg-dark border border-dark-border text-white placeholder-gray-600 transition-all duration-300"
                                                required
                                            />
                                            <ValidationError
                                                prefix="Email"
                                                field="email"
                                                errors={state.errors}
                                                className="text-red-400 mt-1 text-xs"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="subject" className="block text-xs text-gray-500 uppercase tracking-wider font-mono mb-2">
                                                Subject
                                            </label>
                                            <input
                                                id="subject"
                                                type="text"
                                                name="subject"
                                                placeholder="Project idea"
                                                className="w-full px-4 py-3 rounded-xl bg-dark border border-dark-border text-white placeholder-gray-600 transition-all duration-300"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-xs text-gray-500 uppercase tracking-wider font-mono mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder="Tell me about your project..."
                                            rows="5"
                                            className="w-full px-4 py-3 rounded-xl bg-dark border border-dark-border text-white placeholder-gray-600 resize-none transition-all duration-300"
                                            required
                                        />
                                        <ValidationError
                                            prefix="Message"
                                            field="message"
                                            errors={state.errors}
                                            className="text-red-400 mt-1 text-xs"
                                        />
                                    </div>
                                    <motion.button
                                        type="submit"
                                        disabled={state.submitting}
                                        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        whileHover={{
                                            boxShadow: '0 0 30px rgba(124, 58, 237, 0.3)',
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {state.submitting ? (
                                            <>
                                                <svg className="animate-spin w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

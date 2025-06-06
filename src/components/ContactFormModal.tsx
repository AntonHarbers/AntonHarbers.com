import { useState } from 'react';
import { Button } from './ui/button';
import { useTranslation } from "../lib/I18n/react";

interface Props {
    open: boolean;
    onClose: () => void;
    onSubmitted: () => void;
}

export default function ContactFormModal({ open, onClose, onSubmitted }: Props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const { t } = useTranslation();

    if (!open) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message }),
        });
        console.log(res);
        setSubmitting(false);
        setName('');
        setEmail('');
        setMessage('');
        onSubmitted();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 dark:bg-black/70 bg-black/40 backdrop-blur-sm" onClick={onClose} />
            <form onSubmit={handleSubmit} className="relative dark:bg-gray-900 bg-slate-300 p-6 rounded-lg space-y-4 z-50 w-[calc(100%-2rem)] max-w-lg">
                <h3 className="text-2xl font-bold text-green-400 text-center">{t("contactMe")}</h3>
                <input
                    type="text"
                    placeholder="Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 rounded-md dark:bg-gray-800 bg-slate-200 dark:text-white text-slate-800 focus:outline-none"
                />
                <input
                    type="email"
                    placeholder={t("formEmail")}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 rounded-md dark:bg-gray-800 bg-slate-200 dark:text-white text-slate-800 focus:outline-none"
                />
                <textarea
                    placeholder={t("formMessage")}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-2 rounded-md dark:bg-gray-800 bg-slate-200 dark:text-white text-slate-800 h-32 focus:outline-none"
                />
                <div className="flex justify-end">
                    <Button type="submit" className="bg-green-600 hover:bg-green-700 cursor-pointer" disabled={submitting}>
                        {submitting ? t("formSending") : t("formSend")}
                    </Button>
                </div>
            </form>
        </div>
    );
}
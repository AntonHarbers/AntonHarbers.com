import { useTranslation } from '../../lib/I18n/react';

export default function Footer() {
    const { t } = useTranslation()

    return (
        <footer className="py-8 border-t border-gray-800 relative z-10">
            <div className="container mx-auto px-6 text-center">
                <p className="dark:text-gray-400 text-slate-800 font-semibold">{t("footer")}</p>
            </div>
        </footer>)
}

import { useState } from "react";
import { Github, Mail } from "lucide-react";
import { Button } from "../ui/button";
import ContactFormModal from "../ContactFormModal";
import { useTranslation } from "../../lib/I18n/react";

export default function Contact() {
    const [open, setOpen] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const { t } = useTranslation();

    return (
        <section id="contact" className="py-20 bg-gray-900/50 relative z-10">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-green-400 select-none">{t("contactHeader")}</h2>
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-gray-300 mb-8 text-lg select-none">
                        {t("contactDesc")}
                    </p>
                    <div className="flex justify-center space-x-6">
                        {submitted ? (
                            <p className="text-green-400">{t("contactFormSubmitText")}</p>
                        ) : (
                            <Button className="bg-green-600 hover:bg-green-700 cursor-pointer" onClick={() => setOpen(true)}>
                                <Mail className="w-5 h-5 mr-2" />
                                {t("emailMe")}
                            </Button>
                        )}
                        <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black cursor-pointer">
                            <a href="https://github.com/antonharbers" className="flex" target="_blank"><Github className="w-5 h-5 mr-2" />
                                GitHub</a>
                        </Button>
                    </div>
                </div>
            </div>
            <ContactFormModal open={open} onClose={() => setOpen(false)} onSubmitted={() => { setOpen(false); setSubmitted(true); }} />
        </section>
    )
}
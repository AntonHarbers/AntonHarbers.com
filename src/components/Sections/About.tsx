import { Github, Mail } from "lucide-react";
import {  useTranslation } from "../../lib/I18n/react";

export default function About() {
        const { t } = useTranslation()

    return (
        <section id="about" className="py-20 relative bg-gray-900/50 z-10">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-green-400 select-none">{t("aboutHeader")}</h2>
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 select-none">{t("aboutLeftHeader")}</h3>
                            <p className="text-gray-300 mb-6 select-none">
                                {t("aboutext")}
                            </p>

                            <div className="flex space-x-4">
                                <a href="https://github.com/antonharbers" target="_blank" className="text-green-400 hover:text-green-300">
                                    <Github className="w-6 h-6" />
                                </a>
                                <a href="#contact" className="text-green-400 hover:text-green-300">
                                    <Mail className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                        <div className="dark:bg-gray-900 bg-slate-400 p-6 rounded-lg">
                            <h4 className="text-lg font-semibold mb-4 text-green-400 select-none">{t("aboutRightHeader")}</h4>
                            <div className="space-y-3">
                                <div className="flex justify-between select-none">
                                    <span>{t("aboutRightFirst")}</span>
                                    <span className="text-green-400 font-bold">{t("aboutRightSecond")}</span>
                                </div>
                                <div className="flex justify-between select-none">
                                    <span>{t("aboutRightThird")}</span>
                                    <span className="text-green-400 font-bold">{t("aboutRightFourth")}</span>
                                </div>
                                <div className="flex justify-between  select-none">
                                    <span>{t("aboutRightFifth")}</span>
                                    <span className="text-green-400 font-bold">{t("aboutRightSixth")}</span>
                                </div>
                                <div className="flex justify-between select-none">
                                    <span>{t("aboutRightSeventh")}</span>
                                    <span className="text-green-400 font-bold">{t("aboutRightEighth")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}

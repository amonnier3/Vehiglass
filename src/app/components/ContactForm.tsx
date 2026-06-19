import { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../../emailjs-config";

export function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
    const [fileName, setFileName] = useState<string>("");

    // Initialiser EmailJS
    useEffect(() => {
        emailjs.init(EMAILJS_CONFIG.USER_ID);
    }, []);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage(null);

        try {
            const formData = new FormData(e.currentTarget);

            const firstName = formData.get("firstName") as string;
            const lastName = formData.get("lastName") as string;
            const email = formData.get("email") as string;
            const phone = formData.get("phone") as string;
            const vehicleType = formData.get("vehicleType") as string;
            const service = formData.get("service") as string;
            const messageText = formData.get("message") as string;
            const imageFile = formData.get("image") as File;

            // Préparer l'image si elle existe
            let imageBase64 = "";
            let imageName = "";
            if (imageFile && imageFile.size > 0) {
                imageName = imageFile.name;
                imageBase64 = await new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.onload = () => {
                        resolve(reader.result as string);
                    };
                    reader.readAsDataURL(imageFile);
                });
            }

            // Données à envoyer
            const emailData = {
                firstName,
                lastName,
                email,
                phone,
                vehicleType,
                service,
                message: messageText || "Aucun message",
                imageBase64,
                imageName,
                hasImage: imageBase64 ? "Oui" : "Non",
            };

            // Envoyer l'email à l'utilisateur
            await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                emailData
            );

            // Envoyer l'email à l'admin (optionnel, si vous avez configuré un template admin)
            if (EMAILJS_CONFIG.ADMIN_TEMPLATE_ID !== "YOUR_ADMIN_TEMPLATE_ID") {
                await emailjs.send(
                    EMAILJS_CONFIG.SERVICE_ID,
                    EMAILJS_CONFIG.ADMIN_TEMPLATE_ID,
                    emailData
                );
            }

            setMessage({
                type: "success",
                text: "Votre demande a bien été envoyée ! Nous vous contacterons dans les plus brefs délais.",
            });
            formRef.current?.reset();
            setFileName("");
        } catch (error) {
            console.error("Erreur EmailJS:", error);
            setMessage({
                type: "error",
                text: "Erreur lors de l'envoi du formulaire. Veuillez réessayer.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="block text-[var(--vg-t3)] text-xs uppercase tracking-wide mb-1.5">
                        Prénom
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        required
                        placeholder="Marc"
                        className="w-full px-4 py-2.5 rounded-lg bg-[var(--vg-input)] border border-[var(--vg-b1)] text-[var(--vg-t1)] text-sm placeholder:opacity-40 focus:outline-none focus:border-[#ff6c1d] transition-colors"
                    />
                </div>
                <div>
                    <label className="block text-[var(--vg-t3)] text-xs uppercase tracking-wide mb-1.5">
                        Nom
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        required
                        placeholder="Dupont"
                        className="w-full px-4 py-2.5 rounded-lg bg-[var(--vg-input)] border border-[var(--vg-b1)] text-[var(--vg-t1)] text-sm placeholder:opacity-40 focus:outline-none focus:border-[#ff6c1d] transition-colors"
                    />
                </div>
            </div>

            <div>
                <label className="block text-[var(--vg-t3)] text-xs uppercase tracking-wide mb-1.5">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    required
                    placeholder="votre@email.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-[var(--vg-input)] border border-[var(--vg-b1)] text-[var(--vg-t1)] text-sm placeholder:opacity-40 focus:outline-none focus:border-[#ff6c1d] transition-colors"
                />
            </div>

            <div>
                <label className="block text-[var(--vg-t3)] text-xs uppercase tracking-wide mb-1.5">
                    Téléphone
                </label>
                <input
                    type="tel"
                    name="phone"
                    placeholder="06 12 34 56 78"
                    className="w-full px-4 py-2.5 rounded-lg bg-[var(--vg-input)] border border-[var(--vg-b1)] text-[var(--vg-t1)] text-sm placeholder:opacity-40 focus:outline-none focus:border-[#ff6c1d] transition-colors"
                />
            </div>

            <div>
                <label className="block text-[var(--vg-t3)] text-xs uppercase tracking-wide mb-1.5">
                    Type de véhicule
                </label>
                <input
                    type="text"
                    name="vehicleType"
                    placeholder="Ex : Renault Clio 2021"
                    className="w-full px-4 py-2.5 rounded-lg bg-[var(--vg-input)] border border-[var(--vg-b1)] text-[var(--vg-t1)] text-sm placeholder:opacity-40 focus:outline-none focus:border-[#ff6c1d] transition-colors"
                />
            </div>

            <div>
                <label className="block text-[var(--vg-t3)] text-xs uppercase tracking-wide mb-1.5">
                    Service souhaité
                </label>
                <select
                    name="service"
                    className="w-full px-4 py-2.5 rounded-lg bg-[var(--vg-input)] border border-[var(--vg-b1)] text-[var(--vg-t1)] text-sm focus:outline-none focus:border-[#ff6c1d] transition-colors"
                >
                    <option value="">Sélectionner un service</option>
                    <option>Remplacement pare-brise</option>
                    <option>Remplacement glace latérale</option>
                    <option>Remplacement lunette arrière</option>
                    <option>Rénovation phares</option>
                    <option>Remplacement phares</option>
                    <option>Calibrage ADAS</option>
                    <option>Autre</option>
                </select>
            </div>

            <div>
                <label className="block text-[var(--vg-t3)] text-xs uppercase tracking-wide mb-1.5">
                    Carte grise (image)
                </label>
                <div className="relative">
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="w-full px-4 py-2.5 rounded-lg bg-[var(--vg-input)] border border-[var(--vg-b1)] text-[var(--vg-t1)] text-sm focus:outline-none focus:border-[#ff6c1d] transition-colors cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-[#ff6c1d] file:text-white file:cursor-pointer hover:file:bg-[#ff8a47]"
                    />
                </div>
                {fileName && (
                    <p className="text-xs text-[#ff6c1d] mt-1.5">✓ Fichier sélectionné: {fileName}</p>
                )}
            </div>

            <div>
                <label className="block text-[var(--vg-t3)] text-xs uppercase tracking-wide mb-1.5">
                    Message (optionnel)
                </label>
                <textarea
                    name="message"
                    rows={3}
                    placeholder="Décrivez votre situation..."
                    className="w-full px-4 py-2.5 rounded-lg bg-[var(--vg-input)] border border-[var(--vg-b1)] text-[var(--vg-t1)] text-sm placeholder:opacity-40 focus:outline-none focus:border-[#ff6c1d] transition-colors resize-none"
                />
            </div>

            {message && (
                <div
                    className={`p-3 rounded-lg text-sm ${message.type === "success"
                        ? "bg-green-500/10 border border-green-500/30 text-green-600"
                        : "bg-red-500/10 border border-red-500/30 text-red-600"
                        }`}
                >
                    {message.text}
                </div>
            )}

            <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 rounded-lg bg-[#ff6c1d] text-white font-semibold hover:bg-[#ff8a47] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 group mt-2"
            >
                {isLoading ? "Envoi en cours..." : "Envoyer ma demande"}
                {!isLoading && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
            </button>
        </form>
    );
}

"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    setStatus("Envoi en cours...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus(data.error || "Une erreur est survenue.");
        return;
      }

      setStatus("Message envoyé avec succès !");
      form.reset();
    } catch {
      setStatus("Impossible d'envoyer le message.");
    }
  };

  return (
    <section id="contact" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* En-tête */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-widest text-blue-600">
            Contact
          </p>

          <h2 className="mt-2 text-4xl font-bold text-slate-900">
            Parlons de votre projet
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Vous avez un projet Data, Business Intelligence ou Data Analysis ?
            N&apos;hésitez pas à me contacter.
          </p>
        </div>

        {/* Contenu */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-10 md:grid-cols-2">

          {/* Informations */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">
              Mes coordonnées
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Je suis disponible pour échanger autour d&apos;opportunités
              professionnelles, de projets Data et de collaborations.
            </p>

            <div className="mt-8 space-y-5">

              <div>
                <p className="text-sm font-medium text-slate-500">
                  Email
                </p>

                <a
                  href="mailto:malickfaye66805@gmail.com"
                  className="mt-1 inline-block font-medium text-blue-600 hover:text-blue-800"
                >
                  malickfaye66805@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm font-medium text-slate-500">
                  LinkedIn
                </p>

                <a
                  href="https://www.linkedin.com/in/malick-faye-594829259/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block font-medium text-blue-600 hover:text-blue-800"
                >
                  LinkedIn
                </a>
              </div>

              <div>
                <p className="text-sm font-medium text-slate-500">
                  GitHub
                </p>

                <a
                  href="https://github.com/Malick668"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block font-medium text-blue-600 hover:text-blue-800"
                >
                  GitHub
                </a>
              </div>

            </div>
          </div>

          {/* Formulaire */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">
              Envoyer un message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-5"
            >

              {/* Nom */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Nom
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Votre nom"
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="votre@email.com"
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Votre message..."
                  required
                  className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Bouton */}
              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Envoyer le message
              </button>

              {/* Statut */}
              {status && (
                <p className="text-center text-sm font-medium text-slate-600">
                  {status}
                </p>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
"use client";

import { FormEvent, useState } from "react";

type EmailFormProps = {
  className?: string;
};

const EmailForm = ({ className = "" }: EmailFormProps) => {
  const [feedback, setFeedback] = useState<string>("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const myForm = event.currentTarget;
    const formData = new FormData(myForm);

    const res = await fetch("/forms2.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      body: new URLSearchParams(formData as any).toString(),
    });

    if (res.status === 200) {
      setFeedback("Tu mensaje fue enviado correctamente.");
      myForm.reset();
    } else {
      setFeedback("Ocurrió un error al enviar el formulario.");
    }
  };

  return (
    <form
      className={className}
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={onSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="w-full">
          <label
            htmlFor="fullName"
            className="mb-2 block text-base text-foreground"
          >
            Nombre
          </label>
          <input
            className="block w-full border-0 bg-white px-4 py-3 text-base text-foreground shadow-none outline-none"
            id="fullName"
            name="fullName"
            placeholder="Ingresa tu nombre completo"
            type="text"
            required
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="email"
            className="mb-2 block text-base text-foreground"
          >
            Email Address
          </label>
          <input
            className="block w-full border-0 bg-white px-4 py-3 text-base text-foreground shadow-none outline-none"
            id="email"
            name="email"
            placeholder="Ingresa tu correo electrónico"
            type="email"
            required
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="phone"
            className="mb-2 block text-base text-foreground"
          >
            Phone Number
          </label>
          <input
            className="block w-full border-0 bg-white px-4 py-3 text-base text-foreground shadow-none outline-none"
            id="phone"
            name="phone"
            placeholder="Ingresa tu número telefónico"
            type="text"
            required
          />
        </div>

        <div className="w-full md:col-span-3">
          <label
            htmlFor="usageType"
            className="mb-2 block text-base text-foreground"
          >
            Tipo de servicio
          </label>
          <div className="relative">
            <select
              id="usageType"
              name="usageType"
              className="block w-full appearance-none border-0 border-transparent bg-white px-4 py-3 pr-12 text-base text-muted-foreground shadow-none outline-none ring-0 focus:border-transparent focus:outline-none focus:ring-0"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Selecciona el servicio de interés
              </option>
              <option value="lcl-fcl">Envío marítimo LCL / FCL</option>
              <option value="aereo">Envío aéreo</option>
              <option value="puerta-puerta">Puerta a puerta</option>
              <option value="supply-chain">Supply Chain</option>
              <option value="aduanas">Servicios aduanales</option>
              <option value="otro">Otro</option>
            </select>

            <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-muted-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="md:col-span-3">
          <label
            htmlFor="message"
            className="mb-2 block text-base text-foreground"
          >
            Comentarios adicionales
          </label>
          <textarea
            className="block w-full border-0 bg-white px-4 py-3 text-base text-foreground shadow-none outline-none"
            placeholder="Cuéntanos más sobre tu requerimiento"
            id="message"
            name="message"
            rows={7}
            required
          ></textarea>
        </div>
      </div>

      {feedback ? (
        <p className="text-sm text-foreground" aria-live="polite">
          {feedback}
        </p>
      ) : null}

      <button
        className="w-full rounded-full bg-brand-secondary px-4 py-4 text-sm font-semibold text-white transition hover:opacity-90 hover:cursor-pointer"
        type="submit"
      >
        SUBMIT
      </button>
    </form>
  );
};

export default EmailForm;

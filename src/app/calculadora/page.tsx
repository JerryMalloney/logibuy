"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const airRates = [
  { minKg: 1000, label: "1000 kg", price: 16.75 },
  { minKg: 100, label: "100 kg++", price: 20 },
  { minKg: 80, label: "Desde 80 kg", price: 21.5 },
  { minKg: 30, label: "Desde 30 kg", price: 22.5 },
  { minKg: 5, label: "Desde 5 kg", price: 25 },
];

const seaContainers = [
  { value: "20ft", label: "20 pies", price: 4000 },
  { value: "40hq", label: "40 HQ", price: 4200 },
];

const seaInputFields = [
  { key: "largo", label: "Largo", suffix: "cm" },
  { key: "ancho", label: "Ancho", suffix: "cm" },
  { key: "alto", label: "Alto", suffix: "cm" },
] as const;

const defaultAirValues = {
  largo: "0",
  ancho: "0",
  alto: "0",
  pesoReal: "0",
};

const defaultSeaValues = {
  largo: "0",
  ancho: "0",
  alto: "0",
  pesoReal: "0",
  modalidad: "lcl",
  contenedor: "20ft",
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);

const formatNumber = (value: number) =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  }).format(value);

const getAirRate = (weight: number) =>
  airRates.find((tier) => weight >= tier.minKg) ?? null;

const getSeaLclRate = (wm: number) => {
  if (wm <= 0) {
    return null;
  }

  if (wm <= 0.1) {
    return {
      label: "0.1 CBM",
      type: "flat" as const,
      total: 50,
      unitRate: null,
    };
  }

  if (wm <= 0.5) {
    return {
      label: "0.5 CBM",
      type: "flat" as const,
      total: 160,
      unitRate: null,
    };
  }

  if (wm <= 1) {
    return {
      label: "1.0 CBM",
      type: "flat" as const,
      total: 300,
      unitRate: null,
    };
  }

  if (wm < 10) {
    return {
      label: "5.0 CBM",
      type: "variable" as const,
      total: wm * 280,
      unitRate: 280,
    };
  }

  return {
    label: "10+ CBM",
    type: "variable" as const,
    total: wm * 250,
    unitRate: 250,
  };
};

const calculateAirQuote = (values: typeof defaultAirValues) => {
  const largo = Number.parseFloat(values.largo) || 0;
  const ancho = Number.parseFloat(values.ancho) || 0;
  const alto = Number.parseFloat(values.alto) || 0;
  const pesoReal = Number.parseFloat(values.pesoReal) || 0;
  const pesoVolumetrico = (largo * ancho * alto) / 6000;
  const pesoCobrable = Math.max(pesoReal, pesoVolumetrico);
  const rate = getAirRate(pesoCobrable);

  return {
    pesoReal,
    pesoVolumetrico,
    pesoCobrable,
    rate,
    total: rate ? pesoCobrable * rate.price : 0,
  };
};

const calculateSeaLclQuote = (values: typeof defaultSeaValues) => {
  const largo = Number.parseFloat(values.largo) || 0;
  const ancho = Number.parseFloat(values.ancho) || 0;
  const alto = Number.parseFloat(values.alto) || 0;
  const pesoReal = Number.parseFloat(values.pesoReal) || 0;
  const cbm = (largo * ancho * alto) / 1000000;
  const baseFacturable = Math.max(cbm, pesoReal / 1000);
  const quote = getSeaLclRate(baseFacturable);

  return {
    pesoReal,
    cbm,
    baseFacturable,
    quote,
  };
};

export default function CalculadoraPage() {
  const [airValues, setAirValues] = useState(defaultAirValues);
  const [seaValues, setSeaValues] = useState(defaultSeaValues);
  const [airResult, setAirResult] = useState(() => calculateAirQuote(defaultAirValues));
  const [seaLclResult, setSeaLclResult] = useState(() =>
    calculateSeaLclQuote(defaultSeaValues),
  );
  const seaFclQuote =
    seaContainers.find((option) => option.value === seaValues.contenedor) ??
    seaContainers[0];

  const handleAirChange = (field: keyof typeof airValues, value: string) => {
    setAirValues((current) => ({ ...current, [field]: value }));
  };

  const handleSeaChange = (field: keyof typeof seaValues, value: string) => {
    setSeaValues((current) => ({ ...current, [field]: value }));
  };

  const handleAirCalculate = () => {
    setAirResult(calculateAirQuote(airValues));
  };

  const handleSeaLclCalculate = () => {
    setSeaLclResult(calculateSeaLclQuote(seaValues));
  };

  return (
    <main className="overflow-hidden bg-[#f3f6fb] text-slate-900">
      <section className="relative isolate overflow-hidden text-white">
        <Image
          src="/hongkong1.jpg"
          alt="Fondo de calculadora logística"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#06143f]/92 via-[#0b2c73]/82 to-[#06143f]/86" />

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-28 sm:px-6 lg:px-8 lg:pb-18 lg:pt-36">
          <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1.15fr)_300px]">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.38em] text-cyan-300">
                Calculadora de envíos
              </p>
              <h1 className="max-w-3xl border-l-4 border-cyan-300 pl-4 text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
                Estima costos de envío con una interfaz clara y profesional
              </h1>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/78 sm:text-base">
                Usa la fórmula operativa real para calcular envíos aéreos y
                marítimos, con una lectura simple de medidas, peso facturable,
                tarifas y total estimado.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-[#FDCF57] px-6 py-3 text-sm font-semibold text-black transition hover:scale-105"
                >
                  SOLICITAR COTIZACIÓN FINAL
                </Link>
                <div className="rounded-full border border-white/15 bg-white/8 px-5 py-3 text-sm text-white/82">
                  Tarifas base según la tabla comercial enviada
                </div>
              </div>
            </div>

            <div className="space-y-3 rounded-[1.5rem] border border-white/12 bg-white/10 p-5 backdrop-blur-sm">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">
                  Aéreo
                </p>
                <p className="mt-2 text-xl font-semibold">12 a 21 días</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">
                  Marítimo
                </p>
                <p className="mt-2 text-xl font-semibold">60 días</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">
                  Nota
                </p>
                <p className="mt-2 text-base leading-relaxed text-white/80">
                  Montos referenciales sin impuestos aduanales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#325eb8]">
              Herramienta de cálculo
            </p>
            <h2 className="mt-3 text-2xl font-medium leading-tight text-slate-950 sm:text-3xl lg:text-4xl">
              Compara dos modalidades con una lectura limpia y rápida
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Cada bloque separa entrada de datos, cálculo técnico y resultado
              comercial. El objetivo es que puedas cotizar sin ruido visual y
              sin perder precisión.
            </p>
          </div>

          <div className="mt-8 rounded-[1.25rem] border border-slate-200 bg-white px-5 py-4 shadow-sm sm:px-6">
            <div className="grid gap-4 text-sm text-slate-600 md:grid-cols-3">
              <div>
                <p className="font-semibold text-slate-900">Aéreo</p>
                <p className="mt-1">
                  Peso cobrable = mayor entre peso real y peso volumétrico.
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Marítimo LCL</p>
                <p className="mt-1">
                  Base facturable = mayor entre CBM y peso real / 1000.
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Resultados</p>
                <p className="mt-1">
                  Los montos mostrados son una referencia comercial inicial.
                </p>
              </div>
            </div>
          </div>

          <Tabs defaultValue="aereo" className="mt-10 gap-6">
            <TabsList
              className="h-auto rounded-[1rem] border border-slate-200 bg-white p-1 shadow-sm"
              variant="default"
            >
              <TabsTrigger
                value="aereo"
                className="rounded-[0.8rem] px-5 py-2.5 text-sm font-semibold data-[state=active]:bg-[#4461ad] data-[state=active]:text-white"
              >
                Aéreo
              </TabsTrigger>
              <TabsTrigger
                value="maritimo"
                className="rounded-[0.8rem] px-5 py-2.5 text-sm font-semibold data-[state=active]:bg-[#4461ad] data-[state=active]:text-white"
              >
                Marítimo
              </TabsTrigger>
            </TabsList>

            <TabsContent value="aereo" className="mt-0">
              <article className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.07)]">
                <div className="px-5 py-5 sm:px-6 sm:py-6">
                  <div className="mt-8 grid gap-6">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <label className="space-y-2">
                        <span className="block text-sm font-medium text-slate-700">
                          Alto
                        </span>
                        <div className="rounded-xl bg-slate-100 px-4 py-3">
                          <div className="flex items-center gap-3">
                            <input
                              type="number"
                              min="0"
                              value={airValues.alto}
                              onChange={(event) =>
                                handleAirChange("alto", event.target.value)
                              }
                              className="w-full bg-transparent text-lg font-semibold text-slate-900 outline-none"
                            />
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                              cm
                            </span>
                          </div>
                        </div>
                      </label>

                      <label className="space-y-2">
                        <span className="block text-sm font-medium text-slate-700">
                          Largo
                        </span>
                        <div className="rounded-xl bg-slate-100 px-4 py-3">
                          <div className="flex items-center gap-3">
                            <input
                              type="number"
                              min="0"
                              value={airValues.largo}
                              onChange={(event) =>
                                handleAirChange("largo", event.target.value)
                              }
                              className="w-full bg-transparent text-lg font-semibold text-slate-900 outline-none"
                            />
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                              cm
                            </span>
                          </div>
                        </div>
                      </label>

                      <label className="space-y-2">
                        <span className="block text-sm font-medium text-slate-700">
                          Ancho
                        </span>
                        <div className="rounded-xl bg-slate-100 px-4 py-3">
                          <div className="flex items-center gap-3">
                            <input
                              type="number"
                              min="0"
                              value={airValues.ancho}
                              onChange={(event) =>
                                handleAirChange("ancho", event.target.value)
                              }
                              className="w-full bg-transparent text-lg font-semibold text-slate-900 outline-none"
                            />
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                              cm
                            </span>
                          </div>
                        </div>
                      </label>

                      <label className="space-y-2">
                        <span className="block text-sm font-medium text-slate-700">
                          Peso Kg
                        </span>
                        <div className="rounded-xl bg-slate-100 px-4 py-3">
                          <div className="flex items-center gap-3">
                            <input
                              type="number"
                              min="0"
                              value={airValues.pesoReal}
                              onChange={(event) =>
                                handleAirChange("pesoReal", event.target.value)
                              }
                              className="w-full bg-transparent text-lg font-semibold text-slate-900 outline-none"
                            />
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                              kg
                            </span>
                          </div>
                        </div>
                      </label>
                    </div>

                    <div className="flex justify-start">
                      <button
                        type="button"
                        onClick={handleAirCalculate}
                        className="rounded-full bg-[#4461ad] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#375299]"
                      >
                        Calcular
                      </button>
                    </div>

                    <div className="rounded-[1.4rem] bg-slate-100 p-4 sm:p-5">
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <div className="rounded-[1rem] bg-white p-4">
                          <p className="text-sm text-slate-600">Peso Real</p>
                          <p className="mt-2 text-[1.9rem] font-semibold leading-none text-slate-950">
                            {formatNumber(airResult.pesoReal)}
                            <span className="ml-1 text-[1.15rem] font-semibold">
                              Kg
                            </span>
                          </p>
                        </div>
                        <div className="rounded-[1rem] bg-white p-4">
                          <p className="text-sm text-slate-600">
                            Peso Volumetrico
                          </p>
                          <p className="mt-2 text-[1.9rem] font-semibold leading-none text-slate-950">
                            {formatNumber(airResult.pesoVolumetrico)}
                            <span className="ml-1 text-[1.15rem] font-semibold">
                              Kg
                            </span>
                          </p>
                        </div>
                        <div className="rounded-[1rem] bg-white p-4">
                          <p className="text-sm text-slate-600">
                            Base Cobrable
                          </p>
                          <p className="mt-2 text-[1.9rem] font-semibold leading-none text-slate-950">
                            {formatNumber(airResult.pesoCobrable)}
                            <span className="ml-1 text-[1.15rem] font-semibold">
                              Kg
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 rounded-[1rem] bg-white p-5">
                        {airResult.rate ? (
                          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                            <div>
                              <p className="text-sm text-slate-600">
                                Calculo Final
                              </p>
                              <p className="mt-2 text-4xl font-semibold leading-none text-slate-950 sm:text-5xl">
                                {formatCurrency(airResult.total)}
                              </p>
                              <p className="mt-3 text-sm text-[#4461ad]">
                                {formatNumber(airResult.pesoCobrable)} kg *{" "}
                                {formatCurrency(airResult.rate.price)} / kg
                              </p>
                            </div>

                            <div className="grid gap-2 sm:grid-cols-2 lg:min-w-[260px]">
                              <div className="rounded-xl bg-slate-50 px-4 py-3">
                                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                                  Tránsito
                                </p>
                                <p className="mt-1 text-sm font-semibold text-slate-900">
                                  12 a 21 días
                                </p>
                              </div>
                              <div className="rounded-xl bg-slate-50 px-4 py-3">
                              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                                Tarifa
                              </p>
                              <p className="mt-1 text-sm font-semibold text-slate-900">
                                {airResult.rate.label}
                              </p>
                            </div>
                          </div>
                          </div>
                        ) : (
                          <>
                            <p className="text-sm text-slate-600">
                              Calculo Final
                            </p>
                            <p className="mt-2 text-2xl font-semibold text-slate-950">
                              Minimo 5 Kg
                            </p>
                            <p className="mt-3 text-sm text-slate-500">
                              La escala aérea empieza en 5 kg según la tabla
                              comercial base.
                            </p>
                            <div className="mt-4 rounded-xl bg-slate-50 px-4 py-3">
                              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                                Tránsito
                              </p>
                              <p className="mt-1 text-sm font-semibold text-slate-900">
                                12 a 21 días
                              </p>
                            </div>
                          </>
                        )}
                      </div>

                      <div className="mt-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1f55b7]">
                          Tarifas aéreas
                        </p>
                        <div className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-5">
                          {airRates.map((tier) => (
                            <div
                              key={tier.label}
                              className="rounded-[1rem] bg-white px-4 py-3"
                            >
                              <p className="text-sm text-slate-600">
                                {tier.label}
                              </p>
                              <p className="mt-1 text-base font-semibold text-slate-950">
                                {formatCurrency(tier.price)}
                                <span className="ml-1 text-sm font-medium text-slate-600">
                                  / kg
                                </span>
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </TabsContent>

            <TabsContent value="maritimo" className="mt-0">
              <article
                id="maritimo"
                className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.07)]"
              >
                <div className="border-b border-slate-200 px-5 py-5 sm:px-6">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-xl">
                      <h3 className="mt-4 text-2xl font-medium text-slate-950 sm:text-3xl">
                        LCL y FCL para carga por barco
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="px-5 py-5 sm:px-6 sm:py-6">
                  <div className="inline-flex rounded-full bg-slate-100 p-1">
                    {[
                      { value: "lcl", label: "LCL consolidado" },
                      { value: "fcl", label: "FCL contenedor" },
                    ].map((option) => {
                      const isActive = seaValues.modalidad === option.value;

                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() =>
                            handleSeaChange("modalidad", option.value)
                          }
                          className={`rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition ${
                            isActive
                              ? "bg-[#4461ad] text-white"
                              : "text-slate-500 hover:text-slate-800"
                          }`}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-8 grid gap-6">
                    {seaValues.modalidad === "lcl" ? (
                      <>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          {seaInputFields.slice(0, 3).map((field) => (
                            <label key={field.key} className="space-y-2">
                              <span className="block text-sm font-medium text-slate-700">
                                {field.label}
                              </span>
                              <div className="rounded-xl bg-slate-100 px-4 py-3">
                                <div className="flex items-center gap-3">
                                  <input
                                    type="number"
                                    min="0"
                                    value={seaValues[field.key]}
                                    onChange={(event) =>
                                      handleSeaChange(
                                        field.key,
                                        event.target.value,
                                      )
                                    }
                                    className="w-full bg-transparent text-lg font-semibold text-slate-900 outline-none"
                                  />
                                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                                    {field.suffix}
                                  </span>
                                </div>
                              </div>
                            </label>
                          ))}

                          <label className="space-y-2">
                            <span className="block text-sm font-medium text-slate-700">
                              Peso Kg
                            </span>
                            <div className="rounded-xl bg-slate-100 px-4 py-3">
                              <div className="flex items-center gap-3">
                                <input
                                  type="number"
                                  min="0"
                                  value={seaValues.pesoReal}
                                  onChange={(event) =>
                                    handleSeaChange(
                                      "pesoReal",
                                      event.target.value,
                                    )
                                  }
                                  className="w-full bg-transparent text-lg font-semibold text-slate-900 outline-none"
                                />
                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                                  kg
                                </span>
                              </div>
                            </div>
                        </label>
                      </div>

                      <div className="flex justify-start">
                        <button
                          type="button"
                          onClick={handleSeaLclCalculate}
                          className="rounded-full bg-[#4461ad] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#375299]"
                        >
                          Calcular
                        </button>
                      </div>

                      <div className="rounded-[1.4rem] bg-slate-100 p-4 sm:p-5">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                          <div className="rounded-[1rem] bg-white p-4">
                              <p className="text-sm text-slate-600">
                                Peso Real
                              </p>
                              <p className="mt-2 text-[1.9rem] font-semibold leading-none text-slate-950">
                                {formatNumber(seaLclResult.pesoReal)}
                                <span className="ml-1 text-[1.15rem] font-semibold">
                                  Kg
                                </span>
                              </p>
                            </div>
                            <div className="rounded-[1rem] bg-white p-4">
                              <p className="text-sm text-slate-600">CBM</p>
                              <p className="mt-2 text-[1.9rem] font-semibold leading-none text-slate-950">
                                {formatNumber(seaLclResult.cbm)}
                                <span className="ml-1 text-[1.15rem] font-semibold">
                                  CBM
                                </span>
                              </p>
                            </div>
                            <div className="rounded-[1rem] bg-white p-4">
                              <p className="text-sm text-slate-600">
                                Base Facturable
                              </p>
                              <p className="mt-2 text-[1.9rem] font-semibold leading-none text-slate-950">
                                {formatNumber(seaLclResult.baseFacturable)}
                                <span className="ml-1 text-[1.15rem] font-semibold">
                                  Base
                                </span>
                              </p>
                            </div>
                          </div>

                          <div className="mt-4 rounded-[1rem] bg-white p-5">
                            {seaLclResult.quote ? (
                              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                                <div>
                                  <p className="text-sm text-slate-600">
                                    Calculo Final
                                  </p>
                                  <p className="mt-2 text-4xl font-semibold leading-none text-slate-950 sm:text-5xl">
                                    {formatCurrency(seaLclResult.quote.total)}
                                  </p>
                                  <p className="mt-3 text-sm text-[#4461ad]">
                                    {seaLclResult.quote.unitRate
                                      ? `${formatNumber(seaLclResult.baseFacturable)} base * ${formatCurrency(seaLclResult.quote.unitRate)}`
                                      : "Monto fijo según tramo de la tabla"}
                                  </p>
                                </div>

                                <div className="grid gap-2 sm:grid-cols-2 lg:min-w-[260px]">
                                  <div className="rounded-xl bg-slate-50 px-4 py-3">
                                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                                      Tránsito
                                    </p>
                                    <p className="mt-1 text-sm font-semibold text-slate-900">
                                      60 días
                                    </p>
                                  </div>
                                  <div className="rounded-xl bg-slate-50 px-4 py-3">
                                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                                    Tarifa
                                  </p>
                                  <p className="mt-1 text-sm font-semibold text-slate-900">
                                    {seaLclResult.quote.label}
                                  </p>
                                </div>
                              </div>
                              </div>
                            ) : (
                              <>
                                <p className="text-sm text-slate-600">
                                  Calculo Final
                                </p>
                                <p className="mt-2 text-2xl font-semibold text-slate-950">
                                  Datos insuficientes
                                </p>
                                <p className="mt-3 text-sm text-slate-500">
                                  El cálculo LCL necesita dimensiones y/o peso
                                  real total.
                                </p>
                                <div className="mt-4 rounded-xl bg-slate-50 px-4 py-3">
                                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                                    Tránsito
                                  </p>
                                  <p className="mt-1 text-sm font-semibold text-slate-900">
                                    60 días
                                  </p>
                                </div>
                              </>
                            )}
                          </div>

                          <div className="mt-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1f55b7]">
                              Tarifas marítimas LCL
                            </p>
                            <div className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-5">
                              {[
                                { label: "0.1 CBM", value: formatCurrency(50) },
                                {
                                  label: "0.5 CBM",
                                  value: formatCurrency(160),
                                },
                                {
                                  label: "1.0 CBM",
                                  value: formatCurrency(300),
                                },
                                {
                                  label: "5.0 CBM",
                                  value: `${formatCurrency(280)} / base`,
                                },
                                {
                                  label: "10+ CBM",
                                  value: `${formatCurrency(250)} / base`,
                                },
                              ].map((item) => (
                                <div
                                  key={item.label}
                                  className="rounded-[1rem] bg-white px-4 py-3"
                                >
                                  <p className="text-sm text-slate-600">
                                    {item.label}
                                  </p>
                                  <p className="mt-1 text-base font-semibold text-slate-950">
                                    {item.value}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,1fr)_220px]">
                          <label className="space-y-2">
                            <span className="block text-sm font-medium text-slate-700">
                              Tipo de contenedor
                            </span>
                            <div className="rounded-xl bg-slate-100 px-4 py-3">
                              <select
                                value={seaValues.contenedor}
                                onChange={(event) =>
                                  handleSeaChange(
                                    "contenedor",
                                    event.target.value,
                                  )
                                }
                                className="w-full bg-transparent text-lg font-semibold text-slate-900 outline-none"
                              >
                                {seaContainers.map((option) => (
                                  <option
                                    key={option.value}
                                    value={option.value}
                                    className="text-black"
                                  >
                                    {option.label}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </label>

                          <div className="rounded-xl bg-slate-100 px-4 py-3">
                            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                              Tránsito
                            </p>
                            <p className="mt-2 text-lg font-semibold text-slate-900">
                              60 días
                            </p>
                          </div>
                        </div>

                        <div className="rounded-[1.4rem] bg-slate-100 p-4 sm:p-5">
                          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            <div className="rounded-[1rem] bg-white p-4">
                              <p className="text-sm text-slate-600">
                                Modalidad
                              </p>
                              <p className="mt-2 text-[1.5rem] font-semibold leading-none text-slate-950">
                                FCL
                              </p>
                            </div>
                            <div className="rounded-[1rem] bg-white p-4">
                              <p className="text-sm text-slate-600">
                                Contenedor
                              </p>
                              <p className="mt-2 text-[1.5rem] font-semibold leading-none text-slate-950">
                                {seaFclQuote.label}
                              </p>
                            </div>
                            <div className="rounded-[1rem] bg-white p-4">
                              <p className="text-sm text-slate-600">
                                Tarifa Fija
                              </p>
                              <p className="mt-2 text-[1.5rem] font-semibold leading-none text-slate-950">
                                {formatCurrency(seaFclQuote.price)}
                              </p>
                            </div>
                          </div>

                          <div className="mt-4 rounded-[1rem] bg-white p-5">
                            <p className="text-sm text-slate-600">
                              Calculo Final
                            </p>
                            <p className="mt-2 text-4xl font-semibold leading-none text-slate-950 sm:text-5xl">
                              {formatCurrency(seaFclQuote.price)}
                            </p>
                            <p className="mt-3 text-sm text-[#4461ad]">
                              Tarifa fija para {seaFclQuote.label}
                            </p>
                          </div>

                          <div className="mt-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1f55b7]">
                              Tarifas marítimas FCL
                            </p>
                            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                              {seaContainers.map((option) => (
                                <div
                                  key={option.value}
                                  className="rounded-[1rem] bg-white px-4 py-3"
                                >
                                  <p className="text-sm text-slate-600">
                                    {option.label}
                                  </p>
                                  <p className="mt-1 text-base font-semibold text-slate-950">
                                    {formatCurrency(option.price)}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </article>
            </TabsContent>
          </Tabs>

          <div className="mt-10 rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#325eb8]">
                  Cierre comercial
                </p>
                <h3 className="mt-3 text-xl font-semibold text-slate-950 sm:text-2xl">
                  Si el cálculo te sirve, el siguiente paso es validar producto,
                  factura y nacionalización con el equipo.
                </h3>
              </div>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#FDCF57] px-6 py-3 text-sm font-semibold text-black transition hover:scale-105 sm:w-auto"
              >
                Hablar con un asesor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

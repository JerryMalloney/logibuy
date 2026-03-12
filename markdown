aereo

Peso_Volumetrico_kg = (Largo_cm * Ancho_cm * Alto_cm * Cantidad) / 6000

Peso_Cobrable_kg = MAX(Peso_Real_kg, Peso_Volumetrico_kg)

Flete_Aereo = Peso_Cobrable_kg * Tarifa_Aerea_por_kg

maritimo

CBM = (Largo_cm * Ancho_cm * Alto_cm * Cantidad) / 1000000

WM_Facturable = MAX(CBM, Peso_Real_kg / 1000)

Flete_Maritimo_LCL = WM_Facturable * Tarifa_LCL
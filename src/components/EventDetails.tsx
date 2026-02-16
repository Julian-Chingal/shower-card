import { MapPin, Clock, Calendar, Gift, Heart, Baby } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export default function Detalles() {
  return (
    <section
      id="details-section"
      className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f5f2]"
    >
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block mb-4">
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ backgroundColor: "#e8dfd6", color: "#8b7355" }}
            >
              <Heart className="w-5 h-5" />
              <span className="text-sm font-medium">Detalles del Evento</span>
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
            Todo lo que necesitas
            <span className="block mt-2" style={{ color: "#8fb3c5" }}>
              saber
            </span>
          </h2>
        </div>

        {/* Grid de cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Card Fecha */}
          <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-shadow">
            <CardContent className="p-8">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                style={{ backgroundColor: "#8fb3c5" }}
              >
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                Fecha
              </h3>
              <p className="text-gray-600 text-center text-lg">
                22 de Febrero, 2025
              </p>
              <p className="text-gray-500 text-center text-sm mt-2">Domingo</p>
            </CardContent>
          </Card>

          {/* Card Hora */}
          <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-shadow">
            <CardContent className="p-8">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                style={{ backgroundColor: "#a89f94" }}
              >
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                Hora
              </h3>
              <p className="text-gray-600 text-center text-lg">3:00 PM</p>
              <p className="text-gray-500 text-center text-sm mt-2">
                Hora local
              </p>
            </CardContent>
          </Card>

          {/* Card Lugar */}
          <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-shadow md:col-span-2 lg:col-span-1 cursor-pointer hover:shadow-blue-500/50 hover:shadow-xl">
            <CardContent
              className="p-8"
              onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/bexq7LREXrBp2HTp8",

                  "_blank",
                )
              }
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                style={{ backgroundColor: "#c4b5a0" }}
              >
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                Lugar
              </h3>
              <p className="text-gray-600 text-center text-lg">
                Salón de Eventos Villa Melida (Planadas)
              </p>
              <p className="text-gray-500 text-center text-sm mt-2">
                Dar clic para ver en el mapa
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Información adicional */}
        <div className="mt-12 lg:mt-16">
          <Card className="border-none shadow-2xl bg-gradient-to-br from-[#8fb3c5] to-[#a89f94] text-white">
            <CardContent className="p-8 lg:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Gift className="w-10 h-10" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                    Mesa de Regalos
                  </h3>
                  <p className="text-white/90 text-lg mb-4">
                    Tu presencia es nuestro mejor regalo, pero si deseas
                    obsequiar algo a Noah, es bienvenido.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

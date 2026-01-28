import { Baby, Gift, Heart, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import Globo from "./Globo";
import { AlertDialogDemo } from "./FormPopup";

export default function Hero() {
    return (
        <div className="min-h-screen">
            <div className="absolute inset-0 opacity-5 md:opacity-10 lg:opacity-100 pointer-events-none">
                <Globo />
            </div>

            <div className="relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-10 left-10 opacity-20">
                    <Baby className="w-24 h-24" style={{ color: '#d4c5b9' }} />
                </div>
                <div className="absolute top-20 right-20 opacity-20">
                    <Heart className="w-20 h-20" style={{ color: '#a89f94' }} />
                </div>
                <div className="absolute bottom-32 left-1/4 opacity-20">
                    <Sparkles className="w-16 h-16" style={{ color: '#8fb3c5' }} />
                </div>
                <div className="absolute bottom-20 right-1/3 opacity-20">
                    <Gift className="w-20 h-20" style={{ color: '#c4b5a0' }} />
                </div>


                <div className="container mx-auto px-4 py-16 lg:py-24">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-8 text-center lg:text-left z-10">
                            <div className="inline-block">
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: '#e8dfd6', color: '#8b7355' }}>
                                    <Baby className="w-5 h-5" />
                                    <span className="text-sm font-medium">¡Es un niño!</span>
                                </div>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold text-gray-800">
                                Celebremos
                                <span className="block mt-2" style={{ color: '#8fb3c5' }}>la llegada</span>
                                <span className="block" style={{ color: '#a89f94' }}>de nuestro bebé</span>
                                <span className="block text-9xl">Noah</span>
                            </h1>

                            <p className="text-lg text-gray-600 max-w-xl">
                                Únete a nosotros para celebrar este momento tan especial.
                                Un día lleno de amor, alegría y dulces sorpresas para dar la bienvenida a nuestro pequeño príncipe.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 justify-center lg:justify-start">
                                    <div className="text-center">
                                        <p className="text-3xl font-bold" style={{ color: '#8fb3c5' }}>22</p>
                                        <p className="text-sm text-gray-500">Febrero</p>
                                    </div>
                                    <div className="h-12 w-px bg-gray-300"></div>
                                    <div className="text-center">
                                        <p className="text-3xl font-bold" style={{ color: '#a89f94' }}>3:00 PM</p>
                                        <p className="text-sm text-gray-500">Hora</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <AlertDialogDemo />
                                <Button variant="outline" className="px-8 py-6 text-lg rounded-full border-2" style={{ borderColor: '#a89f94', color: '#8b7355' }}>
                                    Ver Detalles
                                </Button>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="relative z-10">
                            <div className="absolute -inset-6 rounded-3xl bg-[#8fb3c5]/30 blur-3xl"></div>

                            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-3xl shadow-2xl">
                                <div className="bg-black p-4 rounded-2xl">
                                    <img
                                        src="https://espacioeme.cl/site-media/images/Ecografia_portada__Eme-300x192.png"
                                        alt="Radiografía de Noah"
                                        className="relative w-full h-full object-cover rounded-xl opacity-90 hover:opacity-100 transition-opacity"
                                        style={{ filter: 'brightness(1.1) contrast(1.2)', minHeight: '400px' }}
                                    />
                                </div>

                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg">
                                    <span className="text-sm font-semibold text-gray-700 flex
                                     items-center gap-2" >   <Heart className="w-4 h-4 fill-current" /> Ecografía</span>
                                </div>
                            </div>

                            <div className="absolute -bottom-6 -right-6 bg-white px-6 py-3 rounded-full shadow-xl border-2 border-[#8fb3c5]/30">
                                <span className="text-[#a89f94] font-semibold flex items-center gap-2">
                                    <Heart className="w-4 h-4 fill-current" />
                                    Pronto llegará
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

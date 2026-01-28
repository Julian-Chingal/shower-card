import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Gift, Heart, User, Users } from "lucide-react"
import { Input } from "./ui/input"
import { useState } from "react"

export function AlertDialogDemo() {
    const [nombre, setNombre] = useState("");
    const [numPersonas, setNumPersonas] = useState("");
    const [error, setError] = useState("");

    const handleConfirm = () => {
        // Validación
        if (!nombre.trim()) {
            setError("Por favor ingresa tu nombre");
            return;
        }
        if (!numPersonas || parseInt(numPersonas) < 1) {
            setError("Por favor ingresa un número válido de personas");
            return;
        }

        // Aquí puedes enviar los datos a tu backend o WhatsApp
        console.log("Confirmado:", { nombre, numPersonas });

        // Opcional: Enviar por WhatsApp
        const mensaje = `¡Hola! Confirmo mi asistencia al Baby Shower de Noah 💙\n\nNombre: ${nombre}\nNúmero de personas: ${numPersonas}`;
        const numeroWhatsApp = "573508966184"; // Reemplaza con tu número
        window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`, '_blank');

        // Limpiar formulario
        setNombre("");
        setNumPersonas("");
        setError("");
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    className="text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                    style={{ backgroundColor: '#8fb3c5' }}
                >
                    <Gift className="w-5 h-5 mr-2" />
                    Confirmar Asistencia
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="max-w-md">
                <AlertDialogHeader>
                    <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8fb3c5' }}>
                            <Heart className="w-8 h-8 text-white fill-current" />
                        </div>
                    </div>
                    <AlertDialogTitle className="text-2xl text-center font-bold text-gray-800">
                        Confirma tu asistencia
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-center text-gray-600">
                        Nos encantaría contar con tu presencia en este día tan especial 💙
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <div className="space-y-4 py-4">
                    {/* Input Nombre */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                            <User className="w-4 h-4" style={{ color: '#8fb3c5' }} />
                            Nombre completo
                        </label>
                        <Input
                            placeholder="Ej: María González"
                            value={nombre}
                            onChange={(e) => {
                                setNombre(e.target.value);
                                setError("");
                            }}
                            className="border-2 focus:border-[#8fb3c5] transition-colors"
                        />
                    </div>

                    {/* Input Número de personas */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                            <Users className="w-4 h-4" style={{ color: '#a89f94' }} />
                            ¿Cuántas personas asistirán?
                        </label>
                        <Input
                            type="number"
                            min="1"
                            placeholder="Ej: 2"
                            value={numPersonas}
                            onChange={(e) => {
                                setNumPersonas(e.target.value);
                                setError("");
                            }}
                            className="border-2 focus:border-[#a89f94] transition-colors"
                        />
                    </div>

                    {/* Mensaje de error */}
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-lg text-sm">
                            {error}
                        </div>
                    )}

                    {/* Info adicional */}
                    <div className="bg-[#f8f5f2] p-4 rounded-lg">
                        <p className="text-sm text-gray-600 text-center">
                            Al confirmar, recibirás todos los detalles del evento
                        </p>
                    </div>
                </div>

                <AlertDialogFooter className="flex-col sm:flex-row gap-2">
                    <AlertDialogCancel
                        className="border-2 hover:bg-gray-50"
                        style={{ borderColor: '#e8dfd6' }}
                    >
                        Cancelar
                    </AlertDialogCancel>
                    <AlertDialogAction
                        onClick={handleConfirm}
                        className="text-white shadow-lg hover:shadow-xl transition-all"
                        style={{ backgroundColor: '#8fb3c5' }}
                    >
                        <Gift className="w-4 h-4 mr-2" />
                        Confirmar Asistencia
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
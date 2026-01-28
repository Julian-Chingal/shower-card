import { Button } from "./ui/button";

export default function RSVPForm() {
    return (
        <section id="confirmar" className="max-w-2xl mx-auto pb-20 px-6">
            <div
                className="bg-white p-10 rounded-3xl shadow-xl border-t-4 border-blue-300"
            >
                <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
                    Confirmar Asistencia
                </h2>

                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium mb-2"
                        >Nombre Invitado</label
                        >
                        <input
                            type="text"
                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-300 outline-none"
                            placeholder="Escribe tu nombre"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2"
                        >¿Asistirás?</label
                        >
                        <select
                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none"
                        >
                            <option>Sí, ¡allí estaré!</option>
                            <option>No podré asistir</option>
                        </select>
                    </div>
                    <Button
                        type="submit"
                        className="w-full py-6 text-lg bg-blue-400 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-200"
                        onClick={() => console.log("Formulario enviado")}
                    >
                        Enviar Confirmación
                    </Button>
                </form>
            </div>
        </section>
    )
}

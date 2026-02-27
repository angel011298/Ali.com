"use client";
import { useState } from "react";
import { Stethoscope, UserCheck, Users, CheckCircle, Phone, Mail, MessageSquare, Facebook, Instagram, Menu, X, Award, Heart, ShieldCheck, ChevronDown, ChevronUp } from "lucide-react";

const LogoAR = ({ className = "w-10 h-10" }) => (
  <div className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-[#1976D2] to-[#0D47A1] text-white font-bold shadow-md ${className}`}>
    <span className="text-xl tracking-tighter">AR</span>
  </div>
);

const theme = {
  primary: "bg-[#1976D2]",
  primaryText: "text-[#1976D2]",
  button: "bg-[#1976D2] text-white font-bold rounded-lg px-6 py-3 shadow-lg hover:bg-[#1565C0] transition-all transform hover:scale-105",
};

const CONTACT_INFO = {
  phone: "+52 55 2495 9599",
  phoneRaw: "525524959599",
  email: "aliciarenteriamarim@gmail.com",
  location: "CDMX y Zona Metropolitana"
};

const FAQS = [
  { question: "¿Cuentan con certificación?", answer: "Sí, Alicia Rentería es enfermera titulada egresada de UNITEC con cédula profesional vigente." },
  { question: "¿Emiten factura?", answer: "Sí, se emiten facturas electrónicas conformes a la legislación mexicana." },
  { question: "¿Cuál es la zona de cobertura?", answer: "Toda la Ciudad de México y Zona Metropolitana del Valle de México." }
];

export default function Home() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openIdx, setOpenIdx] = useState(null);
  const [enviado, setEnviado] = useState(false);

  const whatsappLink = `https://wa.me/${CONTACT_INFO.phoneRaw}?text=Hola%20Enf.%20Alicia,%20solicito%20información`;

  return (
    <div className="font-sans text-gray-900 scroll-smooth bg-white">
      <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <LogoAR />
            <div className="flex flex-col">
              <span className="font-black text-xl leading-none text-[#0D47A1]">ALICIA RENTERÍA</span>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Enfermería Profesional</span>
            </div>
          </div>
          <ul className="hidden md:flex items-center gap-8">
            <li><a href="#sobre-mi" className="hover:text-blue-600 font-medium">Sobre Alicia</a></li>
            <li><a href="#servicios" className="hover:text-blue-600 font-medium">Servicios</a></li>
            <li><a href="#contacto" className={theme.button}>Agendar Cita</a></li>
          </ul>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <section className="relative pt-12 pb-24 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold text-blue-700 bg-blue-100 rounded-full uppercase tracking-wider">
              <Award size={14} /> Egresada de UNITEC
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-blue-900 mb-6 leading-tight">Cuidados de Salud con <span className="text-blue-600">Calidez</span></h1>
            <p className="text-xl text-gray-600 mb-8">Atención profesional por la <strong>Enf. Alicia Rentería</strong> en la comodidad de su hogar en CDMX.</p>
            <a href={whatsappLink} className={theme.button}>Contactar ahora</a>
          </div>
          <div className="flex justify-center">
            <img src="/alicia.jpg" className="rounded-[2.5rem] shadow-2xl border-8 border-white object-cover aspect-[4/5] w-full max-w-md" alt="Alicia Rentería" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=600"; }} />
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-blue-900 mb-8 flex items-center gap-2"><ShieldCheck className="text-blue-600" /> Seguridad y Confianza</h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="border border-gray-100 rounded-xl p-4 bg-blue-50/30">
                <button onClick={() => setOpenIdx(openIdx === idx ? null : idx)} className="w-full flex items-center justify-between font-semibold text-[#1976D2]">
                  {faq.question} {openIdx === idx ? <ChevronUp /> : <ChevronDown />}
                </button>
                {openIdx === idx && <p className="text-gray-700 text-sm mt-3">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="bg-[#1976D2] p-12 text-white md:w-1/3">
            <h3 className="text-2xl font-bold mb-6">Contacto</h3>
            <p className="mb-8 italic">CDMX y ZMVM</p>
            <div className="space-y-4">
              <p className="flex items-center gap-2"><Phone size={18} /> {CONTACT_INFO.phone}</p>
              <p className="flex items-center gap-2 text-xs"><Mail size={18} /> {CONTACT_INFO.email}</p>
            </div>
          </div>
          <div className="p-12 md:w-2/3 text-center">
            {enviado ? <p className="text-green-600 font-bold">¡Mensaje enviado!</p> : (
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setEnviado(true); }}>
                <input type="text" placeholder="Nombre" required className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
                <textarea placeholder="¿Cómo podemos ayudarle?" rows={3} className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                <button type="submit" className="w-full bg-[#0D47A1] text-white font-bold py-4 rounded-xl">Enviar Solicitud</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="py-12 text-center border-t">
        <LogoAR className="mx-auto mb-4" />
        <p className="font-bold text-xs uppercase tracking-widest">Alicia Rentería | Enfermería Profesional</p>
        <p onClick={() => setIsPrivacyOpen(true)} className="text-blue-500 text-xs mt-6 cursor-pointer hover:underline">Aviso de Privacidad</p>
      </footer>

      {isPrivacyOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 relative">
            <button onClick={() => setIsPrivacyOpen(false)} className="absolute top-4 right-4 text-gray-400"><X /></button>
            <h3 className="text-xl font-bold text-blue-900 mb-4">Aviso de Privacidad</h3>
            <p className="text-xs text-gray-600 leading-relaxed">Sus datos personales serán tratados conforme a la LFPDPPP mexicana por Alicia Rentería únicamente para fines de contacto profesional y servicios de enfermería.</p>
            <button onClick={() => setIsPrivacyOpen(false)} className="w-full mt-6 bg-blue-600 text-white font-bold py-3 rounded-xl">Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}
"use client";
import { useState } from "react";
import {
  Stethoscope,
  UserCheck,
  Users,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Facebook,
  Instagram,
  Menu,
  X,
  Award,
  Heart,
  ShieldCheck,
  ChevronDown,
  ChevronUp
} from "lucide-react";

// --- COMPONENTE LOGO AR (Minimalista y Profesional) ---
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
  {
    question: "¿Cuentan con certificación y cédula profesional válida?",
    answer: "Sí, todos los servicios son realizados por Alicia Rentería, enfermera titulada egresada de UNITEC con cédula profesional vigente, la cual puede ser consultada en el Registro Nacional de Profesionistas."
  },
  {
    question: "¿Se puede solicitar comprobante fiscal (factura)?",
    answer: "Sí, se emiten facturas electrónicas conformes a la legislación mexicana vigente por servicios de enfermería."
  },
  {
    question: "¿Cómo se protege la privacidad de los pacientes?",
    answer: "Cumplimos estrictamente con la Ley Federal de Protección de Datos Personales. Toda la información clínica y personal es tratada bajo estricta confidencialidad profesional."
  },
  {
    question: "¿Qué áreas de cobertura manejan?",
    answer: "Brindamos atención en toda la Ciudad de México y la Zona Metropolitana del Valle de México (Naucalpan, Tlalnepantla, Huixquilucan, etc.)."
  }
];

function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section id="faq" className="py-20 px-6 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <ShieldCheck size={32} className="text-[#1976D2]" />
          <h2 className="text-2xl md:text-3xl font-black text-blue-900">Seguridad y Confianza</h2>
        </div>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="border border-gray-100 rounded-xl p-4 bg-blue-50/30 transition-all">
              <button onClick={() => setOpenIdx(openIdx === idx ? null : idx)} className="w-full flex items-center justify-between text-left">
                <span className="font-semibold text-[#1976D2]">{faq.question}</span>
                {openIdx === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openIdx === idx && <p className="text-gray-700 text-sm mt-3 leading-relaxed">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", mensaje: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const FORMSPREE_ID = "TU_ID_AQUÍ"; // Reemplaza con tu ID de Formspree
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: JSON.stringify(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) setEnviado(true);
    } catch { setEnviado(true); } // Mock para demo
  };

  const whatsappLink = `https://wa.me/${CONTACT_INFO.phoneRaw}?text=Hola%20Enf.%20Alicia,%20solicito%20información%20sobre%20sus%20servicios`;

  return (
    <div className="font-sans text-gray-900 scroll-smooth bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <LogoAR />
            <div className="flex flex-col">
              <span className="font-black text-xl leading-none text-[#0D47A1]">ALICIA RENTERÍA</span>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest uppercase">Enfermería Profesional</span>
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
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t p-6 flex flex-col gap-4 shadow-lg">
            <a href="#sobre-mi" onClick={() => setIsMenuOpen(false)}>Sobre Alicia</a>
            <a href="#servicios" onClick={() => setIsMenuOpen(false)}>Servicios</a>
            <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="text-blue-600 font-bold">Contacto</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative pt-12 pb-24 px-6 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="z-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold text-blue-700 bg-blue-100 rounded-full uppercase tracking-wider">
              <Award size={14} /> Egresada de UNITEC
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-blue-900 mb-6 leading-tight">
              Cuidados de Salud con <span className="text-blue-600">Calidez y Profesionalismo</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Atención hospitalaria de primer nivel por la <strong>Enf. Alicia Rentería</strong>, cubriendo toda la CDMX y Área Metropolitana en la comodidad de su hogar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href={whatsappLink} className={theme.button}>Contactar ahora</a>
              <div className="flex items-center gap-2 text-sm text-gray-500 font-medium justify-center md:justify-start">
                <CheckCircle size={16} className="text-green-500" /> Disponibilidad en CDMX
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
            <img 
              src="/alicia.jpg" 
              className="relative z-10 w-full max-w-md rounded-[2.5rem] shadow-2xl border-8 border-white object-cover aspect-[4/5]"
              alt="Enf. Alicia Rentería UNITEC"
              onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=600"; }}
            />
          </div>
        </div>
      </section>

      {/* Frase */}
      <section id="sobre-mi" className="py-20 px-6 bg-[#0D47A1] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <Heart className="mx-auto mb-6 text-blue-300" size={40} />
          <h2 className="text-2xl md:text-3xl font-light italic leading-relaxed">
            "Mi formación en UNITEC y mi compromiso con el Valle de México me impulsan a cuidar no solo la salud, sino la tranquilidad de toda la familia."
          </h2>
          <p className="mt-6 font-bold tracking-widest uppercase text-sm text-blue-200">— Enf. Alicia Rentería</p>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-4">Servicios Profesionales</h2>
            <div className="w-20 h-2 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Stethoscope, t: "Control Clínico", d: "Monitoreo de signos vitales, administración de medicamentos y cuidados post-hospitalarios." },
              { icon: UserCheck, t: "Adulto Mayor", d: "Atención especializada con paciencia y respeto en toda la zona metropolitana." },
              { icon: Users, t: "Acompañamiento", d: "Apoyo integral y procedimientos de enfermería bajo indicación médica formal." }
            ].map((s, i) => (
              <div key={i} className="group p-10 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all text-center">
                <div className="w-16 h-16 mx-auto bg-blue-50 text-[#1976D2] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <s.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{s.t}</h3>
                <p className="text-gray-600">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />

      {/* Contacto */}
      <section id="contacto" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          <div className="bg-[#1976D2] p-12 text-white md:w-1/3">
            <h3 className="text-2xl font-bold mb-6">Contáctame</h3>
            <p className="text-blue-100 mb-8 font-medium">Atención en CDMX y ZMVM</p>
            <div className="space-y-6">
              <div className="flex items-center gap-3"><Phone size={20} /><span>{CONTACT_INFO.phone}</span></div>
              <div className="flex items-center gap-3"><Mail size={20} /><span className="text-xs break-all">{CONTACT_INFO.email}</span></div>
            </div>
          </div>
          <div className="p-12 md:w-2/3">
            {enviado ? (
              <div className="text-center py-10">
                <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold">¡Mensaje Enviado!</h3>
                <p className="text-gray-600 mt-2">Alicia se comunicará con usted a la brevedad.</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input type="text" name="nombre" placeholder="Nombre completo" required className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" onChange={handleChange} />
                <input type="tel" name="telefono" placeholder="Teléfono" required className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" onChange={handleChange} />
                <textarea name="mensaje" placeholder="¿En qué puedo ayudarle?" rows={3} className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" onChange={handleChange}></textarea>
                <button type="submit" className="w-full bg-[#0D47A1] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-blue-800 transition-all">Enviar Solicitud</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 text-center">
        <LogoAR className="mx-auto mb-4" />
        <p className="font-bold text-gray-800 uppercase tracking-widest text-xs">Alicia Rentería | Enfermería Profesional</p>
        <div className="flex justify-center gap-4 mt-4 text-gray-400">
          <Facebook size={20} className="hover:text-blue-600 cursor-pointer" />
          <Instagram size={20} className="hover:text-pink-500 cursor-pointer" />
          <a href={whatsappLink}><MessageSquare size={20} className="hover:text-green-500" /></a>
        </div>
        <p onClick={() => setIsPrivacyOpen(true)} className="text-blue-500 text-xs mt-6 cursor-pointer hover:underline">Aviso de Privacidad</p>
        <p className="text-gray-400 text-[10px] mt-2">© {new Date().getFullYear()} CDMX, México.</p>
      </footer>

      {/* Modal Aviso de Privacidad */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl relative">
            <button onClick={() => setIsPrivacyOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
              <X size={24} />
            </button>
            <h3 className="text-xl font-bold text-blue-900 mb-4">Aviso de Privacidad</h3>
            <div className="text-xs text-gray-600 space-y-3 max-h-[50vh] overflow-y-auto pr-2">
              <p><strong>Responsable:</strong> Alicia Rentería Marim, con domicilio en la Ciudad de México.</p>
              <p><strong>Finalidad:</strong> Los datos proporcionados (Nombre, Teléfono, Email) se usarán exclusivamente para contactarle, agendar servicios de enfermería y emitir comprobantes fiscales en caso de ser solicitados.</p>
              <p><strong>Seguridad:</strong> Se garantiza el manejo confidencial de su información conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (México).</p>
              <p><strong>Derechos ARCO:</strong> Puede ejercer sus derechos de acceso o cancelación enviando un correo a aliciarenteriamarim@gmail.com.</p>
            </div>
            <button onClick={() => setIsPrivacyOpen(false)} className="w-full mt-6 bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors">Entendido</button>
          </div>
        </div>
      )}
    </div>
  );
}
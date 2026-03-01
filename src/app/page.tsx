"use client";
import { useState, useEffect, useRef } from "react";
import {
  Stethoscope, UserCheck, Users, CheckCircle, Phone, Mail, 
  MessageSquare, Facebook, Instagram, Linkedin, Menu, X, Award, 
  Heart, ShieldCheck, ChevronDown, ChevronUp, Droplet, Baby, ArrowRight,
  Activity, Syringe, Zap, Pill, Clock
} from "lucide-react";

// --- ANIMACIONES SCROLL FLUIDAS ---
const FadeInSection = ({ children, delay = 0, direction = "up" }: { children: React.ReactNode, delay?: number, direction?: "up" | "left" | "right" }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setVisible(true);
      });
    }, { threshold: 0.15 });
    
    const { current } = domRef;
    if (current) observer.observe(current);
    return () => { if (current) observer.unobserve(current); };
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translate-y-0 translate-x-0 opacity-100';
    if (direction === "up") return 'translate-y-12 opacity-0';
    if (direction === "left") return '-translate-x-12 opacity-0';
    return 'translate-x-12 opacity-0';
  };

  return (
    <div 
      ref={domRef} 
      className={`transition-all duration-1000 ease-out transform ${getTransform()}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- ICONOS Y COMPONENTES BASE ---
const TikTokIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const LogoCurae = ({ className = "w-10 h-10" }) => (
  <div className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-[#1976D2] to-[#0D47A1] text-white font-bold shadow-md ${className}`}>
    <Heart size={20} className="mr-1" />
  </div>
);

const CONTACT_INFO = {
  phone: "+52 55 2495 9599",
  phoneRaw: "525524959599",
  email: "aliciarenteriamarim@gmail.com",
  location: "CDMX y Zona Metropolitana",
  username: "Curae.com"
};

// --- BASE DE DATOS DE SERVICIOS (MARKETING + PRECIOS) ---
const SERVICIOS_DATA = [
  {
    id: "sueroterapia",
    title: "Sueroterapia a Domicilio",
    icon: <Droplet size={24} />,
    shortDesc: "Revitaliza tu cuerpo desde casa. Absorción al 100% directa al torrente sanguíneo.",
    img: "https://images.unsplash.com/photo-1512675828443-4f454c42253a?q=80&w=800",
    marketingCopy: "La sueroterapia es el secreto de la medicina moderna para una recuperación inmediata. Al evitar el sistema digestivo, tu cuerpo absorbe vitaminas, minerales y medicamentos al 100%. Olvídate de las salas de espera; nosotros llevamos la clínica a tu sofá.",
    subServices: [
      { name: "Suero Resaca Relief (Cruda)", price: "$1,300 + IVA", desc: "Hidratación profunda, protector gástrico y analgésico potente. Alivio en 45 minutos.", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=400" },
      { name: "Inmuno-Boost (Vitamina C y Zinc)", price: "$1,200 + IVA", desc: "Escudo protector contra virus y fatiga. Sube tus defensas drásticamente.", img: "https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=400" },
      { name: "Detox & Glow (Glutatión)", price: "$1,500 + IVA", desc: "El antioxidante maestro. Limpia el hígado, oxigena la sangre y da luminosidad a la piel.", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=400" },
      { name: "Hidratación Plus / Canalización", price: "$800 + IVA", desc: "Reposición rápida de líquidos por deshidratación o infecciones estomacales.", img: "https://images.unsplash.com/photo-1543363136-3fdb62e11be5?q=80&w=400" }
    ]
  },
  {
    id: "especializada",
    title: "Enfermería Especializada",
    icon: <ShieldCheck size={24} />,
    shortDesc: "Procedimientos técnicos de grado hospitalario realizados en la comodidad de tu hogar.",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800",
    marketingCopy: "Evita traslados dolorosos e innecesarios. Nuestro equipo cuenta con la destreza técnica para realizar procedimientos invasivos y monitoreo avanzado con equipo y material 100% estéril. Tu sala se convierte en la mejor habitación de hospital.",
    subServices: [
      { name: "Electrocardiograma a domicilio CDMX", price: "$1,200 + IVA", desc: "Toma e interpretación básica con equipo portátil de última generación.", icon: <Activity className="text-blue-500" /> },
      { name: "Colocación de Sondas", price: "$800 + IVA", desc: "Sonda Foley (urinaria), Nasogástrica o cuidados de Gastrostomía. Procedimiento seguro y sin dolor.", icon: <Stethoscope className="text-blue-500" /> },
      { name: "Retiro de Puntos Quirúrgicos", price: "$400 + IVA", desc: "Retiro de suturas o grapas con valoración de cicatrización.", icon: <CheckCircle className="text-blue-500" /> },
      { name: "Retiro de Implante Subdérmico", price: "$600 + IVA", desc: "Procedimiento aséptico, rápido y con anestesia local.", icon: <Pill className="text-blue-500" /> },
      { name: "Enemas a Domicilio", price: "$600 + IVA", desc: "Alivio seguro y profesional para cuadros de estreñimiento severo.", icon: <Droplet className="text-blue-500" /> }
    ]
  },
  {
    id: "general",
    title: "Atención General e Inyecciones",
    icon: <Syringe size={24} />,
    shortDesc: "Administración de medicamentos, inyecciones y cuidados básicos a tu puerta.",
    img: "https://images.unsplash.com/photo-1584308666744-24d59b298707?q=80&w=800",
    marketingCopy: "La adherencia a un tratamiento médico es vital. Si necesitas que un profesional administre tus medicamentos o los de tu familia de manera exacta y sin dolor, estamos a una llamada de distancia. Cobertura en toda la CDMX.",
    subServices: [
      { name: "Inyecciones a domicilio CDMX", price: "$250 - $350 + IVA", desc: "Aplicación intramuscular o subcutánea sin dolor. (Requiere receta médica).", icon: <Syringe className="text-blue-500" /> },
      { name: "Ministración de Medicamentos", price: "$400 + IVA", desc: "Control de pastilleros y administración intravenosa de antibióticos.", icon: <Pill className="text-blue-500" /> },
      { name: "Curación de Heridas", price: "$450 - $600 + IVA", desc: "Limpieza profunda de heridas simples o pie diabético para evitar infecciones.", icon: <Heart className="text-blue-500" /> },
      { name: "Consulta Médica a Domicilio", price: "$900 + IVA", desc: "Valoración general por médico titulado asociado a nuestra agencia.", icon: <Stethoscope className="text-blue-500" /> }
    ]
  },
  {
    id: "cuidados",
    title: "Cuidado de Pacientes (Turnos)",
    icon: <UserCheck size={24} />,
    shortDesc: "Enfermeros auxiliares y generales para cuidado de adultos mayores o post-operatorios.",
    img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800",
    marketingCopy: "Sabemos lo agotador que es cuidar a un ser querido. Recupera tu tranquilidad y tu descanso dejando la salud de tu familiar en manos de enfermeros titulados y empáticos. Manejamos cuidados paliativos, geriatría y recuperación quirúrgica.",
    subServices: [
      { name: "Turno 8 Horas (Enf. General)", price: "$900 + IVA", desc: "Ideal para cobertura diurna, control de medicamentos y signos vitales.", icon: <Clock className="text-blue-500" /> },
      { name: "Turno 12 Horas (Nocturno/Diurno)", price: "$1,300 + IVA", desc: "Vigilancia continua, prevención de úlceras y asistencia en baño.", icon: <Clock className="text-blue-500" /> },
      { name: "Turno 24 Horas", price: "$2,200 + IVA", desc: "Cuidado intensivo e ininterrumpido en el hogar.", icon: <Clock className="text-blue-500" /> },
      { name: "Baño de Esponja a Domicilio", price: "$500 + IVA", desc: "Higiene completa en cama para pacientes inmovilizados, cuidando su pudor y confort.", icon: <Droplet className="text-blue-500" /> }
    ]
  }
];

const BENEFICIOS_DATA = [
  { 
    id: 1, 
    t: "Personal Verificado", 
    short: "Filtros estrictos de antecedentes.", 
    long: "No permitimos que cualquier persona entre a tu hogar. Cada miembro de Curae pasa por estrictas pruebas psicométricas, validación de Cédula Profesional ante la SEP y revisión de antecedentes no penales. Tu seguridad es nuestra obsesión."
  },
  { 
    id: 2, 
    t: "Atención 24/7", 
    short: "Cobertura médica ininterrumpida.", 
    long: "Las emergencias y el dolor no tienen horario de oficina. Contamos con una red logística en CDMX que nos permite llegar a ti o cubrir turnos de guardia sin interrupciones. Siempre habrá un profesional listo para relevar."
  },
  { 
    id: 3, 
    t: "Reportes Clínicos", 
    short: "Bitácora diaria para el médico.", 
    long: "Mantenemos una comunicación estrecha con tu médico tratante. Llevamos una hoja de enfermería digital con gráficas de signos vitales, control de líquidos y evolución de heridas. Somos los ojos del doctor en tu casa."
  },
  { 
    id: 4, 
    t: "Enfoque Humano", 
    short: "Empatía, paciencia y dignidad.", 
    long: "Entendemos la vulnerabilidad de estar enfermo. En Curae prohibimos el trato frío o robotizado. Creemos firmemente que una sonrisa sincera, una palabra de aliento y el tacto suave curan tanto como la mejor medicina."
  }
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [enviado, setEnviado] = useState(false);
  
  // Estados para Modales
  const [activeService, setActiveService] = useState<any>(null);
  const [activeBenefit, setActiveBenefit] = useState<any>(null);

  const whatsappLink = `https://wa.me/${CONTACT_INFO.phoneRaw}?text=Hola%20Curae,%20solicito%20información%20y%20cotización`;

  // Efecto para bloquear scroll cuando hay modal abierto
  useEffect(() => {
    if (activeService || activeBenefit) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [activeService, activeBenefit]);

  return (
    <div className="font-sans text-gray-900 scroll-smooth bg-gray-50">
      
      {/* --- NAVBAR --- */}
      <nav className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <LogoCurae />
            <div className="flex flex-col">
              <span className="font-black text-xl leading-none text-[#0D47A1] tracking-tight">CURAE</span>
              <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Agencia de Enfermería</span>
            </div>
          </div>
          <ul className="hidden md:flex items-center gap-8">
            <li><a href="#servicios" className="hover:text-[#1976D2] font-semibold text-sm transition-colors">Catálogo de Servicios</a></li>
            <li><a href="#ventajas" className="hover:text-[#1976D2] font-semibold text-sm transition-colors">Ventajas</a></li>
            <li><a href="#nosotros" className="hover:text-[#1976D2] font-semibold text-sm transition-colors">Nosotros</a></li>
            <li>
              <a href="#contacto" className="bg-[#1976D2] text-white font-bold rounded-lg px-6 py-2.5 shadow-lg hover:bg-[#1565C0] hover:scale-105 transition-all">
                Cotizar ahora
              </a>
            </li>
          </ul>
          <button className="md:hidden text-blue-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 border-t' : 'max-h-0'}`}>
          <div className="bg-white p-6 flex flex-col gap-4 text-center font-bold shadow-inner">
            <a href="#servicios" onClick={() => setIsMenuOpen(false)}>Servicios</a>
            <a href="#nosotros" onClick={() => setIsMenuOpen(false)}>Nosotros</a>
            <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="text-[#1976D2]">Contacto</a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-32 px-6 bg-gradient-to-b from-blue-100 via-white to-gray-50 overflow-hidden text-center">
        <FadeInSection>
          <div className="max-w-4xl mx-auto z-10 relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold text-[#1976D2] bg-blue-50 border border-blue-100 rounded-full uppercase tracking-wider shadow-sm animate-bounce">
              <Heart size={14} className="text-red-500" /> Cuidado Premium en CDMX
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-[#0D47A1] mb-6 leading-[1.1] tracking-tight">
              Llevamos el hospital a la <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1976D2] to-teal-400">comodidad de tu hogar</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed font-light max-w-3xl mx-auto">
              En <strong>Curae</strong> brindamos servicios de enfermería técnica, sueroterapia y cuidados especializados con el rigor clínico que mereces y la empatía que necesitas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#servicios" className="px-8 py-4 bg-white text-[#0D47A1] border-2 border-blue-100 font-bold rounded-xl shadow-md hover:border-[#1976D2] transition-all flex items-center gap-2">
                Ver Catálogo de Precios <ArrowRight size={18} />
              </a>
              <a href={whatsappLink} className="px-8 py-4 bg-[#1976D2] text-white font-bold rounded-xl shadow-xl hover:bg-[#0D47A1] transition-all transform hover:scale-105 flex items-center gap-2">
                Agendar Vía WhatsApp <Zap size={18}/>
              </a>
            </div>
          </div>
        </FadeInSection>
        {/* Background effects */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-blue-300 rounded-full filter blur-[120px] opacity-20 -z-10"></div>
      </section>

      {/* --- CATÁLOGO DE SERVICIOS INTERACTIVO --- */}
      <section id="servicios" className="py-24 px-6 bg-white relative">
        <FadeInSection>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#0D47A1] mb-4">Catálogo de Servicios</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">Haz clic en cualquier categoría para conocer a detalle nuestros procedimientos, beneficios y tarifas actualizadas.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICIOS_DATA.map((srv, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setActiveService(srv)}
                  className="group bg-white rounded-[2rem] border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden flex flex-col"
                >
                  <div className="h-48 relative overflow-hidden">
                    <img src={srv.img} alt={srv.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D47A1]/90 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white p-2 bg-white/20 backdrop-blur-sm rounded-xl">
                      {srv.icon}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-[#0D47A1] mb-2">{srv.title}</h3>
                    <p className="text-sm text-gray-600 mb-6 flex-grow">{srv.shortDesc}</p>
                    <div className="mt-auto flex items-center justify-between text-[#1976D2] font-bold text-sm group-hover:text-[#0D47A1]">
                      Ver catálogo y precios <ArrowRight size={16} className="transform transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* --- WHY CHOOSE US (VENTAJAS) --- */}
      <section id="ventajas" className="py-24 px-6 bg-[#0D47A1] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-[100px] opacity-30"></div>
        <FadeInSection delay={200}>
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-16 text-white">El Estandar Curae</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {BENEFICIOS_DATA.map((item, i) => (
                <div 
                  key={i} 
                  onClick={() => setActiveBenefit(item)}
                  className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group hover:scale-105"
                >
                  <div className="bg-[#1976D2] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
                    <CheckCircle size={28} className="text-white group-hover:text-[#1976D2]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.t}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed mb-6">{item.short}</p>
                  <span className="text-teal-300 text-xs font-bold flex items-center gap-1">Leer más <ChevronDown size={14}/></span>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* --- NOSOTROS (CV ALICIA) --- */}
      <section id="nosotros" className="py-24 px-6 bg-white overflow-hidden">
        <FadeInSection direction="left">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              {/* Foto Alicia */}
              <div className="w-full lg:w-5/12 relative flex justify-center">
                <div className="absolute inset-0 bg-[#1976D2] rounded-[3rem] transform -rotate-6 opacity-10"></div>
                <img 
                  src="/alicia.jpg" 
                  className="relative z-10 w-full max-w-sm rounded-[2.5rem] shadow-2xl border-8 border-white object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
                  alt="Enf. Alicia Rentería - Curae"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=600"; }}
                />
                <div className="absolute -bottom-6 -right-2 md:-right-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-gray-100 animate-bounce">
                  <div className="bg-blue-50 p-3 rounded-xl text-[#1976D2]"><Award size={28}/></div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Directora Clínica</p>
                    <p className="font-black text-[#0D47A1] text-lg">Enf. Alicia Rentería</p>
                  </div>
                </div>
              </div>
              
              {/* Info CV */}
              <div className="w-full lg:w-7/12">
                <h2 className="text-3xl md:text-5xl font-black text-[#0D47A1] mb-6 leading-tight">
                  La enfermería es el <span className="text-[#1976D2]">arte de cuidar la vida</span>
                </h2>
                
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-inner relative">
                  <Stethoscope className="absolute top-6 right-6 text-gray-200" size={60} />
                  <p className="text-gray-700 leading-relaxed mb-6 relative z-10 text-lg">
                    "Mi compromiso es garantizar que cada paciente reciba atención de grado hospitalario en el entorno que más ama: su propio hogar, rodeado de su familia."
                  </p>
                  
                  <div className="space-y-4 text-sm text-gray-600 relative z-10">
                    <div className="flex gap-3 items-start">
                      <CheckCircle className="text-[#1976D2] shrink-0 mt-0.5" size={18}/>
                      <p><strong>Formación de Excelencia:</strong> Licenciada en Enfermería por UNITEC, actualmente cursando la Maestría en Dirección de Organizaciones en Salud.</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle className="text-[#1976D2] shrink-0 mt-0.5" size={18}/>
                      <p><strong>Experiencia Crítica:</strong> Amplia trayectoria clínica en Medicina Interna, Urgencias, Quirófano y UCI Pediátrica en hospitales de alta demanda (Hospital General Homeopático, 'Miguel Hidalgo', etc).</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle className="text-[#1976D2] shrink-0 mt-0.5" size={18}/>
                      <p><strong>Certificaciones:</strong> Cédula Profesional vigente, Educación en Diabetes y manejo avanzado de pacientes críticos y post-quirúrgicos.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a href={whatsappLink} className="bg-[#1976D2] text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-[#0D47A1] transition-all transform hover:-translate-y-1 text-center">
                    Contactar a la Directora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* --- CONTACTO --- */}
      <section id="contacto" className="py-24 px-6 bg-gray-100">
        <FadeInSection delay={100} direction="up">
          <div className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-200">
            {/* Form */}
            <div className="p-12 md:w-3/5">
              <h3 className="text-3xl font-black text-[#0D47A1] mb-2">Solicita una Cotización</h3>
              <p className="text-gray-500 mb-8 text-sm">Respuesta rápida garantizada. Permítenos diseñar el plan de cuidado ideal.</p>
              
              {enviado ? (
                <div className="text-center py-16 bg-green-50 rounded-3xl border border-green-100">
                  <CheckCircle size={60} className="text-green-500 mx-auto mb-4 animate-bounce" />
                  <h3 className="text-2xl font-bold text-green-900">¡Mensaje Enviado!</h3>
                  <p className="text-green-700 mt-2">Nuestra coordinadora clínica te contactará en minutos.</p>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setEnviado(true); }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input type="text" placeholder="Nombre completo" required className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-[#1976D2] transition-all" />
                    <input type="tel" placeholder="Teléfono / WhatsApp" required className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-[#1976D2] transition-all" />
                  </div>
                  <textarea placeholder="¿En qué alcaldía te ubicas y qué servicio necesitas?" rows={4} required className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-[#1976D2] transition-all"></textarea>
                  <button type="submit" className="w-full bg-[#0D47A1] text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-[#1976D2] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                    Enviar Solicitud Segura <ShieldCheck size={18}/>
                  </button>
                </form>
              )}
            </div>

            {/* Redes */}
            <div className="bg-gradient-to-br from-[#1976D2] to-[#0D47A1] p-12 text-white md:w-2/5 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8">Información Directa</h3>
                <div className="space-y-6 mb-12">
                  <a href={whatsappLink} className="flex items-center gap-4 hover:text-blue-200 transition-colors group">
                    <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-white/20 transition-colors"><Phone size={24} /></div>
                    <span className="font-medium text-lg">{CONTACT_INFO.phone}</span>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-4 rounded-2xl"><Mail size={24} /></div>
                    <span className="text-sm break-all font-medium">{CONTACT_INFO.email}</span>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-bold text-blue-200 uppercase tracking-widest mb-3">Síguenos</p>
                  <p className="text-xl font-black mb-6">@{CONTACT_INFO.username}</p>
                  <div className="flex flex-wrap gap-4">
                    <a href="#" className="bg-white/10 p-3 rounded-xl hover:bg-white hover:text-[#1976D2] transition-all transform hover:scale-110"><Instagram size={22} /></a>
                    <a href="#" className="bg-white/10 p-3 rounded-xl hover:bg-white hover:text-[#1976D2] transition-all transform hover:scale-110"><TikTokIcon size={22} /></a>
                    <a href="#" className="bg-white/10 p-3 rounded-xl hover:bg-white hover:text-[#1976D2] transition-all transform hover:scale-110"><Linkedin size={22} /></a>
                    <a href={whatsappLink} className="bg-[#25D366] p-3 rounded-xl text-white hover:bg-green-500 transition-all transform hover:scale-110"><MessageSquare size={22} /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-10 bg-white border-t border-gray-100 text-center">
        <LogoCurae className="mx-auto mb-4 opacity-50" />
        <p className="font-bold text-gray-800 uppercase tracking-widest text-xs">Curae | Agencia de Enfermería Profesional</p>
        <p className="text-gray-400 text-[10px] mt-4">© {new Date().getFullYear()} CDMX, México. Todos los derechos reservados.</p>
      </footer>

      {/* ================= MODALES ================= */}
      
      {/* 1. Modal de Servicios Detallados */}
      {activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-white rounded-[2rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative transform transition-all duration-300 scale-100 opacity-100 animate-in zoom-in-95">
            <button 
              onClick={() => setActiveService(null)} 
              className="absolute top-4 right-4 bg-gray-100 text-gray-500 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors z-10"
            >
              <X size={24} />
            </button>
            
            <div className="h-64 relative">
              <img src={activeService.img} alt={activeService.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent flex items-end p-8">
                <div>
                  <div className="inline-block bg-[#1976D2] text-white p-2 rounded-lg mb-3">{activeService.icon}</div>
                  <h2 className="text-3xl md:text-4xl font-black text-white">{activeService.title}</h2>
                </div>
              </div>
            </div>

            <div className="p-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-8 border-l-4 border-[#1976D2] pl-4 italic bg-blue-50/50 p-4 rounded-r-xl">
                {activeService.marketingCopy}
              </p>

              <h3 className="text-xl font-bold text-[#0D47A1] mb-6 border-b pb-2">Catálogo de Procedimientos y Tarifas</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeService.subServices.map((sub: any, idx: number) => (
                  <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex gap-4 items-start">
                    {sub.img ? (
                      <img src={sub.img} alt={sub.name} className="w-20 h-20 object-cover rounded-xl shrink-0" />
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                        {sub.icon}
                      </div>
                    )}
                    <div>
                      <h4 className="font-bold text-gray-900 leading-tight mb-1">{sub.name}</h4>
                      <p className="text-[#1976D2] font-black text-sm mb-2">{sub.price}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{sub.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col items-center border-t pt-8">
                <p className="text-sm text-gray-500 mb-4">* Precios sujetos a cambios. Cobertura en toda la CDMX.</p>
                <a href={whatsappLink} className="bg-[#25D366] text-white font-bold py-4 px-10 rounded-xl shadow-lg hover:bg-green-600 transition-all transform hover:-translate-y-1 flex items-center gap-2">
                  <MessageSquare size={20} /> Agendar este servicio
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Modal de Ventajas (Why Choose Us) */}
      {activeBenefit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#0D47A1] rounded-[2rem] w-full max-w-lg p-8 shadow-2xl relative text-center border border-blue-400/30 transform transition-all duration-300 scale-100 animate-in slide-in-from-bottom-10">
            <button onClick={() => setActiveBenefit(null)} className="absolute top-4 right-4 text-blue-200 hover:text-white transition-colors">
              <X size={24} />
            </button>
            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <ShieldCheck size={40} className="text-[#1976D2]" />
            </div>
            <h3 className="text-3xl font-black text-white mb-2">{activeBenefit.t}</h3>
            <div className="w-16 h-1 bg-teal-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              {activeBenefit.long}
            </p>
            <button onClick={() => setActiveBenefit(null)} className="w-full bg-white text-[#0D47A1] font-bold py-4 rounded-xl hover:bg-blue-50 transition-colors">
              Entendido
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
"use client";
import { useState, useEffect, useRef } from "react";
import {
  Stethoscope, UserCheck, Users, CheckCircle, Phone, Mail, 
  MessageSquare, Facebook, Instagram, Linkedin, Menu, X, Award, 
  Heart, ShieldCheck, ChevronDown, ChevronUp, Droplet, Baby, ArrowRight,
  Activity, Syringe, Zap, Pill, Clock, ClipboardList, BriefcaseMedical, MapPin, Video
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

// --- BASE DE DATOS DE SERVICIOS (CATÁLOGO EXTENDIDO + CONSULTORÍA) ---
const SERVICIOS_DATA = [
  {
    id: "basicos",
    title: "Cuidados Básicos y Asistencia Diaria",
    icon: <UserCheck size={24} />,
    shortDesc: "Asistencia por cuidadores certificados bajo supervisión profesional para la vida diaria.",
    img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800",
    marketingCopy: "Transformamos las actividades diarias en momentos de confort. Ideal para pacientes que requieren apoyo constante, garantizando su higiene, nutrición y seguridad sin perder su dignidad.",
    subServices: [
      { name: "Higiene y Confort", price: "Cotización por turno", desc: "Baño de esponja en cama o asistencia en ducha, cuidado de la piel para prevenir escaras y aseo bucal.", icon: <Droplet className="text-[#1976D2]" /> },
      { name: "Asistencia en Movilidad", price: "Incluido en turno", desc: "Transferencias seguras (cama a silla), cambios posturales programados y apoyo para caminar.", icon: <Activity className="text-[#1976D2]" /> },
      { name: "Apoyo Nutricional", price: "Incluido en turno", desc: "Ayuda paciente y empática para la alimentación oral o administración de dietas especiales.", icon: <Heart className="text-[#1976D2]" /> },
      { name: "Acompañamiento", price: "Incluido en turno", desc: "Vigilancia continua para prevenir caídas y brindar soporte emocional activo.", icon: <Users className="text-[#1976D2]" /> }
    ]
  },
  {
    id: "clinicos",
    title: "Cuidados Clínicos (Enfermería General)",
    icon: <Syringe size={24} />,
    shortDesc: "Procedimientos técnicos por enfermeros titulados: medicamentos, heridas y signos vitales.",
    img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800",
    marketingCopy: "La precisión médica llevada a tu sala. Enfermeros titulados que garantizan la correcta administración de tratamientos y el monitoreo exacto de la salud del paciente.",
    subServices: [
      { name: "Administración de Medicamentos", price: "Desde $350 + IVA", desc: "Aplicación exacta de fármacos vía oral, intramuscular, subcutánea o intravenosa.", icon: <Pill className="text-[#1976D2]" /> },
      { name: "Manejo de Sondas y Drenajes", price: "$800 + IVA", desc: "Colocación y cuidado estéril de sondas urinarias (Foley), nasogástricas y estomas.", icon: <Stethoscope className="text-[#1976D2]" /> },
      { name: "Curación de Heridas", price: "$450 - $600 + IVA", desc: "Manejo aséptico de heridas quirúrgicas, úlceras por presión (escaras) y pie diabético.", icon: <ShieldCheck className="text-[#1976D2]" /> },
      { name: "Monitoreo Clínico", price: "Visita $400 + IVA", desc: "Control profesional de presión arterial, glucosa capilar, saturación y temperatura.", icon: <Activity className="text-[#1976D2]" /> }
    ]
  },
  {
    id: "especializados",
    title: "Servicios Especializados",
    icon: <BriefcaseMedical size={24} />,
    shortDesc: "Atención avanzada para patologías, post-operatorios, pediatría y geriatría.",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800",
    marketingCopy: "Situaciones complejas requieren manos expertas. Contamos con personal certificado para etapas críticas de la vida, asegurando protocolos hospitalarios de alta especialidad en casa.",
    subServices: [
      { name: "Cuidados Post-Operatorios", price: "Cotización personalizada", desc: "Atención inmediata tras cirugías mayores o estéticas. Manejo del dolor y prevención de infecciones.", icon: <Stethoscope className="text-[#1976D2]" /> },
      { name: "Enfermería Geriátrica", price: "Cotización por turno", desc: "Especialistas en demencia, Alzheimer o Parkinson, enfocados en estimulación y seguridad.", icon: <UserCheck className="text-[#1976D2]" /> },
      { name: "Pediátrica y Neonatal", price: "Cotización personalizada", desc: "Cuidado de recién nacidos, prematuros y asesoría profesional en lactancia materna.", icon: <Baby className="text-[#1976D2]" /> },
      { name: "Terapia Respiratoria", price: "Desde $600 + IVA", desc: "Nebulizaciones, aspiración de secreciones y manejo de ventilación mecánica asistida.", icon: <Activity className="text-[#1976D2]" /> }
    ]
  },
  {
    id: "sueroterapia",
    title: "Sueroterapia a Domicilio",
    icon: <Droplet size={24} />,
    shortDesc: "Revitaliza tu cuerpo desde casa. Absorción al 100% directa al torrente sanguíneo.",
    img: "https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=800",
    marketingCopy: "El secreto de la medicina moderna para una recuperación inmediata. Al evitar el sistema digestivo, tu cuerpo absorbe vitaminas, minerales y medicamentos al 100%. Olvídate de las salas de espera; nosotros llevamos la clínica a tu sofá.",
    subServices: [
      { name: "Suero Resaca Relief (Cruda)", price: "$1,300 + IVA", desc: "Hidratación profunda, protector gástrico y analgésico potente. Alivio en 45 minutos.", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=400" },
      { name: "Inmuno-Boost (Vitamina C y Zinc)", price: "$1,200 + IVA", desc: "Escudo protector contra virus y fatiga. Sube tus defensas drásticamente.", img: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=400" },
      { name: "Detox & Glow (Glutatión)", price: "$1,500 + IVA", desc: "El antioxidante maestro. Limpia el hígado, oxigena la sangre y da luminosidad a la piel.", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=400" },
      { name: "Hidratación Plus / Canalización", price: "$800 + IVA", desc: "Reposición rápida de líquidos por deshidratación o infecciones estomacales.", img: "https://images.unsplash.com/photo-1543363136-3fdb62e11be5?q=80&w=400" }
    ]
  },
  {
    id: "consultoria",
    title: "Consultoría y Resolución de Dudas",
    icon: <Video size={24} />,
    shortDesc: "Orientación experta presencial o virtual para resolver tus inquietudes médicas.",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800",
    marketingCopy: "La información médica puede ser abrumadora. Evita búsquedas peligrosas en internet y permítenos guiarte. Nuestros expertos resolverán cualquier duda sobre el cuidado, manejo de equipo o síntomas de tu familiar, dándote paz mental para tomar decisiones seguras.",
    subServices: [
      { name: "Asesoría en línea (Telemedicina)", price: "$300 + IVA", desc: "Videollamada para revisión de estudios, resolución de dudas y orientación médica primaria.", icon: <Video className="text-[#1976D2]" /> },
      { name: "Visita de Valoración Inicial", price: "$500 + IVA", desc: "Evaluación física del paciente en casa para diseñar su plan de cuidados exacto.", icon: <Stethoscope className="text-[#1976D2]" /> },
      { name: "Capacitación a Familiares", price: "$400 + IVA", desc: "Te enseñamos cómo usar tanques de oxígeno, movilizar al paciente y cambiar pañales correctamente.", icon: <Users className="text-[#1976D2]" /> },
      { name: "Segunda Opinión de Cuidados", price: "$400 + IVA", desc: "Revisión objetiva de los tratamientos de enfermería actuales para optimizar la recuperación.", icon: <ClipboardList className="text-[#1976D2]" /> }
    ]
  },
  {
    id: "gestion",
    title: "Gestión y Equipamiento Médico",
    icon: <ClipboardList size={24} />,
    shortDesc: "Diseñamos el ecosistema de salud: planes de cuidado, insumos y enlace médico.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800",
    marketingCopy: "No solo enviamos personal; gestionamos la salud integral. Actuamos como los directores de orquesta de la recuperación de tu familiar, educando y proveyendo todo lo necesario.",
    subServices: [
      { name: "Planes de Cuidado a Medida", price: "Incluido", desc: "Evaluación inicial por un supervisor para diseñar una bitácora de actividades personalizada.", icon: <ClipboardList className="text-[#1976D2]" /> },
      { name: "Enlace Médico Directo", price: "Incluido", desc: "Comunicación técnica con médicos tratantes para reportar evolución y ajustar tratamientos.", icon: <Phone className="text-[#1976D2]" /> },
      { name: "Renta de Equipo Médico", price: "Cotización", desc: "Gestión rápida de camas de hospital, concentradores de oxígeno, grúas y sillas de ruedas.", icon: <Activity className="text-[#1976D2]" /> },
      { name: "Suministro de Material", price: "Cotización", desc: "Entrega a domicilio de gasas, jeringas, pañales, sueros y material de curación estéril.", icon: <ShieldCheck className="text-[#1976D2]" /> }
    ]
  },
  {
    id: "modalidades",
    title: "Modalidades de Cobertura",
    icon: <Clock size={24} />,
    shortDesc: "Flexibilidad total: desde visitas únicas hasta cobertura ininterrumpida 24/7.",
    img: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800",
    marketingCopy: "La diferencia de Curae es nuestro respaldo institucional. Garantizamos cubrir faltas, supervisamos la calidad y nos adaptamos exactamente a tus horarios y presupuesto.",
    subServices: [
      { name: "Por Visita (Procedimientos)", price: "Desde $350 + IVA", desc: "Acudimos puntualmente para inyecciones, curaciones, instalación de sondas o sueros.", icon: <Zap className="text-[#1976D2]" /> },
      { name: "Turnos de Guardia (8h / 12h)", price: "Desde $900 + IVA", desc: "Ideal para cobertura diurna o vigilancia nocturna, asegurando el descanso de la familia.", icon: <Clock className="text-[#1976D2]" /> },
      { name: "Cuidado 24/7", price: "Desde $2,200 + IVA", desc: "Equipos rotativos altamente coordinados para que el paciente nunca esté solo.", icon: <ShieldCheck className="text-[#1976D2]" /> },
      { name: "Respaldo Curae", price: "Garantía", desc: "Sustitución inmediata en caso de imprevistos y supervisión continua de la Directora Clínica.", icon: <Award className="text-[#1976D2]" /> }
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
  
  // Estados para expansiones suaves (Acordeón)
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [expandedBenefit, setExpandedBenefit] = useState<number | null>(null);
  const [isNosotrosOpen, setIsNosotrosOpen] = useState(false);

  const whatsappLink = `https://wa.me/${CONTACT_INFO.phoneRaw}?text=Hola%20Curae,%20solicito%20información%20y%20cotización`;

  const toggleService = (idx: number) => {
    setExpandedService(expandedService === idx ? null : idx);
  };

  const toggleBenefit = (idx: number) => {
    setExpandedBenefit(expandedBenefit === idx ? null : idx);
  };

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
            <li><a href="#nosotros" className="hover:text-[#1976D2] font-semibold text-sm transition-colors">Directorio</a></li>
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
            <a href="#nosotros" onClick={() => setIsMenuOpen(false)}>Directorio</a>
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
                Ver Catálogo de Servicios <ArrowRight size={18} />
              </a>
              <a href={whatsappLink} className="px-8 py-4 bg-[#1976D2] text-white font-bold rounded-xl shadow-xl hover:bg-[#0D47A1] transition-all transform hover:scale-105 flex items-center gap-2">
                Agendar Vía WhatsApp <Zap size={18}/>
              </a>
            </div>
          </div>
        </FadeInSection>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-blue-300 rounded-full filter blur-[120px] opacity-20 -z-10"></div>
      </section>

      {/* --- CATÁLOGO DE SERVICIOS INTERACTIVO (ACCORDION) --- */}
      <section id="servicios" className="py-24 px-6 bg-white relative">
        <FadeInSection>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#0D47A1] mb-4">Catálogo de Servicios</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">Haz clic en cualquier categoría para desplegar a detalle nuestros procedimientos, beneficios y tarifas actualizadas.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {SERVICIOS_DATA.map((srv, idx) => (
                <div 
                  key={idx} 
                  onClick={() => toggleService(idx)}
                  className={`group bg-white rounded-[2rem] border transition-all duration-500 transform cursor-pointer overflow-hidden flex flex-col ${expandedService === idx ? 'border-[#1976D2] shadow-2xl scale-[1.02] ring-4 ring-blue-50 z-10' : 'border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1'}`}
                >
                  {/* Tarjeta Superior (Siempre visible) */}
                  <div className="h-48 relative overflow-hidden shrink-0">
                    <img src={srv.img} alt={srv.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D47A1]/90 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white p-2 bg-white/20 backdrop-blur-sm rounded-xl">
                      {srv.icon}
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-bold text-[#0D47A1] mb-2">{srv.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{srv.shortDesc}</p>
                    <div className="flex items-center justify-between text-[#1976D2] font-bold text-sm">
                      {expandedService === idx ? 'Ocultar detalles' : 'Ver catálogo y precios'} 
                      {expandedService === idx ? <ChevronUp size={20} className="animate-pulse"/> : <ChevronDown size={20} />}
                    </div>
                  </div>

                  {/* Contenido Expandible (Acordeón) */}
                  <div className={`transition-all duration-700 ease-in-out bg-gray-50 border-t border-gray-100 ${expandedService === idx ? 'max-h-[1500px] opacity-100 p-6' : 'max-h-0 opacity-0 p-0 overflow-hidden'}`}>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6 border-l-4 border-[#1976D2] pl-3 italic">
                      {srv.marketingCopy}
                    </p>
                    <div className="space-y-4">
                      {srv.subServices.map((sub: any, subIdx: number) => (
                        <div key={subIdx} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex gap-4 items-start hover:border-blue-200 transition-colors">
                          {sub.img ? (
                            <img src={sub.img} alt={sub.name} className="w-16 h-16 object-cover rounded-lg shrink-0 border border-gray-100" />
                          ) : (
                            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                              {sub.icon}
                            </div>
                          )}
                          <div>
                            <h4 className="font-bold text-gray-900 text-sm mb-1">{sub.name}</h4>
                            <p className="text-[#1976D2] font-black text-xs mb-1">{sub.price}</p>
                            <p className="text-xs text-gray-500 leading-relaxed">{sub.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <a href={whatsappLink} onClick={(e) => e.stopPropagation()} className="mt-6 w-full bg-[#1976D2] text-white font-bold py-3 rounded-xl shadow hover:bg-[#0D47A1] transition-all flex items-center justify-center gap-2 text-sm">
                      <MessageSquare size={16} /> Solicitar este servicio
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* --- WHY CHOOSE US (VENTAJAS INLINE) --- */}
      <section id="ventajas" className="py-24 px-6 bg-[#0D47A1] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-[100px] opacity-30"></div>
        <FadeInSection delay={200}>
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-16 text-white">El Estandar Curae</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {BENEFICIOS_DATA.map((item, i) => (
                <div 
                  key={i} 
                  onClick={() => toggleBenefit(i)}
                  className={`bg-white/10 backdrop-blur-md rounded-3xl border transition-all duration-500 cursor-pointer overflow-hidden ${expandedBenefit === i ? 'border-teal-400 bg-white/20' : 'border-white/20 hover:bg-white/20'}`}
                >
                  <div className="p-8 flex items-start gap-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${expandedBenefit === i ? 'bg-teal-400 text-[#0D47A1]' : 'bg-[#1976D2] text-white'}`}>
                      <CheckCircle size={28} />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-2">{item.t}</h3>
                      <p className="text-blue-100 text-sm leading-relaxed">{item.short}</p>
                      
                      {/* Expansión del beneficio */}
                      <div className={`transition-all duration-700 ease-in-out ${expandedBenefit === i ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                        <div className="w-12 h-1 bg-teal-400 mb-4 rounded-full"></div>
                        <p className="text-sm text-white/90 leading-relaxed font-light">{item.long}</p>
                      </div>
                      
                      <div className="mt-4 text-teal-300 text-xs font-bold flex items-center gap-1">
                        {expandedBenefit === i ? 'Cerrar detalle' : 'Leer más'} 
                        {expandedBenefit === i ? <ChevronUp size={14}/> : <ChevronDown size={14}/>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* --- NOSOTROS (OCULTO/EXPANDIBLE) --- */}
      <section id="nosotros" className="py-24 px-6 bg-white overflow-hidden text-center">
        <FadeInSection>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-[#0D47A1] mb-6">Nuestro Respaldo Médico</h2>
            <p className="text-gray-600 text-lg mb-8">Conoce a la profesional que diseña, supervisa y garantiza la excelencia de cada servicio que llega a tu hogar.</p>
            
            <button 
              onClick={() => setIsNosotrosOpen(!isNosotrosOpen)}
              className="bg-white border-2 border-[#1976D2] text-[#1976D2] font-bold py-4 px-8 rounded-xl hover:bg-blue-50 transition-all flex items-center justify-center gap-3 mx-auto shadow-md"
            >
              <Award size={20} />
              {isNosotrosOpen ? 'Ocultar Perfil' : 'Ver Perfil de la Directora Clínica'}
              {isNosotrosOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            {/* Expansión del CV */}
            <div className={`transition-all duration-1000 ease-in-out text-left ${isNosotrosOpen ? 'max-h-[2000px] opacity-100 mt-16' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              <div className="flex flex-col md:flex-row gap-12 items-center bg-gray-50 p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-inner relative">
                
                <div className="w-full md:w-5/12 relative flex justify-center shrink-0">
                  <div className="absolute inset-0 bg-[#1976D2] rounded-[3rem] transform rotate-3 opacity-10"></div>
                  <img 
                    src="/alicia.jpg" 
                    className="relative z-10 w-full max-w-[280px] rounded-[2rem] shadow-xl border-8 border-white object-cover aspect-[4/5]"
                    alt="Enf. Alicia Rentería - Curae"
                    onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=600"; }}
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-xl shadow-lg z-20 flex items-center gap-3 border border-gray-100">
                    <div className="bg-blue-50 p-2 rounded-lg text-[#1976D2]"><Award size={20}/></div>
                    <div>
                      <p className="font-black text-[#0D47A1] text-sm">Enf. Alicia Rentería</p>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-7/12 space-y-5 text-gray-700">
                  <Stethoscope className="text-gray-300 mb-2" size={40} />
                  <p className="text-xl font-light italic text-[#0D47A1] leading-relaxed mb-6">
                    "Mi compromiso es garantizar que cada paciente reciba atención de grado hospitalario en el entorno que más ama: su propio hogar."
                  </p>
                  
                  <div className="space-y-4 text-sm bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex gap-3 items-start">
                      <CheckCircle className="text-[#1976D2] shrink-0 mt-0.5" size={18}/>
                      <p><strong>Formación de Excelencia:</strong> Licenciada en Enfermería por UNITEC, actualmente cursando la Maestría en Dirección de Organizaciones en Salud.</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle className="text-[#1976D2] shrink-0 mt-0.5" size={18}/>
                      <p><strong>Experiencia Crítica:</strong> Amplia trayectoria en Medicina Interna, Urgencias, Quirófano y UCI Pediátrica en hospitales de alta demanda (H. General Homeopático, Materno Infantil 'Miguel Hidalgo').</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle className="text-[#1976D2] shrink-0 mt-0.5" size={18}/>
                      <p><strong>Certificaciones:</strong> Cédula Profesional vigente, Educación en Diabetes e Informática aplicada a la salud.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* --- CONTACTO (FORMULARIO ACTUALIZADO) --- */}
      <section id="contacto" className="py-24 px-6 bg-gray-100">
        <FadeInSection delay={100} direction="up">
          <div className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-200">
            {/* Form */}
            <div className="p-12 md:w-3/5">
              <h3 className="text-3xl font-black text-[#0D47A1] mb-2">Solicita una Cotización</h3>
              <p className="text-gray-500 mb-8 text-sm">Ingresa los datos del paciente para que nuestra coordinadora te envíe un presupuesto exacto.</p>
              
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
                  
                  {/* NUEVOS CAMPOS: UBICACIÓN Y SERVICIO */}
                  <div className="relative">
                    <MapPin className="absolute left-4 top-4 text-gray-400" size={20} />
                    <input type="text" placeholder="Dirección completa (Alcaldía, Colonia, CP)" required className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-[#1976D2] transition-all" />
                  </div>
                  
                  <div className="relative">
                    <select required className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-[#1976D2] transition-all text-gray-600 appearance-none cursor-pointer">
                      <option value="">Selecciona el servicio a cotizar...</option>
                      <option value="Cuidados Básicos y Asistencia">Cuidados Básicos y Asistencia Diaria</option>
                      <option value="Cuidados Clínicos (Inyecciones/Heridas)">Cuidados Clínicos (Inyecciones, Heridas, Sondas)</option>
                      <option value="Servicios Especializados">Servicios Especializados (Post-operatorio, Geriatría)</option>
                      <option value="Sueroterapia a Domicilio">Sueroterapia a Domicilio</option>
                      <option value="Consultoria y Dudas">Consultoría y Resolución de Dudas Médicas</option>
                      <option value="Modalidades de Cobertura (Turnos)">Modalidades de Cobertura (Turnos 8h/12h/24h)</option>
                      <option value="Gestión e Insumos">Gestión Médica o Renta de Insumos</option>
                      <option value="Otro">Otro servicio</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-4 text-gray-400 pointer-events-none" size={20} />
                  </div>

                  <textarea placeholder="Cuéntanos brevemente el diagnóstico del paciente o lo que necesitas..." rows={3} required className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-[#1976D2] transition-all"></textarea>
                  
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
    </div>
  );
}
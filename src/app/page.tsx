"use client";
import { useState, useEffect, useRef } from "react";
import {
  Stethoscope, UserCheck, Users, CheckCircle, Phone, Mail, 
  MessageSquare, Facebook, Instagram, Linkedin, Menu, X, Award, 
  Heart, ShieldCheck, ChevronDown, ChevronUp, Droplet, Baby, ArrowRight
} from "lucide-react";

// --- COMPONENTE DE ANIMACIÓN SCROLL ---
const FadeInSection = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    }, { threshold: 0.1 });
    
    const { current } = domRef;
    if (current) observer.observe(current);
    return () => { if (current) observer.unobserve(current); };
  }, []);

  return (
    <div 
      ref={domRef} 
      className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- ICONOS PERSONALIZADOS (TikTok) ---
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

const theme = {
  primary: "bg-[#1976D2]",
  primaryText: "text-[#1976D2]",
  button: "bg-[#1976D2] text-white font-bold rounded-lg px-6 py-3 shadow-lg hover:bg-[#1565C0] transition-all transform hover:scale-105",
};

const CONTACT_INFO = {
  phone: "+52 55 2495 9599",
  phoneRaw: "525524959599",
  email: "aliciarenteriamarim@gmail.com",
  location: "CDMX y Zona Metropolitana",
  username: "Curae.com"
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [enviado, setEnviado] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const whatsappLink = `https://wa.me/${CONTACT_INFO.phoneRaw}?text=Hola%20Curae,%20solicito%20información%20sobre%20sus%20servicios`;

  const servicios = [
    {
      title: "Post-Operatorios",
      icon: <Stethoscope size={20} />,
      img: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800",
      content: (
        <ul className="space-y-3 text-gray-600">
          <p className="font-semibold text-blue-900 mb-2">Ideal para pacientes recién salidos de cirugía. Evita complicaciones.</p>
          <li className="flex gap-2"><CheckCircle size={18} className="text-green-500 shrink-0"/> <strong>Curación de heridas:</strong> Manejo de suturas, drenajes e infecciones.</li>
          <li className="flex gap-2"><CheckCircle size={18} className="text-green-500 shrink-0"/> <strong>Medicamentos:</strong> Aplicación de sueros (venoclisis) e inyecciones.</li>
          <li className="flex gap-2"><CheckCircle size={18} className="text-green-500 shrink-0"/> <strong>Manejo del dolor:</strong> Monitoreo y ajuste analgésico.</li>
        </ul>
      )
    },
    {
      title: "Adulto Mayor",
      icon: <UserCheck size={20} />,
      img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800",
      content: (
        <ul className="space-y-3 text-gray-600">
          <p className="font-semibold text-blue-900 mb-2">Autonomía y calidad de vida con enfoque preventivo.</p>
          <li className="flex gap-2"><CheckCircle size={18} className="text-green-500 shrink-0"/> <strong>Asistencia diaria:</strong> Baño en cama o ducha, higiene y alimentación.</li>
          <li className="flex gap-2"><CheckCircle size={18} className="text-green-500 shrink-0"/> <strong>Enfermedades crónicas:</strong> Control de glucosa, presión y saturación.</li>
          <li className="flex gap-2"><CheckCircle size={18} className="text-green-500 shrink-0"/> <strong>Prevención:</strong> Cambios posturales y cuidado de la piel.</li>
        </ul>
      )
    },
    {
      title: "Enfermería Especializada",
      icon: <ShieldCheck size={20} />,
      img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800",
      content: (
        <ul className="space-y-3 text-gray-600">
          <p className="font-semibold text-blue-900 mb-2">Servicios técnicos puntuales por profesionales certificados.</p>
          <li className="flex gap-2"><CheckCircle size={18} className="text-green-500 shrink-0"/> <strong>Sondas:</strong> Instalación y cuidado (Foley, Nasogástrica, Gastrostomía).</li>
          <li className="flex gap-2"><CheckCircle size={18} className="text-green-500 shrink-0"/> <strong>Terapia respiratoria:</strong> Nebulizaciones y oxígeno.</li>
          <li className="flex gap-2"><CheckCircle size={18} className="text-green-500 shrink-0"/> <strong>Cuidados paliativos:</strong> Confort en etapas avanzadas de enfermedad.</li>
        </ul>
      )
    },
    {
      title: "Materno-Infantiles",
      icon: <Baby size={20} />,
      img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800",
      content: (
        <ul className="space-y-3 text-gray-600">
          <p className="font-semibold text-blue-900 mb-2">Apoyo experto para mamá y el nuevo integrante.</p>
          <li className="flex gap-2"><CheckCircle size={18} className="text-green-500 shrink-0"/> <strong>Lactancia:</strong> Asesoría en técnicas de agarre y cuidado del pecho.</li>
          <li className="flex gap-2"><CheckCircle size={18} className="text-green-500 shrink-0"/> <strong>Recién nacido:</strong> Baño de sol, cordón umbilical y crecimiento.</li>
          <li className="flex gap-2"><CheckCircle size={18} className="text-green-500 shrink-0"/> <strong>Recuperación:</strong> Cuidados post-parto o post-cesárea.</li>
        </ul>
      )
    },
    {
      title: "Sueroterapia",
      icon: <Droplet size={20} />,
      img: "https://images.unsplash.com/photo-1631815587646-b85a1bb02246?q=80&w=800",
      content: (
        <div className="space-y-3 text-gray-600">
          <p className="font-semibold text-blue-900">Revitaliza tu cuerpo desde casa. Absorción al 100%.</p>
          <p className="text-sm border-l-4 border-blue-500 pl-3 italic bg-blue-50 p-2 rounded">
            <strong>Modalidades:</strong> Sesión Única de Rescate, Planes de Bienestar (Packs) y Sueroterapia por Prescripción Médica.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-xs">
            <div className="p-3 bg-white border border-gray-100 rounded-lg shadow-sm"><strong>Hidratación Plus:</strong> Reposición rápida de líquidos.</div>
            <div className="p-3 bg-white border border-gray-100 rounded-lg shadow-sm"><strong>Inmuno-Boost:</strong> Vit C, Zinc, Selenio. Sube defensas.</div>
            <div className="p-3 bg-white border border-gray-100 rounded-lg shadow-sm"><strong>Detox & Glow:</strong> Glutatión para limpiar hígado y piel.</div>
            <div className="p-3 bg-white border border-gray-100 rounded-lg shadow-sm"><strong>Resaca Relief:</strong> Hidratación + protector gástrico.</div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="font-sans text-gray-900 scroll-smooth bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <LogoCurae />
            <div className="flex flex-col">
              <span className="font-black text-xl leading-none text-[#0D47A1] tracking-tight">CURAE</span>
              <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Agencia de Enfermería</span>
            </div>
          </div>
          <ul className="hidden md:flex items-center gap-8">
            <li><a href="#servicios" className="hover:text-blue-600 font-medium text-sm transition-colors">Servicios</a></li>
            <li><a href="#nosotros" className="hover:text-blue-600 font-medium text-sm transition-colors">Nosotros</a></li>
            <li><a href="#contacto" className={theme.button}>Contacto</a></li>
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
            <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="text-blue-600">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-28 px-6 bg-gradient-to-b from-blue-50 to-white overflow-hidden text-center">
        <FadeInSection>
          <div className="max-w-4xl mx-auto z-10 relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold text-blue-700 bg-blue-100 rounded-full uppercase tracking-wider shadow-sm">
              <Heart size={14} className="text-red-500 animate-pulse" /> Cuidado Profesional en tu Hogar
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-blue-900 mb-6 leading-[1.1] tracking-tight">
              Transformamos la recuperación en <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">bienestar</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed font-light max-w-3xl mx-auto">
              En <strong>Curae</strong>, entendemos que no hay mejor lugar para sanar que el propio hogar. Brindamos tranquilidad a las familias y dignidad a nuestros pacientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#servicios" className="px-8 py-4 bg-white text-blue-900 border-2 border-blue-100 font-bold rounded-xl shadow-md hover:border-blue-300 transition-all flex items-center gap-2">
                Ver Menú de Servicios <ArrowRight size={18} />
              </a>
              <a href={whatsappLink} className="px-8 py-4 bg-[#1976D2] text-white font-bold rounded-xl shadow-lg hover:bg-blue-800 transition-all transform hover:scale-105 flex items-center gap-2">
                Agendar Valoración
              </a>
            </div>
          </div>
        </FadeInSection>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-blue-200 rounded-full filter blur-[100px] opacity-20 -z-10"></div>
      </section>

      {/* Interactive Services Section */}
      <section id="servicios" className="py-24 px-6 bg-white">
        <FadeInSection>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-4">Nuestros Servicios a Domicilio</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">Dividimos nuestra atención en áreas clave para cubrir cada necesidad específica con precisión.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Tabs Column */}
              <div className="w-full lg:w-1/3 flex flex-col gap-3">
                {servicios.map((srv, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`flex items-center gap-4 p-5 rounded-2xl text-left transition-all duration-300 border-2 ${activeTab === idx ? 'border-blue-500 bg-blue-50 shadow-md transform scale-105' : 'border-transparent bg-gray-50 hover:bg-gray-100'}`}
                  >
                    <div className={`p-3 rounded-xl ${activeTab === idx ? 'bg-blue-500 text-white' : 'bg-white text-blue-600 shadow-sm'}`}>
                      {srv.icon}
                    </div>
                    <span className={`font-bold text-lg ${activeTab === idx ? 'text-blue-900' : 'text-gray-600'}`}>
                      {srv.title}
                    </span>
                  </button>
                ))}
              </div>

              {/* Content Column */}
              <div className="w-full lg:w-2/3 bg-white border border-gray-100 rounded-[2rem] shadow-2xl overflow-hidden min-h-[400px] flex flex-col md:flex-row">
                <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                  <img 
                    src={servicios[activeTab].img} 
                    alt={servicios[activeTab].title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end p-6">
                    <h3 className="text-2xl font-black text-white">{servicios[activeTab].title}</h3>
                  </div>
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center bg-gray-50/50">
                  <div className="animate-fade-in">
                    {servicios[activeTab].content}
                  </div>
                  <a href={whatsappLink} className="mt-8 text-blue-600 font-bold flex items-center gap-2 hover:text-blue-800 transition-colors">
                    Solicitar este servicio <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <FadeInSection delay={200}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-16">¿Por qué elegir nuestra Agencia?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { t: "Personal Verificado", d: "Filtros estrictos de antecedentes y títulos profesionales." },
                { t: "Atención 24/7", d: "Disponibilidad total en turnos de 8, 12 o 24 horas." },
                { t: "Reportes Clínicos", d: "Bitácora diaria de signos vitales para el médico tratante." },
                { t: "Enfoque Humano", d: "No solo curamos, acompañamos con empatía y respeto." }
              ].map((item, i) => (
                <div key={i} className="bg-blue-800/50 p-8 rounded-3xl border border-blue-700 hover:bg-blue-800 transition-colors">
                  <CheckCircle size={32} className="text-teal-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{item.t}</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Nosotros Section */}
      <section id="nosotros" className="py-24 px-6 bg-white overflow-hidden">
        <FadeInSection>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="w-full md:w-1/2 relative flex justify-center">
                <div className="absolute inset-0 bg-blue-100 rounded-full filter blur-3xl opacity-50 transform -translate-x-10 translate-y-10"></div>
                <img 
                  src="/alicia.jpg" 
                  className="relative z-10 w-full max-w-sm rounded-[2.5rem] shadow-2xl border-8 border-white object-cover aspect-[4/5]"
                  alt="Enf. Alicia Rentería - Curae"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=600"; }}
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-gray-100">
                  <div className="bg-blue-100 p-2 rounded-full text-blue-600"><Award size={24}/></div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Directora Clínica</p>
                    <p className="font-black text-blue-900">Enf. Alicia Rentería</p>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold text-teal-700 bg-teal-100 rounded-full uppercase tracking-wider">
                  Nuestro Equipo
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-6 leading-tight">
                  La enfermería no es solo una carrera, es el <span className="text-blue-600">arte de cuidar la vida</span> en su estado más vulnerable.
                </h2>
                
                {/* INFORMACIÓN DEL CV DE ALICIA */}
                <div className="space-y-4 text-gray-600 mb-8 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-blue-900 mb-2 border-b pb-2">Perfil Profesional: Enf. Alicia Rentería Marín</h3>
                  <p className="text-sm leading-relaxed">
                    <strong>Formación Académica:</strong> Licenciada en Enfermería por la Universidad Tecnológica de México (UNITEC). Actualmente cursando la Maestría en Dirección de Organizaciones en Salud en la misma institución. <br/><br/>
                    <strong>Experiencia Clínica:</strong> Amplia trayectoria en entornos hospitalarios de alta demanda (Hospital General Homeopático, Hospital Materno Infantil 'Miguel Hidalgo', entre otros), destacando en áreas de Medicina Interna, Urgencias, Quirófano, Tococirugía y UCI Pediátrica. <br/><br/>
                    <strong>Certificaciones:</strong> Capacitación especializada en manejo de pacientes críticos, procedimientos quirúrgicos y educación en diabetes. <br/><br/>
                    <strong>Filosofía Curae:</strong> "Mi compromiso es combinar el más alto rigor clínico con un trato humano y empático, garantizando que cada paciente reciba atención de grado hospitalario en el entorno que más ama: su propio hogar."
                  </p>
                </div>

                <a href={whatsappLink} className={theme.button + " inline-block"}>¿Necesitas asesoría personalizada?</a>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Contact & Social Section */}
      <section id="contacto" className="py-20 px-6 bg-gray-50">
        <FadeInSection delay={100}>
          <div className="max-w-5xl mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
            {/* Form Side */}
            <div className="p-12 md:w-3/5">
              <h3 className="text-2xl font-black text-blue-900 mb-2">Diseñemos un plan a la medida</h3>
              <p className="text-gray-500 mb-8 text-sm">Cada paciente es un mundo. Déjanos tus datos y te contactaremos de inmediato.</p>
              
              {enviado ? (
                <div className="text-center py-12 bg-green-50 rounded-2xl border border-green-100">
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4 animate-bounce" />
                  <h3 className="text-2xl font-bold text-green-900">Solicitud Enviada</h3>
                  <p className="text-green-700 mt-2">En breve nos comunicaremos contigo.</p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setEnviado(true); }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Nombre de contacto" required className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                    <input type="tel" placeholder="Teléfono" required className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                  </div>
                  <textarea placeholder="Cuéntanos brevemente qué tipo de cuidado necesitas..." rows={4} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"></textarea>
                  <button type="submit" className="w-full bg-[#0D47A1] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-blue-800 transition-all transform hover:-translate-y-1">
                    Enviar Solicitud
                  </button>
                </form>
              )}
            </div>

            {/* Info Side */}
            <div className="bg-[#1976D2] p-12 text-white md:w-2/5 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full filter blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Contáctanos</h3>
                <div className="space-y-6 mb-12">
                  <a href={whatsappLink} className="flex items-center gap-4 hover:text-blue-200 transition-colors group">
                    <div className="bg-white/10 p-3 rounded-xl group-hover:bg-white/20 transition-colors"><Phone size={20} /></div>
                    <span className="font-medium">{CONTACT_INFO.phone}</span>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-3 rounded-xl"><Mail size={20} /></div>
                    <span className="text-sm break-all">{CONTACT_INFO.email}</span>
                  </div>
                </div>

                {/* Redes Sociales - Username Curae.com */}
                <div>
                  <p className="text-sm font-bold text-blue-200 uppercase tracking-widest mb-4">Síguenos en redes</p>
                  <p className="text-lg font-black mb-6">@{CONTACT_INFO.username}</p>
                  <div className="flex flex-wrap gap-4">
                    <a href="#" className="bg-white/10 p-3 rounded-xl hover:bg-white hover:text-[#1976D2] transition-all transform hover:scale-110"><Instagram size={20} /></a>
                    <a href="#" className="bg-white/10 p-3 rounded-xl hover:bg-white hover:text-[#1976D2] transition-all transform hover:scale-110"><TikTokIcon size={20} /></a>
                    <a href="#" className="bg-white/10 p-3 rounded-xl hover:bg-white hover:text-[#1976D2] transition-all transform hover:scale-110"><Linkedin size={20} /></a>
                    <a href="#" className="bg-white/10 p-3 rounded-xl hover:bg-white hover:text-[#1976D2] transition-all transform hover:scale-110"><Facebook size={20} /></a>
                    <a href={whatsappLink} className="bg-white/10 p-3 rounded-xl hover:bg-[#25D366] hover:text-white transition-all transform hover:scale-110"><MessageSquare size={20} /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Footer Minimalista */}
      <footer className="py-10 bg-white border-t border-gray-100 text-center">
        <LogoCurae className="mx-auto mb-4 opacity-50 grayscale hover:grayscale-0 transition-all" />
        <p className="font-bold text-gray-800 uppercase tracking-widest text-xs">Curae | Agencia de Enfermería</p>
        <p onClick={() => setIsPrivacyOpen(true)} className="text-blue-500 text-xs mt-4 cursor-pointer hover:underline">Aviso de Privacidad</p>
        <p className="text-gray-400 text-[10px] mt-2">© {new Date().getFullYear()} CDMX, México.</p>
      </footer>

      {/* Modal Privacidad */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl relative text-center">
            <button onClick={() => setIsPrivacyOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
              <X size={24} />
            </button>
            <h3 className="text-xl font-bold text-blue-900 mb-4">Aviso de Privacidad</h3>
            <p className="text-xs text-gray-600 leading-relaxed">Sus datos personales serán tratados bajo estricta confidencialidad por la Agencia Curae conforme a la LFPDPPP de México.</p>
            <button onClick={() => setIsPrivacyOpen(false)} className="w-full mt-6 bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors">Entendido</button>
          </div>
        </div>
      )}
    </div>
  );
}
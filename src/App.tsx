import React, { useState, useEffect } from 'react';
import { Clock, MapPinnedIcon, Phone } from 'lucide-react';
import { Mail} from 'lucide-react'
import truckImage from '/assets/truck-hero-hq.jpg';
import truckAboutImage from '/assets/truck-about-hq.jpg';
import logoImage from '/assets/logo.png';


// Icons
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.12 1.528 5.849L0 24l6.335-1.508A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.955 0-3.785-.536-5.351-1.468l-.384-.225-3.981.947.964-3.879-.247-.401A9.943 9.943 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

const TruckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l1 1h2m6-1h2m4 0h2l1-1V9a1 1 0 00-1-1h-3L13 4z" />
  </svg>
);

const GrainIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
  </svg>
);

const WarehouseIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const MonitorIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const MapPinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const App = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = ['home', 'about', 'solutions', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Leaves a 20% active area in the middle
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        } else {
          // Clear active section if it's the one that just left the visible area
          setActiveSection((prev) => (prev === entry.target.id ? '' : prev));
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const getNavLinkClass = (id: string) => {
    return activeSection === id 
      ? "text-accent font-bold text-sm tracking-wide transition-colors" 
      : "text-white/80 hover:text-accent font-bold text-sm tracking-wide transition-colors";
  };

  return (
    <div className="font-inter">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 glass-nav border-b border-white/10">
        <div className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="3S Logo" className="w-32 h-32 object-contain" />
            <div className="flex flex-col">
              <span className="text-white font-extrabold text-lg leading-none tracking-tight">3S AGÊNCIA DE CARGAS</span>
              <span className="text-white/60 text-[10px] font-bold tracking-widest leading-none mt-1">Transporte e Logística</span>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#home" className={getNavLinkClass('home')}>HOME</a>
            <a href="#about" className={getNavLinkClass('about')}>QUEM SOMOS</a>
            <a href="#solutions" className={getNavLinkClass('solutions')}>SOLUÇÕES</a>
            <a href="#contact" className={getNavLinkClass('contact')}>CONTATO</a>
          </nav>
          <a 
            href="https://wa.me/65999829715" 
            target="_blank" 
            rel="noopener noreferrer"            
          >
            <button className="bg-accent hover:bg-yellow-400 text-primary px-6 py-2.5 rounded-sm font-black text-sm tracking-wider transition-all shadow-xl hover:shadow-accent/40">
              SOLICITAR COTAÇÃO
            </button>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 parallax-hero"
          style={{ backgroundImage: `url(${truckImage})` }}
        >
          <div className="absolute inset-0 bg-hero-overlay"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-7xl font-black text-accent max-w-5xl leading-tight md:leading-[1.1] mb-6 drop-shadow-2xl">
            Confiança, agilidade e segurança para você e sua carga
          </h1>
          <p className="text-white/90 text-sm md:text-lg font-bold tracking-[0.2em] uppercase mb-10 max-w-3xl">
            Especialistas no transporte de grãos e logística pesada
          </p>
          <a href="#solutions" >
            <button className="bg-accent hover:bg-yellow-400 text-primary px-10 py-4 font-black text-sm tracking-widest transition-all shadow-2xl hover:scale-105 active:scale-95">
              NOSSOS SERVIÇOS
            </button>
          </a>
        </div>
        <a 
          href="https://wa.me/65999829715" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-90 transition-transform"
        >
          <WhatsAppIcon />
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-[#e2e2e2] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-2 bg-accent opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
            <img 
              src={truckAboutImage} 
              alt="Sobre a 3S Agência - Logística de Alta Performance" 
              className="relative rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div>
            <div className="mb-2 flex items-center gap-4">
              <span className="text-text-gray font-bold text-xs tracking-widest uppercase">Eficiência em Logística</span>
            </div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1 h-12 bg-accent"></div>
              <h2 className="text-4xl md:text-5xl font-black text-primary">Quem Somos</h2>
            </div>
            <div className="space-y-6 text-text-gray leading-relaxed text-lg">
              <p>
                Fundada com o propósito de excelência no segmento de logística nacional, a <strong className="text-primary">3S Agência de Cargas</strong> realiza operações de transporte de carga com foco no modal rodoviário, atendendo todo o território brasileiro.
              </p>
              <p>
                Especializada no setor de agronegócio, com foco no transporte de soja e cereais, contamos com uma frota de caminhões graneleiros e uma equipe altamente qualificada, pronta para oferecer as melhores soluções de transporte e logística.
              </p>
              <p>
                Nosso compromisso é com a segurança e a agilidade em cada entrega, garantindo a satisfação total de nossos parceiros e o escoamento eficiente da produção.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flow Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-accent mb-4">Conheça nosso fluxo de entrega</h2>
          <p className="text-xs md:text-sm font-bold tracking-widest uppercase opacity-60 mb-16">Otimização ponta a ponta em cada remessa</p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 lg:gap-8">
            {[
              { num: '01', title: 'Produtor', desc: 'Disponibiliza a carga nos armazéns/operador que coleta no campo.', icon: <GrainIcon className="w-8 h-8"/> },
              { num: '02', title: 'Agência de Cargas', desc: 'Verificação de documentação e coordenação logística imediata.', icon: <div className="w-8 h-8 rounded-full border-2 border-currentColor flex items-center justify-center font-bold">✓</div> },
              { num: '03', title: 'Transporte', desc: 'Caminhões modernos transportam a carga via rodoviária.', icon: <TruckIcon className="w-8 h-8"/> },
              { num: '04', title: 'Monitoramento', desc: 'Acompanhamento em tempo real em todo território nacional.', icon: <MonitorIcon className="w-8 h-8"/> },
              { num: '05', title: 'Destino', desc: 'Entrega final em portos, armazéns ou indústrias.', icon: <MapPinIcon className="w-8 h-8"/> },
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="relative mb-6">                  
                  <div className="w-20 h-20 rounded-full border-2 border-accent text-accent flex items-center justify-center relative z-10 bg-primary">
                    {step.icon}
                  </div>
                </div>
                <h3 className="font-black text-accent uppercase text-xs tracking-wider mb-2">{step.title}</h3>
                <p className="text-[10px] uppercase font-bold text-white/40 leading-relaxed max-w-[120px] mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="solutions" className="section-padding relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544411047-c491584222f1?auto=format&fit=crop&q=80&w=2000" 
            alt="Services background" 
            className="w-full h-full object-cover opacity-5 grayscale"
          />
          <div className="absolute inset-0 bg-primary/95"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-accent mb-20 tracking-widest uppercase">Nossos Serviços</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ServiceCard 
              type="TRANSPORTE" 
              title="Cargas Pesadas" 
              icon={<TruckIcon className="w-12 h-12"/>}
            />
            <ServiceCard 
              type="LOGÍSTICA DE" 
              title="Grãos e Soja" 
              icon={<GrainIcon className="w-12 h-12"/>}
            />
            <ServiceCard 
              type="OPERAÇÕES EM" 
              title="Armazéns" 
              icon={<WarehouseIcon className="w-12 h-12"/>}
            />
          </div>
          
          <a 
            href="https://wa.me/65999829715" 
            target="_blank" 
            rel="noopener noreferrer"            
          >
            <button className="bg-accent hover:bg-yellow-400 text-primary px-12 py-5 font-black text-sm tracking-widest shadow-2xl transition-all">
              FAÇA SUA COTAÇÃO
            </button>
          </a>
        </div>
      </section>

      {/* Segments Section */}
      <section className="section-padding bg-accent">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <p className="text-text-gray font-bold text-xs tracking-[0.3em] uppercase mb-4 opacity-50">Especialistas por segmento</p>
          <h2 className="text-3xl md:text-[2.75rem] font-black text-primary mb-20 leading-tight">Como a 3S pode ajudar você</h2>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <SegmentCard title="Indústria" desc="Processos otimizados" icon={<WarehouseIcon className="w-8 h-8"/>} />
            <SegmentCard title="Varejo" desc="Entrega no prazo" icon={<div className="font-black text-2xl">V</div>} />
            <SegmentCard title="Agronegócio" desc="Logística do campo" icon={<GrainIcon className="w-8 h-8"/>} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="grid lg:grid-cols-2 bg-accent">
        <div className="section-padding px-4 md:px-16 lg:px-24">
          <h2 className="text-4xl font-black text-primary mb-10">Fale Conosco</h2>
          <form className="space-y-6">
            <input 
              type="text" 
              placeholder="Seu Nome Completo" 
              className="w-full border-b-2 border-primary/10 py-4 focus:border-primary outline-none transition-colors font-bold text-sm"
            />
            <div className="grid md:grid-cols-2 gap-6">
              <input 
                type="email" 
                placeholder="E-mail Corporativo" 
                className="w-full border-b-2 border-primary/10 py-4 focus:border-primary outline-none transition-colors font-bold text-sm"
              />
              <input 
                type="tel" 
                placeholder="Telefone de Contato" 
                className="w-full border-b-2 border-primary/10 py-4 focus:border-primary outline-none transition-colors font-bold text-sm"
              />
            </div>
            <textarea 
              placeholder="Como podemos ajudar sua logística?" 
              // rows={} 
              className="w-full border-b-2 border-primary/10 py-4 focus:border-primary outline-none transition-colors font-bold text-sm resize-none"
            ></textarea>
            <button className="bg-primary hover:bg-black text-white px-10 py-4 font-black text-sm tracking-widest transition-all">
              ENVIAR MENSAGEM
            </button>
          </form>
        </div>
        <div className="section-padding px-4 md:px-16 lg:px-24 border-l border-l-primary/20 text-primary flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-14">
            <img src={logoImage} alt="3S Logo" className="w-12 h-12 object-contain" />
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl leading-none tracking-tight">3S Agência</span>
              <span className="text-primary/40 text-xs uppercase font-bold tracking-[0.2em] mt-1">De Cargas e Logística</span>
            </div>
          </div>
          
          <div className="space-y-10">
            <ContactInfo 
              label="Telefones" 
              value="(65) 3667-1576 / (65) 99982-9715" 
              icon={<div className="w-10 h-10 border border-primary/30 flex items-center justify-center text-primary"><Phone size={'1em'} /></div>} 
            />
            <ContactInfo 
              label="E-mail" 
              value="agenciadecargas3s@hotmail.com" 
              icon={<div className="w-10 h-10 border border-primary/30 flex items-center justify-center text-primary"><Mail size={'1em'} /></div>} 
            />
            <ContactInfo 
              label="Endereço" 
              value="Rodovia BR 364, Km 401, Sala 04 (anexo ao Posto Sao Mateus) - Distrito Industrial - Cuiabá-MT, 78015-285" 
              icon={<div className="w-10 h-10 border border-primary/30 flex items-center justify-center text-primary"><MapPinnedIcon size={'1em'} /></div>} 
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-[#081810] text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
               <div className="flex items-center gap-3 mb-8">
                <img src={logoImage} alt="3S Logo" className="w-16 h-16 object-contain" />
                <span className="font-extrabold text-md leading-none">3S AGÊNCIA DE CARGAS</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed max-w-sm">
                Sua parceira estratégica em logística e transportes, especializada em escoamento de safras e logística pesada. Conectamos o campo à indústria com segurança total.
              </p>
            </div>
            <div>
              <h4 className="text-accent font-black text-xs tracking-widest uppercase mb-8">Mapa do Site</h4>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
                <li><a href="#home" className={activeSection === 'home' ? 'text-accent' : 'hover:text-accent transition-colors'}>Home</a></li>
                <li><a href="#about" className={activeSection === 'about' ? 'text-accent' : 'text-white/40 hover:text-accent transition-colors'}>Quem Somos</a></li>
                <li><a href="#solutions" className={activeSection === 'solutions' ? 'text-accent' : 'text-white/40 hover:text-accent transition-colors'}>Soluções Logísticas</a></li>
                <li><a href="#contact" className={activeSection === 'contact' ? 'text-accent' : 'text-white/40 hover:text-accent transition-colors'}>Fale Conosco</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-accent font-black text-xs tracking-widest uppercase mb-8">Suporte</h4>
              <ul className="space-y-4 text-white/40 text-xs font-bold tracking-widest uppercase">
                <li className="flex items-center gap-2">
                  <span className="text-accent"><Phone size={'1em'} /></span> (65) 3667-1576 / (65) 99982-9715
                </li>
                <li className="flex items-center gap-2 font-lowercase lowercase">
                  <span className="text-accent"><Mail size={'1em'} /></span> agenciadecargas3s@hotmail.com
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent"><Clock size={'1em'} /></span> Seg - Sex: 08h às 18h
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/15 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-medium tracking-widest uppercase text-white/40">
            <p>Copyright © {new Date().getFullYear()} 3S Agência de Cargas. Todos os direitos reservados.</p>
            {/* <p>Desenvolvido por <span className="text-accent">ia 3S</span></p> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

const ServiceCard = ({ type, title, icon }: { type: string, title: string, icon: React.ReactNode }) => (
  <div className="bg-white p-12 text-center group service-card-shadow hover:-translate-y-2 transition-all duration-500 rounded-sm">
    <div className="w-20 h-20 bg-gray-50 group-hover:bg-primary group-hover:text-accent transition-colors flex items-center justify-center mx-auto mb-10 rounded-lg text-text-gray border border-gray-100 group-hover:border-primary">
      {icon}
    </div>
    <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-text-gray/50 mb-2 block">{type}</span>
    <h3 className="text-2xl font-black text-primary mb-10">{title}</h3>
    <div className="w-12 h-1 bg-accent mx-auto"></div>
  </div>
);

const SegmentCard = ({ title, desc, icon }: { title: string, desc: string, icon: React.ReactNode }) => (
  <div className="bg-white p-12 text-center shadow-sm hover:shadow-2xl transition-all duration-500 rounded-sm group border border-transparent hover:border-gray-100">
    <div className="w-16 h-16 bg-primary rounded flex items-center justify-center text-accent mx-auto mb-8 shadow-xl group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-black text-primary mb-2 tracking-tight">{title}</h3>
    <p className="text-[10px] uppercase font-black tracking-widest text-text-gray/40">{desc}</p>
  </div>
);

const ContactInfo = ({ label, value, icon }: { label: string, value: string, icon: React.ReactNode }) => (
  <div className="flex gap-6 items-center">
    {icon}
    <div>
      <span className="block text-[10px] uppercase font-bold tracking-[0.2em] text-primary/40 mb-1">{label}</span>
      <span className="font-medium text-md md:text-md text-primary/90">{value}</span>
    </div>
  </div>
);

export default App;

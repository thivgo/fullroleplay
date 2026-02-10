import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  User,
  Shield, 
  Menu, 
  X, 
  Disc,
  Youtube,
  Twitter,
  Check,
  Star,
  ChevronRight,
  Gem,
  Crown,
  Crosshair,
  Zap,
  Radio,
  Languages,
  Globe
} from 'lucide-react';

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800";

const TRANSLATIONS = {
  en: {
    nav: {
      controlPanel: 'Control Panel',
      subscriptions: 'Subscriptions',
      applications: 'Applications',
      support: 'Support',
      joinQueue: 'Join Queue',
      roleplay: 'Roleplay'
    },
    hero: {
      status: 'IN DEVELOPMENT',
      titleLine1: 'JOIN A WORLD OF',
      titleLine2: 'UNLIMITED',
      titleLine3: 'POSSIBILITIES',
      description: 'Unleash your imagination, create unforgettable stories and connect with other roleplayers in our vibrant community site!',
      startPlaying: 'Start Playing',
      watchTrailer: 'Watch Trailer',
      liveStatus: 'Status',
      serverName: 'FullRP Brazil' // Keep Brazil as it's the server name context
    },
    about: {
      whoWeAre: 'Who We Are',
      title: 'About Us',
      p1: 'FULL RP is a roleplay community built on a custom framework that puts quality and performance at the forefront. Everything we do is built by our developers for the community.',
      p2: 'We work closely with the community at large to develop new features and content that shape our future into something all parties can enjoy and be proud of.',
      joinDiscord: 'Join Discord',
      readRules: 'Read Rules',
      img1: 'Immersive World',
      img2: 'Street Life',
      img3: 'Luxury Life'
    },
    subscriptions: {
      title: 'Subscriptions',
      subtitle: 'Choose your membership and get many benefits to use in the city.',
      priceTitle: 'PRICE',
      subscribe: 'Subscribe',
      includes: 'Includes:',
      includedFeatures: 'INCLUDED FEATURES',
      currency: 'BRL',
      silver: {
        name: 'Silver',
        desc: '+25 Priority in queue (stacks with other sources).',
        features: [
          "Exclusive Badge for Silver users on site and Discord",
          "Priority valid on Full RP",
          "Must be in Discord to redeem",
          "Open ticket if issues arise"
        ]
      },
      gold: {
        name: 'Gold',
        desc: '+40 Priority in queue (stacks with other sources).',
        features: [
          "Exclusive Badge for Gold users on site and Discord",
          "Priority valid on Full RP",
          "Must be in Discord to redeem",
          "Open ticket if issues arise"
        ]
      },
      diamond: {
        name: 'Diamond',
        desc: '+60 Priority in queue (stacks with other sources).',
        features: [
          "Exclusive Badge for Diamond users on site and Discord",
          "Priority valid on Full RP",
          "Must be in Discord to redeem",
          "Open ticket if issues arise"
        ]
      }
    },
    jobs: {
      badge: 'Public Services',
      title: 'Job Applications',
      description: 'Full Roleplay is a roleplay community that is built on a custom framework that puts quality and performance at the forefront. Everything we do is built by our developers for the community. We work closely with the community to develop new resources and content that shape our future into something all parties can enjoy and be proud of.',
      ems: 'EMS',
      lawyer: 'LAWYER',
      police: 'POLICE',
      clickToApply: 'Click to Apply'
    },
    footer: {
      business: 'For Business Inquiries:',
      serverStatus: 'Current Server Status',
      links: {
        tos: 'Terms of Service',
        privacy: 'Privacy Policy',
        rules: 'Rules',
        store: 'Store',
        refund: 'Refund Policy'
      }
    }
  },
  pt: {
    nav: {
      controlPanel: 'Painel de Controle',
      subscriptions: 'Assinaturas',
      applications: 'Candidaturas',
      support: 'Suporte',
      joinQueue: 'Entrar na Fila',
      roleplay: 'Roleplay'
    },
    hero: {
      status: 'EM DESENVOLVIMENTO',
      titleLine1: 'ENTRE EM UM MUNDO DE',
      titleLine2: 'POSSIBILIDADES',
      titleLine3: 'ILIMITADAS',
      description: 'Liberte sua imaginação, crie histórias inesquecíveis e conecte-se com outros jogadores em nossa vibrante comunidade!',
      startPlaying: 'Começar a Jogar',
      watchTrailer: 'Ver Trailer',
      liveStatus: 'Status',
      serverName: 'FullRP Brasil'
    },
    about: {
      whoWeAre: 'Quem Somos',
      title: 'Sobre Nós',
      p1: 'FULL RP é uma comunidade de roleplay construída em uma estrutura personalizada que prioriza qualidade e desempenho. Tudo o que fazemos é construído pelos nossos desenvolvedores para a comunidade.',
      p2: 'Trabalhamos em estreita colaboração com a comunidade para desenvolver novos recursos e conteúdos que moldam nosso futuro em algo que todos possam desfrutar e se orgulhar.',
      joinDiscord: 'Entrar no Discord',
      readRules: 'Ler Regras',
      img1: 'Mundo Imersivo',
      img2: 'Vida Urbana',
      img3: 'Vida de Luxo'
    },
    subscriptions: {
      title: 'Assinaturas',
      subtitle: 'Escolha sua assinatura e obtenha muitos benefícios para usar na cidade.',
      priceTitle: 'PREÇO',
      subscribe: 'Assinar',
      includes: 'Inclui:',
      includedFeatures: 'BENEFÍCIOS DA ASSINATURA',
      currency: 'BRL',
      silver: {
        name: 'Prata',
        desc: '+25 Prioridade na fila (acumula com outras fontes).',
        features: [
          "Distintivo exclusivo para usuários Prata no site e Discord",
          "Prioridade válida no Full RP",
          "Deve estar no Discord para resgatar",
          "Abra ticket se houver problemas"
        ]
      },
      gold: {
        name: 'Ouro',
        desc: '+40 Prioridade na fila (acumula com outras fontes).',
        features: [
          "Distintivo exclusivo para usuários Ouro no site e Discord",
          "Prioridade válida no Full RP",
          "Deve estar no Discord para resgatar",
          "Abra ticket se houver problemas"
        ]
      },
      diamond: {
        name: 'Diamante',
        desc: '+60 Prioridade na fila (acumula com outras fontes).',
        features: [
          "Distintivo exclusivo para usuários Diamante no site e Discord",
          "Prioridade válida no Full RP",
          "Deve estar no Discord para resgatar",
          "Abra ticket se houver problemas"
        ]
      }
    },
    jobs: {
      badge: 'Serviços Públicos',
      title: 'Candidaturas',
      description: 'Full Roleplay é uma comunidade de roleplay construída em uma estrutura personalizada que prioriza a qualidade e o desempenho. Tudo o que fazemos é construído pelos nossos desenvolvedores para a comunidade. Trabalhamos em estreita colaboração com a comunidade para desenvolver novos recursos e conteúdos que moldam nosso futuro em algo que todos possam desfrutar e se orgulhar.',
      ems: 'EMS',
      lawyer: 'ADVOGADO',
      police: 'POLÍCIA',
      clickToApply: 'Clique para Aplicar'
    },
    footer: {
      business: 'Para Negócios:',
      serverStatus: 'Status do Servidor',
      links: {
        tos: 'Terms of Service',
        privacy: 'Política de Privacidade',
        rules: 'Regras',
        store: 'Loja',
        refund: 'Política de Reembolso'
      }
    }
  }
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [playerCount, setPlayerCount] = useState(328);
  const [lang, setLang] = useState('pt');

  const t = TRANSLATIONS[lang];

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'pt' : 'en');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPlayerCount(prev => Math.min(Math.max(prev + (Math.random() > 0.5 ? 1 : -1), 300), 2048));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleImageError = (e) => {
    if (e.target.src !== FALLBACK_IMAGE) {
        e.target.src = FALLBACK_IMAGE;
    }
  };

  return (
    <div className="min-h-screen bg-[#090909] text-white selection:bg-blue-600 selection:text-white pb-20 overflow-x-hidden font-sans">
      
      {/* Navigation */}
      <nav className="border-b border-white/5 bg-[#090909]/95 backdrop-blur-sm sticky top-0 z-50 h-24 flex items-center shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="relative w-10 h-10 transition-transform group-hover:scale-110 duration-300">
                 <svg viewBox="0 0 100 100" className="w-full h-full fill-blue-600 transform -skew-x-12">
                    <path d="M50 0 L63 35 L100 35 L70 58 L82 100 L50 75 L18 100 L30 58 L0 35 L37 35 Z" />
                 </svg>
                 <div className="absolute inset-0 bg-blue-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-header font-black italic tracking-tighter leading-none text-white relative">
                  FULL<span className="text-blue-600">RP</span>
                  <span className="absolute -top-1 -right-2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                </span>
                <span className="text-[10px] font-bold text-gray-500 tracking-[0.3em] uppercase pl-1">{t.nav.roleplay}</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              {[t.nav.controlPanel, t.nav.subscriptions, t.nav.applications, t.nav.support].map((item) => (
                <div key={item} className="relative group">
                  <a
                    href="#"
                    className="text-gray-400 group-hover:text-white font-bold uppercase text-sm tracking-wider font-header transition-colors relative z-10"
                  >
                    {item}
                  </a>
                  <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-4">
               {/* Language Switcher */}
               <button 
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-white transition-colors bg-[#111] px-4 py-2.5 rounded border border-white/10 hover:border-blue-500/50"
               >
                  <Globe size={14} />
                  <span>{lang === 'en' ? 'EN-US' : 'PT-BR'}</span>
               </button>

               <button className="bg-[#1a1a1a] hover:bg-blue-600 border border-white/10 hover:border-blue-500 text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all rounded-sm relative overflow-hidden group">
                 <span className="relative z-10">{t.nav.joinQueue}</span>
                 <div className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out -z-0 opacity-20"></div>
               </button>
            </div>

            <div className="md:hidden flex items-center gap-4">
                <button 
                  onClick={toggleLanguage}
                  className="flex items-center gap-1 text-[10px] font-bold uppercase text-gray-400 hover:text-white"
               >
                  <span>{lang === 'en' ? 'US' : 'BR'}</span>
               </button>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white p-2"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative py-24 lg:py-32 overflow-hidden bg-grid-pattern">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-gray-900">
          <img 
            src="https://blog.fivemods.io/storage/2025/02/2-1-1-1.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-20 animate-pulse-slow"
            onError={handleImageError}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#090909] via-transparent to-[#090909]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#090909] via-transparent to-transparent"></div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none"></div>
        <div className="absolute top-20 left-10 text-white/5 font-header font-black text-9xl select-none -z-10">ROLEPLAY</div>
        <div className="absolute bottom-20 right-10 text-white/5 font-header font-black text-9xl select-none -z-10 text-right">LEGENDS</div>
        
        {/* Floating Shapes */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-ping opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 border border-blue-500/10 rounded-full animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          <div className="relative">
            {/* Corner Markers */}
            <div className="absolute -top-10 -left-10 text-blue-600/30">
               <Crosshair size={40} />
            </div>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-900/30 border border-blue-500/30 rounded text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
               <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span> {t.hero.status}
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-header font-bold uppercase leading-[0.85] tracking-tight mb-8 drop-shadow-2xl">
              {t.hero.titleLine1} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-blue-700 relative">
                {t.hero.titleLine2}
                <svg className="absolute w-full h-3 bottom-2 left-0 -z-10 text-blue-900/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 10 L100 10 L100 0 L0 10 Z" fill="currentColor" />
                </svg>
              </span> <br/>
              {t.hero.titleLine3}
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed font-light mb-8 border-l-4 border-blue-600 pl-6 backdrop-blur-sm">
              {t.hero.description}
            </p>
            
            <div className="flex gap-4">
              <button className="bg-white text-black px-8 py-4 font-header font-bold uppercase tracking-wider hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1 skew-x-[-10deg] shadow-lg shadow-blue-900/20">
                 <span className="skew-x-[10deg] inline-block">{t.hero.startPlaying}</span>
              </button>
              <button className="border border-white/30 text-white px-8 py-4 font-header font-bold uppercase tracking-wider hover:border-white transition-all transform hover:-translate-y-1 skew-x-[-10deg] backdrop-blur-sm">
                 <span className="skew-x-[10deg] inline-block">{t.hero.watchTrailer}</span>
              </button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end items-center">
             {/* 3D Star / Logo Graphic */}
             <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] animate-float">
                {/* Tech Circles Behind */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-dashed border-blue-500/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-white/5 rounded-full"></div>
                
                {/* Subtle Back Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-blue-600/20 blur-[60px] rounded-full pointer-events-none"></div>
                
                <svg viewBox="0 0 512 512" className="w-full h-full drop-shadow-[0_0_35px_rgba(37,99,235,0.5)]">
                   <defs>
                      <linearGradient id="starGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{stopColor:'#60a5fa', stopOpacity:1}} />
                        <stop offset="100%" style={{stopColor:'#2563eb', stopOpacity:1}} />
                      </linearGradient>
                   </defs>
                   
                   {/* Main Star Shape */}
                   <path 
                     fill="url(#starGradient)"
                     d="M256 0l61.8 166.4L496 177l-122 124.6 34.6 182L256 397l-152.6 86.6 34.6-182L16 177l178.2-10.6L256 0zm0 88.6l-37.8 102.2-111 6.6 77.6 79.2-22.4 116.8 93.6-53.2 93.6 53.2-22.4-116.8 77.6-79.2-111-6.6L256 88.6z"
                   />
                </svg>
             </div>
          </div>
        </div>

        {/* Server Status Pill Centered Below */}
        <div className="absolute bottom-0 left-0 w-full flex flex-col items-center justify-center pb-8 z-20">
            <span className="text-blue-500 font-bold uppercase text-[10px] tracking-[0.3em] mb-2 animate-pulse">{t.hero.liveStatus}</span>
            <div className="bg-[#050505]/90 border border-white/10 px-8 py-3 rounded-full flex items-center gap-4 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-blue-500/50 transition-colors cursor-default group">
                <div className="relative">
                   <div className="w-3 h-3 rounded-full bg-blue-600 relative z-10"></div>
                   <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="font-header font-bold text-sm text-white tracking-wide group-hover:text-blue-400 transition-colors">
                  {t.hero.serverName} 
                  <span className="text-gray-500 ml-2 font-mono">{playerCount} / 2048</span>
                </span>
                <Radio size={14} className="text-gray-600" />
            </div>
        </div>
      </div>

      {/* Decorative Divider */}
      <div className="h-2 w-full bg-stripe-pattern border-y border-white/5"></div>

      {/* About Us Mosaic Section */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        
        {/* Decorative Big X */}
        <div className="absolute -right-20 top-20 text-[#111] rotate-12 -z-0">
           <X size={400} strokeWidth={0.5} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            
            {/* Text Side */}
            <div className="lg:w-5/12 pt-8">
              <div className="flex items-center gap-2 mb-4">
                 <div className="w-12 h-1 bg-blue-600"></div>
                 <span className="text-blue-600 font-bold uppercase text-xs tracking-widest">{t.about.whoWeAre}</span>
              </div>
              <h2 className="text-5xl font-header font-bold uppercase text-white mb-8 relative inline-block">
                {t.about.title}
                <span className="absolute -bottom-2 right-0 w-1/2 h-2 bg-white/5 skew-x-12"></span>
              </h2>
              
              <div className="space-y-6 text-gray-400 text-sm leading-7">
                <p>
                  <strong className="text-white">FULL RP</strong> {t.about.p1.substring(7)}
                </p>
                <p>
                  {t.about.p2}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <button className="bg-[#1a1a1a] hover:bg-blue-600 hover:text-white border border-white/10 text-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest transition-all rounded-sm flex items-center justify-center gap-2 group">
                   <Disc size={16} className="text-blue-500 group-hover:text-white transition-colors"/> {t.about.joinDiscord}
                </button>
                <button className="bg-transparent hover:bg-white/5 border border-white/10 text-gray-400 hover:text-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest transition-all rounded-sm">
                  {t.about.readRules}
                </button>
              </div>
            </div>

            {/* Mosaic Images - The "Shard" Layout */}
            <div className="lg:w-7/12 relative h-[600px] flex">
                {/* Wireframe Outline Background for Mosaic */}
                <div className="absolute top-4 left-4 w-full h-full border-2 border-white/5 -z-10 clip-shard-left pointer-events-none"></div>

                {/* Left Shard - City/Atmosphere */}
                <div className="w-5/12 h-full pr-2 pb-2">
                    <div className="w-full h-full clip-shard-left relative group overflow-hidden bg-[#111]">
                        <img 
                          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/576ce4ed-cb97-4b59-a1d9-01fd88e5402c/dfbwptf-525ed4f4-73d3-4999-b42f-d88fe1376ac2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi81NzZjZTRlZC1jYjk3LTRiNTktYTFkOS0wMWZkODhlNTQwMmMvZGZid3B0Zi01MjVlZDRmNC03M2QzLTQ5OTktYjQyZi1kODhmZTEzNzZhYzIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.46wY06zXLtD2_6FkvPisdOqgJz6xqMfotGUb-1RM0TM" 
                          alt="Los Santos World"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          onError={handleImageError}
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-300"></div>
                        <div className="absolute bottom-10 left-4">
                           <p className="font-header font-bold text-2xl uppercase text-white drop-shadow-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">{t.about.img1}</p>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="w-7/12 h-full flex flex-col gap-2">
                    {/* Top Right Shard - Street Life */}
                    <div className="h-1/2 w-full pb-1">
                        <div className="w-full h-full clip-shard-top-right relative group overflow-hidden bg-[#111]">
                            <img 
                              src="https://cdn.mos.cms.futurecdn.net/kWEFpy3Giy5APmQj3LfRgm.jpg" 
                              alt="Street Life"
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              onError={handleImageError}
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-300"></div>
                            <div className="absolute bottom-4 left-4">
                               <p className="font-header font-bold text-lg uppercase text-white drop-shadow-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">{t.about.img2}</p>
                            </div>
                        </div>
                    </div>
                    {/* Bottom Right Shard - Action/Cars */}
                    <div className="h-1/2 w-full pt-1">
                        <div className="w-full h-full clip-shard-bottom-right relative group overflow-hidden bg-[#111]">
                            <img 
                              src="https://images7.alphacoders.com/587/587527.jpg" 
                              alt="Luxury Life"
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              onError={handleImageError}
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-300"></div>
                            <div className="absolute bottom-4 left-4">
                               <p className="font-header font-bold text-lg uppercase text-white drop-shadow-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">{t.about.img3}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* Tech Divider */}
      <div className="flex items-center justify-center py-8 opacity-20">
         <div className="h-px w-24 bg-white"></div>
         <div className="mx-4 text-white"><Crosshair size={20}/></div>
         <div className="h-px w-24 bg-white"></div>
      </div>

      {/* Subscriptions Section */}
      <section className="py-32 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-blue-900/5 blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
             <div className="inline-flex items-center justify-center p-2 mb-6 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm">
                <Crown size={14} className="text-blue-500 mr-2" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Premium Access</span>
             </div>
            <h2 className="text-4xl md:text-5xl font-header font-bold uppercase text-white mb-6 tracking-tight">
              {t.subscriptions.title}
            </h2>
            <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              {t.subscriptions.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <SubscriptionCard 
              name={t.subscriptions.silver.name}
              price="50"
              currency={t.subscriptions.currency}
              tier="silver"
              icon={<Shield size={24} />}
              description={t.subscriptions.silver.desc}
              features={t.subscriptions.silver.features}
              t={t.subscriptions}
            />
            <SubscriptionCard 
              name={t.subscriptions.gold.name}
              price="80"
              currency={t.subscriptions.currency}
              tier="gold"
              icon={<Crown size={24} />}
              description={t.subscriptions.gold.desc}
              features={t.subscriptions.gold.features}
              t={t.subscriptions}
            />
            <SubscriptionCard 
              name={t.subscriptions.diamond.name}
              price="120"
              currency={t.subscriptions.currency}
              tier="diamond"
              icon={<Gem size={24} />}
              description={t.subscriptions.diamond.desc}
              features={t.subscriptions.diamond.features}
              t={t.subscriptions}
            />
          </div>
        </div>
      </section>

      {/* Job Applications */}
      <section className="py-24 bg-[#0a0a0a] relative">
        {/* Background shapes */}
        <div className="absolute left-0 top-1/2 w-32 h-64 bg-blue-900/10 -skew-y-12"></div>
        <div className="absolute right-0 bottom-0 w-64 h-32 bg-blue-900/10 skew-x-12"></div>

        <div className="max-w-7xl mx-auto px-6 text-center mb-12 relative z-10">
           <div className="inline-block border border-blue-500/30 bg-blue-500/5 px-4 py-1 rounded-full text-blue-500 text-[10px] font-bold uppercase tracking-widest mb-4">
             {t.jobs.badge}
           </div>
           <h2 className="text-5xl font-header font-bold uppercase text-blue-500 mb-6">{t.jobs.title}</h2>
           <p className="text-gray-400 text-sm max-w-4xl mx-auto leading-relaxed">
             {t.jobs.description}
           </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
           <JobCard 
             title={t.jobs.ems}
             image="https://www.thinlinesanctuary.com/cdn/shop/files/20241028211832_1.png?v=1730148056&width=1080"
             onErrorHandler={handleImageError}
             t={t.jobs}
           />
           <JobCard 
             title={t.jobs.lawyer}
             image="https://www.leonidasroleplay.com/img/artigos/artigo9.jpeg"
             onErrorHandler={handleImageError}
             t={t.jobs}
           />
           <JobCard 
             title={t.jobs.police}
             image="https://jadesignsfivem.com/cdn/shop/files/Screenshot_2025-04-25_225158.png?v=1745699613&width=768"
             onErrorHandler={handleImageError}
             t={t.jobs}
           />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] pt-16 border-t border-white/5 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900"></div>
        <div className="max-w-7xl mx-auto px-6 pb-12">
           <div className="flex flex-col md:flex-row justify-between items-start">
              
              {/* Left Logo Area */}
              <div className="mb-8 md:mb-0">
                 <div className="flex items-center gap-1 mb-2">
                    <Star className="text-blue-600 fill-blue-600" size={24} />
                    <span className="text-2xl font-header font-black italic text-white uppercase">
                      FULL<span className="text-blue-600">RP</span>
                    </span>
                 </div>
                 <div className="text-xs text-gray-500 font-bold mb-4">
                    {t.footer.business} <a href="#" className="text-blue-500 hover:underline">play@fullrp.com</a>
                 </div>
                 
                 <div className="mt-6">
                    <p className="text-white font-bold text-sm mb-2">{t.footer.serverStatus}</p>
                    <div className="inline-flex items-center gap-2 bg-[#111] px-3 py-1 rounded border border-white/10 hover:border-blue-500/50 transition-colors cursor-help">
                       <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
                       <span className="text-xs font-bold text-white">{t.hero.serverName} {playerCount}/2048</span>
                    </div>
                 </div>
              </div>

              {/* Center Links */}
              <div className="grid grid-cols-1 gap-3">
                 {[t.footer.links.tos, t.footer.links.privacy, t.footer.links.rules, t.footer.links.store, t.footer.links.refund].map(link => (
                    <a key={link} href="#" className="text-xs font-bold uppercase text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                       <span className="w-1 h-1 bg-blue-600 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                       {link}
                    </a>
                 ))}
              </div>

              {/* Right Socials */}
              <div className="flex flex-col gap-4 mt-8 md:mt-0">
                 <div className="flex items-center gap-3 group cursor-pointer bg-[#111] p-2 pr-6 rounded border border-white/5 hover:border-[#5865F2]">
                    <Disc className="text-white group-hover:text-[#5865F2] transition-colors" size={20} />
                    <span className="text-sm font-bold text-white uppercase">Discord</span>
                 </div>
                 <div className="flex items-center gap-3 group cursor-pointer bg-[#111] p-2 pr-6 rounded border border-white/5 hover:border-[#1DA1F2]">
                    <Twitter className="text-white group-hover:text-[#1DA1F2] transition-colors" size={20} />
                    <span className="text-sm font-bold text-white uppercase">X</span>
                 </div>
                 <div className="flex items-center gap-3 group cursor-pointer bg-[#111] p-2 pr-6 rounded border border-white/5 hover:border-[#FF0000]">
                    <Youtube className="text-white group-hover:text-[#FF0000] transition-colors" size={20} />
                    <span className="text-sm font-bold text-white uppercase">Youtube</span>
                 </div>
              </div>

           </div>
        </div>
      </footer>

    </div>
  );
};

const SubscriptionCard = ({ name, price, currency, tier, icon, description, features, t }) => {
  // Define color styles based on tier
  const styles = {
    silver: {
      border: 'border-slate-700 hover:border-slate-400',
      glow: 'hover:shadow-[0_0_30px_rgba(148,163,184,0.15)]',
      text: 'text-slate-100',
      subtext: 'text-slate-400',
      accent: 'bg-slate-400',
      iconColor: 'text-slate-300',
      btn: 'hover:bg-slate-100 hover:text-slate-900 border-slate-700 text-slate-300'
    },
    gold: {
      border: 'border-yellow-900/50 hover:border-yellow-500',
      glow: 'hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]',
      text: 'text-yellow-100',
      subtext: 'text-yellow-500/80',
      accent: 'bg-yellow-500',
      iconColor: 'text-yellow-400',
      btn: 'hover:bg-yellow-500 hover:text-black border-yellow-900/50 text-yellow-500'
    },
    diamond: {
      border: 'border-cyan-900/50 hover:border-cyan-500',
      glow: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]',
      text: 'text-cyan-50',
      subtext: 'text-cyan-500/80',
      accent: 'bg-cyan-500',
      iconColor: 'text-cyan-400',
      btn: 'hover:bg-cyan-500 hover:text-black border-cyan-900/50 text-cyan-500'
    }
  };

  const style = styles[tier] || styles.silver;

  return (
    <div className={`relative bg-[#0c0c0c]/80 backdrop-blur-md rounded-xl border ${style.border} p-8 flex flex-col transition-all duration-500 group ${style.glow} overflow-hidden`}>
      {/* Background Gradient Blob */}
      <div className={`absolute -top-20 -right-20 w-64 h-64 ${style.accent} rounded-full mix-blend-screen filter blur-[100px] opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>

      {/* Header */}
      <div className="flex justify-between items-start mb-8 relative z-10">
        <div>
          <h3 className={`text-2xl font-header font-bold uppercase tracking-wider ${style.text}`}>{name}</h3>
          <div className="flex items-baseline gap-1 mt-2">
            <span className="text-3xl font-bold text-white">{currency === 'BRL' ? 'R$' : '$'} {price}</span>
            <span className="text-xs text-gray-500 font-medium">/{currency}</span>
          </div>
        </div>
        <div className={`p-3 rounded-lg bg-white/5 border border-white/5 ${style.iconColor} group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

      {/* Description */}
      <p className="text-sm text-gray-400 leading-relaxed mb-8 min-h-[60px]">
        {description}
      </p>

      {/* Features */}
      <div className="space-y-4 mb-10 flex-grow">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 flex items-center gap-2">
           {t.includedFeatures}
        </p>
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300 group/item">
               <Check size={16} className={`mt-0.5 shrink-0 ${style.iconColor} opacity-50 group-hover/item:opacity-100 transition-opacity`} />
               <span className="leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <button className={`w-full py-4 text-xs font-bold uppercase tracking-[0.2em] border transition-all duration-300 rounded ${style.btn} group-hover:shadow-lg mt-auto relative overflow-hidden`}>
         <span className="relative z-10">{t.subscribe}</span>
      </button>
    </div>
  );
};

const JobCard = ({ title, image, onErrorHandler, t }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0c0c0c] h-[400px]">
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
        <img 
          src={image} 
          alt={title}
          className="h-full w-full object-cover"
          onError={onErrorHandler}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
      </div>
      
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-3xl font-header font-black italic text-white uppercase mb-2 drop-shadow-lg">{title}</h3>
            <div className="w-12 h-1 bg-blue-600 mb-6 group-hover:w-full transition-all duration-500"></div>
            
            <button className="w-full py-4 bg-white text-black hover:bg-blue-600 hover:text-white font-bold uppercase tracking-widest text-xs transition-colors opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center gap-2">
                {t.clickToApply} <ChevronRight size={14} />
            </button>
        </div>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
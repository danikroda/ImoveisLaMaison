import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { categoriasBase, produtosBase } from "../data";

const Reveal = ({ children, className = "", as: Tag = "div", delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
};

const Eyebrow = ({ n, center = false }) => (
  <div className={`eyebrow ${center ? "eyebrow--center" : ""}`}>
    {center && <span className="eyebrow-rule" />}
    <span className="eyebrow-num">{n}</span>
    <span className="eyebrow-rule" />
  </div>
);

const HomeScreen = () => {
  const navigate = useNavigate();
  const [busca, setBusca] = useState("");
  const [resultadosBusca, setResultadosBusca] = useState([]);

  // Lógica da Barra de Pesquisa
  useEffect(() => {
    if (busca.length > 2) {
      const filtrados = produtosBase.filter((p) => 
        p.nome.toLowerCase().includes(busca.toLowerCase()) || 
        p.descricao.toLowerCase().includes(busca.toLowerCase())
      );
      setResultadosBusca(filtrados);
    } else {
      setResultadosBusca([]);
    }
  }, [busca]);

  const categorias = categoriasBase;

  const diferenciais = [
    { titulo: "Negociações seguras", texto: "Conduzimos cada etapa com transparência e responsabilidade." },
    { titulo: "Procedência confiável", texto: "Trabalhamos com equipamentos que fazem sentido para o mercado." },
    { titulo: "Experiência real", texto: "Anos de atuação no setor de vidro float." },
    { titulo: "Rede de contatos", texto: "Conectamos oportunidades com quem realmente compra." },
    { titulo: "Acompanhamento completo", texto: "Você não negocia sozinho em nenhum momento." },
    { titulo: "Atendimento consultivo", texto: "Entendemos sua necessidade antes de oferecer qualquer solução." }
  ];

  const passos = [
    { n: "01", titulo: "Contato inicial", texto: "Você fala conosco pelo WhatsApp e apresenta sua necessidade." },
    { n: "02", titulo: "Análise", texto: "Avaliamos o cenário e identificamos as melhores oportunidades." },
    { n: "03", titulo: "Intermediação", texto: "Conectamos as partes e acompanhamos a negociação." },
    { n: "04", titulo: "Fechamento", texto: "Tudo acontece com segurança, clareza e suporte profissional." }
  ];

  const irParaCategoria = (id) => navigate(`/categoria/${id}`);
  const irParaProduto = (catId, prodId) => navigate(`/categoria/${catId}?produto=${prodId}`);
  
  const scrollToOportunidades = () => {
    document.getElementById("oportunidades")?.scrollIntoView({ behavior: "smooth" });
  };
  const whatsappLink = "https://wa.me/5543996773333";
  const instagramLink = "https://www.instagram.com/marcelo_maq.lamaison?igsh=NWE2YnVkaDJ1bjlj";

  return (
    <div
      className="maq-shell w-full min-h-screen flex flex-col"
      style={{ backgroundColor: "var(--cream)", colorScheme: "light" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,600;0,800;0,900;1,500;1,700&family=Inter:wght@400;500;600;700;800&display=swap');

        .maq-shell {
          font-family: 'Inter', system-ui, sans-serif;
          --ink: #2C2825;       
          --ink-2: #3A3530;     
          --ink-3: #48423C;     
          --gold: #C29B4A;      
          --gold-light: #DBC07A;
          --gold-dark: #9E7A31; 
          --cream: #FDFBF7;     
          --cream-dim: #F4EFE6; 
          --text-soft: #6A625A; 
          --border-warm: #E8E2D6;
        }
        html { scroll-behavior: smooth; }
        .maq-shell h1, .maq-shell h2, .maq-shell h3, .maq-shell .font-serif-display {
          font-family: 'Fraunces', serif;
        }

        .eyebrow { display:flex; align-items:center; gap:14px; margin-bottom:14px; }
        .eyebrow--center { justify-content:center; }
        .eyebrow-num { font-family:'Fraunces',serif; font-style:italic; font-weight:800; font-size:1.05rem; letter-spacing:.14em; color: var(--gold); }
        .eyebrow-rule { height:1px; width:44px; flex:0 0 auto; background: linear-gradient(90deg, var(--gold), transparent); }
        .eyebrow--center .eyebrow-rule:first-child { background: linear-gradient(90deg, transparent, var(--gold)); }
        .eyebrow:not(.eyebrow--center) .eyebrow-rule { flex:1 1 auto; max-width:80px; }

        .reveal { opacity:0; transform: translateY(26px); transition: opacity .8s ease, transform .8s ease; }
        .reveal-visible { opacity:1; transform:none; }

        @keyframes heroIn { from { opacity:0; transform: translateY(18px); } to { opacity:1; transform:none; } }
        .hero-item { opacity:0; animation: heroIn .9s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .hero-item:nth-child(1){ animation-delay:.1s; }
        .hero-item:nth-child(2){ animation-delay:.25s; }
        .hero-item:nth-child(3){ animation-delay:.4s; }
        .hero-item:nth-child(4){ animation-delay:.55s; }

        .cor-primaria { background-color: var(--ink); }
        .texto-primario { color: var(--ink); }
        .cor-dourada { color: var(--gold); }

        .cat-item { transition: all .3s ease; border-bottom: 1px solid var(--border-warm); }
        .cat-item:hover { background-color: var(--cream-dim); color: var(--gold-dark); padding-left: 1.25rem; }

        .cat-header { position:relative; overflow:hidden; }
        .cat-header::after {
          content:""; position:absolute; top:0; right:0;
          border-style:solid; border-width:0 30px 30px 0;
          border-color: transparent var(--gold) transparent transparent;
        }

        .card-lift { transition: all .4s cubic-bezier(0.16, 1, 0.3, 1); }
        .card-lift:hover { transform: translateY(-4px); box-shadow: 0 20px 40px -15px rgba(44, 40, 37, 0.15); border-color: var(--gold); }

        .btn-glow { transition: all .3s cubic-bezier(0.16, 1, 0.3, 1); }
        .btn-glow:hover { transform: translateY(-2px); box-shadow: 0 10px 20px -10px rgba(37, 211, 102, 0.5); }

        .hex-outer {
          width: 155px; height: 175px;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          background-color: var(--gold);
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }
        .hex-outer:hover { transform: scale(1.08); z-index: 50; }
        
        .hex-inner {
          width: 147px; height: 167px;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          position: relative;
          background-color: var(--cream-dim);
          display: flex; justify-content: center; align-items: center;
        }
        
        .hex-label {
          position: absolute; bottom: 12px; left: 50%; transform: translateX(-50%);
          background: var(--gold); color: var(--ink);
          font-weight: 800; font-size: 9px;
          letter-spacing: -0.02em; text-transform: uppercase;
          padding: 5px 2px; border-radius: 3px; text-align: center;
          width: 88%; line-height: 1.1; box-shadow: 0 4px 6px rgba(0,0,0,0.3);
          display: flex; align-items: center; justify-content: center; 
          min-height: 26px; white-space: normal; overflow: hidden; z-index: 10;
        }

        @keyframes pulseRing {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.45); }
          70% { box-shadow: 0 0 0 14px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        .whatsapp-float { animation: pulseRing 3s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
      `}</style>

      {/* Faixa de Contato Topo */}
      <div className="w-full text-xs font-medium text-[var(--text-soft)] py-2 px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-3 bg-white border-b border-[var(--border-warm)]">
        
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
          <span>📞 +55 (43) 9 9677-3333 | vendas@maqlamaison.com.br</span>
          <a 
            href={instagramLink} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-1.5 text-[var(--gold-dark)] hover:text-[var(--ink)] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span className="font-bold">Instagram</span>
          </a>
        </div>

        <div className="hidden sm:flex gap-4">
          <a href="#oportunidades" className="hover:text-[var(--gold-dark)] transition-colors">Ver Equipamentos</a>
        </div>
      </div>

      {/* Nav Principal */}
      <nav className="sticky top-0 z-50 w-full px-6 md:px-12 py-3 shadow-xl bg-[var(--ink)] border-b border-[var(--ink-3)]">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto gap-4">
          <div className="flex items-center justify-center cursor-pointer py-1 flex-shrink-0" onClick={() => navigate('/')}>
            <img src="/logo.svg" alt="Logo Maq La Maison" className="h-16 md:h-20 w-auto object-contain transition-transform duration-500 hover:scale-105" />
          </div>

          <button className="text-[var(--cream)] text-3xl md:hidden">☰</button>

          <div className="hidden md:flex flex-col items-end gap-4 w-full">
            
            <div className="relative flex items-center bg-[var(--ink-2)] border border-[var(--ink-3)] rounded-md overflow-visible w-full max-w-md transition-all duration-300 focus-within:border-[var(--gold)] z-50">
              
              <div className="px-3 flex items-center justify-center text-white/40">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>

              <input 
                type="text" 
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Buscar máquinas, fornos, mesas..." 
                className="w-full py-2 px-2 bg-transparent outline-none text-[var(--cream)] text-sm placeholder-white/40" 
              />
              
              {resultadosBusca.length > 0 && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white border border-[var(--border-warm)] shadow-2xl rounded-md overflow-y-auto max-h-72 z-50">
                  <div className="p-2 bg-[var(--cream-dim)] text-[var(--ink-2)] text-xs font-bold uppercase tracking-wider border-b border-[var(--border-warm)]">Resultados encontrados:</div>
                  {resultadosBusca.map(prod => (
                    <div 
                      key={prod.id} 
                      onClick={() => { irParaProduto(prod.categoriaId, prod.id); setBusca(""); }}
                      className="p-3 border-b border-[var(--border-warm)] hover:bg-[var(--cream-dim)] cursor-pointer transition-colors flex flex-col gap-1"
                    >
                      <h4 className="font-bold text-[var(--ink)] text-sm leading-tight">{prod.nome}</h4>
                      <div className="flex justify-between items-center text-xs text-[var(--text-soft)]">
                        <span>{prod.medida}</span>
                        <span className="font-bold text-[var(--gold-dark)]">{prod.valor}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-6 font-semibold text-[var(--cream-dim)] text-xs tracking-wider uppercase">
                <a href="#inicio" className="bg-[var(--gold)] text-[var(--ink)] px-4 py-1.5 rounded transition-all duration-300 hover:bg-[var(--gold-dark)] hover:text-white">Home</a>
                <a href="#oportunidades" className="hover:text-[var(--gold)] transition-colors duration-300">Equipamentos</a>
                <a href="#quem-somos" className="hover:text-[var(--gold)] transition-colors duration-300">Quem Somos</a>
                <a href="#diferenciais" className="hover:text-[var(--gold)] transition-colors duration-300">Diferenciais</a>
                <a href="#contato" className="hover:text-[var(--gold)] transition-colors duration-300">Contato</a>
              </div>

              {/* BOTÃO INSTAGRAM NO MENU */}
              <a href={instagramLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white px-6 py-2 rounded font-bold shadow-sm transition-all duration-300 hover:scale-105 text-sm">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="inicio" className="w-full relative flex items-center justify-center overflow-hidden min-h-[600px] bg-[var(--cream)] border-b border-[var(--border-warm)] py-12 md:py-20">
        <div className="w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="text-center lg:text-left max-w-xl">
            <Reveal delay={100}>
              <h1 className="text-5xl md:text-6xl font-black uppercase italic drop-shadow-sm leading-[1.1] mb-6 text-[var(--ink)] font-serif-display">
                Máquinas e<br/>Equipamentos
              </h1>
              <h2 className="text-3xl md:text-4xl font-black uppercase text-[var(--gold-dark)] mb-6 tracking-wide">
                Seminovos e Usados
              </h2>
              <p className="text-xl md:text-2xl font-light mb-8 text-[var(--text-soft)]">
                Intermediação profissional com segurança e procedência para o setor de vidro float.
              </p>
              <p className="text-xl font-bold text-[var(--ink-2)] mb-10 border-l-4 border-[var(--gold)] pl-4 italic">
                Sua confiança é a nossa maior conquista.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                
                <button onClick={scrollToOportunidades} className="bg-transparent border-2 border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-white px-8 py-3.5 rounded text-sm font-bold uppercase text-center transition-all duration-300 shadow-md">
                  Ver Oportunidades
                </button>
              </div>

              <div className="mt-14 flex items-center justify-center lg:justify-start gap-3 opacity-90">
                <div className="hidden lg:flex items-center gap-1.5">
                  <span className="w-8 h-[2px] bg-[var(--gold)] rounded-full"></span>
                  <span className="w-2 h-[2px] bg-[var(--gold)] rounded-full"></span>
                </div>
                <p className="text-sm md:text-base font-bold uppercase tracking-widest text-[var(--ink-2)] flex items-center gap-2">
                  <span className="lg:hidden text-[var(--gold)] text-lg animate-pulse">↓</span> 
                  Clique na categoria que deseja
                  <span className="hidden lg:inline-block text-[var(--gold)] text-xl animate-pulse ml-1">➔</span>
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={300} className="relative w-full lg:w-1/2 flex justify-center items-center scale-50 sm:scale-75 md:scale-90 lg:scale-100 origin-center lg:origin-right mt-10 lg:mt-0">
            <div className="flex flex-col items-center">
              
              <div className="flex gap-2 relative z-10">
                {categorias.slice(0, 3).map((cat) => (
                  <div key={cat.id} className="hex-outer group" onClick={() => irParaCategoria(cat.id)}>
                    <div className="hex-inner">
                      <img src={cat.imagem} alt={cat.nome} className="w-full h-full object-cover text-transparent group-hover:scale-110 transition-transform duration-500" />
                      <div className="hex-label">{cat.nomeCurto}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 -mt-[44px] relative z-20">
                {categorias.slice(3, 7).map((cat) => (
                  <div key={cat.id} className="hex-outer group" onClick={() => irParaCategoria(cat.id)}>
                    <div className="hex-inner">
                      <img src={cat.imagem} alt={cat.nome} className="w-full h-full object-cover text-transparent group-hover:scale-110 transition-transform duration-500" />
                      <div className="hex-label">{cat.nomeCurto}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 -mt-[44px] relative z-30">
                {categorias.slice(7, 10).map((cat) => (
                  <div key={cat.id} className="hex-outer group" onClick={() => irParaCategoria(cat.id)}>
                    <div className="hex-inner">
                      <img src={cat.imagem} alt={cat.nome} className="w-full h-full object-cover text-transparent group-hover:scale-110 transition-transform duration-500" />
                      <div className="hex-label">{cat.nomeCurto}</div>
                    </div>
                  </div>
                ))}
              </div>
              
            </div>
          </Reveal>
          
        </div>
      </section>

      {/* SEÇÃO DE EQUIPAMENTOS */}
      <section id="oportunidades" className="w-full bg-[var(--cream-dim)] py-20 border-b border-[var(--border-warm)] scroll-mt-24 shadow-inner">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
             <Eyebrow n="01" center />
             <h2 className="text-3xl md:text-5xl font-bold texto-primario mb-4">Nossos Equipamentos</h2>
             <p className="text-[var(--text-soft)] text-lg">Se alguma oportunidade fizer sentido para o seu negócio, fale diretamente conosco.</p>
          </Reveal>

          <div className="flex flex-col lg:flex-row gap-10">
            <Reveal as="aside" delay={100} className="w-full lg:w-1/4 flex-shrink-0">
              <div className="cat-header cor-primaria text-white p-4 font-bold uppercase tracking-wider text-sm rounded-t flex justify-between items-center shadow-sm">
                Categorias
              </div>
              <ul className="bg-white border-l border-r border-b border-[var(--border-warm)] shadow-sm rounded-b overflow-hidden">
                {categorias.map((cat) => (
                  <li
                    key={cat.id}
                    onClick={() => irParaCategoria(cat.id)}
                    className="cat-item p-4 text-sm font-medium text-[var(--ink-2)] cursor-pointer uppercase flex justify-between items-center group"
                  >
                    {cat.nome}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 cor-dourada">➔</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 bg-[var(--ink-2)] text-[var(--cream)] p-6 rounded shadow-lg border-t-4 border-[var(--gold)] hidden lg:block">
                <h3 className="font-bold uppercase text-sm mb-4 cor-dourada tracking-widest">Nossos Serviços</h3>
                <ul className="space-y-3 text-sm font-light">
                  <li className="flex items-center gap-2">✓ Assessoria em Layout</li>
                  <li className="flex items-center gap-2">✓ Equipes Técnicas</li>
                </ul>
              </div>
            </Reveal>

            <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {categorias.map((cat, index) => (
                <Reveal key={cat.id} delay={(index % 3) * 100} className="card-lift bg-[var(--cream)] rounded-lg shadow-md border border-[var(--border-warm)] flex flex-col justify-between overflow-hidden">
                  
                  <div className="w-full h-48 bg-[var(--border-warm)] border-b border-[var(--border-warm)] relative overflow-hidden flex items-center justify-center cursor-pointer" onClick={() => irParaCategoria(cat.id)}>
                     <img src={cat.imagem} alt={cat.nome} className="w-full h-full object-cover text-transparent transition-transform duration-700 hover:scale-110" />
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div className="mb-6 text-center cursor-pointer" onClick={() => irParaCategoria(cat.id)}>
                       <h3 className="text-lg font-bold texto-primario uppercase tracking-wide leading-tight hover:text-[var(--gold-dark)] transition-colors">{cat.nome}</h3>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      <button onClick={() => irParaCategoria(cat.id)} className="w-full flex items-center justify-center gap-2 text-[var(--ink)] border border-[var(--ink-2)] hover:bg-[var(--ink)] hover:text-white transition-all duration-300 py-2.5 rounded font-bold text-xs uppercase tracking-widest">
                        VER MÁQUINAS DISPONÍVEIS
                      </button>
                    </div>
                  </div>

                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÕES INSTITUCIONAIS */}
      
      {/* Quem Somos */}
      <section id="quem-somos" className="w-full bg-white py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            
            <Reveal delay={100} className="w-full lg:w-1/2 flex flex-col justify-center">
              <Eyebrow n="02" />
              <h2 className="text-4xl md:text-5xl font-bold texto-primario mb-6">Quem Somos</h2>
              <h3 className="text-2xl text-[var(--gold-dark)] mb-6 font-medium italic font-serif-display">Experiência que gera confiança em cada negociação.</h3>
              <p className="text-[var(--text-soft)] text-lg leading-relaxed mb-4">
                Somos uma empresa familiar com forte atuação no mercado de intermediação de máquinas para o setor de vidro float. Ao longo dos anos, construímos uma reputação baseada em negociações seguras, transparentes e bem conduzidas.
              </p>
              <p className="text-[var(--ink-2)] text-lg leading-relaxed font-semibold">
                Aqui, cada oportunidade é tratada com seriedade, responsabilidade e foco em resultados reais para quem compra e para quem vende.
              </p>
            </Reveal>

            <div className="w-full lg:w-1/2 flex flex-col gap-8">
              <Reveal delay={200} className="card-lift bg-[var(--ink)] text-[var(--cream)] p-8 rounded shadow-md relative overflow-hidden">
                <h2 className="text-2xl font-bold mb-4 cor-dourada">O que Fazemos</h2>
                <p className="text-white/70 leading-relaxed text-sm">
                  Atuamos na divulgação, intermediação e assessoria na compra e venda de equipamentos semi-novos e usados. Mais do que conectar partes, garantimos que cada negociação aconteça com clareza, procedência e confiança. Nosso papel é reduzir riscos e facilitar decisões.
                </p>
              </Reveal>

              <Reveal delay={300} className="card-lift bg-[var(--cream-dim)] p-8 rounded shadow-md border border-[var(--border-warm)] relative">
                <h2 className="text-2xl font-bold mb-4 texto-primario">Para Quem É</h2>
                <ul className="space-y-3 text-sm text-[var(--ink-2)] font-medium">
                  <li className="flex items-center gap-2"><span className="text-[var(--gold)]">■</span> Vidraçarias e Distribuidoras</li>
                  <li className="flex items-center gap-2"><span className="text-[var(--gold)]">■</span> Temperadoras e Indústrias</li>
                  <li className="flex items-center gap-2"><span className="text-[var(--gold)]">■</span> Empresas de esquadrias e Investidores</li>
                </ul>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="w-full bg-[var(--ink)] py-20 border-y-2 border-[var(--gold)] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal>
            <Eyebrow n="03" center />
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--cream)] mb-4">Nossos Diferenciais</h2>
            <p className="text-[var(--gold-light)] mb-14 text-xl italic font-serif-display">Por que negociar com a La Maison?</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {diferenciais.map((dif, index) => (
              <Reveal key={index} delay={index * 100} className="card-lift bg-[var(--ink-2)] p-8 rounded border border-white/5 hover:border-[var(--gold)] transition-all duration-300">
                <h4 className="cor-dourada font-bold text-xl mb-3">{dif.titulo}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{dif.texto}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="w-full bg-[var(--cream)] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal>
            <Eyebrow n="04" center />
            <h2 className="text-3xl md:text-5xl font-bold texto-primario mb-4">Como Funciona</h2>
            <p className="text-[var(--text-soft)] mb-16 text-xl">Um processo simples, seguro e eficiente.</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {passos.map((passo, index) => (
              <Reveal key={index} delay={index * 100} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-[var(--ink)] text-[var(--gold)] flex items-center justify-center text-3xl font-black shadow-lg mb-6 border border-[var(--gold)] font-serif-display transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--gold)] group-hover:text-[var(--ink)]">
                  {passo.n}
                </div>
                <h4 className="font-bold text-xl texto-primario mb-3">{passo.titulo}</h4>
                <p className="text-[var(--text-soft)] text-sm leading-relaxed px-2">{passo.texto}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Frase Final com Parallax */}
      <section className="w-full relative py-32 text-center px-6 overflow-hidden flex items-center justify-center shadow-inner">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center bg-fixed"></div>
         <div className="absolute inset-0 bg-[var(--ink)]/75 backdrop-blur-[2px]"></div>

         <Reveal className="relative z-10 w-full max-w-4xl mx-auto">
           <h2 className="text-4xl md:text-6xl font-black text-white mb-8 italic drop-shadow-2xl font-serif-display">
             "Sua confiança é a nossa<br/>maior conquista."
           </h2>
           <p className="text-white/90 text-xl max-w-3xl mx-auto mb-14 leading-relaxed font-light drop-shadow-md">
             Nosso nome foi construído ao longo dos anos com base em seriedade, transparência e resultados. Cada negociação é tratada como um compromisso com o cliente.
           </p>
           
           <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-glow inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1DA851] text-white px-12 py-5 rounded-md font-black text-xl uppercase shadow-2xl transition-all duration-300 tracking-widest border-b-4 border-[#128C7E] hover:border-[#25D366]">
             <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
               <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
             </svg>
             FALAR NO WHATSAPP
           </a>
         </Reveal>
      </section>

      {/* BOTÃO FLUTUANTE WHATSAPP */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#1DA851] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 z-50"
      >
        <span className="sr-only">WhatsApp</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Footer */}
      <footer id="contato" className="w-full bg-[var(--ink)] text-white/60 pt-20 pb-10 mt-auto font-sans scroll-mt-24">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            <div className="flex flex-col gap-6">
              <div className="flex items-center">
                   <img src="/logo.svg" alt="Logo Maq La Maison" className="h-20 md:h-24 w-auto object-contain" />
              </div>
              <p className="text-sm leading-relaxed max-w-xs mt-2 text-white/70">
                Intermediação profissional na compra e venda de máquinas para o setor de vidro float.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="text-[var(--gold)] font-bold text-sm tracking-[0.2em] uppercase border-b border-white/10 pb-3">Contato</h4>
              <ul className="flex flex-col gap-5 text-sm">
                <li className="flex items-center gap-4 hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  +55 (43) 9 9677-3333
                </li>
                <li className="flex items-center gap-4 hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  vendas@maqlamaison.com.br
                </li>
                <li>
                  <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:text-white transition-colors duration-300">
                    <svg className="w-5 h-5 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="text-[var(--gold)] font-bold text-sm tracking-[0.2em] uppercase border-b border-white/10 pb-3">Redes Sociais</h4>
              <div className="flex items-center gap-4">
                <a href={instagramLink} target="_blank" rel="noreferrer" className="btn-glow w-12 h-12 border border-white/15 rounded flex items-center justify-center hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300 hover:bg-white/5">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path></svg>
                </a>
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-glow w-12 h-12 border border-white/15 rounded flex items-center justify-center hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300 hover:bg-white/5">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <hr className="border-white/10 mb-8" />
          <div className="w-full text-xs text-white/40 flex flex-col sm:flex-row justify-between items-center gap-2">
            <p>
              © 2026 Maq La Maison Intermediações. Todos os direitos reservados. Por <span className="text-[var(--gold)] font-semibold">Agência Konkah</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeScreen;
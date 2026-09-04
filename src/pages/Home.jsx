import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { categoriasBase, produtosBase } from "../data.js";

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

  // Lógica da Barra de Pesquisa mantida sem alterações
  useEffect(() => {
    if (busca.length > 2) {
      const filtrados = produtosBase.filter(
        (p) =>
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
    {
      titulo: "Negociações Seguras",
      texto: "Conduzimos cada venda com transparência, suporte jurídico e máxima responsabilidade.",
    },
    {
      titulo: "Procedência Confiável",
      texto: "Imóveis, terrenos e áreas industriais devidamente avaliados e regularizados.",
    },
    {
      titulo: "Experiência de Mercado",
      texto: "Anos de atuação dedicada à intermediação de imóveis e negócios de alto valor.",
    },
    {
      titulo: "Carteira Exclusiva",
      texto: "Conectamos compradores e vendedores com agilidade para os melhores fechamentos.",
    },
    {
      titulo: "Acompanhamento Completo",
      texto: "Suporte especializado do primeiro atendimento até a entrega definitiva das chaves.",
    },
    {
      titulo: "Atendimento Consultivo",
      texto: "Entendemos seu perfil de investimento antes de apresentar as oportunidades.",
    },
  ];

  const passos = [
    {
      n: "01",
      titulo: "Contato Inicial",
      texto: "Fale conosco pelo WhatsApp para detalhar o imóvel que procura ou deseja vender.",
    },
    {
      n: "02",
      titulo: "Seleção de Imóveis",
      texto: "Avaliamos as melhores opções da nossa carteira ou preparamos seu imóvel para anúncio.",
    },
    {
      n: "03",
      titulo: "Visita e Proposta",
      texto: "Agendamos visitas acompanhadas e intermediamos as negociações com transparência.",
    },
    {
      n: "04",
      titulo: "Fechamento Seguro",
      texto: "Análise documental minuciosa, elaboração do contrato e transferência com segurança.",
    },
  ];

  const irParaCategoria = (id) => navigate(`/categoria/${id}`);
  const irParaProduto = (catId, prodId) => navigate(`/categoria/${catId}?produto=${prodId}`);

  const scrollToOportunidades = () => {
    document.getElementById("oportunidades")?.scrollIntoView({ behavior: "smooth" });
  };

  const whatsappLink = "https://wa.me/5543996773333";
  const instagramLink = "https://www.instagram.com/marceloperi_";

  return (
    <div
      className="maq-shell w-full min-h-screen flex flex-col"
      style={{ backgroundColor: "var(--cream)", colorScheme: "light" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,700;0,800;0,900;1,700&family=Inter:wght@400;500;600;700;800&display=swap');

        .maq-shell {
          font-family: 'Inter', system-ui, sans-serif;
          --brown-dark: #54443B;
          --brown-deep: #3B2E27;
          --accent-gold: #B59963;
          --accent-warm: #9E6B48;
          --cream: #FAF8F5;
          --cream-dim: #EFECE6;
          --text-soft: #6A625A;
          --border-warm: #E3DDD5;
        }
        html { scroll-behavior: smooth; }
        
        .maq-shell h1, .maq-shell h2, .maq-shell h3, .font-display {
          font-family: 'Montserrat', sans-serif;
        }

        .eyebrow { display:flex; align-items:center; gap:14px; margin-bottom:14px; }
        .eyebrow--center { justify-content:center; }
        .eyebrow-num { font-family:'Montserrat',sans-serif; font-weight:800; font-size:1.05rem; letter-spacing:.14em; color: var(--accent-gold); }
        .eyebrow-rule { height:2px; width:44px; flex:0 0 auto; background: linear-gradient(90deg, var(--accent-gold), transparent); }
        .eyebrow--center .eyebrow-rule:first-child { background: linear-gradient(90deg, transparent, var(--accent-gold)); }
        .eyebrow:not(.eyebrow--center) .eyebrow-rule { flex:1 1 auto; max-width:80px; }

        .reveal { opacity:0; transform: translateY(26px); transition: opacity .8s ease, transform .8s ease; }
        .reveal-visible { opacity:1; transform:none; }

        .cat-item { transition: all .3s ease; border-bottom: 1px solid var(--border-warm); }
        .cat-item:hover { background-color: var(--cream-dim); color: var(--accent-gold); padding-left: 1.25rem; }

        .cat-header { position:relative; overflow:hidden; background-color: var(--brown-dark); }
        .cat-header::after {
          content:""; position:absolute; top:0; right:0;
          border-style:solid; border-width:0 30px 30px 0;
          border-color: transparent var(--accent-gold) transparent transparent;
        }

        .card-lift { transition: all .35s cubic-bezier(0.16, 1, 0.3, 1); }
        .card-lift:hover { transform: translateY(-4px); box-shadow: 0 20px 35px -15px rgba(84, 68, 59, 0.25); border-color: var(--brown-dark); }

        /* Quadrados Ampliados, Retos e Alinhados */
        .dynamic-square {
          position: relative;
          background-color: #FFFFFF;
          border: 4px solid #FFFFFF;
          box-shadow: 0 10px 25px -5px rgba(59, 46, 39, 0.15);
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .dynamic-square:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 35px -5px rgba(181, 153, 99, 0.3);
          border-color: var(--accent-gold);
        }
        .dynamic-square:hover .square-label {
          background-color: var(--accent-gold);
          color: #3B2E27;
        }
        .square-label {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: var(--brown-dark);
          color: #FFFFFF;
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: 13px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 10px 6px;
          text-align: center;
          transition: all 0.3s ease;
        }

        /* Efeito Parallax */
        .parallax-house-bg {
          background-image: linear-gradient(to bottom, rgba(59, 46, 39, 0.82), rgba(30, 22, 18, 0.92)), 
                            url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80');
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>

      {/* Faixa de Contato Topo */}
      <div className="w-full text-xs font-semibold py-2 px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-3 bg-[var(--brown-deep)] text-white/90 border-b border-white/10">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-5">
          <span className="flex items-center gap-1.5">
            <span className="text-[var(--accent-gold)] font-bold">📞</span> (43) 9 9677-3333
          </span>
          <span className="hidden md:inline text-white/20">|</span>
          <a
            href="https://www.maqlamaison.com.br"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--accent-gold)] transition-colors"
          >
            www.maqlamaison.com.br
          </a>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <a
            href={instagramLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-[var(--accent-gold)] transition-colors"
          >
            <span>@marceloperi_</span>
          </a>
          <span className="text-white/20">|</span>
          <a
            href="https://www.facebook.com/marceloperilameson_"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-[var(--accent-gold)] transition-colors"
          >
            <span>/marceloperilameson_</span>
          </a>
        </div>
      </div>

      {/* NAV PRINCIPAL */}
      <nav className="sticky top-0 z-50 w-full px-6 md:px-12 py-3 shadow-2xl bg-[var(--brown-dark)] border-b border-[var(--brown-deep)]">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto gap-4">
          <div
            className="flex items-center justify-center cursor-pointer py-1 flex-shrink-0"
            onClick={() => navigate("/")}
          >
            <img
              src="/logo.svg"
              alt="Marcelo Lamaison - Assessoria em Negócios Empresariais"
              className="h-14 md:h-16 w-auto object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>

          <button className="text-white text-3xl md:hidden">☰</button>

          <div className="hidden md:flex flex-col items-end gap-3 w-full">
            {/* Barra de Pesquisa */}
            <div className="relative flex items-center bg-[var(--brown-deep)] border border-white/20 rounded overflow-visible w-full max-w-md transition-all duration-300 focus-within:border-[var(--accent-gold)] focus-within:bg-[#2E231E] z-50">
              <div className="px-3 flex items-center justify-center text-white/60">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>

              <input
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Buscar imóveis, terrenos, casas..."
                className="w-full py-2 px-2 bg-transparent outline-none text-white text-sm placeholder-white/50 font-medium"
              />

              {resultadosBusca.length > 0 && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white border border-[var(--border-warm)] shadow-2xl rounded overflow-y-auto max-h-72 z-50 text-left">
                  <div className="p-2 bg-[var(--brown-dark)] text-white text-xs font-bold uppercase tracking-wider">
                    Imóveis encontrados:
                  </div>
                  {resultadosBusca.map((prod) => (
                    <div
                      key={prod.id}
                      onClick={() => {
                        irParaProduto(prod.categoriaId, prod.id);
                        setBusca("");
                      }}
                      className="p-3 border-b border-[var(--border-warm)] hover:bg-[var(--cream-dim)] cursor-pointer transition-colors flex flex-col gap-1"
                    >
                      <h4 className="font-bold text-[var(--brown-dark)] text-sm leading-tight">
                        {prod.nome}
                      </h4>
                      <div className="flex justify-between items-center text-xs text-[var(--text-soft)]">
                        <span>{prod.medida}</span>
                        <span className="font-extrabold text-[var(--accent-gold)]">{prod.valor}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Links de Navegação */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-6 font-bold text-white/90 text-xs tracking-wider uppercase">
                <a
                  href="#inicio"
                  className="bg-[var(--accent-gold)] text-[var(--brown-deep)] px-4 py-1.5 rounded transition-all duration-300 hover:bg-white"
                >
                  Home
                </a>
                <a href="#oportunidades" className="hover:text-[var(--accent-gold)] transition-colors duration-300">
                  Imóveis
                </a>
                <a href="#quem-somos" className="hover:text-[var(--accent-gold)] transition-colors duration-300">
                  Quem Somos
                </a>
                <a href="#diferenciais" className="hover:text-[var(--accent-gold)] transition-colors duration-300">
                  Diferenciais
                </a>
                <a href="#contato" className="hover:text-[var(--accent-gold)] transition-colors duration-300">
                  Contato
                </a>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-[var(--accent-gold)] hover:bg-white text-[var(--brown-deep)] px-5 py-1.5 rounded font-bold transition-all duration-300 text-xs tracking-wider uppercase shadow-md"
              >
                Atendimento
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION COM IMAGENS RETAS, AMPLIADAS E COM GRID ALINHADO */}
      <section
        id="inicio"
        className="w-full relative flex items-center justify-center overflow-hidden min-h-[720px] bg-[var(--cream)] border-b border-[var(--border-warm)] py-14 md:py-20"
      >
        <div className="w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Lado Esquerdo */}
          <div className="text-center lg:text-left max-w-xl">
            <Reveal delay={100}>
              <div className="inline-block bg-[var(--accent-gold)] text-[var(--brown-deep)] font-extrabold text-sm md:text-base px-4 py-1.5 uppercase tracking-widest mb-4 rounded-sm shadow-sm">
                OPORTUNIDADE
              </div>
              <h1 className="text-4xl md:text-6xl font-black uppercase text-[var(--brown-dark)] leading-[1.1] mb-6 tracking-tight">
                Venda de Imóveis e <br />
                <span className="text-[var(--accent-warm)]">Terrenos Exclusivos</span>
              </h1>

              <p className="text-lg md:text-xl font-medium mb-8 text-[var(--text-soft)] leading-relaxed">
                Intermediação imobiliária com máxima segurança jurídica, transparência e suporte completo na compra e venda do seu imóvel.
              </p>

              <div className="p-5 bg-white border-l-4 border-[var(--accent-gold)] shadow-sm rounded-r mb-10 text-left">
                <p className="text-sm md:text-base font-bold text-[var(--brown-dark)] uppercase tracking-wide">
                  Marcelo Lamaison
                </p>
                <p className="text-xs text-[var(--text-soft)] font-semibold uppercase tracking-wider">
                  Assessoria em Negócios Empresariais e Imobiliários
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <button
                  onClick={scrollToOportunidades}
                  className="bg-[var(--brown-dark)] hover:bg-[var(--accent-gold)] hover:text-[var(--brown-deep)] text-white px-8 py-3.5 rounded text-xs font-black uppercase tracking-widest text-center transition-all duration-300 shadow-md"
                >
                  Ver Imóveis
                </button>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="border-2 border-[var(--brown-dark)] text-[var(--brown-dark)] hover:bg-[var(--brown-dark)] hover:text-white px-8 py-3.5 rounded text-xs font-black uppercase tracking-widest text-center transition-all duration-300"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </Reveal>
          </div>

          {/* Lado Direito - GRID ALINHADO SEM SOBREPOSIÇÃO */}
          <Reveal delay={300} className="w-full lg:w-1/2 flex justify-center py-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-5 w-full max-w-2xl items-center justify-center">
              {categorias.slice(0, 8).map((cat) => (
                <div
                  key={cat.id}
                  className="dynamic-square w-full aspect-square rounded-lg"
                  onClick={() => irParaCategoria(cat.id)}
                >
                  <img
                    src={cat.imagem}
                    alt={cat.nome}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="square-label">{cat.nomeCurto || cat.nome}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SEÇÃO DE IMÓVEIS E CATEGORIAS */}
      <section
        id="oportunidades"
        className="w-full bg-[var(--cream-dim)] py-20 border-b border-[var(--border-warm)] scroll-mt-24 shadow-inner"
      >
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <Eyebrow n="01" center />
            <h2 className="text-3xl md:text-5xl font-black text-[var(--brown-dark)] uppercase tracking-tight mb-3">
              Imóveis à Venda
            </h2>
            <p className="text-[var(--text-soft)] text-base font-medium max-w-2xl mx-auto">
              Selecione uma das categorias abaixo para explorar casas, terrenos residenciais, barracões industriais e áreas de grande porte.
            </p>
          </Reveal>

          <div className="flex flex-col lg:flex-row gap-10">
            <Reveal as="aside" delay={100} className="w-full lg:w-1/4 flex-shrink-0">
              <div className="cat-header text-white p-4 font-black uppercase tracking-wider text-xs rounded-t flex justify-between items-center shadow-sm">
                Categorias
              </div>
              <ul className="bg-white border-l border-r border-b border-[var(--border-warm)] shadow-sm rounded-b overflow-hidden">
                {categorias.map((cat) => (
                  <li
                    key={cat.id}
                    onClick={() => irParaCategoria(cat.id)}
                    className="cat-item p-4 text-xs font-bold text-[var(--brown-dark)] cursor-pointer uppercase flex justify-between items-center group tracking-wide"
                  >
                    {cat.nome}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[var(--accent-gold)]">
                      ➔
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 bg-[var(--brown-dark)] text-white p-6 rounded shadow-lg border-t-4 border-[var(--accent-gold)] hidden lg:block">
                <h3 className="font-black uppercase text-xs mb-4 text-[var(--accent-gold)] tracking-widest">
                  Assessoria Imobiliária
                </h3>
                <ul className="space-y-3 text-xs font-semibold">
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--accent-gold)]">■</span> Avaliação de Imóveis
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--accent-gold)]">■</span> Intermediação de Vendas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--accent-gold)]">■</span> Regularização Documental
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Imagens dos Cards de Categorias */}
            <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {categorias.map((cat, index) => (
                <Reveal
                  key={cat.id}
                  delay={(index % 3) * 100}
                  className="card-lift bg-white rounded shadow-md border border-[var(--border-warm)] flex flex-col justify-between overflow-hidden"
                >
                  <div
                    className="w-full h-72 bg-[var(--cream-dim)] border-b border-[var(--border-warm)] relative overflow-hidden flex items-center justify-center cursor-pointer"
                    onClick={() => irParaCategoria(cat.id)}
                  >
                    <img
                      src={cat.imagem}
                      alt={cat.nome}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div
                      className="mb-6 cursor-pointer"
                      onClick={() => irParaCategoria(cat.id)}
                    >
                      <span className="text-[10px] font-black uppercase tracking-widest text-[var(--accent-warm)] block mb-1">
                        OPORTUNIDADE
                      </span>
                      <h3 className="text-base font-extrabold text-[var(--brown-dark)] uppercase tracking-tight leading-tight hover:text-[var(--accent-gold)] transition-colors">
                        {cat.nome}
                      </h3>
                    </div>

                    <div className="flex flex-col gap-3">
                      <button
                        onClick={() => irParaCategoria(cat.id)}
                        className="w-full flex items-center justify-center gap-2 bg-[var(--brown-dark)] text-white hover:bg-[var(--accent-gold)] hover:text-[var(--brown-deep)] transition-all duration-300 py-2.5 rounded font-black text-[11px] uppercase tracking-widest"
                      >
                        VER IMÓVEIS DISPONÍVEIS
                      </button>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section id="quem-somos" className="w-full bg-white py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <Reveal delay={100} className="w-full lg:w-1/2 flex flex-col justify-center">
              <Eyebrow n="02" />
              <h2 className="text-3xl md:text-5xl font-black text-[var(--brown-dark)] uppercase mb-4 tracking-tight">
                Quem Somos
              </h2>
              <h3 className="text-xl text-[var(--accent-warm)] mb-6 font-bold uppercase tracking-wide">
                Marcelo Lamaison — Assessoria em Negócios Imobiliários
              </h3>
              <p className="text-[var(--text-soft)] text-base leading-relaxed mb-4 font-normal">
                Atuamos na venda e intermediação de terrenos, áreas industriais, galpões e residências. Nossa trajetória é pautada na transparência, rigor documental e no atendimento próximo de cada cliente.
              </p>
              <p className="text-[var(--brown-dark)] text-base leading-relaxed font-bold">
                Nosso compromisso é alinhar os interesses de compradores e vendedores para garantir transações ágeis e seguras.
              </p>
            </Reveal>

            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <Reveal
                delay={200}
                className="card-lift bg-[var(--brown-dark)] text-white p-8 rounded shadow-md relative overflow-hidden"
              >
                <span className="text-[var(--accent-gold)] font-black text-xs uppercase tracking-widest block mb-2">
                  Atuação no Mercado
                </span>
                <h3 className="text-2xl font-black mb-3 text-white uppercase tracking-tight">Nosso Trabalho</h3>
                <p className="text-white/80 leading-relaxed text-sm">
                  Prospecção, divulgação e negociação de imóveis urbanos e rurais. Oferecemos suporte jurídico do primeiro contato até o fechamento da escritura.
                </p>
              </Reveal>

              <Reveal
                delay={300}
                className="card-lift bg-[var(--cream)] p-8 rounded shadow-md border border-[var(--border-warm)] relative"
              >
                <h3 className="text-xl font-black mb-4 text-[var(--brown-dark)] uppercase tracking-tight">Quem Atendemos</h3>
                <ul className="space-y-3 text-xs text-[var(--brown-dark)] font-bold tracking-wide uppercase">
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--accent-gold)]">■</span> Pessoas e famílias em busca do imóvel ideal
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--accent-gold)]">■</span> Empresários e indústrias em expansão
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--accent-gold)]">■</span> Investidores do mercado imobiliário
                  </li>
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section
        id="diferenciais"
        className="w-full bg-[var(--brown-dark)] py-20 border-y-4 border-[var(--accent-gold)] scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal>
            <Eyebrow n="03" center />
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-3">
              Nossos Diferenciais
            </h2>
            <p className="text-[var(--accent-gold)] mb-14 text-sm font-bold uppercase tracking-widest">
              Por que comprar ou vender conosco?
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {diferenciais.map((dif, index) => (
              <Reveal
                key={index}
                delay={index * 100}
                className="card-lift bg-[var(--brown-deep)] p-8 rounded border border-white/10 hover:border-[var(--accent-gold)] transition-all duration-300"
              >
                <h4 className="text-[var(--accent-gold)] font-extrabold text-lg uppercase tracking-tight mb-3">
                  {dif.titulo}
                </h4>
                <p className="text-white/80 text-xs leading-relaxed">{dif.texto}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="w-full bg-[var(--cream)] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal>
            <Eyebrow n="04" center />
            <h2 className="text-3xl md:text-5xl font-black text-[var(--brown-dark)] uppercase tracking-tight mb-3">
              Passo a Passo da Compra
            </h2>
            <p className="text-[var(--text-soft)] mb-16 text-sm font-semibold uppercase tracking-wider">
              Processo claro e acompanhado em todas as etapas
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {passos.map((passo, index) => (
              <Reveal
                key={index}
                delay={index * 100}
                className="flex flex-col items-center text-center group bg-white p-6 rounded shadow-sm border border-[var(--border-warm)]"
              >
                <div className="w-16 h-16 rounded bg-[var(--brown-dark)] text-[var(--accent-gold)] flex items-center justify-center text-2xl font-black shadow-md mb-5 font-display transition-transform duration-300 group-hover:bg-[var(--accent-gold)] group-hover:text-[var(--brown-deep)]">
                  {passo.n}
                </div>
                <h4 className="font-extrabold text-base text-[var(--brown-dark)] uppercase tracking-tight mb-2">
                  {passo.titulo}
                </h4>
                <p className="text-[var(--text-soft)] text-xs leading-relaxed">
                  {passo.texto}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER FINAL */}
      <section className="w-full parallax-house-bg py-28 text-center px-6 border-t-4 border-[var(--accent-gold)] shadow-2xl relative">
        <Reveal className="w-full max-w-4xl mx-auto relative z-10">
          <span className="bg-[var(--accent-gold)] text-[var(--brown-deep)] font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded inline-block mb-4 shadow-md">
            OPORTUNIDADES EXCLUSIVAS
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight leading-tight drop-shadow-md">
            Encontre o Imóvel Perfeito <br />ou Anuncie Conosco
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10 font-medium drop-shadow">
            Atendimento direto e personalizado com quem entende do mercado imobiliário para garantir as melhores oportunidades.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-[var(--accent-gold)] text-[var(--brown-deep)] font-black text-sm px-10 py-4 rounded-md shadow-2xl hover:bg-white transition-all duration-300 uppercase tracking-widest"
          >
            Falar no WhatsApp: (43) 9 9677-3333
          </a>
        </Reveal>
      </section>

      {/* RODAPÉ */}
      <footer id="contato" className="w-full bg-[var(--brown-deep)] text-white py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs">
          <div className="text-center md:text-left">
            <p className="font-extrabold text-sm text-[var(--accent-gold)] uppercase tracking-wider mb-1">
              MARCELO LAMAISON
            </p>
            <p className="text-white/60 font-semibold uppercase tracking-wide">
              ASSESSORIA EM NEGÓCIOS EMPRESARIAIS E IMOBILIÁRIOS
            </p>
          </div>
          <div className="text-center md:text-right text-white/60 space-y-1">
            <p className="font-bold text-white">www.maqlamaison.com.br</p>
            <p>Atendimento: (43) 9 9677-3333</p>
            <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

           {/* BOTÃO FLUTUANTE WHATSAPP */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#1DA851] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 z-50"
      >
        <span className="sr-only">WhatsApp</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </a>

    </div>
  );
};

export default HomeScreen;
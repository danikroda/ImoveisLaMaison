import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { categoriasBase, produtosBase } from "../data";

const CategoriaScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [busca, setBusca] = useState("");
  const [resultadosBusca, setResultadosBusca] = useState([]);
  
  const [produtoModal, setProdutoModal] = useState(null);
  const [imagemIndexModal, setImagemIndexModal] = useState(0);

  const categoriaAtual = categoriasBase.find((cat) => cat.id === id);
  const produtosDaCategoria = produtosBase.filter((p) => p.categoriaId === id);
  const whatsappLink = "https://wa.me/5543996773333";
  const instagramLink = "https://www.instagram.com/marcelo_maq.lamaison?igsh=NWE2YnVkaDJ1bjlj";

  useEffect(() => {
    window.scrollTo(0, 0);
    const produtoIdUrl = searchParams.get("produto");
    if (produtoIdUrl) {
      const prod = produtosBase.find((p) => p.id === produtoIdUrl);
      if (prod) abrirModal(prod);
    }
  }, [id, searchParams]);

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

  const irParaProduto = (catId, prodId) => {
    setBusca("");
    navigate(`/categoria/${catId}?produto=${prodId}`);
  };

  const abrirModal = (prod) => {
    setProdutoModal(prod);
    setImagemIndexModal(0);
  };

  const fecharModal = () => {
    setProdutoModal(null);
    navigate(`/categoria/${id}`, { replace: true });
  };

  const proximaImagem = () => {
    if (produtoModal) {
      const imagens = produtoModal.imagens || [produtoModal.imagem];
      setImagemIndexModal((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
    }
  };

  const imagemAnterior = () => {
    if (produtoModal) {
      const imagens = produtoModal.imagens || [produtoModal.imagem];
      setImagemIndexModal((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));
    }
  };

  const checkIsVideo = (url) => {
    if (!url) return false;
    const link = url.toLowerCase();
    return link.endsWith('.mp4') || link.endsWith('.webm');
  };

  if (!categoriaAtual) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#FAF8F5] px-4 text-center">
        <h1 className="text-3xl font-bold text-[#44352D]">Categoria não encontrada</h1>
        <p className="text-stone-600 mt-2">A categoria solicitada não existe ou foi removida.</p>
        <button 
          onClick={() => navigate("/")} 
          className="mt-6 px-8 py-3 bg-[#C19A5A] text-white font-bold uppercase rounded shadow hover:opacity-90 transition-opacity"
        >
          Voltar ao Início
        </button>
      </div>
    );
  }

  const imagensModal = produtoModal ? (produtoModal.imagens || [produtoModal.imagem]) : [];

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#FAF8F5] font-sans">
      
      {/* Top Bar Superior Escura */}
      <div className="w-full text-xs font-medium text-amber-100/70 py-2 px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-3 bg-[#2C201A] border-b border-black/20">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
          <span className="flex items-center gap-1">📞 (43) 9 9677-3333</span>
          <span className="hidden md:inline">|</span>
          <span className="hidden md:inline">www.maqlamaison.com.br</span>
        </div>
        <div className="flex gap-4 items-center">
          <a 
            href={instagramLink} 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-[#C19A5A] transition-colors"
          >
            @marceloperi_
          </a>
          <span>|</span>
          <a 
            href={instagramLink} 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-[#C19A5A] transition-colors"
          >
            /marceloperilameson_
          </a>
        </div>
      </div>

      {/* NAV PRINCIPAL (Cor idêntica à imagem) */}
      <nav className="sticky top-0 z-50 w-full px-6 md:px-12 py-3 shadow-2xl bg-[#44352D] border-b border-[#352821]">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-4">
          
          {/* Logo */}
          <div
            className="flex items-center justify-center cursor-pointer py-1 flex-shrink-0"
            onClick={() => navigate("/")}
          >
            <img
              src="/logo.svg"
              alt="Marcelo Lamaison - Assessoria em Negócios Empresariais"
              className="h-12 md:h-14 w-auto object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Menus e Busca */}
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            
            {/* Barra de Pesquisa Estilizada */}
            <div className="relative flex items-center bg-[#342720] border border-white/10 rounded-md overflow-visible w-full md:w-80 transition-all duration-300 focus-within:border-[#C19A5A] z-50">
              <div className="px-3 flex items-center justify-center text-white/50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
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
                className="w-full py-1.5 px-1 bg-transparent outline-none text-white text-xs placeholder-white/40 font-medium"
              />

              {resultadosBusca.length > 0 && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white border border-stone-200 shadow-2xl rounded-md overflow-y-auto max-h-72 z-50 text-left">
                  <div className="p-2 bg-[#44352D] text-white text-[10px] font-bold uppercase tracking-wider">
                    Imóveis encontrados:
                  </div>
                  {resultadosBusca.map((prod) => (
                    <div
                      key={prod.id}
                      onClick={() => {
                        irParaProduto(prod.categoriaId, prod.id);
                        setBusca("");
                      }}
                      className="p-3 border-b border-stone-100 hover:bg-[#FAF8F5] cursor-pointer transition-colors flex flex-col gap-1"
                    >
                      <h4 className="font-bold text-[#44352D] text-xs leading-tight">
                        {prod.nome}
                      </h4>
                      <div className="flex justify-between items-center text-[10px] text-stone-500">
                        <span>{prod.medida}</span>
                        <span className="font-extrabold text-[#C19A5A]">{prod.valor}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Links de Navegação idênticos ao layout */}
            <div className="hidden lg:flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white">
              <button 
                onClick={() => navigate('/')} 
                className="bg-[#C19A5A] text-[#2C201A] px-3 py-1.5 rounded font-extrabold hover:bg-[#b08b4f] transition-colors"
              >
                HOME
              </button>
              <button 
                onClick={() => navigate('/')} 
                className="px-3 py-1.5 hover:text-[#C19A5A] transition-colors"
              >
                IMÓVEIS
              </button>
              <button 
                onClick={() => navigate('/')} 
                className="px-3 py-1.5 hover:text-[#C19A5A] transition-colors"
              >
                QUEM SOMOS
              </button>
              <button 
                onClick={() => navigate('/')} 
                className="px-3 py-1.5 hover:text-[#C19A5A] transition-colors"
              >
                DIFERENCIAIS
              </button>
              <button 
                onClick={() => navigate('/')} 
                className="px-3 py-1.5 hover:text-[#C19A5A] transition-colors"
              >
                CONTATO
              </button>
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noreferrer" 
                className="bg-[#C19A5A] text-[#2C201A] px-3 py-1.5 rounded font-extrabold hover:bg-[#b08b4f] transition-colors"
              >
                ATENDIMENTO
              </a>
            </div>

          </div>
        </div>
      </nav>

      {/* Hero Categoria */}
      <section className="w-full bg-[#44352D] text-white py-14 px-6 text-center border-b border-[#352821]">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-[#C19A5A] text-[#2C201A] text-xs font-black uppercase tracking-widest px-3 py-1 rounded mb-3">
            OPORTUNIDADE
          </span>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            {categoriaAtual.nome}
          </h1>
          <p className="mt-3 text-amber-100/80 text-sm md:text-base max-w-2xl mx-auto font-medium">
            Confira as opções exclusivas disponíveis para negociação nesta categoria.
          </p>

          
        </div>
      </section>

      {/* Grid de Imóveis / Produtos */}
      <main className="w-full max-w-7xl mx-auto px-6 py-14 flex-1">
        <h2 className="text-2xl md:text-3xl font-black text-[#44352D] mb-8 text-center uppercase tracking-wide">
          Imóveis Disponíveis
        </h2>

        {produtosDaCategoria.length === 0 ? (
          <div className="text-center py-16 text-stone-500 text-lg font-medium bg-white rounded-xl border border-stone-200 p-8 shadow-sm">
            Nenhum item cadastrado nesta categoria ainda.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {produtosDaCategoria.map((prod) => {
              const capaMidia = prod.imagens ? prod.imagens[0] : prod.imagem;
              const isVideo = checkIsVideo(capaMidia);

              return (
                <div 
                  key={prod.id} 
                  className="bg-white rounded-xl shadow-md border border-stone-200 overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-full h-56 bg-stone-200 border-b border-stone-200 relative overflow-hidden">
                    {isVideo ? (
                      <video 
                        src={capaMidia} 
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <img 
                        src={capaMidia} 
                        alt={prod.nome} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/600x400?text=" + encodeURIComponent(prod.nome);
                        }}
                      />
                    )}
                    <span className="absolute top-4 right-4 bg-[#44352D] text-white text-[10px] font-bold px-3 py-1 rounded shadow uppercase z-10">
                      {prod.tipo}
                    </span>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="text-lg font-extrabold text-[#44352D] mb-2 uppercase leading-snug group-hover:text-[#C19A5A] transition-colors">
                        {prod.nome}
                      </h3>
                      <div className="text-stone-600 text-xs font-medium mb-4 flex flex-col gap-1">
                        <span>📏 Area: <strong>{prod.medida}</strong></span>
                        <span className="text-[#C19A5A] font-black text-base mt-2">{prod.valor}</span>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => abrirModal(prod)} 
                      className="w-full bg-[#FAF8F5] text-[#44352D] border border-stone-300 py-3 rounded font-bold text-xs uppercase hover:bg-[#C19A5A] hover:text-[#2C201A] hover:border-[#C19A5A] transition-all mt-4"
                    >
                      Ver Detalhes Completos
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Modal de Detalhes */}
      {produtoModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white w-full max-w-5xl max-h-[90vh] rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative">
            
            <button 
              onClick={fecharModal} 
              className="absolute top-4 right-4 z-20 bg-[#44352D] text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-600 transition-colors shadow-lg"
            >
              ✕
            </button>

            {/* Mídia da Modal */}
            <div className="w-full md:w-1/2 h-64 md:h-auto bg-[#FAF8F5] relative group flex items-center justify-center overflow-hidden">
              {(() => {
                const midiaModalAtual = imagensModal[imagemIndexModal] || imagensModal[0];
                const isVideoModal = checkIsVideo(midiaModalAtual);

                return isVideoModal ? (
                  <video src={midiaModalAtual} controls autoPlay className="w-full h-full object-contain max-h-[85vh] bg-black" />
                ) : (
                  <img src={midiaModalAtual} alt={produtoModal.nome} className="w-full h-full object-contain max-h-[85vh] p-2" />
                );
              })()}
              
              {imagensModal.length > 1 && (
                <>
                  <button onClick={imagemAnterior} className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#44352D]/80 hover:bg-[#C19A5A] text-white w-9 h-9 rounded-full flex items-center justify-center transition-colors z-10">❮</button>
                  <button onClick={proximaImagem} className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#44352D]/80 hover:bg-[#C19A5A] text-white w-9 h-9 rounded-full flex items-center justify-center transition-colors z-10">❯</button>
                </>
              )}
            </div>

            {/* Informações na Modal */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto max-h-[90vh]">
              <span className="text-[#C19A5A] font-bold text-xs uppercase tracking-widest mb-1">{produtoModal.tipo}</span>
              <h2 className="text-xl md:text-2xl font-black text-[#44352D] mb-4 uppercase leading-tight">{produtoModal.nome}</h2>
              
              <div className="flex flex-col gap-1.5 mb-5 p-4 bg-[#FAF8F5] rounded-md border border-stone-200">
                <span className="text-xs text-stone-600"><strong>Medida / Área:</strong> {produtoModal.medida}</span>
                <span className="text-base text-[#C19A5A] font-black">Valor: {produtoModal.valor}</span>
              </div>

              <div className="text-xs text-stone-600 leading-relaxed mb-6 flex-1 whitespace-pre-wrap">
                <strong className="text-[#44352D] block mb-1 text-sm">Descrição / Informações do Imóvel:</strong>
                {produtoModal.descricao}
              </div>

              <a 
                href={`https://wa.me/5543996773333?text=Olá! Tenho interesse no item: *${produtoModal.nome}* (${produtoModal.medida}). Pode me passar mais informações?`} 
                target="_blank" 
                rel="noreferrer" 
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 rounded font-bold text-xs uppercase hover:bg-[#1DA851] transition-all shadow-md mt-auto"
              >
                TENHO INTERESSE (WHATSAPP)
              </a>
            </div>

          </div>
        </div>
      )}

      {/* Floating Whatsapp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#1DA851] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 z-50 text-2xl"
      >
        <span className="sr-only">WhatsApp</span>
        💬
      </a>

      {/* Footer */}
      <footer className="w-full bg-[#2C201A] text-amber-100/50 py-6 text-center text-xs border-t border-black/20">
        © 2026 Maq La Maison Intermediações. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default CategoriaScreen;
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { categoriasBase, produtosBase } from "../data";

const CategoriaScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Estados
  const [busca, setBusca] = useState("");
  const [resultadosBusca, setResultadosBusca] = useState([]);
  
  // Controle do Modal e do Carrossel de Imagens
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
    setImagemIndexModal(0); // Sempre abre na primeira imagem
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

  // Função Auxiliar para descobrir se o link é de vídeo
  const checkIsVideo = (url) => {
    if (!url) return false;
    const link = url.toLowerCase();
    return link.endsWith('.mp4') || link.endsWith('.webm');
  };

  if (!categoriaAtual) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#FDFBF7]">
        <h1 className="text-3xl font-bold text-[#2C2825]">Categoria não encontrada</h1>
        <button onClick={() => navigate("/")} className="mt-6 px-8 py-3 bg-[#C29B4A] text-[#2C2825] font-bold uppercase rounded">
          Voltar ao Início
        </button>
      </div>
    );
  }

  // Prepara as imagens/videos do modal com segurança
  const imagensModal = produtoModal ? (produtoModal.imagens || [produtoModal.imagem]) : [];

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#FDFBF7]" style={{ fontFamily: "'Inter', sans-serif" }}>
      
      {/* Faixa de Contato Topo */}
      <div className="w-full text-xs font-medium text-[#6A625A] py-2 px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-3 bg-white border-b border-[#E8E2D6]">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
          <span>📞 +55 (43) 9 9677-3333 | vendas@maqlamaison.com.br</span>
          <a 
            href={instagramLink} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-1.5 text-[#9E7A31] hover:text-[#2C2825] transition-colors"
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
          <button onClick={() => navigate('/')} className="hover:text-[#9E7A31] transition-colors uppercase">➔ Voltar ao Início</button>
        </div>
      </div>

      {/* Nav Principal */}
      <nav className="sticky top-0 z-50 w-full px-6 md:px-12 py-3 shadow-xl bg-[#2C2825] border-b border-[#48423C]">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto gap-4">
          <div className="flex items-center justify-center cursor-pointer py-1 flex-shrink-0" onClick={() => navigate('/')}>
           
              <img src="/logo.svg" alt="Logo Maq La Maison" className="h-16 w-auto object-contain" />
            
          </div>

          <div className="hidden md:flex flex-col items-end gap-4 w-full">
            <div className="relative flex items-center bg-[#3A3530] border border-[#48423C] rounded-md overflow-visible w-full max-w-md focus-within:border-[#C29B4A] z-50">
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
                className="w-full py-2 px-2 bg-transparent outline-none text-[#FDFBF7] text-sm placeholder-white/40" 
              />
              {resultadosBusca.length > 0 && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white border border-[#E8E2D6] shadow-2xl rounded-md overflow-y-auto max-h-72 z-50">
                  <div className="p-2 bg-[#F4EFE6] text-[#3A3530] text-xs font-bold uppercase tracking-wider border-b border-[#E8E2D6]">Resultados encontrados:</div>
                  {resultadosBusca.map(prod => (
                    <div key={prod.id} onClick={() => irParaProduto(prod.categoriaId, prod.id)} className="p-3 border-b border-[#E8E2D6] hover:bg-[#F4EFE6] cursor-pointer transition-colors flex flex-col gap-1">
                      <h4 className="font-bold text-[#2C2825] text-sm leading-tight">{prod.nome}</h4>
                      <div className="flex justify-between items-center text-xs text-[#6A625A]">
                        <span>{prod.medida}</span>
                        <span className="font-bold text-[#9E7A31]">{prod.valor}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-8">
              <button onClick={() => navigate('/')} className="text-[#C29B4A] font-bold uppercase text-xs hover:text-white transition-colors tracking-wider">
                ➔ Voltar ao Início
              </button>
              <a href={instagramLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white px-6 py-2 rounded font-bold shadow-sm transition-all duration-300 hover:scale-105 text-sm">
                Instagram 
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

      {/* Título da Categoria */}
      <header className="w-full bg-[#E8E2D6] py-16 text-center shadow-inner border-b border-[#DBC07A]">
        <h1 className="text-4xl md:text-5xl font-black uppercase text-[#2C2825]" style={{ fontFamily: "'Fraunces', serif" }}>
          {categoriaAtual.nome}
        </h1>
        <p className="mt-4 text-[#6A625A] text-lg font-medium">Equipamentos disponíveis nesta categoria.</p>
      </header>

      {/* Grid de Produtos */}
      <main className="w-full max-w-7xl mx-auto px-6 py-20 flex-1">
        {produtosDaCategoria.length === 0 ? (
           <div className="text-center py-20 text-[#6A625A] text-xl">
              Nenhuma máquina cadastrada nesta categoria ainda.
           </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {produtosDaCategoria.map((prod) => {
              // Verifica se a primeira mídia da grade é vídeo
              const capaMidia = prod.imagens ? prod.imagens[0] : prod.imagem;
              const isVideo = checkIsVideo(capaMidia);

              return (
                <div key={prod.id} className="bg-white rounded-lg shadow-md border border-[#E8E2D6] overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-full h-56 bg-gray-200 border-b border-[#E8E2D6] relative overflow-hidden">
                    
                    {/* Renderiza VÍDEO ou IMAGEM dependendo do arquivo */}
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
                        className="w-full h-full object-cover text-transparent group-hover:scale-105 transition-transform duration-500" 
                      />
                    )}
                    
                    <span className="absolute top-4 right-4 bg-[#2C2825] text-white text-xs font-bold px-3 py-1 rounded shadow-md uppercase z-10">
                      {prod.tipo}
                    </span>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-[#2C2825] mb-2 uppercase leading-tight">{prod.nome}</h3>
                      <p className="text-[#6A625A] text-sm font-medium mb-4 flex flex-col gap-1">
                        <span>📏 {prod.medida}</span>
                        <span className="text-[#9E7A31] font-bold text-base mt-2">{prod.valor}</span>
                      </p>
                    </div>
                    
                    <button onClick={() => abrirModal(prod)} className="w-full bg-[#F4EFE6] text-[#2C2825] border border-[#DBC07A] py-3 rounded font-bold text-sm uppercase hover:bg-[#C29B4A] transition-colors mt-4">
                      Ver Detalhes Completos
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* JANELA MODAL */}
      {produtoModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          <div className="bg-white w-full max-w-5xl max-h-[90vh] rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative animate-[heroIn_0.3s_ease-out]">
            
            {/* Botão Fechar */}
            <button onClick={fecharModal} className="absolute top-4 right-4 z-20 bg-[#2C2825] text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-600 transition-colors shadow-lg">
              ✕
            </button>

            {/* Carrossel de Imagens/Videos no Modal */}
            <div className="w-full md:w-1/2 h-64 md:h-auto bg-[#E8E2D6] relative group flex items-center justify-center overflow-hidden">
              
              {(() => {
                const midiaModalAtual = imagensModal[imagemIndexModal] || imagensModal[0];
                const isVideoModal = checkIsVideo(midiaModalAtual);

                return isVideoModal ? (
                  <video 
                    src={midiaModalAtual} 
                    controls 
                    autoPlay
                    className="w-full h-full object-contain max-h-[85vh] bg-black p-0" 
                  />
                ) : (
                  <img 
                    src={midiaModalAtual} 
                    alt={`${produtoModal.nome} - Mídia ${imagemIndexModal + 1}`} 
                    className="w-full h-full object-contain max-h-[85vh] p-2" 
                  />
                );
              })()}
              
              {/* Setas do Carrossel */}
              {imagensModal.length > 1 && (
                <>
                  <button onClick={imagemAnterior} className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#2C2825]/70 hover:bg-[#C29B4A] text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100 shadow-md z-10">
                    ❮
                  </button>
                  <button onClick={proximaImagem} className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#2C2825]/70 hover:bg-[#C29B4A] text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100 shadow-md z-10">
                    ❯
                  </button>
                  
                  {/* Bolinhas indicadoras */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 px-3 py-1.5 rounded-full z-10">
                    {imagensModal.map((_, index) => (
                      <span 
                        key={index} 
                        className={`w-2 h-2 rounded-full transition-colors ${index === imagemIndexModal ? 'bg-[#C29B4A] scale-110' : 'bg-white/60'}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Informações Completas */}
            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col overflow-y-auto max-h-[90vh]">
              <span className="text-[#9E7A31] font-bold text-xs uppercase tracking-widest mb-2">{produtoModal.tipo}</span>
              <h2 className="text-3xl font-black text-[#2C2825] mb-4 uppercase" style={{ fontFamily: "'Fraunces', serif" }}>{produtoModal.nome}</h2>
              
              <div className="flex flex-col gap-2 mb-6 p-4 bg-[#F4EFE6] rounded-md border border-[#E8E2D6]">
                <span className="text-sm text-[#6A625A]"><strong>Medida Útil:</strong> {produtoModal.medida}</span>
                <span className="text-lg text-[#9E7A31] font-black">Valor: {produtoModal.valor}</span>
              </div>

              <div className="text-sm text-[#6A625A] leading-relaxed mb-8 flex-1 whitespace-pre-wrap">
                <strong className="text-[#2C2825] block mb-2">Descrição Técnica e Observações:</strong>
                {produtoModal.descricao}
              </div>

              {/* BOTÃO WHATSAPP NO MODAL */}
              <a 
                href={`https://wa.me/5543996773333?text=Olá! Tenho interesse na máquina: *${produtoModal.nome}* (${produtoModal.medida}). Pode me passar mais informações?`} 
                target="_blank" 
                rel="noreferrer" 
                className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded font-bold text-sm uppercase hover:bg-[#1DA851] transition-all shadow-lg mt-auto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                TENHO INTERESSE (WHATSAPP)
              </a>
            </div>

          </div>
        </div>
      )}

      {/* BOTÃO FLUTUANTE ADICIONADO AQUI TAMBÉM */}
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
      <footer className="w-full bg-[#2C2825] text-white/60 py-10 mt-auto text-center text-sm border-t border-[#3A3530]">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 px-6">
          <p>© 2026 Maq La Maison Intermediações. Todos os direitos reservados. Por Agência Konkah.</p>
        </div>
      </footer>
    </div>
  );
};

export default CategoriaScreen;
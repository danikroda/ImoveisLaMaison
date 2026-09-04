export const categoriasBase = [
  { 
    id: "terrenos-industriais", 
    nome: "Terrenos Industriais", 
    nomeCurto: "T. Industriais", 
    imagem: "public/TerrenoIndustrial/terreno.jpeg", 
    pdf: "/catalogo-terrenos-industriais.pdf" 
  },
  { 
    id: "terrenos-residenciais", 
    nome: "Terrenos Residenciais", 
    nomeCurto: "T. Residenciais", 
    imagem: "public/Residencial/AreaExterna.jpeg", 
    pdf: "/catalogo-terrenos-residenciais.pdf" 
  },
  { 
    id: "terrenos-comerciais", 
    nome: "Terrenos Comerciais", 
    nomeCurto: "T. Comerciais", 
    imagem: "/public/Residencial/Fundos.jpeg", 
    pdf: "/catalogo-terrenos-comerciais.pdf" 
  },
  { 
    id: "salas-comerciais", 
    nome: "Salas Comerciais", 
    nomeCurto: "Salas Com.", 
    imagem: "/public/Residencial/vistadecima.jpeg", 
    pdf: "/catalogo-salas.pdf" 
  },
  { 
    id: "galpoes-comerciais", 
    nome: "Galpões Comerciais", 
    nomeCurto: "G. Comerciais", 
    imagem: "/public/Residencial/jardimDeInverno.jpeg", 
    pdf: "/catalogo-galpoes-comerciais.pdf" 
  },
  { 
    id: "galpoes-industriais", 
    nome: "Galpões Industriais", 
    nomeCurto: "G. Industriais", 
    imagem: "public//GalpaoIndustrial/Racao.jpeg", 
    pdf: "/catalogo-galpoes-industriais.pdf" 
  },
  { 
    id: "empresas-venda", 
    nome: "Empresas à Venda", 
    nomeCurto: "Empresas", 
    imagem: "/public/Residencial/SalaDeEstar.jpeg", 
    pdf: "/catalogo-empresas.pdf" 
  },
  { 
    id: "chacaras-sitios", 
    nome: "Chácaras e Sítios", 
    nomeCurto: "Chácaras", 
    imagem: "public/ChacarasSitios/chacara1-2.jpeg", 
    pdf: "/catalogo-chacaras.pdf" 
  }
];

export const produtosBase = [
  {
    id: "ti-1",
    categoriaId: "terrenos-industriais",
    nome: "Terreno Plano - Parque Industrial Zona Norte",
    tipo: "Terreno Industrial",
    medida: "4.537 m²",
    valor: "Sob Consulta",
    descricao: "Excelente terreno plano com 4.537 m² localizado na Rua Aço, Parque Industrial Zona Norte em Apucarana/PR. Ótima localização para galpões, indústrias ou logística.",
    imagens: [
      "/TerrenoIndustrial/terreno.jpeg",
      "/TerrenoIndustrial/MetricasTerreno1.jpeg",
      "/TerrenoIndustrial/terrenoPorCima.jpeg",
      "/TerrenoIndustrial/terreno1.mp4"
    ]
  },

  // TERRENOS / IMÓVEIS RESIDENCIAIS
 
  {
    id: "tr-1",
    categoriaId: "terrenos-residenciais",
    nome: "Residência Ampla - Rua Guarapuava",
    tipo: "Casa / Residencial",
    medida: "590 m²",
    valor: "R$ 1.450.000,00",
    descricao: "Excelente residência com 590 m² localizada na Rua Guarapuava, nº 602 em Apucarana/PR. A casa atualmente está vazia. Estrutura completa contendo salas amplas, suíte com banheira, jardim de inverno, área externa e espaço nos fundos.",
    imagens: [
      "/Residencial/AreaExterna.jpeg",
      "/Residencial/banheira.jpeg",
      "/Residencial/banheiro1.jpeg",
      "/Residencial/banheiro2.jpeg",
      "/Residencial/banheiro3.jpeg",
      "/Residencial/Corredor.jpeg",
      "/Residencial/Fundos.jpeg",
      "/Residencial/jardimDeInverno.jpeg",
      "/Residencial/quarto1.jpeg",
      "/Residencial/quarto2.jpeg",
      "/Residencial/quarto3.jepg.jpeg",
      "/Residencial/SalaDeEstar.jpeg",
      "/Residencial/SalaDeEstar2.jpeg",
      "/Residencial/SalaDeEstar3.jpeg",
      "/Residencial/SalaDeJantar.jpeg",
      "/Residencial/vistadecima.jpeg"
    ]
  },

  // TERRENOS COMERCIAIS
  {
    id: "tc-1",
    categoriaId: "terrenos-comerciais",
    nome: "Terreno Comercial em Avenida Principal",
    tipo: "Avenida Comercial",
    medida: "1.000m² (20x50)",
    valor: "R$ 890.000,00",
    descricao: "Terreno comercial estratégico com alto fluxo de veículos e pedestres. Ideal para supermercados, farmácias, fast food ou centro comercial.",
    imagens: ["/imagens/terreno-comercial-1.jpg"]
  },
  {
    id: "tc-2",
    categoriaId: "terrenos-comerciais",
    nome: "Lote Comercial de Esquina",
    tipo: "Esquina",
    medida: "600m²",
    valor: "R$ 520.000,00",
    descricao: "Excelente visibilidade para o seu negócio. Esquina com acesso por duas vias asfaltadas, zoneamento comercial liberado.",
    imagens: ["/imagens/terreno-comercial-2.jpg"]
  },

  // SALAS COMERCIAIS
  {
    id: "sc-1",
    categoriaId: "salas-comerciais",
    nome: "Sala Comercial em Edifício Corporate",
    tipo: "Escritório / Consultório",
    medida: "45m²",
    valor: "R$ 290.000,00",
    descricao: "Sala com acabamento moderno, piso elevado, ar condicionado central e 1 vaga de garagem coberta. Prédio com recepção e controle de acesso.",
    imagens: ["/imagens/sala-comercial-1.jpg"]
  },
  {
    id: "sc-2",
    categoriaId: "salas-comerciais",
    nome: "Conjunto de Salas Integradas",
    tipo: "Andar Corporativo",
    medida: "120m²",
    valor: "R$ 650.000,00",
    descricao: "Conjunto com 3 salas unificadas, recepção montada, 2 banheiros e mini copa. Ideal para escritórios de advocacia, tecnologia ou consultórios.",
    imagens: ["/imagens/sala-comercial-2.jpg"]
  },

  // GALPÕES COMERCIAIS
  {
    id: "gc-1",
    categoriaId: "galpoes-comerciais",
    nome: "Galpão Comercial com Showroom",
    tipo: "Comercial / Logístico",
    medida: "500m²",
    valor: "R$ 980.000,00",
    descricao: "Galpão com fachada em vidro para showroom, escritório no mezanino e área livre para estoque/depósito. Pé direito de 6 metros.",
    imagens: ["/imagens/galpao-comercial-1.jpg"]
  },
  {
    id: "gc-2",
    categoriaId: "galpoes-comerciais",
    nome: "Galpão Comercial para Distribuição",
    tipo: "Distribuição",
    medida: "850m²",
    valor: "R$ 1.450.000,00",
    descricao: "Estrutura pronta para depósito e logística urbana. Portão de acesso para caminhões, pátio de manobra e escritórios integrados.",
    imagens: ["/imagens/galpao-comercial-2.jpg"]
  },

  // GALPÕES INDUSTRIAIS
  {
    id: "gi-1",
    categoriaId: "galpoes-industriais",
    nome: "Indústria de Ração Completa",
    tipo: "Terreno Industrial",
    medida: "6.000 m²",
    valor: "Sob Consulta",
    descricao: "Área construida de 6.000 m², em pleno funcionamento, produz 2 toneladas por hora, tem localização estratégica, e 3.500 m² de área contruida.",
    imagens: [
      "/GalpaoIndustrial/IndustriaRacao.mp4",
      "/GalpaoIndustrial/Racao.jpeg"
    ]
  },
  {
    id: "gi-2",
    categoriaId: "galpoes-industriais",
    nome: "Módulo Industrial com Ponte Rolante",
    tipo: "Industrial",
    medida: "1.200m²",
    valor: "R$ 2.300.000,00",
    descricao: "Galpão preparado para usinagem/caldeiraria. Inclui estrutura para ponte rolante de até 10 toneladas, área administrativa e vestiários.",
    imagens: ["/imagens/galpao-industrial-2.jpg"]
  },

  // EMPRESAS À VENDA
  {
    id: "emp-1",
    categoriaId: "empresas-venda",
    nome: "Distribuidora e Logística em Pleno Funcionamento",
    tipo: "Empresa / Operacional",
    medida: "Ativos + Carteira",
    valor: "R$ 1.800.000,00",
    descricao: "Passa-se o ponto e operação completa de distribuidora. Carteira ativa de clientes, frota própria de veículos e contrato de galpão vigente.",
    imagens: ["/imagens/empresa-venda-1.jpg"]
  },
  {
    id: "emp-2",
    categoriaId: "empresas-venda",
    nome: "Indústria de Transformação (Operação Ativa)",
    tipo: "Indústria à Venda",
    medida: "Parque Fabril + Marca",
    valor: "Sob Consulta",
    descricao: "Venda de participação ou 100% da operação industrial. Equipamentos revisados, carteira consolidada no mercado e faturamento recorrente comprovado.",
    imagens: ["/imagens/empresa-venda-2.jpg"]
  },

  // CHÁCARAS E SÍTIOS
  {
    id: "cs-1",
    categoriaId: "chacaras-sitios",
    nome: "Chácara",
    tipo: "Chácara",
    medida: "1.500m²",
    valor: "R$150.000,00",
    descricao: "Excelente chácara para lazer e eventos, contendo casa sede completa, piscina, área gourmet com churrasqueira, campo de futebol e pomar diversificado.",
    imagens: [
      "/ChacarasSitios/chacara1-2.jpeg",
      "/ChacarasSitios/chacara1-2.jpeg",
      "/ChacarasSitios/chacaraPorCima.jpeg",
      "/ChacarasSitios/chacara.mp4"
    ]
  },
  {
    id: "cs-2",
    categoriaId: "chacaras-sitios",
    nome: "Sítio Produtivo com Mina d'Água e Tanque de Peixes",
    tipo: "Sítio / Produção",
    medida: "20.000m² (2 Hectares)",
    valor: "R$ 750.000,00",
    descricao: "Sítio com excelente topografia e terra fértil. Conta com água nascente, tanques para piscicultura, galpão de apoio e casa para caseiro.",
    imagens: ["/imagens/sitio-1.jpg"]
  }
];
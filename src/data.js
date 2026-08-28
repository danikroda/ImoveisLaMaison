export const categoriasBase = [

  { 
    id: "terrenos-industriais", 
    nome: "Terrenos Industriais", 
    nomeCurto: "T. Industriais", 
    imagem: "public/terreno.jpeg", 
    pdf: "/catalogo-terrenos-industriais.pdf" 
  },
  { 
    id: "terrenos-residenciais", 
    nome: "Terrenos Residenciais", 
    nomeCurto: "T. Residenciais", 
    imagem: "public/terreno2.jpeg", 
    pdf: "/catalogo-terrenos-residenciais.pdf" 
  },
  { 
    id: "terrenos-comerciais", 
    nome: "Terrenos Comerciais", 
    nomeCurto: "T. Comerciais", 
    imagem: "/imagens/terrenos-comerciais.webp", 
    pdf: "/catalogo-terrenos-comerciais.pdf" 
  },
  { 
    id: "salas-comerciais", 
    nome: "Salas Comerciais", 
    nomeCurto: "Salas Com.", 
    imagem: "/imagens/salas-comerciais.webp", 
    pdf: "/catalogo-salas.pdf" 
  },
  { 
    id: "galpoes-comerciais", 
    nome: "Galpões Comerciais", 
    nomeCurto: "G. Comerciais", 
    imagem: "/imagens/galpoes-comerciais.webp", 
    pdf: "/catalogo-galpoes-comerciais.pdf" 
  },
  { 
    id: "galpoes-industriais", 
    nome: "Galpões Industriais", 
    nomeCurto: "G. Industriais", 
    imagem: "/imagens/galpoes-industriais.webp", 
    pdf: "/catalogo-galpoes-industriais.pdf" 
  },
  { 
    id: "empresas-venda", 
    nome: "Empresas à Venda", 
    nomeCurto: "Empresas", 
    imagem: "/imagens/empresas-venda.webp", 
    pdf: "/catalogo-empresas.pdf" 
  },
];

export const produtosBase = [


  {
    id: "ti-1",
    categoriaId: "terrenos-industriais",
  nome: "Terreno Plano - Parque Industrial Zona Norte",
  tipo: "Terreno Industrial",
  medida: "4.537 m²",
  valor: "Sob Consulta", // ou insira o valor desejado
  descricao: "Excelente terreno plano com 4.537 m² localizado na Rua Aço, Parque Industrial Zona Norte em Apucarana/PR. Ótima localização para galpões, indústrias ou logística.",
    imagens: ["/terreno.jpeg",
      "/MetricasTerreno1.jpeg",
      "/terrenoPorCima.jpeg",
      "/terreno1.mp4"
    ]
  },
  // TERRENOS RESIDENCIAIS
  {
    id: "tr-1",
  categoriaId: "terrenos-residenciais",
  nome: "Terreno Plano - Parque Industrial Zona Norte",
  tipo: "Terreno Industrial",
  medida: "4.537 m²",
  valor: "Sob Consulta", // ou insira o valor desejado
  descricao: "Excelente terreno plano com 4.537 m² localizado na Rua Aço, Parque Industrial Zona Norte em Apucarana/PR. Ótima localização para galpões, indústrias ou logística.",
    imagens: ["/terreno.jpeg"
    ]
  },
  {
    id: "tr-2",
    categoriaId: "terrenos-residenciais",
    nome: "Terreno Residencial em Bairro Nobre",
    tipo: "Rua Publica",
    medida: "450m² (15x30)",
    valor: "R$ 240.000,00",
    descricao: "Ótima topografia, ideal para construção de residência ampla. Próximo a escolas, supermercados e áreas verdes. Fácil acesso ao centro.",
    imagens: ["/imagens/terreno-residencial-2.jpg"]
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
  nome: "Terreno Plano - Parque Industrial Zona Norte",
  tipo: "Terreno Industrial",
  medida: "4.537 m²",
  valor: "Sob Consulta", // ou insira o valor desejado
  descricao: "Excelente terreno plano com 4.537 m² localizado na Rua Aço, Parque Industrial Zona Norte em Apucarana/PR. Ótima localização para galpões, indústrias ou logística.",
    imagens: ["/galpao.jpeg"
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
  }
];
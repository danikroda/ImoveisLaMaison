export const categoriasBase = [
  { id: "fornos-tempera", nome: "Fornos de Têmpera", nomeCurto: "Fornos Têmpera", imagem: "public/Fornos/Forno-de-Tempera.webp", pdf: "/catalogo-forno.pdf" },
  { id: "mesas-corte", nome: "Mesas de Corte", nomeCurto: "Mesas de Corte", imagem: "public/Fornos/Mesa-de-corte.webp", pdf: "/catalogo-mesa.pdf" },
  { id: "lapidadoras", nome: "Lapidadoras / Bilateral", nomeCurto: "Lapidadoras", imagem: "public/Fornos/Lapidadora.webp", pdf: "/catalogo-lapidadora.pdf" },
  { id: "bizeladoras", nome: "Bizeladoras", nomeCurto: "Bizeladoras", imagem: "public/Fornos/Bizeladora.webp", pdf: "/catalogo-bizeladora.pdf" },
  { id: "furadeiras", nome: "Furadeiras / Centro de Usinagem", nomeCurto: "C. de Usinagem", imagem: "public/Fornos/imagem-furadeiras-recortes-site2.jpeg", pdf: "/catalogo-furadeira.pdf" },
  { id: "lavadoras", nome: "Lavadoras", nomeCurto: "Lavadoras", imagem: "public/Fornos/Lavadora.webp", pdf: "/catalogo-lavadora.pdf" },
  { id: "fornos-laminacao", nome: "Fornos de Laminação (EVA / PVB)", nomeCurto: "F. Laminação", imagem: "public/Fornos/imagem-fornos-de-laminacao-site2.jpeg", pdf: "/catalogo-laminacao.pdf" },
  { id: "movimentacao", nome: "Movimentação / Estocagem", nomeCurto: "Movimentação", imagem: "public/Fornos/Movimentacao-estocagem.jpeg", pdf: "/catalogo-movimentacao.pdf" },
  { id: "itens-diversos", nome: "Itens Diversos", nomeCurto: "Itens Diversos", imagem: "public/Fornos/Itens-Diversos.jpeg", pdf: "/catalogo-diversos.pdf" },
  { id: "industrias", nome: "Indústrias Temperadoras (À Venda)", nomeCurto: "Indústrias", imagem: "public/Fornos/imagem-fabricas-temperadorassite2.jpeg", pdf: "/catalogo-industria.pdf" },
];

export const produtosBase = [
  // VERTICAIS
  {
    id: "a", categoriaId: "fornos-tempera", nome: "Forno de Têmpera TAMGLASS", tipo: "", medida: "1200mm X 2500mm", valor: "R$ 120.000,00",
    descricao: "Área Útil de têmpera = 3,00 M2. Têmpera vidros de 6mm a 19mm. Feito Upgrade do Software, sendo moderno e simplificado. Instalado um inversor Siemens. Controle de temperatura por zonas. Desenvolvido melhorias práticas para facilidade de trabalho. Consumo aproximado de 175 KW. “Cliente comprou um Forno horizontal”. OBS: Todas as despesas por conta da compradora. A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/public/Fornos/forno-tamglass-1200-1.jpeg"]
  },
  {
    id: "b", categoriaId: "fornos-tempera", nome: "Forno de Têmpera TAMGLASS 2001", tipo: "", medida: "1600mm X 2700mm", valor: "R$ 155.000,00",
    descricao: "Área Útil de têmpera = 4,32 M2. (Em Funcionamento). Têmpera vidros de 6mm a 19mm. Roda com disjuntor de 200 Amperes. Necessita de um Transformador de 75KVA. “Cliente comprou um Forno horizontal”. OBS: Todas as despesas por conta da compradora. A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/public/Fornos/forno-tempera-tamglass-2001-1.jpeg",
             "/public/Fornos/forno-tempera-tamglass-2001-2.jpeg"
    ]
  },
  // HORIZONTAIS
  {
    id: "c", categoriaId: "fornos-tempera", nome: "Forno de Têmpera CIFEL 2006/08", tipo: "", medida: "1700mm X 3200mm", valor: "R$ 295.000,00",
    descricao: "Área Útil de têmpera = 5,44 M2. (Parado há 3 Anos. Precisa de alguns componentes. Faltando a mesa de entrada e de saída. Faltam 04 roletes de sílica). Têmpera vidros de 6mm a 19mm. “Cliente comprou outro equipamento.” OBS: Todas as despesas por conta da compradora. A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/public/Fornos/forno-de-tempera-CIFEL-2006-1.jpeg",
              "/public/Fornos/forno-de-tempera-CIFEL-2006-2.jpeg"
    ]
  },
  {
    id: "d", categoriaId: "fornos-tempera", nome: "Forno de Têmpera CIFEL 2011 (Série 3)", tipo: "", medida: "1900mm X 3200mm", valor: "R$ 630.000,00",
    descricao: "Área Útil de têmpera = 6,08 M2. (Parado). Têmpera vidros de 6mm a 19mm. “Cliente não está utilizando”. OBS: Todas as despesas por conta da compradora. A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/public/Fornos/forno-de-tempera-CIFEL-2011-1.jpeg",
              "/public/Fornos/forno-de-tempera-CIFEL-2011-2.jpeg"
    ]
  },
  {
    id: "e", categoriaId: "fornos-tempera", nome: "Forno de Têmpera MAGFORT 2012", tipo: "", medida: "2000mm X 3600mm", valor: "Sob Consulta",
    descricao: "Área Útil de têmpera = 7,20 M2. (Trabalhando). Têmpera vidros de 6 a 10mm. “Cliente comprou um forno maior”. OBS: Todas as despesas por conta da compradora. Sob Programação de Entrega: (A Combinar previsão de disponibilidade). Sob confirmação de unidade disponível em estoque.",
    imagens: ["/public/Fornos/forno-de-tempera-MAGFORT-2012-1.jpeg",
             "/public/Fornos/forno-de-tempera-MAGFORT-2012-2.jpeg"
    ]
  },
  {
    id: "f", categoriaId: "fornos-tempera", nome: "Forno de Têmpera CIFEL 2017", tipo: "", medida: "2000mm X 3800mm", valor: "Sob Consulta",
    descricao: "Área Útil de têmpera = 7,60 M2. (Trabalhando). Têmpera vidros de 6 a 19mm. Software Marca TAMGLASS. “Irão encerrar as atividades”. OBS: Todas as despesas por conta da compradora. A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/public/Fornos/Forno de Tempera CIFEL 2017-1.jpeg",
              "/public/Fornos/Forno de Tempera CIFEL 2017-.jpeg"
    ]
  },
  {
    id: "g", categoriaId: "fornos-tempera", nome: "Forno de Têmpera SGLASS 2017", tipo: "", medida: "2750mm X 2200mm", valor: "Sob Consulta",
    descricao: "Área Útil de têmpera = 6,05 M2. (Parado). Têmpera vidros de 6mm a 19mm. “Cliente não está mais utilizando, pois tem outro maior”. OBS: Todas as despesas por conta da compradora. A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/public/Fornos/forno-tempera.mp4",
      "/public/Fornos/Forno de Tempera SGLASS 2017-1.jpeg",
              "/public/Fornos/Forno de Tempera SGLASS 2017-2.jpeg"
    ]
  },
  {
    id: "h", categoriaId: "fornos-tempera", nome: "Forno de Têmpera TAMGLASS 2002", tipo: "", medida: "2100mm X 3600mm", valor: "Sob Consulta",
    descricao: "Área Útil de têmpera = 7,56 M2. (Trabalhando). Têmpera vidros de 6 a 19mm. Software Marca MAINZ. “Cliente comprou um forno maior”. OBS: Todas as despesas por conta da compradora. PRAZO DE ENTREGA: Até 7 Meses, após a confirmação da Compra. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/public/Fornos/Forno de Tempera TAMGLASS 2002-1.jpeg",
              "/public/Fornos/Forno de Tempera TAMGLASS 2002-2.jpeg"
    ]
  },
  {
    id: "i", categoriaId: "fornos-tempera", nome: "Forno de Têmpera SGLASS 2014", tipo: "", medida: "2400mm X 3800mm", valor: "Sob Consulta",
    descricao: "Área Útil de têmpera = 9,12 M2. (Parado). Têmpera vidros de 4mm a 19mm sendo 4 e 5mm parcial. “Encerrou as atividades da fábrica”. OBS: Todas as despesas por conta da compradora. A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/public/Fornos/Forno de Tempera SGLASS 2014-1.jpeg",
              "/public/Fornos/Forno de Tempera SGLASS 2014-2.jpeg"
    ]
  },
  {
    id: "j", categoriaId: "fornos-tempera", nome: "Forno de Têmpera SGLASS 2010", tipo: "", medida: "2300mm X 3800mm", valor: "Sob Consulta",
    descricao: "Área Útil de têmpera = 8,74 M2. (Parado). Têmpera vidros de 4mm a 19mm. Vidros 4 e 5mm em área parcial. Acompanha Mezanino. “Cliente comprou um forno maior”. OBS: Todas as despesas por conta da compradora. A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/public/Fornos/Forno de Tempera SGLASS 2010-1.jpeg",
              "/public/Fornos/Forno de Tempera SGLASS 2010-2.jpeg",
              "/public/Fornos/Forno de Tempera SGLASS 2010-3.jpeg"
    ]
  },
  {
    id: "k", categoriaId: "fornos-tempera", nome: "Forno de Têmpera SGLASS 2009", tipo: "", medida: "2300mm X 3800mm", valor: "Sob Consulta",
    descricao: "Área Útil de têmpera = 8,74 M2. (Trabalhando). Têmpera vidros de 6 a 19mm. “Cliente comprou um forno maior”. OBS: Todas as despesas por conta da compradora. A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/public/Fornos/Forno de Tempera SGLASS 2009-1.jpeg",
              "/public/Fornos/Forno de Tempera SGLASS 2009-2.jpeg"
    ]
  },
  {
    id: "l", categoriaId: "fornos-tempera", nome: "Forno de Têmpera GLASTON 2010", tipo: "", medida: "2400mm X 4200mm", valor: "Sob Consulta",
    descricao: "Área Útil de têmpera = 10,08 M2. (Parado). Têmpera vidros de 6mm a 19mm. “Cliente desativou o equipamento”. OBS: Todas as despesas por conta da compradora. A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/public/Fornos/Forno de Tempera GLASTON, 2010-1.jpeg",
              "/public/Fornos/Forno de Tempera GLASTON, 2010-2.jpeg"
    ]
  },
  {
    id: "m", categoriaId: "fornos-tempera", nome: "Forno de Têmpera TAMGLASS 2010", tipo: "", medida: "2400mm X 4200mm", valor: "Sob Consulta",
    descricao: "Área Útil de têmpera = 10,08 M2. (Parado). Têmpera vidros de 4mm a 19mm, sendo os vidros de 4 e 5mm em área parcial útil. Equipamento foi todo revisado. “Cliente comprou um forno maior”. OBS: Todas as despesas por conta da compradora. A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens:  ["/public/Fornos/Forno de Tempera TAMGLASS 2010-1.jpeg",
              "/public/Fornos/Forno de Tempera TAMGLASS 2010-2.jpeg"
    ]
  },
  {
    id: "n", categoriaId: "fornos-tempera", nome: "Forno de Têmpera GLASTON 2012", tipo: "", medida: "2400mm X 4200mm", valor: "Sob Consulta",
    descricao: "Área Útil de têmpera = 10,08 M2. (Parado). Têmpera vidros de 6 a 19mm. Possui Sistema de Convecção e estrutura de Mezanino para ventilador. “Cliente comprou um forno maior”. OBS: Todas as despesas por conta da compradora. A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/public/Fornos/Forno de Tempera GLASTON 2012-1.jpeg",
              "/public/Fornos/Forno de Tempera GLASTON 2012-2.jpeg"
    ]
  },
  {
    id: "o", categoriaId: "fornos-tempera", nome: "Forno de Têmpera SGLASS 2014", tipo: "", medida: "2400mm X 4400mm", valor: "Sob Consulta",
    descricao: "Área Útil de têmpera = 10,56 M2. (Trabalhando). Têmpera vidros de 6 a 19mm, sendo vidros 4mm e 5mm em área parcial útil. “Cliente está vendendo para comprar um maior”. OBS: Todas as despesas por conta da compradora. PRAZO DE ENTREGA: Em até 5 a 7 meses, após a confirmação da compra. Sob confirmação de unidade disponível para venda.",
    imagens: ["/public/Fornos/Forno de Tempera SGLASS 2014-D-1.jpeg",
              "/public/Fornos/Forno de Tempera SGLASS 2014-D-2.jpeg"
    ]
  },
  {
    id: "p", categoriaId: "fornos-tempera", nome: "Forno de Têmpera GLASTON 2016", tipo: "", medida: "2400mm X 4200mm", valor: "Sob Consulta",
    descricao: "Área Útil de têmpera = 10,08 M2. (Parado). Têmpera vidros de 4 a 19mm, sendo os vidros 4mm e 5mm em área parcial útil. Possui Sistema Convecção Forçada. “Cliente desativou sua fábrica”. OBS: Todas as despesas por conta da compradora. A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/public/Fornos/Forno de Tempera GLASTON 2016-1.jpeg",
              "/public/Fornos/Forno de Tempera GLASTON 2016-2.jpeg"
    ]
  },
  {
    id: "q", categoriaId: "fornos-tempera", nome: "Forno de Têmpera TAMGLASS 1990/2026", tipo: "Foto ilustrativa", medida: "2400mm X 3600mm", valor: "Sob Consulta",
    descricao: "Área Útil de têmpera = 8,64 M2. (Parado/desmontado). Têmpera vidros de 4 a 19mm, sendo vidros 4mm e 5mm em área parcial útil. Foi reformado geral, pois foi todo desmontado e todo revisado. Realizado um upgrade para um Novo CLP e Software SGlass ano 2026. “Cliente comprou um forno mais novo e o fabricante revisou todo o equipamento.” OBS: Todas as despesas por conta da compradora. A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/public/Fornos/Forno de Tempera TAMGLASS 1990-2026.jpeg"
             
    ]
  },
  {
    id: "r", categoriaId: "fornos-tempera", nome: "Forno de Têmpera TAMGLASS 2001/2026", tipo: "Foto ilustrativa", medida: "2200mm X 4400mm", valor: "Sob Consulta",
    descricao: "Área Útil de têmpera = 9,68 M2. (Parado). Têmpera vidros de 4 a 19mm, sendo vidros 4mm e 5mm em área parcial útil. Foi reformado geral, pois foi todo desmontado e todo revisado. (Fibras Novas, resistências Novas). Realizado um upgrade para um Novo CLP e Software SGlass ano 2026. Possui Novo sistema de convecção forçada. “Cliente comprou um forno mais novo e o fabricante revisou todo o equipamento.” OBS: Todas as despesas por conta da compradora. A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens:  ["/public/Fornos/Forno de Tempera TAMGLASS 2001-2026.jpeg",
              "/public/Fornos/Forno de Tempera TAMGLASS 1990-2026.jpeg"
             
    ]
  },
  {
    id: "s", categoriaId: "fornos-tempera", nome: "Forno de Têmpera SGLASS 2019", tipo: "", medida: "2700mm X 5100mm", valor: "Sob Consulta",
    descricao: "Área Útil de têmpera = 13,77 M2. Têmpera vidros de 6 a 19mm. Equipamento foi muito pouco utilizado. “Cliente comprou um forno maior (JUMBO)”. OBS: Todas as despesas por conta da compradora. A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/public/Fornos/Forno de Tempera SGLASS 2019.jpeg"
             
    ]
  },
  {
    id: "t", categoriaId: "fornos-tempera", nome: "Forno de Têmpera GLASTON FTF 2450", tipo: "Foto ilustrativa", medida: "2400mm X 5000mm", valor: "Sob Consulta",
    descricao: "Área Útil de têmpera = 12,00 M2. (Parado/desmontado). Têmpera vidros de 6 a 19mm. Possui Sistema Convecção Forçada (Atende a vidros Lowe de até 0,08 de emissividade ou superior). OBS: Todas as despesas por conta da compradora. A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/public/Fornos/Forno de Tempera GLASTON, FTF 2450-1.jpeg",
              "/public/Fornos/Forno de Tempera GLASTON, FTF 2450-2.jpeg"
             
    ]
  }
,
  {
    id: "mesa-a", categoriaId: "mesas-corte", nome: "Mesa de Destaque ITALOTEC 2018", tipo: "Manual / Destaque", medida: "3500mm x 3210mm", valor: "R$ 30.000,00",
    descricao: "Características: Area Util 3500mm x 3210mm. Brekout Standard. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Mesas/sem-foto.jpg"] // <--- AJUSTE AQUI SE PRECISAR
  },
  {
    id: "mesa-b", categoriaId: "mesas-corte", nome: "Mesa de destaque ITALOTEC 2018", tipo: "Manual / Destaque", medida: "6000mm x 3210mm", valor: "R$ 50.000,00",
    descricao: "Características: Area útil 6000mm x 3210mm. Brekout Jumbo. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Mesas/sem-foto.jpg"] // <--- AJUSTE AQUI SE PRECISAR
  },
  
  // MESAS DE CORTE VIDRO FLOAT
  {
    id: "mesa-c", categoriaId: "mesas-corte", nome: "Mesa de corte BOTERO 2002 Automática", tipo: "Vidro Float", medida: "3200mm", valor: "R$ 110.000,00",
    descricao: "Características: Area Util: 3200mm) Feito Retrofit com drives novos Panasonic. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Mesas/mesa-de-corte-botero-2002-1.jpeg"]
  },
  {
    id: "mesa-d", categoriaId: "mesas-corte", nome: "Mesa de corte BOTERO 2013 Automática", tipo: "Vidro Float", medida: "3200mm", valor: "R$ 220.000,00",
    descricao: "Características: Area Útil 3200, equipamento em pleno funcionamento. Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Mesas/mesa-de-corte-botero-2013-1.jpeg"]
  },
  {
    id: "mesa-e", categoriaId: "mesas-corte", nome: "Mesa de corte AGMAC 2019 Automática", tipo: "Vidro Float", medida: "3200mm", valor: "R$ 245.000,00",
    descricao: "Características: Area Util 3200mm. Acomp. Mesa dest. + Cavalete Queda Livre. Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Mesas/mesa-de-corte-agmac-2019-1.jpeg"]
  },
  {
    id: "mesa-f", categoriaId: "mesas-corte", nome: "Mesa de corte AGMAC 2021 Automática", tipo: "Vidro Float", medida: "3600mm x 2600mm", valor: "R$ 260.000,00",
    descricao: "Características: Are util 3600mm x 2600mm. Com Queda Livre. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Mesas/mesa-de-corte-agmac-2021-1.jpeg"]
  },
  {
    id: "mesa-g", categoriaId: "mesas-corte", nome: "Linha de corte AUTOMÁTICA FINOGLASS 2022", tipo: "Vidro Float", medida: "Não informada", valor: "R$ 385.000,00",
    descricao: "Características: (Parada) Pouco Usada. ACOMPANHA: 1 Carregador automático Bilateral+01 Mesa corte+01 Mesa destaque + 04 cavaletes. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sul). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Mesas/linha-de-corte-finoglass-2022-1.jpeg"]
  },
  {
    id: "mesa-h", categoriaId: "mesas-corte", nome: "Mesa de corte MACOTEC 2019 Automática", tipo: "Vidro Float", medida: "3500mm x 2600mm", valor: "R$ 400.000,00",
    descricao: "Caracteristicas: Area útil de 3500mm x 2600mm. Com sistema de de leitura e posicionamento. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Mesas/mesa-de-corte-macotec-2019-1.jpeg"]
  },
  {
    id: "mesa-i", categoriaId: "mesas-corte", nome: "Mesa corte Jumbo BIESSE 2024", tipo: "Vidro Float", medida: "6000mm x 3210mm", valor: "R$ 640.000,00",
    descricao: "Características: Area Útil de 6000mm x 3210mm. Mesa CNC Automática com Etiquetadora. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Mesas/sem-foto.jpg"] // <--- AJUSTE AQUI SE PRECISAR
  },
  
  // MESAS DE CORTE VIDRO LAMINADO
  {
    id: "mesa-j", categoriaId: "mesas-corte", nome: "Mesa corte Laminado BOTERO LAMY 2015", tipo: "Vidro Laminado", medida: "3000mm x 2000mm", valor: "R$ 160.000,00",
    descricao: "Características: Area útil 3000mm x 2000mm. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Mesas/mesa-corte-laminado-botero-lamy-2015-1.jpeg"]
  },
  {
    id: "mesa-k", categoriaId: "mesas-corte", nome: "Mesa corte Laminado BOTERO 1992", tipo: "Vidro Laminado", medida: "3210mm x 2600mm", valor: "R$ 260.000,00",
    descricao: "(Corta até 10mm+10mm). Caraterisiticas: Area útil 3210mm x 2600mm. Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Mesas/mesa-corte-laminado-botero-1992-1.jpeg"]
  },
  {
    id: "mesa-l", categoriaId: "mesas-corte", nome: "Mesa corte Laminado BOTERO 2005", tipo: "Vidro Laminado", medida: "4500mm x 2600mm", valor: "R$ 360.000,00",
    descricao: "Características: Area útil de 4500mm x 2600mm. (Modelo 530AVL-46). Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Mesas/mesa-corte-laminado-botero-2005-1.jpeg"]
  }
,
{
    id: "lap-a", categoriaId: "lapidadoras", nome: "Lapidadora horizontal MODELADORA BIG JOB 2002", tipo: "Horizontal / Manual", medida: "Não informada", valor: "R$ 35.000,00",
    descricao: "Características: Em Pleno Funcionamento. OBS: Todas as despesas por conta da compradora. (Encontra-se região do Distrito Federal). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lapidadora/Lapidadora-horizonta-MODELADORA-BIG-JOB-2002.jpeg"] // <--- AJUSTE AQUI COM A SUA FOTO
  },
  {
    id: "lap-b", categoriaId: "lapidadoras", nome: "Lapidadora horizontal MODELADORA BIG JOB 2020", tipo: "Horizontal / Manual", medida: "Não informada", valor: "R$ 39.500,00",
    descricao: "Características: Em pleno funcionamento. OBS: Todas as despesas por conta da compradora. (Encontra-se região do Distrito Federal). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lapidadora/Lapidadora-horizontal-MODELADORA-BIG-JOB-2020.jpeg"]
  },

  // LAPIDADORAS VERTICAIS
  {
    id: "lap-c", categoriaId: "lapidadoras", nome: "Lapidadora MAKI-VETRO", tipo: "Vertical", medida: "Modelo 22", valor: "R$ 26.000,00",
    descricao: "Características: Modelo 22. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sul). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lapidadora/Lapidadora-MAKI-VETRO.jpeg"]
  },
  {
    id: "lap-d", categoriaId: "lapidadoras", nome: "Lapidadora MAKI-VETRO 1995/2000", tipo: "Vertical", medida: "Modelo 22", valor: "R$ 28.000,00",
    descricao: "Características: Modelo 22. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sul). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lapidadora/Lapidadora-MAKI-VETRO-1995-2000.jpeg"]
  },
  {
    id: "lap-e", categoriaId: "lapidadoras", nome: "Lapidadora PERIFÉRICA USE LP04", tipo: "Vertical", medida: "Não informada", valor: "R$ 29.500,00",
    descricao: "Características: A venda 02 equipamentos semelhantes pelo valor de R$58.000,00. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Nordeste). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lapidadora/Lapidadora-PERIFÉRICA-USE-LP0-1.jpeg",
      "/Lapidadora/Lapidadora-PERIFÉRICA-USE-LP0-2.jpeg"
    ]
  },
  {
    id: "lap-f", categoriaId: "lapidadoras", nome: "Lapidadora Perif. MAK-VETRO", tipo: "Vertical", medida: "Não informada", valor: "R$ 34.900,00",
    descricao: "Características: Possui 02 Equip, assim consegue fazer por R$ 69.000,00 as 02 unidades. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lapidadora/Lapidadora-Perif-MAK-VETRO.jpeg"]
  },
  {
    id: "lap-g", categoriaId: "lapidadoras", nome: "Lapidadora PERIFÉRICA 44", tipo: "Foto Ilustrativa", medida: "Não informada", valor: "R$ 38.000,00",
    descricao: "Características: (Cliente possui 03 unidades a venda, assim consegue fazer por R$ 100.000,00 as 03 unidades). OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lapidadora/Lapidadora-Perif-MAK-VETRO.jpeg"]
  },
  {
    id: "lap-h", categoriaId: "lapidadoras", nome: "Lapidadora PERIFÉRICA PRINCIPAL MF44", tipo: "Foto Ilustrativa", medida: "Não informada", valor: "R$ 40.000,00",
    descricao: "Características: lapidação Reta, de bordas com acabamento. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lapidadora/Lapidadora-Perif-MAK-VETRO.jpeg"]
  },
  {
    id: "lap-i", categoriaId: "lapidadoras", nome: "Lapidadora PERIFÉRICA LATUADA", tipo: "vertical", medida: "04 Rebolos", valor: "R$ 46.000,00",
    descricao: "Características: Com 04 Rebolos, em funcionamento. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sul). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lapidadora/Lapidadora-PERIFÉRICA-LATUADA-1.jpeg",
      "/Lapidadora/Lapidadora-PERIFÉRICA-LATUADA-2.jpeg"
    ]
  },
  {
    id: "lap-j", categoriaId: "lapidadoras", nome: "Lapidadora PERIFÉRICA SMART BAVELLONI 2012", tipo: "Vertical", medida: "Não informada", valor: "R$ 48.000,00",
    descricao: "Características: Toda Reformada. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de disponibilidade em estoque.",
    imagens: ["/Lapidadora/Lapidadora-PERIFÉRICA-SMART-BAVELLONI-2012.jpeg"]
  },
  {
    id: "lap-k", categoriaId: "lapidadoras", nome: "Lapidadora PERIFÉRICA", tipo: "Vertical", medida: "04 Rebolos", valor: "R$ 48.000,00",
    descricao: "Características: 04 Rebolos. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). Á PRONTA ENTREGA: A combinar o prazo de entrega. Sob confirmação de unidades disponíveis para venda.",
    imagens: ["/Lapidadora/Lapidadora-PERIFÉRICA.jpeg"]
  },
  {
    id: "lap-l", categoriaId: "lapidadoras", nome: "Lapidadora PERIFÉRICA USE PC 600 (2014)", tipo: "Vertical", medida: "06 Rebolos", valor: "R$ 48.000,00",
    descricao: "Características: 06 rebolos. OBS: Todas as despesas por conta da compradora. (Encontra-se na região SUL). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lapidadora/Lapidadora-PERIFÉRICA-USE-PC-600-2014.jpeg"]
  },
  {
    id: "lap-m", categoriaId: "lapidadoras", nome: "Lapidadora PERIFÉRICA LP 600", tipo: "Vertical", medida: "Não informada", valor: "R$ 49.500,00",
    descricao: "Características: A venda 02 equipamentos semelhantes pelo valor de R$98.000,00. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Nordeste). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lapidadora/sem-foto.jpg"]
  },
  {
    id: "lap-n", categoriaId: "lapidadoras", nome: "Lapidadora USE MAK - LC-6 / 2015", tipo: "Vertical", medida: "06 Rebolos Copo", valor: "R$ 50.000,00",
    descricao: "Características: 06 Rebolos Copo. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sul). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lapidadora/sem-foto.jpg"]
  },
  {
    id: "lap-o", categoriaId: "lapidadoras", nome: "Lapidadora PERIFÉRICA BAVELLONI 2009", tipo: "Vertical", medida: "Não informada", valor: "R$ 52.000,00",
    descricao: "Características: Recentemente Reformada. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sul). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lapidadora/sem-foto.jpg"]
  },
  {
    id: "lap-p", categoriaId: "lapidadoras", nome: "Lapidadora USE-PC600 2010", tipo: "Vertical", medida: "Não informada", valor: "R$ 58.000,00",
    descricao: "Características: Recentemente foi toda Reformada. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lapidadora/sem-foto.jpg"]
  },
  {
    id: "lap-q", categoriaId: "lapidadoras", nome: "Lapidadora SINGIP", tipo: "Vertical", medida: "09 Rebolos", valor: "R$ 68.900,00",
    descricao: "Características: Precisa de revisão. Valor da forma em que se encontra. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lapidadora/sem-foto.jpg"]
  },
  {
    id: "lap-r", categoriaId: "lapidadoras", nome: "Lapidadora USEMAK", tipo: "Vertical", medida: "10 Rebolos Copos", valor: "R$ 55.000,00",
    descricao: "Características: 10 rebolos copos, revisada a pouco tempo. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lapidadora/sem-foto.jpg"]
  },
  {
    id: "lap-s", categoriaId: "lapidadoras", nome: "Lapidadora SCHIATTI 2008", tipo: "Vertical", medida: "Não informada", valor: "R$ 85.000,00",
    descricao: "Características: Equipamento da forma em que se encontra, para reformar. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Norte). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lapidadora/sem-foto.jpg"]
  },
  {
    id: "lap-t", categoriaId: "lapidadoras", nome: "Lapidadora SINGIP 2021", tipo: "Vertical", medida: "Não informada", valor: "R$ 85.000,00",
    descricao: "Características: Esta Trabalhando. Possui 04 unidades e consegue fazer nas 04 maquinas juntas por R$ 320.000,00. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lapidadora/sem-foto.jpg"]
  },
  {
    id: "lap-u", categoriaId: "lapidadoras", nome: "Lapidadora CHINESA", tipo: "Vertical", medida: "Não informada", valor: "R$ 85.000,00",
    descricao: "Características: Equipamento vai ser todo revisado. Garantia de 6 Meses. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Á combinar sob programação. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lapidadora/sem-foto.jpg"]
  },
  {
    id: "lap-v", categoriaId: "lapidadoras", nome: "Lapidadora CHINESA", tipo: "Vertical", medida: "09 Rebolos", valor: "R$ 100.000,00",
    descricao: "Características: 09 rebolos com cavalete Longo / Sapatas. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lapidadora/sem-foto.jpg"]
  },
  {
    id: "lap-x", categoriaId: "lapidadoras", nome: "Lapidadora DEWAY 2017", tipo: "Vertical", medida: "Não informada", valor: "R$ 123.900,00",
    descricao: "Características: Toda reformada em 2025. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lapidadora/sem-foto.jpg"]
  },
  {
    id: "lap-z", categoriaId: "lapidadoras", nome: "Lapidadora LATUADA 2005", tipo: "Vertical", medida: "08 Rebolos", valor: "R$ 130.000,00",
    descricao: "Características: Com 08 Rebolos recentemente reformada. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sul). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lapidadora/sem-foto.jpg"]
  },
  {
    id: "lap-aa", categoriaId: "lapidadoras", nome: "Lapidadora BOTERO 108F 2013", tipo: "Vertical", medida: "Modelo Victralux/15", valor: "R$ 150.000,00",
    descricao: "Características: Modelo Victralux/15, e possui 02 unidades, (sendo 01 ano 2013 e a outra ano 2015). O Conjunto por R$ 295.000,00. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sul). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lapidadora/sem-foto.jpg"]
  },
  {
    id: "lap-ab", categoriaId: "lapidadoras", nome: "Lapidadora BOTERO 110C 2013", tipo: "Vertical", medida: "Não informada", valor: "R$ 160.000,00",
    descricao: "Características: Foi reformada e esta em perfeito funcionamento. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lapidadora/sem-foto.jpg"]
  },
  {
    id: "lap-ac", categoriaId: "lapidadoras", nome: "Lapidadoras GLASTON 2012 (Bavelloni)", tipo: "Vertical", medida: "8 Rebolos", valor: "R$ 170.000,00",
    descricao: "Características: 8 rebolos. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: carregamento á combinar.",
    imagens: ["/Lapidadora/sem-foto.jpg"]
  },
  {
    id: "lap-ad", categoriaId: "lapidadoras", nome: "Lapidadoras BOTERO 2020", tipo: "Vertical", medida: "Não informada", valor: "R$ 175.000,00",
    descricao: "Características: trabalhando, (Venda de 02 Equip / conjunto iguais pelo Valor R$ 340.000,00). OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sul). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lapidadora/sem-foto.jpg"]
  },
  {
    id: "lap-ae", categoriaId: "lapidadoras", nome: "Lapidadora BOTERO 2013- 110FC", tipo: "Vertical", medida: "Não informada", valor: "R$ 200.000,00",
    descricao: "Características: Equipamento trabalhando. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lapidadora/sem-foto.jpg"]
  },
  {
    id: "lap-af", categoriaId: "lapidadoras", nome: "Lapidadora BOTERO 2010- 110FC", tipo: "Vertical", medida: "Não informada", valor: "R$ 240.000,00",
    descricao: "Características: Equipamento trabalhando. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lapidadora/sem-foto.jpg"]
  },

  // LINHAS AUTOMÁTICAS DE LAPIDAÇÃO
  {
    id: "lap-ag", categoriaId: "lapidadoras", nome: "Linha automática (04 Lapidadoras+Robos)", tipo: "Linha Automática", medida: "Não informada", valor: "R$ 334.000,00",
    descricao: "Características: Contém 04 Lapidadoras USE MAK (Sendo 02 USE P600 e 02 USE P04) + 03 Robôs Turnovers tombadores Singip. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lapidadora/sem-foto.jpg"]
  },
  {
    id: "lap-ah", categoriaId: "lapidadoras", nome: "Linha automática com 04 Lapidadoras BOVONE", tipo: "Linha Automática", medida: "Não informada", valor: "R$ 1.200.000,00",
    descricao: "Características: Contém 03 Lapidadoras (ano1997 Reformadas) + 01 Lapidadora (2017) + 03 Robôs Turnovers tombadores Singip. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lapidadora/sem-foto.jpg"]
  },

  // BI-LATERAL
  {
    id: "lap-ai", categoriaId: "lapidadoras", nome: "BI-Lateral - SCHIATTI", tipo: "Bilateral", medida: "1200MM X 1600MM", valor: "R$ 600.000,00",
    descricao: "Características: BFT MINI 8 + TRANSFER (1200MM X 1600MM). OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unida disponível em estoque.",
    imagens: ["/Lapidadora/sem-foto.jpg"]
  },
  {
    id: "lap-aj", categoriaId: "lapidadoras", nome: "BI-Lateral-INTERMAC BUSETTI F10-K - 2019", tipo: "Bilateral", medida: "1600mm x 2600mm", valor: "R$ 2.500.000,00",
    descricao: "Características: Area útil de 1600mm x 2600mm com 02 transfers. (Equipamento muito pouco utilizado). OBS: Todas as despesas por conta da compradora. (Encontra-se na região Centro Oeste). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unida disponível em estoque.",
    imagens: ["/Lapidadora/sem-foto.jpg"]
  }

  ,

  // ==========================================
  // BIZELADORAS
  // ==========================================

  {
    id: "biz-a", 
    categoriaId: "bizeladoras", 
    nome: "Bizeladora CHINESA", 
    tipo: "Bizeladora", 
    medida: "Não informada", 
    valor: "R$ 45.000,00",
    descricao: "Características: “Cliente não esta utilizando\". OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sul). A PRONTA ENTREGA: Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Bizeladoras/sem-foto.jpg"]
  },
  {
    id: "biz-b", 
    categoriaId: "bizeladoras", 
    nome: "Bizeladora USE MAK BR 07", 
    tipo: "Bizeladora", 
    medida: "07 rebolos", 
    valor: "R$ 79.000,00",
    descricao: "Características: Possui 07 rebolos. “Cliente não esta utilizando”. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Bizeladoras/sem-foto.jpg"]
  },
  {
    id: "biz-c", 
    categoriaId: "bizeladoras", 
    nome: "Bizeladora CHINESA (Em Revisão)", 
    tipo: "Bizeladora", 
    medida: "07 motores", 
    valor: "R$ 140.000,00",
    descricao: "Características: Com 07 motores e toda revisada. “Garantia de 03 meses\". OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). EQUIPAMENTO EM REVISÃO: Sob confirmação de unidade disponível em estoque. ** FOTOS DO EQUIPAMENTO EM REVISÃO, SOB CONSULTA.",
    imagens: ["/Bizeladoras/sem-foto.jpg"]
  },
  {
    id: "biz-d", 
    categoriaId: "bizeladoras", 
    nome: "Bizeladora DEWAY 2020", 
    tipo: "Bizeladora", 
    medida: "Não informada", 
    valor: "R$ 160.000,00",
    descricao: "Características: Equipamento pouco usado. “Cliente não esta utilizando\". OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sul). A PRONTA ENTREGA: Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Bizeladoras/sem-foto.jpg"]
  },
  {
    id: "biz-e", 
    categoriaId: "bizeladoras", 
    nome: "Bizeladora Z BAVELLONI 1995", 
    tipo: "Bizeladora", 
    medida: "Não informada", 
    valor: "R$ 164.000,00",
    descricao: "Características: Revisada a pouco tempo. “Cliente não esta utilizando\". OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Bizeladoras/sem-foto.jpg"]
  },
  {
    id: "biz-f1", 
    categoriaId: "bizeladoras", 
    nome: "Bizeladora BAVELONE 1995", 
    tipo: "Bizeladora", 
    medida: "Não informada", 
    valor: "R$ 185.000,00",
    descricao: "Características: Foi revisada antes de desmontar. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). EQUIPAMENTO EM REVISÃO: Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Bizeladoras/sem-foto.jpg"]
  },
  {
    id: "biz-f2", 
    categoriaId: "bizeladoras", 
    nome: "Bizeladora CHINESA (Touchscreen)", 
    tipo: "Bizeladora", 
    medida: "09 Motores", 
    valor: "R$ 190.000,00",
    descricao: "Características: Possui 09 Motores e Tela touchscreen. Toda revisada. “Garantia de 3 meses”. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). EQUIPAMENTO EM REVISÃO: Sob confirmação de unidade disponível em estoque. ** FOTOS DO EQUIPAMENTO EM REVISÃO, SOB CONSULTA.",
    imagens: ["/Bizeladoras/sem-foto.jpg"]
  },
  {
    id: "biz-g", 
    categoriaId: "bizeladoras", 
    nome: "Bizeladora SINGIP 2018", 
    tipo: "Bizeladora", 
    medida: "Modelo SXM261B", 
    valor: "R$ 230.000,00",
    descricao: "Características: Modelo SXM261B. Nova nunca usada. “Garantia de 3 Meses\". OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sul). A PRONTA ENTREGA: Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Bizeladoras/sem-foto.jpg"]
  },
  {
    id: "biz-h", 
    categoriaId: "bizeladoras", 
    nome: "Bizeladora BOTERO 2010", 
    tipo: "Bizeladora", 
    medida: "Mod. 907P", 
    valor: "R$ 240.000,00",
    descricao: "Características: Mod. 907P. Trabalhando de pouco uso. “Cliente não esta utilizando\". OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sul). A PRONTA ENTREGA: Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Bizeladoras/sem-foto.jpg"]
  },
  {
    id: "biz-i", 
    categoriaId: "bizeladoras", 
    nome: "Bizeladora BOTERO 2007", 
    tipo: "Bizeladora", 
    medida: "Mod. 907B", 
    valor: "R$ 250.000,00",
    descricao: "Características: Mod. 907B. Equipamento em pleno funcionamento. “Cliente não esta utilizando\". OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Bizeladoras/sem-foto.jpg"]
  },
  {
    id: "biz-ag", 
    categoriaId: "bizeladoras", 
    nome: "Bizeladora BOTERO 2017 110FX", 
    tipo: "Bizeladora", 
    medida: "Não informada", 
    valor: "R$ 260.000,00",
    descricao: "Características: Equipamento Trabalhando. “Cliente vai trocar por Novo\". OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Bizeladoras/sem-foto.jpg"]
  },
  {
    id: "biz-j", 
    categoriaId: "bizeladoras", 
    nome: "Bizeladora PARAMETRO 2021", 
    tipo: "Bizeladora", 
    medida: "Mod. BG07", 
    valor: "R$ 270.000,00",
    descricao: "Características: Mod. BG07. “Cliente não esta utilizando\". OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Bizeladoras/sem-foto.jpg"]
  },
  {
    id: "biz-k", 
    categoriaId: "bizeladoras", 
    nome: "Bizeladora GLASTON BAVELLLONI 2008", 
    tipo: "Bizeladora", 
    medida: "Modelo B75CN", 
    valor: "R$ 350.000,00",
    descricao: "Características: Modelo B75CN, em perfeito estado. “Cliente não esta utilizando\". OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sul). A PRONTA ENTREGA: Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Bizeladoras/sem-foto.jpg"]
  }
,
// FURADEIRAS MANUAIS / SEMI-AUTOMÁTICAS
  {
    id: "fur-a", 
    categoriaId: "furadeiras", 
    nome: "Furadeira MOGK FVS 700", 
    tipo: "Manual / Semi-Auto", 
    medida: "01 Cabeça Simples", 
    valor: "R$ 11.500,00",
    descricao: "Características: 01 Cabeça Simples. Disponível para venda, 05 equipamentos. (Novas e nunca Usadas). OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Furadeiras/sem-foto.jpg"]
  },
  {
    id: "fur-b", 
    categoriaId: "furadeiras", 
    nome: "Furadeira EGTEC", 
    tipo: "Manual / Semi-Auto", 
    medida: "4mm a 12mm", 
    valor: "R$ 18.500,00",
    descricao: "Características: 01 Cabeça Simples (4mm a 12mm). OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Furadeiras/sem-foto.jpg"]
  },
  {
    id: "fur-c", 
    categoriaId: "furadeiras", 
    nome: "Furadeira AMARAL 2021", 
    tipo: "Manual / Semi-Auto", 
    medida: "01 Cabeça Dupla", 
    valor: "R$ 26.000,00",
    descricao: "Características: 01 Cabeça Dupla. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Centro Oeste). A PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Furadeiras/sem-foto.jpg"]
  },
  {
    id: "fur-d", 
    categoriaId: "furadeiras", 
    nome: "Furadeira USEMAK", 
    tipo: "Manual / Semi-Auto", 
    medida: "01 Cabeça Simples", 
    valor: "R$ 27.500,00",
    descricao: "Características: 01 Cabeça Simples. (Disponível para venda 02 Equipamentos. Nos dois pode ser feito R$ 55.000,00). OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sul). A PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Furadeiras/sem-foto.jpg"]
  },
  {
    id: "fur-e", 
    categoriaId: "furadeiras", 
    nome: "Furadeira USEMAK (02 Cabeças-duplas)", 
    tipo: "Manual / Semi-Auto", 
    medida: "02 Cabeças Duplas", 
    valor: "R$ 30.000,00",
    descricao: "Características: 02 cabeças-duplas. Foi Revisada. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Furadeiras/sem-foto.jpg"]
  },
  {
    id: "fur-f", 
    categoriaId: "furadeiras", 
    nome: "Furadeiras PERSON BOUQUET 2016", 
    tipo: "Manual / Semi-Auto", 
    medida: "Manual", 
    valor: "R$ 30.000,00",
    descricao: "Características: Manual. (03 unidades disponíveis). OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Furadeiras/sem-foto.jpg"]
  },
  {
    id: "fur-g", 
    categoriaId: "furadeiras", 
    nome: "Furadeira PERSON BOUQUET", 
    tipo: "Manual / Semi-Auto", 
    medida: "01 Cabeça Dupla", 
    valor: "R$ 38.000,00",
    descricao: "Características: 01 Cabeça Dupla. Equipamento em Pleno Funcionamento. Semi-Automática. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sul). A PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Furadeiras/sem-foto.jpg"]
  },
  {
    id: "fur-h", 
    categoriaId: "furadeiras", 
    nome: "Furadeira DEWAY", 
    tipo: "Manual / Semi-Auto", 
    medida: "01 Cabeça Dupla", 
    valor: "R$ 38.500,00",
    descricao: "Características: 01 Cabeça Dupla. Equipamento em Pleno Funcionamento. Semi-automática. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sul). A PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Furadeiras/sem-foto.jpg"]
  },
  {
    id: "fur-i", 
    categoriaId: "furadeiras", 
    nome: "Furadeira (03 Cabeças Simples)", 
    tipo: "Manual / Semi-Auto", 
    medida: "03 Cabeças Simples", 
    valor: "R$ 39.000,00",
    descricao: "Características: 03 Cabeças Simples. Em pleno Funcionamento. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sul). A PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Furadeiras/sem-foto.jpg"]
  },
  {
    id: "fur-j", 
    categoriaId: "furadeiras", 
    nome: "Furadeira SINGIP 2020", 
    tipo: "Manual / Semi-Auto", 
    medida: "03 Cabeças Duplas", 
    valor: "R$ 45.000,00",
    descricao: "Características: 03 Cabeças Duplas. Equipamento em pleno funcionamento. (Temos Vídeo). OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sul). A PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Furadeiras/sem-foto.jpg"]
  },
  {
    id: "fur-k", 
    categoriaId: "furadeiras", 
    nome: "Furadeira AMARAL 2016", 
    tipo: "Manual / Semi-Auto", 
    medida: "04 Cabeças Duplas", 
    valor: "R$ 78.000,00",
    descricao: "Características: 04 Cabeças Duplas. Equipamento em pleno funcionamento. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sul). A PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Furadeiras/sem-foto.jpg"]
  },

  // FURADEIRAS / RECORTADORAS AUTOMÁTICAS
  {
    id: "fur-l", 
    categoriaId: "furadeiras", 
    nome: "Furadeira Automática Jato D’água SGLASS 2018", 
    tipo: "Automática / Jato D'água", 
    medida: "2500mm x 3500mm", 
    valor: "R$ 300.000,00",
    descricao: "Características: Mod. 2535. (Parada) Medida útil 2500mm x 3500mm. OBS: Equipamento parado precisando de reforma geral. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sul). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Furadeiras/sem-foto.jpg"]
  },
  {
    id: "fur-m", 
    categoriaId: "furadeiras", 
    nome: "Furadeira Automática Jato D’água SGLASS 2017", 
    tipo: "Automática / Jato D'água", 
    medida: "2500mm x 3500mm", 
    valor: "R$ 300.000,00",
    descricao: "Características: Mod. 2535. (Trabalhando) Medida útil 2500mm x 3500mm. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Furadeiras/sem-foto.jpg"]
  },
  {
    id: "fur-n", 
    categoriaId: "furadeiras", 
    nome: "Máquina de corte a Jato D’água FLOW 2011", 
    tipo: "Automática / Jato D'água", 
    medida: "2000mm x 3000mm", 
    valor: "R$ 345.000,00",
    descricao: "Características: M2-3120b. (Parada). Medida útil 2000mm x 3000mm. *Revisada com garantia de 3 meses. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Furadeiras/sem-foto.jpg"]
  },
  {
    id: "fur-o", 
    categoriaId: "furadeiras", 
    nome: "Máquina de corte a Jato D’água JETSTREAM II", 
    tipo: "Automática / Jato D'água", 
    medida: "2000mm x 3000mm", 
    valor: "R$ 348.000,00",
    descricao: "Características: (Parada). Medida útil 2000mm x 3000mm. (Possui mesa basculante). *Revisada com garantia de 3 meses. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Furadeiras/sem-foto.jpg"]
  },
  {
    id: "fur-p", 
    categoriaId: "furadeiras", 
    nome: "Furadeira Automática a Jato D’água SGLASS 2018", 
    tipo: "Automática / Jato D'água", 
    medida: "2500mm x 3500mm", 
    valor: "R$ 565.000,00",
    descricao: "Características: Mod. 2535. (Trabalhando) Acompanha Mezanino. Medida útil 2500mm x 3500mm. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Furadeiras/sem-foto.jpg"]
  },
  {
    id: "fur-q", 
    categoriaId: "furadeiras", 
    nome: "Furadeira Automática FORVET 2021", 
    tipo: "Automática / Centro CNC", 
    medida: "2800mm X 3600mm", 
    valor: "R$ 850.000,00",
    descricao: "Características: Centro CNC, de furação e usinagem de vidro com alta precisão. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Furadeiras/sem-foto.jpg"]
  },
  {
    id: "fur-r", 
    categoriaId: "furadeiras", 
    nome: "Furadeira Automática Jato D’água SGLASS 2019", 
    tipo: "Automática / Jato D'água", 
    medida: "2500mm x 3500mm", 
    valor: "R$ 900.000,00",
    descricao: "Características: Mod. 2535. (Parada) Acompanha: Mezanino + 4.000 Kg de Abrasivo, medida útil 2500mm x 3500mm. Todas as despesas por conta da compradora. (Encontra-se na região Centro-Oeste). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Furadeiras/sem-foto.jpg"]
  },

  // CENTRO DE USINAGEM
  {
    id: "fur-s", 
    categoriaId: "furadeiras", 
    nome: "Centro de Usinagem INTERMAC", 
    tipo: "Centro de Usinagem", 
    medida: "2600mm x 5000mm", 
    valor: "R$ 220.000,00",
    descricao: "Características: Vertical. (Trabalhando). OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Furadeiras/sem-foto.jpg"]
  },
  {
    id: "fur-t", 
    categoriaId: "furadeiras", 
    nome: "Centro de Usinagem BAVELLONI 2009", 
    tipo: "Centro de Usinagem", 
    medida: "MOD. NRC250", 
    valor: "R$ 450.000,00",
    descricao: "Características: (MOD. NRC250). Horizontal (trabalhando) Acompanha diversas ferramentas. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Furadeiras/sem-foto.jpg"]
  },
  {
    id: "fur-u", 
    categoriaId: "furadeiras", 
    nome: "Centro de Usinagem INTERMAC", 
    tipo: "Centro de Usinagem", 
    medida: "4500mm x 3250mm", 
    valor: "R$ 550.000,00",
    descricao: "Características: Horizontal. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Furadeiras/sem-foto.jpg"]
  }
,

// LAVADORAS HORIZONTAIS
  {
    id: "lav-a", 
    categoriaId: "lavadoras", 
    nome: "Lavadora Horizontal USE-MAK", 
    tipo: "Horizontal", 
    medida: "1000mm de boca", 
    valor: "R$ 27.000,00",
    descricao: "Características: Equipamento em pleno funcionamento. “Cliente não utiliza mais o equipamento”. OBS: Todas as despesas por conta da compradora. (Encontra-se na região SuL). A PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lavadoras/sem-foto.jpg"]
  },
  {
    id: "lav-b", 
    categoriaId: "lavadoras", 
    nome: "Lavadora Horizontal USE-MAK 2002", 
    tipo: "Horizontal", 
    medida: "1300mm de boca", 
    valor: "R$ 28.500,00",
    descricao: "Características: Equipamento precisa fazer revisão. “Cliente comprou um novo equipamento”. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lavadoras/sem-foto.jpg"]
  },
  {
    id: "lav-c", 
    categoriaId: "lavadoras", 
    nome: "Lavadora Horizontal USE-MAK", 
    tipo: "Horizontal", 
    medida: "1200mm de boca", 
    valor: "R$ 35.000,00",
    descricao: "Características: Equipamento precisa fazer revisão. “Cliente comprou um novo equipamento”. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lavadoras/sem-foto.jpg"]
  },
  {
    id: "lav-d", 
    categoriaId: "lavadoras", 
    nome: "Lavadora Horizontal VIDROMAX", 
    tipo: "Horizontal", 
    medida: "1300mm de boca", 
    valor: "R$ 50.000,00",
    descricao: "Características: Toda em inox e estava trabalhando. Venda da forma que esta. ”Precisa de uma pequena revisão\". OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lavadoras/sem-foto.jpg"]
  },
  {
    id: "lav-e", 
    categoriaId: "lavadoras", 
    nome: "Lavadora Horizontal", 
    tipo: "Horizontal", 
    medida: "1300mm de boca", 
    valor: "R$ 68.000,00",
    descricao: "Características: 02 escovas. \"Toda revisada com garantia de 3 meses\". OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lavadoras/sem-foto.jpg"]
  },
  {
    id: "lav-f", 
    categoriaId: "lavadoras", 
    nome: "Lavadora Horizontal USE-MAK", 
    tipo: "Horizontal", 
    medida: "1300mm de boca", 
    valor: "R$ 69.500,00",
    descricao: "Características: No estado em que se encontra. “Cliente não esta utilizando\". OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lavadoras/sem-foto.jpg"]
  },
  {
    id: "lav-g", 
    categoriaId: "lavadoras", 
    nome: "Lavadora Horizontal GIAMATECH", 
    tipo: "Horizontal", 
    medida: "1600mm de boca", 
    valor: "R$ 74.000,00",
    descricao: "Características: Em funcionamento. “Cliente não esta utilizando mais”. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lavadoras/sem-foto.jpg"]
  },
  {
    id: "lav-h", 
    categoriaId: "lavadoras", 
    nome: "Lavadora Horizontal THANGLASS", 
    tipo: "Horizontal", 
    medida: "2200mm de boca", 
    valor: "R$ 79.000,00",
    descricao: "Características: Equipamento Seminovo 2025. “Cliente importou e não usou a maquina”. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lavadoras/sem-foto.jpg"]
  },
  {
    id: "lav-i", 
    categoriaId: "lavadoras", 
    nome: "Lavadora Horizontal VIDROMAX 2008", 
    tipo: "Horizontal", 
    medida: "2200mm de boca", 
    valor: "R$ 80.000,00",
    descricao: "Características: 01 escova inferior e uma superior / 04 caixas de ar. (Venda da forma em que esta). “Estava trabalhando no cliente e comprou uma nova”. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lavadoras/sem-foto.jpg"]
  },
  {
    id: "lav-j", 
    categoriaId: "lavadoras", 
    nome: "Lavadora Horizontal CHINESA 2025", 
    tipo: "Horizontal", 
    medida: "1600mm de boca", 
    valor: "R$ 80.000,00",
    descricao: "Caracterisiticas: Equipamento seminovo. “Cliente não esta utilizando no momento”. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lavadoras/sem-foto.jpg"]
  },
  {
    id: "lav-k", 
    categoriaId: "lavadoras", 
    nome: "Lavadora Horizontal USE-MAK", 
    tipo: "Horizontal", 
    medida: "1600mm de boca", 
    valor: "R$ 82.000,00",
    descricao: "Características: Em pleno funcionamento. “Cliente não esta utilizando mais”. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lavadoras/sem-foto.jpg"]
  },
  {
    id: "lav-l", 
    categoriaId: "lavadoras", 
    nome: "Lavadora Horizontal", 
    tipo: "Horizontal", 
    medida: "2200mm de boca", 
    valor: "R$ 127.000,00",
    descricao: "Características: Equipamento em pleno funcionamento. “Cliente não esta utilizando mais\". OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lavadoras/sem-foto.jpg"]
  },
  {
    id: "lav-m", 
    categoriaId: "lavadoras", 
    nome: "Lavadora Horizontal VIDROMAX", 
    tipo: "Horizontal", 
    medida: "2200mm de boca", 
    valor: "R$ 135.000,00",
    descricao: "Caracterisiticas: Equipamento em reforma geral. \"Garantia de 3 meses\". OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). Sob confirmação de unidade disponível em estoque. **SEM FOTOS ATÉ O MOMENTO.",
    imagens: ["/Lavadoras/sem-foto.jpg"]
  },
  {
    id: "lav-n", 
    categoriaId: "lavadoras", 
    nome: "Lavadora Horizontal AGMAC 2013", 
    tipo: "Horizontal", 
    medida: "2600mm de boca", 
    valor: "R$ 138.000,00",
    descricao: "Características: Equipamento em pleno funcionamento. “Cliente desativou a sua empresa\". OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sul). Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lavadoras/sem-foto.jpg"]
  },
  {
    id: "lav-o", 
    categoriaId: "lavadoras", 
    nome: "Lavadora HORIZONTAL AGMAC 2019", 
    tipo: "Horizontal", 
    medida: "2600mm de boca", 
    valor: "R$ 190.000,00",
    descricao: "Características: (Reformada). Pouco uso muito bem conservada. “Cliente não vai utilizar mais\". OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Lavadoras/sem-foto.jpg"]
  },

  // LAVADORAS VERTICAIS
  {
    id: "lav-r", 
    categoriaId: "lavadoras", 
    nome: "Lavadora VERTICAL INTERMAC 2021", 
    tipo: "Vertical", 
    medida: "1600mm de boca", 
    valor: "R$ 145.000,00",
    descricao: "Características: Venda, da forma em que se encontra. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). EQUIPAMENTO EM REVISÃO: A combinar prazo de entrega. Sob confirmação de unidade disponível em estoque. **SEM FOTOS ATÉ O MOMENTO.",
    imagens: ["/Lavadoras/sem-foto.jpg"]
  },
  {
    id: "lav-s", 
    categoriaId: "lavadoras", 
    nome: "Lavadora VERTICAL AGAC", 
    tipo: "Vertical", 
    medida: "2400mm de boca", 
    valor: "R$ 190.000,00",
    descricao: "Características: Equipamento foi revisado. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). EQUIPAMENTO EM REVISÃO: A combinar prazo de entrega. Sob confirmação de unidade disponível em estoque. **SEM FOTOS ATÉ O MOMENTO.",
    imagens: ["/Lavadoras/sem-foto.jpg"]
  },
  {
    id: "lav-t", 
    categoriaId: "lavadoras", 
    nome: "Lavadora VERTICAL LOVETRO 2020", 
    tipo: "Vertical", 
    medida: "3200mm de boca", 
    valor: "R$ 220.000,00",
    descricao: "Características: Equipamento foi revisado. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). EQUIPAMENTO EM REVISÃO: A combinar prazo de entrega. Sob confirmação de unidade disponível em estoque. **SEM FOTOS ATÉ O MOMENTO.",
    imagens: ["/Lavadoras/sem-foto.jpg"]
  },
  {
    id: "lav-u", 
    categoriaId: "lavadoras", 
    nome: "Lavadora VERTICAL AGMAC", 
    tipo: "Vertical", 
    medida: "2600mm de boca", 
    valor: "R$ 230.000,00",
    descricao: "Características: Vai ser reformada. “03 meses de garantia\". OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). EQUIPAMENTO EM REVISÃO: A combinar prazo de entrega. Sob confirmação de unidade disponível em estoque. **SEM FOTOS ATÉ O MOMENTO.",
    imagens: ["/Lavadoras/sem-foto.jpg"]
  }
,

// ==========================================
  // FORNOS DE LAMINAÇÃO (EVA / PVB)
  // ==========================================

  {
    id: "lam-a", 
    categoriaId: "fornos-laminacao", 
    nome: "Forno para laminação EVA / FORNO CHINÊS", 
    tipo: "EVA", 
    medida: "2100mm x 2750mm", 
    valor: "R$ 210.000,00",
    descricao: "DESCRIÇÃO TÉCNICA: 01 Câmara de aquecimento, com capacidade de até 05 bandejas. OBS: Necessita a compra de 3 mantas térmicas para deixar completo o forno. Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Laminacao/sem-foto.jpg"]
  },
  {
    id: "lam-b", 
    categoriaId: "fornos-laminacao", 
    nome: "Forno para laminação EVA PUJOL 2012", 
    tipo: "EVA", 
    medida: "2000mm x 4000mm", 
    valor: "R$ 350.000,00",
    descricao: "DESCRIÇÃO TÉCNICA: 01 Câmara de aquecimento, com capacidade de até 04 bandejas por fornada. Atende a vidros multi laminados de até 7x10mm. Faz Filme Eva e Sentriglass. (Equipamento em funcionamento). OBS: Todas as despesas por conta da compradora. (Encontra-se na região Nordeste). PRAZO DE ENTREGA: Á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Laminacao/sem-foto.jpg"]
  },
  {
    id: "lam-c", 
    categoriaId: "fornos-laminacao", 
    nome: "Linha Automática de Laminação PVB PERFLEX / 99", 
    tipo: "Linha Automática PVB", 
    medida: "2440mm x 3210mm", 
    valor: "R$ 1.070.000,00",
    descricao: "DESCRIÇÃO TÉCNICA: Espessura máxima atendida de até 50mm / Espessura mínima atendida de 6mm(Laminados 3+3) com a capacidade de produção em torno de 9 toneladas / ciclo. ACOMPANHA: Esteira-mesa entrada com braços carregadores + Lavadora + Esteira-sala limpa + calandra + esteira saída + Autoclave + compressor. Equipamento completo e em operação no momento. (Passamos Filmagem). OBS: Todas as despesas por conta da compradora. (Encontra-se na região Nordeste). A PRONTA ENTREGA: Sob programação de datas para permissão de desmontagem. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Laminacao/sem-foto.jpg"]
  
  }
  ,

  // ==========================================
  // MOVIMENTAÇÃO / ESTOCAGEM
  // ==========================================

  // CLASSIFICADORES
  {
    id: "mov-a", 
    categoriaId: "movimentacao", 
    nome: "Classificador 2023 Pneumático", 
    tipo: "Classificador", 
    medida: "Atende a 20 colares", 
    valor: "R$ 59.000,00",
    descricao: "OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sul). A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Movimentacao/sem-foto.jpg"]
  },

  // MANIPULADORES MANUAL/AUTOMÁTICOS
  {
    id: "mov-b", 
    categoriaId: "movimentacao", 
    nome: "Manipulador Manual ITALOTEC", 
    tipo: "Manipulador Manual", 
    medida: "Para acoplar na ponte", 
    valor: "R$ 12.000,00",
    descricao: "(Em operação). Equipamento pouco usado. Está Semi-Novo. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Movimentacao/sem-foto.jpg"]
  },
  {
    id: "mov-c", 
    categoriaId: "movimentacao", 
    nome: "Ventosa Entrada Turnover Manual NACIONAL 2017", 
    tipo: "Manipulador Manual", 
    medida: "Sistema de Sucção", 
    valor: "R$ 25.000,00",
    descricao: "Características: Sistema de Sucção para movimentação de chapas. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Movimentacao/sem-foto.jpg"]
  },
  {
    id: "mov-d", 
    categoriaId: "movimentacao", 
    nome: "Ventosa Entrada Turnover Automática NACIONAL 2017", 
    tipo: "Manipulador Automático", 
    medida: "Sistema de Sucção", 
    valor: "R$ 50.000,00",
    descricao: "Características: Sistema de Sucção para movimentação de chapas AUTOMÁTICA. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Movimentacao/sem-foto.jpg"]
  },
  {
    id: "mov-e", 
    categoriaId: "movimentacao", 
    nome: "Manipulador Aéreo ITALOTEC 2020", 
    tipo: "Manipulador Aéreo", 
    medida: "Capacidade 250kg", 
    valor: "R$ 67.000,00",
    descricao: "(Em operação). Completo. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sul). A PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Movimentacao/sem-foto.jpg"]
  },

  // MOVIMENTAÇÃO
  {
    id: "mov-f", 
    categoriaId: "movimentacao", 
    nome: "Pinça NACIONAL 2016", 
    tipo: "Movimentação", 
    medida: "Não informada", 
    valor: "R$ 5.000,00",
    descricao: "OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Movimentacao/sem-foto.jpg"]
  },
  {
    id: "mov-g", 
    categoriaId: "movimentacao", 
    nome: "BALANCIM", 
    tipo: "Movimentação", 
    medida: "Não informada", 
    valor: "R$ 10.000,00",
    descricao: "OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Movimentacao/sem-foto.jpg"]
  },
  {
    id: "mov-j", 
    categoriaId: "movimentacao", 
    nome: "Talha STEEL / SIMILAR 2015", 
    tipo: "Movimentação", 
    medida: "Capacidade 5 Toneladas", 
    valor: "R$ 60.000,00",
    descricao: "OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Movimentacao/sem-foto.jpg"]
  },
  {
    id: "mov-k", 
    categoriaId: "movimentacao", 
    nome: "Carregador Jumbo NACIONAL 2017", 
    tipo: "Movimentação", 
    medida: "Alimentação Automática", 
    valor: "R$ 180.000,00",
    descricao: "Características: Alimentação Automática de chapas. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Movimentacao/sem-foto.jpg"]
  },
  {
    id: "mov-i", 
    categoriaId: "movimentacao", 
    nome: "Ponte Rolante DEMAG/Nacional 2012 (3 Ton)", 
    tipo: "Movimentação", 
    medida: "Capacidade 3 Toneladas", 
    valor: "R$ 200.000,00",
    descricao: "OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Movimentacao/sem-foto.jpg"]
  },
  {
    id: "mov-h", 
    categoriaId: "movimentacao", 
    nome: "Ponte Rolante DEMAG/Nacional 2012 (5 Ton)", 
    tipo: "Movimentação", 
    medida: "Capacidade 5 Toneladas", 
    valor: "R$ 220.000,00",
    descricao: "OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Movimentacao/sem-foto.jpg"]
  },
  {
    id: "mov-l", 
    categoriaId: "movimentacao", 
    nome: "Carregadeira 04 Posições ITALOTEC 2023", 
    tipo: "Movimentação", 
    medida: "04 Posições", 
    valor: "R$ 350.000,00",
    descricao: "Características: Movimentação segura na Linha. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Movimentacao/sem-foto.jpg"]
  },
  {
    id: "mov-m", 
    categoriaId: "movimentacao", 
    nome: "Carregadeira 06 Posições ITALOTEC 2023", 
    tipo: "Movimentação", 
    medida: "06 Posições", 
    valor: "R$ 500.000,00",
    descricao: "Características: Movimentação segura na Linha. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Movimentacao/sem-foto.jpg"]
  },

  // ROBOS - AUTOMAÇÃO INDUSTRIAL
  {
    id: "mov-q1", 
    categoriaId: "movimentacao", 
    nome: "Robô KUKA SEMINOVO (krc2 modelo KR 210)", 
    tipo: "Robô Industrial", 
    medida: "Não informada", 
    valor: "R$ 135.000,00",
    descricao: "DESCRIÇÃO: Não incluso os acessórios e mão de obra/serviços de automação, ficando para avaliação da necessidade do comprador. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento a combinar. (Sob confirmação de unidade disponível em estoque).",
    imagens: ["/Movimentacao/sem-foto.jpg"]
  },
  {
    id: "mov-q2", 
    categoriaId: "movimentacao", 
    nome: "Robô ABB SEMINOVO (Modelo IRB 6640 IRC5)", 
    tipo: "Robô Industrial", 
    medida: "Não informada", 
    valor: "R$ 145.000,00",
    descricao: "DESCRIÇÃO: Não inclusos os acessórios e serviços e mão de obra de automação, ficando para avaliação da necessidade do comprador. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento a combinar. (Sob confirmação de unidade disponível em estoque).",
    imagens: ["/Movimentacao/sem-foto.jpg"]
  },
  {
    id: "mov-q3", 
    categoriaId: "movimentacao", 
    nome: "Robô KUKA SEMINOVO (krc4 modelo KR 210)", 
    tipo: "Robô Industrial", 
    medida: "Não informada", 
    valor: "R$ 185.000,00",
    descricao: "DESCRIÇÃO: Não incluso os acessórios e mão de obra/serviços de automação, ficando para avaliação da necessidade do comprador. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento a combinar. (Sob confirmação de unidade disponível em estoque).",
    imagens: ["/Movimentacao/sem-foto.jpg"]
  },
  {
    id: "mov-q4", 
    categoriaId: "movimentacao", 
    nome: "Conjunto de 02 Robôs KUKA ANO 2012 (COMPLETOS)", 
    tipo: "Robô Industrial", 
    medida: "Capacidade 140kg", 
    valor: "R$ 750.000,00",
    descricao: "DESCRIÇÃO: Atende a peças mínimas de 400mm x 400mm, e máximas de 1700mm x 2800mm. Suporta a pesos de até 140KG. Equipamentos completos com acessórios. Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento a combinar. (Sob confirmação de unidade disponível em estoque).",
    imagens: ["/Movimentacao/sem-foto.jpg"]
  },

  // CARRINHOS E CAVALETES
  {
    id: "mov-n", 
    categoriaId: "movimentacao", 
    nome: "Conjunto de 15 Carrinhos", 
    tipo: "Carrinhos / Cavaletes", 
    medida: "Diversas Medidas", 
    valor: "Sob Consulta",
    descricao: "Contém: 15-Carrinhos medidas mínimas 1,00 x 0,70 para até carrinhos de 2,00 x 1,40. (Todos Reforçados.) OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sul). A PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Movimentacao/sem-foto.jpg"]
  },
  {
    id: "mov-o", 
    categoriaId: "movimentacao", 
    nome: "Conjunto de 06 Cavaletes AGMAC", 
    tipo: "Carrinhos / Cavaletes", 
    medida: "Capacidade 5 Toneladas", 
    valor: "Sob Consulta",
    descricao: "Contém: 06-Cavaletes de Carga/Descarga, (útil 2,00mm x 2,00mm) com capacidade para 5 Ton. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sul). A PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Movimentacao/sem-foto.jpg"]
  },
  {
    id: "mov-p", 
    categoriaId: "movimentacao", 
    nome: "Conjunto de 12 Cavaletes para armazenagem de chapa", 
    tipo: "Carrinhos / Cavaletes", 
    medida: "2,20m x 2,20m", 
    valor: "Sob Consulta",
    descricao: "Contém: 12-Cavaletes com medidas uteis de 2,20mm x 2,20mm. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sul). A PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Movimentacao/sem-foto.jpg"]
  }
  ,
  // ==========================================
  // ITENS DIVERSOS
  // ==========================================

  // EMBALADORAS
  {
    id: "div-a", 
    categoriaId: "itens-diversos", 
    nome: "Embaladora de Vidros", 
    tipo: "Embaladora", 
    medida: "1600mm", 
    valor: "R$ 90.000,00",
    descricao: "ALIMENTAÇÃO A GÁS. Atende as espessuras máximas de até 25mm. (Equipamento Parado). OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Diversos/sem-foto.jpg"]
  },
  {
    id: "div-b", 
    categoriaId: "itens-diversos", 
    nome: "Embaladora NACIONAL", 
    tipo: "Embaladora", 
    medida: "2500mm x 1500mm", 
    valor: "R$ 100.000,00",
    descricao: "ALIMENTAÇÃO A GÁS. (Equipamento Parado). OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sul). A PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Diversos/sem-foto.jpg"]
  },
  {
    id: "div-d", 
    categoriaId: "itens-diversos", 
    nome: "Embaladora / Seladora AUTOMÁTICA MAQUINA PACK", 
    tipo: "Embaladora", 
    medida: "1870mm x 3500mm x 140mm", 
    valor: "R$ 250.000,00",
    descricao: "Características: Area útil sendo: largura de 1870mm x 3500mm de comprimento x altura máxima de até 140mm. Máquina Automática com túnel de encolhimento. (Equipamento Parado). OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sul). A PRONTA ENTREGA: Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Diversos/sem-foto.jpg"]
  },
  {
    id: "div-e", 
    categoriaId: "itens-diversos", 
    nome: "Embaladora / Seladora AUTOMÁTICA MAQUINA PACK 2025", 
    tipo: "Embaladora", 
    medida: "1400mm x 2500mm x 100mm", 
    valor: "R$ 770.000,00",
    descricao: "Características: Area útil sendo: largura de 1400mm x 2500mm de comprimento x altura máxima de até 100mm. Máquina Automática com túnel de encolhimento. (Equipamento em operação). OBS: Todas as despesas por conta da compradora. (Encontra-se na região NORTE). A PRONTA ENTREGA: Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Diversos/sem-foto.jpg"]
  },

  // LIXADEIRA DE DESBASTE DE MESA
  {
    id: "div-f", 
    categoriaId: "itens-diversos", 
    nome: "Lixadeira Manual Crismach", 
    tipo: "Lixadeira", 
    medida: "Não informada", 
    valor: "R$ 20.000,00",
    descricao: "OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sul). A PRONTA ENTREGA: Carregamento á combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Diversos/sem-foto.jpg"]
  },

  // SISTEMA DE TRATAMENTO D’ ÁGUA
  {
    id: "div-g", 
    categoriaId: "itens-diversos", 
    nome: "Sistema de tratamento D'Água AMARAL", 
    tipo: "Tratamento D'Água", 
    medida: "Atende a 3 Lapidadoras", 
    valor: "R$ 30.000,00",
    descricao: "(Atende a 3 Lapidadoras). OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sul). A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Diversos/sem-foto.jpg"]
  },
  {
    id: "div-h", 
    categoriaId: "itens-diversos", 
    nome: "Sistema de tratamento D'Água JOB-J LAP", 
    tipo: "Tratamento D'Água", 
    medida: "Atende a 2 Lapidadoras", 
    valor: "R$ 30.000,00",
    descricao: "(Atende a 2 Lapidadoras). Todas as despesas por conta da compradora. (Encontra-se na região Sul). A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Diversos/sem-foto.jpg"]
  },

  // COMPRESSORES
  {
    id: "div-i", 
    categoriaId: "itens-diversos", 
    nome: "02 Compressores SHULTZ / SIMILAR (PISTÃO) 2018", 
    tipo: "Compressor", 
    medida: "Não informada", 
    valor: "R$ 2.000,00",
    descricao: "OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Diversos/sem-foto.jpg"]
  },
  {
    id: "div-j1", 
    categoriaId: "itens-diversos", 
    nome: "Reservatório (Pulmão) 6M(3) 2013", 
    tipo: "Reservatório", 
    medida: "6M(3)", 
    valor: "R$ 10.000,00",
    descricao: "OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Diversos/sem-foto.jpg"]
  },
  {
    id: "div-k", 
    categoriaId: "itens-diversos", 
    nome: "Compressor parafuso ATLAS CAPCO 2013", 
    tipo: "Compressor", 
    medida: "Não informada", 
    valor: "R$ 150.000,00",
    descricao: "OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Diversos/sem-foto.jpg"]
  },

  // TRANSFORMADORES
  {
    id: "div-j2", 
    categoriaId: "itens-diversos", 
    nome: "Transformador de 500KVA 2022", 
    tipo: "Transformador", 
    medida: "500KVA", 
    valor: "R$ 45.000,00",
    descricao: "Características: Marca NLR, trifásico. OBS: Todas as despesas por conta da compradora. (Encontra-se na região Sudeste). A PRONTA ENTREGA: Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Diversos/sem-foto.jpg"]
  },

  // TRANSPORTE RODOVIÁRIO
  {
    id: "div-l", 
    categoriaId: "itens-diversos", 
    nome: "Caminhão Mercedes Bens ACCELO 1316-6x2-2p (E5)", 
    tipo: "Caminhão", 
    medida: "Não informada", 
    valor: "R$ 280.000,00",
    descricao: "Características: Acompanha a carroceria, (Fipe dele esta 300K, sem carroceria). OBS: Todas as despesas para buscar o veículo a cargo do comprador. (Encontra-se na região Sul). A PRONTA ENTREGA: Sob confirmação de unidade disponível em estoque.",
    imagens: ["/Diversos/sem-foto.jpg"]
  }
  ,
  // ==========================================
  // INDÚSTRIAS TEMPERADORAS (À VENDA)
  // ==========================================

  {
    id: "ind-a", 
    categoriaId: "industrias", 
    nome: "Fábrica Temperadora de Vidros Planos (Forno T.C.M.E)", 
    tipo: "Fábrica Completa", 
    medida: "Forno: 2445mm x 5200mm", 
    valor: "Sob Consulta",
    descricao: "Fábrica Completa, com todos os equipamentos. Forno de Tempera marca T.C.M.E, com área útil 2445mm x 5200mm. Demais equipamentos apresentados posteriormente. (Encontra-se na região Sudeste). Maiores informações, entrar em contato.",
    imagens: ["/Industrias/sem-foto.jpg"]
  },
  {
    id: "ind-b", 
    categoriaId: "industrias", 
    nome: "Fábrica Temperadora de Vidros Planos (Forno TAMGLASS)", 
    tipo: "Venda Parcial", 
    medida: "Forno: 2200mm x 3600mm", 
    valor: "Sob Consulta",
    descricao: "Venda parcial, pois alguns equipamentos já foram vendidos. Forno de tempera marca TAMGLASS, com área útil 2200mm x 3600mm. Demais equipamentos, listados posteriormente. (Encontra-se na região Sudeste). Maiores informações, entrar em contato.",
    imagens: ["/Industrias/sem-foto.jpg"]
  },
  {
    id: "ind-c", 
    categoriaId: "industrias", 
    nome: "Fábrica Temperadora de Vidros Planos (Forno MAINZ)", 
    tipo: "Venda Parcial / Parada", 
    medida: "Forno: 2400mm x 4400mm", 
    valor: "Sob Consulta",
    descricao: "Venda parcial / pois esta Parada. Forno de Tempera marca MAINZ, com área útil de 2400mm x 4400mm. Demais equipamentos, listado posteriormente. (Encontra-se na região Sudeste). Maiores informações, entrar em contato.",
    imagens: ["/Industrias/sem-foto.jpg"]
  },
  {
    id: "ind-d", 
    categoriaId: "industrias", 
    nome: "Fábrica Temperadora de Vidros Planos (Forno SGLASS)", 
    tipo: "Fábrica Completa", 
    medida: "Forno: 2400mm x 4000mm", 
    valor: "Sob Consulta",
    descricao: "Fábrica Completa, com todos equipamentos. Forno de Tempera marca SGLASS, com área útil de 2400mm x 4000mm. Demais equipamentos, listado posteriormente. (Encontra-se na região Norte). Maiores informações, entrar em contato.",
    imagens: ["/Industrias/sem-foto.jpg"]
  }
];
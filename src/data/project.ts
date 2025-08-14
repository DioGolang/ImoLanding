import type { Project } from '@/domain/types/project.types';

export const database = {
    projects: [
        {
            slug: 'taj-residences-ibirapuera',
            name: 'Taj Residences Ibirapuera',
            colors: {
                primary: '#1A2E35', // Um azul bem escuro, quase preto
                secondary: '#D4AF37', // Um tom de dourado/ouro
                textPrimary: '#2D3748', // Cinza escuro para títulos
                textSecondary: '#4A5568', // Cinza médio para textos
            },
            location: {
                address: 'Rua Pelotas, 681',
                neighborhood: 'Vila Mariana',
                city: 'São Paulo',
                complement:
                    'Região do Ibirapuera, com vista para o Instituto Biológico.',
                mapUrl: 'https://www.google.com/maps/place/R.+Pelotas,+681+-+Vila+Mariana,+S%C3%A3o+Paulo+-+SP,+04012-002',
            },
            headline: 'Seu Refúgio Particular. Sua Obra de Arte Habitável.',
            subheadline:
                'No coração do Ibirapuera, um convite para viver o extraordinário. Apartamentos de 191m² a 465m² onde a arquitetura autoral de PSA, Abbud e Chris Silveira encontra a máxima expressão do seu estilo, através de um programa de personalização exclusivo.',
            copy: {
                opening:
                    'Você alcançou um patamar onde o genérico não tem mais espaço. Onde cada escolha é um reflexo da sua jornada e cada detalhe deve contar a sua história. Para quem entende que viver bem é uma arte, a Planik apresenta o Taj Residences Ibirapuera. Mais que um endereço, um refúgio. Mais que um apartamento, uma tela em branco para a sua identidade.',
                location:
                    'Viver no Taj Residences é ter o Parque Ibirapuera como a extensão do seu jardim. É a conveniência de estar a minutos dos melhores restaurantes, das escolas mais renomadas e dos grandes centros de negócio. É a tranquilidade de uma rua arborizada com a segurança de uma vista permanente para o verde do Instituto Biológico. Um equilíbrio perfeito entre a calmaria da natureza e o pulso da metrópole.',
                leisure:
                    'Imagine receber seus convidados em um imponente lobby com pé-direito duplo. Celebrar momentos inesquecíveis em um salão de festas com adegas climatizadas para seus vinhos. Ou simplesmente começar o dia com um treino em uma academia de alto padrão, seguida por uma sessão de relaxamento no spa. No Taj, as áreas comuns foram desenhadas não como espaços, mas como cenários para suas melhores memórias.',
            },
            units: {
                area: '191m² a 465m²',
                types: [
                    'Apartamentos tipo com 3 ou 4 suítes (253m²)',
                    'Unidades Garden',
                    'Coberturas Duplex',
                ],
                parkingSpots: '3 a 5 vagas demarcadas',
                extra: 'Depósito privativo para todas as unidades',
            },
            mainFeatures: [
                'Hall social privativo',
                'Pé-direito elevado de até 2,94m',
                'Infraestrutura completa para ar-condicionado',
                'Gerador full-service que atende 100% do apartamento',
                'Guarita blindada com projeto de segurança especializado',
                'Infraestrutura para carregador de carro elétrico por unidade',
            ],
            benefits: [
                {
                    icon: 'Signature',
                    title: 'Uma Assinatura de Valor Inestimável',
                    description:
                        'Viva em uma obra de arte concebida pelo trio icônico da arquitetura brasileira: PSA Arquitetura, Chris Silveira e Benedito Abbud. Um legado que se valoriza com o tempo.',
                },
                {
                    icon: 'Customize',
                    title: 'Liberdade Criativa Absoluta',
                    description:
                        'Através do nosso Programa de Personalização, altere plantas, amplie ambientes e escolha acabamentos exclusivos para criar um lar que é um reflexo autêntico da sua identidade.',
                },
                {
                    icon: 'Resort',
                    title: 'Lazer em Nível de Resort, no seu Endereço',
                    description:
                        'Mergulhe na piscina semiolímpica, jogue na quadra de beach tennis ou relaxe no spa. O melhor do lazer, a poucos passos da sua porta, para cancelar a assinatura do clube.',
                },
            ],
            leisureHighlights: [
                'Piscina semiolímpica (25m) climatizada',
                'Quadra de Beach Tennis',
                'Fitness de alto padrão',
                'Spa com sala de massagem',
                'Salão de festas com adegas climatizadas',
                'Espaço Gourmet',
                'Brinquedoteca e Playground',
                'Lobby com pé-direito duplo',
            ],
            images: [
                '/images/taj-residences/tag-fachada-1.jpg',
                '/images/taj-residences/tag-fachada-2.jpg',
                '/images/taj-residences/lobby.jpg',
                '/images/taj-residences/tag-1.jpg',
                '/images/taj-residences/tag-2.jpg',
                '/images/taj-residences/tag-3.jpg',
                '/images/taj-residences/tag-4.jpg',
                '/images/taj-residences/tag-5.jpg',
                '/images/taj-residences/tag-6.jpg',
                '/images/taj-residences/tag-7.jpg',
                '/images/taj-residences/tag-8.jpg',
                '/images/taj-residences/tag-9.jpg',
                '/images/taj-residences/tag-10.jpg',
                '/images/taj-residences/tag-11.jpg',
                '/images/taj-residences/tag-12.jpg',
                '/images/taj-residences/tag-13.jpg',
            ],
            floorPlans: [
                {
                    name: 'Apartamento Tipo',
                    area: '191m²',
                    imageUrl: '/images/taj-residences/Padrao-4-Suites.jpg',
                },
                {
                    name: 'Cobertura Duplex',
                    area: '465m²',
                    imageUrl: '/images/taj-residences/Padrao-4-Suites-1.jpg',
                },
                {
                    name: 'Cobertura Duplex',
                    area: '465m²',
                    imageUrl: '/images/taj-residences/Opcao.jpg',
                },
                {
                    name: 'Cobertura Duplex',
                    area: '465m²',
                    imageUrl: '/images/taj-residences/Opcao-1.jpg',
                },
            ],
            virtualTourUrl: '/tour-virtual/taj-residences-decorado',
            cta: {
                title: 'O extraordinário espera por você.',
                subtitle:
                    'As unidades são limitadas e a exclusividade é a essência deste projeto.',
                buttonText: 'Agende sua visita privativa',
            },
        },
        {
            "slug": "nuv-moema",
            "name": "NUV Moema",
            "colors": {
                "primary": "#383A44",
                "secondary": "#A8978A",
                "textPrimary": "#2D3748",
                "textSecondary": "#4A5568"
            },
            "location": {
                "address": "Avenida Jamaris, 633",
                "neighborhood": "Moema",
                "city": "São Paulo",
                "complement": "Localizado em uma rua plana, tranquila e cercada por arborização, a poucos minutos do Parque Ibirapuera.",
                "mapUrl": "http://googleusercontent.com/file_content/6"
            },
            "headline": "Nature Unique View. Uma nova perspectiva do luxo.",
            "subheadline": "No coração de Moema, um projeto exclusivo com apartamentos de 207m² a 447m², 4 suítes e um impressionante pé-direito duplo de 5,48m na sala e no terraço, redefinindo a experiência de morar com sofisticação, amplitude e design autoral.",
            "copy": {
                "opening": "Certos endereços nos convidam a olhar ao redor. Alguns raros, nos convidam a sentir. Enxergando o mundo de um ângulo que se expande. Mais fluido, amplo e essencial. Aqui, o verde cresce junto à arquitetura, a luz dança pelas janelas e o ar parece mais leve, como se o concreto respirasse. É desse olhar que nasce o NUV.",
                "location": "Localizado na tranquila e arborizada Avenida Jamaris, o projeto está em um dos pontos mais desejados de Moema, bairro que equilibra natureza, mobilidade e alta qualidade de vida. A poucos minutos do Parque Ibirapuera e com fácil acesso às principais avenidas, o empreendimento está cercado por tudo que importa no cotidiano: escolas renomadas, universidades e uma seleção criteriosa de restaurantes e serviços.",
                "leisure": "Imagine um mergulho na piscina coberta climatizada após um treino no fitness de alto padrão. Celebrar momentos inesquecíveis no salão de festas com quatro ambientes ou reunir amigos na churrasqueira a carvão. No NUV, as áreas comuns foram desenhadas como uma extensão da sua casa, com espaços como playground com mini floresta, praça com lareira e um pet place de 30m², garantindo lazer e bem-estar para toda a família."
            },
            "units": {
                "area": "207m² a 447m²",
                "types": [
                    "Apartamentos tipo com 207m² e 208m² (4 suítes)",
                    "Coberturas Duplex com 445m² e 447m² (4 suítes)"
                ],
                "parkingSpots": "3 a 4 vagas demarcadas",
                "extra": "Depósito exclusivo para todas as unidades"
            },
            "mainFeatures": [
                "Pé-direito duplo de 5,48m no living e terraço",
                "Hall social privativo com elevador com controle de acesso",
                "Todos os banheiros das suítes com ventilação natural",
                "Piso nivelado e sem viga entre sala e terraço",
                "Tratamento acústico no piso e nas paredes de divisa entre unidades",
                "Gerador full que atende apartamentos e áreas comuns",
                "Infraestrutura para carregador de carro elétrico (1 por unidade)",
                "Guarita blindada com projeto de segurança e clausura"
            ],
            "benefits": [
                {
                    "icon": "Signature",
                    "title": "Arquitetura que Respira",
                    "description": "Viva em um espaço onde a luz e a amplitude são protagonistas. O pé-direito duplo de 5,48m, uma raridade em São Paulo, cria uma atmosfera de casa e uma sensação de liberdade inigualável, com biofilia integrada em todo o projeto."
                },
                {
                    "icon": "Customize",
                    "title": "Liberdade para Criar seu Próprio Luxo",
                    "description": "Com o programa Planik One, você tem a liberdade de personalizar layouts, acabamentos e soluções técnicas, transformando seu apartamento em um reflexo autêntico da sua identidade e estilo de vida."
                },
                {
                    "icon": "Resort",
                    "title": "Exclusividade em Cada Detalhe",
                    "description": "Em uma torre única com apenas 38 unidades, desfrute de áreas comuns completas, como duas piscinas climatizadas e fitness, com a privacidade e tranquilidade que só um projeto verdadeiramente exclusivo pode oferecer."
                }
            ],
            "leisureHighlights": [
                "Piscina coberta climatizada com raia de 20m",
                "Piscina descoberta climatizada com deck molhado",
                "Fitness de 89m²",
                "Salão de Festas com 4 ambientes e 93m²",
                "Churrasqueira a carvão",
                "Playground com mini floresta e árvores frutíferas",
                "Praça com Lareira",
                "Pet Place com 30m²"
            ],
            "images": [
                '/images/nuv-moema/nuv-moema-fachada-01.jpg',
                '/images/nuv-moema/nuv-moema-fachada.jpg',
                '/images/nuv-moema/nuv-moema-piscina-coberta.jpg',
                '/images/nuv-moema/nuv-moema-piscina.jpg',
                '/images/nuv-moema/nuv-moema-lobby.jpg',
                '/images/nuv-moema/nuv-moema-praca-de-fogo.jpg',
                '/images/nuv-moema/nuv-moema-salao-de-festas.jpg',
                '/images/nuv-moema/nuv-moema-petplace.jpg',
                '/images/nuv-moema/nuv-moema-churrasqueira.jpg',
                '/images/nuv-moema/nuv-moema-brinquedoteca1.jpg',
                '/images/nuv-moema/nuv-moema-brinquedoteca.jpg',
                '/images/nuv-moema/nuv-moema-academia.jpg',
                '/images/nuv-moema/nuv-moema-academia-1.jpg',
            ],
            "floorPlans": [
                {
                    "name": "Apartamento Padrão - 4 Suítes",
                    "area": "207m²",
                    "imageUrl": "/images/nuv-moema/nuv-moema-final-1.jpg"
                },
                {
                    "name": "Apartamento Padrão - 3 Suítes (Sala Ampliada)",
                    "area": "207m²",
                    "imageUrl": "/images/nuv-moema/nuv-moema-final-1-opcao.jpg"
                },
                {
                    "name": "Cobertura Duplex - Pav. Inferior",
                    "area": "445m²",
                    "imageUrl": "/images/nuv-moema/nuv-moema-cobertura.jpg"
                },
                {
                    "name": "Cobertura Duplex - Pav. Superior",
                    "area": "447m²",
                    "imageUrl": "/images/nuv-moema/nuv-moema-cobertura-final-2.jpg"
                }
            ],
            "cta": {
                "title": "O extraordinário espera por você.",
                "subtitle": "As unidades são limitadas e a exclusividade é a essência deste projeto.",
                "buttonText": "Agende sua visita privativa"
            }
        },
    ] as const, // <-- TypeScript trick for readonly data
};
// O 'as const' prevenindo modificações acidentais.
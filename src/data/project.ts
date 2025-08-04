
import type { Project } from '@/domain/types/project.types';

export const database = {
    Project: [
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
                '/images/taj-residences/fachada-diurna.jpg',
                '/images/taj-residences/fachada-noturna.jpg',
                '/images/taj-residences/lobby.jpg',
                '/images/taj-residences/piscina.jpg',
                '/images/taj-residences/beach-tennis.jpg',
                '/images/taj-residences/living-decorado.jpg',
                '/images/taj-residences/suite-master-decorado.jpg',
                '/images/taj-residences/vista-do-terraco.jpg',
            ],
            virtualTourUrl: '/tour-virtual/taj-residences-decorado',
            cta: {
                title: 'O extraordinário espera por você.',
                subtitle:
                    'As unidades são limitadas e a exclusividade é a essência deste projeto.',
                buttonText: 'Agende sua visita privativa',
            },
        },
        // Futuramente, você pode adicionar um novo objeto de empreendimento aqui
    ] as const, // <-- TypeScript trick for readonly data
};
// O 'as const' prevenindo modificações acidentais.
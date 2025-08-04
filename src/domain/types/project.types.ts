type ColorScheme = {
    primary: string;
    secondary: string;
    textPrimary: string;
    textSecondary: string;
};

type LocationInfo = {
    address: string;
    neighborhood: string;
    city: string;
    complement: string;
    mapUrl: string;
};

type Copywriting = {
    opening: string;
    location: string;
    leisure: string;
};

type UnitDetails = {
    area: string; // Ex: "191m² a 465m²"
    types: string[];
    parkingSpots: string; // Ex: "3 a 5 vagas"
    extra: string; // Ex: "Depósito privativo"
};

type Benefit = {
    icon: string; // Nome do ícone a ser usado, ex: "Signature"
    title: string;
    description: string;
};

type CallToAction = {
    title: string;
    subtitle: string;
    buttonText: string;
};

/**
 * @interface Project
 * @description Define a estrutura completa de dados para um empreendimento imobiliário.
 * Agrega todas as informações necessárias para renderizar uma landing page dinâmica.
 */
export interface Project {
    slug: string; // Identificador único para a URL, ex: "taj-residences-ibirapuera"
    name: string;
    colors: ColorScheme;
    location: LocationInfo;
    headline: string;
    subheadline: string;
    copy: Copywriting;
    units: UnitDetails;
    mainFeatures: string[];
    benefits: Benefit[];
    leisureHighlights: string[];
    images: string[]; // Array de URLs/caminhos para as imagens
    floorPlan: string[]; // Array de URLs/caminhos para as imagens das plantas
    virtualTourUrl?: string;
    cta: CallToAction;
}
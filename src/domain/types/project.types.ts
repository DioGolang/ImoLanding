type ColorScheme = {
    primary: string;
    secondary: string;
    textPrimary: string;
    textSecondary: string;
};

type UnitDetailItem = {
    icon: 'Ruler' | 'BedDouble' | 'Car' | 'Expand';
    value: string;
    label: string;
};

type UnitDetailsByType = {
    tipo: readonly UnitDetailItem[];
    cobertura: readonly UnitDetailItem[];
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

type FloorPlan = {
    name: string; // Ex: "Apartamento Tipo - 3 Suítes"
    area: string; // Ex: "191m²"
    imageUrl: string;
};

type NearbyLocation = {
    name: string;
    time: string;
    imageUrl: string;
}


type ContactInfo = {
    phone: string;      // Ex: "(11) 99999-9999"
    whatsapp: string;   // Ex: "5511999999999" (somente números)
};

type Feature = {
    title: string;
    description: string;
    icon: string;
    category: 'common' | 'unit';
};

/**
 * @interface Project
 * @description Define a estrutura completa de dados para um empreendimento imobiliário.
 * Agrega todas as informações necessárias para renderizar uma landing page dinâmica.
 */
export interface Project {
    slug: string; // Identificador único para a URL, ex: "taj-residences-ibirapuera"
    name: string;
    unitDetails: UnitDetailsByType;
    featureImage: string;
    colors: ColorScheme;
    location: LocationInfo;
    headline: string;
    subheadline: string;
    copy: Copywriting;
    units: UnitDetails;
    mainFeatures: string[];
    benefits: Benefit[];
    leisureHighlights: string[];
    images: string[];
    bannerImage: string
    bannerVideo: string
    floorPlans: FloorPlan[];
    cta: CallToAction;
    nearbyLocations: readonly NearbyLocation[];
    contact: ContactInfo;
    features: readonly Feature[];
    virtualTourUrl?: string;
}
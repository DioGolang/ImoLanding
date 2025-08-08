interface FooterProps {
    projectName: string;
    address: string;
}

export const Footer = ({ projectName, address }: FooterProps) => {
    const [brandName, ...brandSuffixParts] = projectName.split(' ');
    const brandSuffix = brandSuffixParts.join(' ');

    return (
        <footer className="bg-gray-900 text-gray-400 py-12 font-sans">
            <div className="container mx-auto px-6 text-center">
                <p className="text-3xl font-bold text-white font-serif tracking-wider">
                    {brandName} <span className="text-brand-gold">{brandSuffix}</span>
                </p>
                <p className="mt-4">{address}</p>
                <p className="mt-4 text-sm">© {new Date().getFullYear()} {projectName} by Planik. Todos os direitos reservados.</p>
                <p className="mt-6 text-xs max-w-2xl mx-auto">As imagens são meramente ilustrativas. O empreendimento será entregue conforme memorial descritivo.</p>
            </div>
        </footer>
    );
};
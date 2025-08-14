import React from 'react';

interface FooterLink {
    label: string;
    href: string;
    external?: boolean;
}

interface FooterProps {
    projectName: string;
    address?: string;
    disclaimer?: string;
    links?: FooterLink[];
    brandTagline?: string;
    year?: number;
    showDivider?: boolean;
    className?: string;
}

export const Footer: React.FC<FooterProps> = ({
                                                  projectName,
                                                  address,
                                                  disclaimer = 'As imagens são meramente ilustrativas. O empreendimento será entregue conforme memorial descritivo.',
                                                  links = [],
                                                  brandTagline,
                                                  year = new Date().getFullYear(),
                                                  showDivider = true,
                                                  className = ''
                                              }) => {
    const cleaned = projectName.trim().replace(/\s+/g, ' ');
    const [brandName, ...rest] = cleaned.split(' ');
    const brandSuffix = rest.join(' ');
    const hasSuffix = brandSuffix.length > 0;
    const safeLinks = links.filter(l => l.href && l.label);

    return (
        <footer
            className={[
                'relative mt-32 border-t border-neutral-200/40 dark:border-neutral-800/60',
                'bg-white/80 dark:bg-neutral-950/70 backdrop-blur-xl',
                'px-4 py-16 font-sans text-sm',
                'text-neutral-600 dark:text-neutral-400',
                className
            ].join(' ')}
            aria-labelledby="footer-brand"
        >
            {/* Decorative radial accent */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(212,182,98,0.10),transparent_60%)]"
            />

            <div className="relative z-10 container mx-auto max-w-7xl">
                <div className="flex flex-col items-center text-center">
                    <p
                        id="footer-brand"
                        className="font-serif text-3xl md:text-4xl font-bold tracking-wide text-neutral-900 dark:text-neutral-50"
                    >
                        {brandName}
                        {hasSuffix && (
                            <span className="text-brand-gold ml-2 inline-block">
                {brandSuffix}
              </span>
                        )}
                    </p>
                    {brandTagline && (
                        <p className="mt-3 uppercase tracking-wider text-[11px] font-medium text-brand-gold/80">
                            {brandTagline}
                        </p>
                    )}

                    {showDivider && (
                        <span
                            aria-hidden="true"
                            className="gold-divider mt-8 mb-6"
                        />
                    )}

                    {address && (
                        <p className="mt-2 text-neutral-700 dark:text-neutral-300 max-w-prose">
                            {address}
                        </p>
                    )}

                    {safeLinks.length > 0 && (
                        <nav
                            aria-label="Footer navigation"
                            className="mt-8"
                        >
                            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
                                {safeLinks.map(link => {
                                    const external =
                                        link.external ?? /^https?:\/\//.test(link.href);
                                    return (
                                        <li key={link.href}>
                                            <a
                                                href={link.href}
                                                {...(external
                                                    ? { target: '_blank', rel: 'noopener noreferrer' }
                                                    : {})}
                                                className="relative inline-flex items-center gap-1 px-2 py-1 rounded-md text-neutral-600 hover:text-brand-gold dark:text-neutral-300 dark:hover:text-brand-gold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    )}

                    <p className="mt-8 text-xs text-neutral-500 dark:text-neutral-500">
                        © {year} {projectName} by Planik. Todos os direitos reservados.
                    </p>
                    {disclaimer && (
                        <p className="mt-6 max-w-2xl mx-auto text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-600">
                            {disclaimer}
                        </p>
                    )}
                </div>
            </div>
        </footer>
    );
};
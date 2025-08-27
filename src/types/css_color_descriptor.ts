export interface CssStyleDescription {
    accent: string;

    // Background colors
    background1: string;
    background2: string;
    background3: string;

    // Important background colors
    importantBackground1: string;
    importantBackground2: string;

    // Decorations
    borderRadius: string;
    boxShadow: string;
}

export const CssStyleTransactional: CssStyleDescription = {
    accent: '#84b74e',
    background1: '#ffffff',
    background2: '#e6e6e6',
    background3: '#cccccc',
    importantBackground1: '#1a1a1a',
    importantBackground2: '#333333',
    borderRadius: '8px',
    boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)'
}

export const CssStyleInternal: CssStyleDescription = {
    accent: '#84b74e',
    background1: '#000000',
    background2: '#333333',
    background3: '#666666',
    importantBackground1: '#999999',
    importantBackground2: '#cccccc',
    borderRadius: '4px',
    boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)'
}

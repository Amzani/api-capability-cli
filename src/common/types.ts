export interface Capability {
    id: number;
    name: string;
    description: string;
    link: string;
}

export interface Stage {
    id: number;
    name: string;
    capabilities: Capability[];
}

export interface Team {
    id: number;
    name: string;
}

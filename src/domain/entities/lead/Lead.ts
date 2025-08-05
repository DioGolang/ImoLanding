import {LeadDTO} from "@/application/features/lead-capture/types";

interface LeadProps {
    id: string;
    name: string;
    email: string;
    phone?: string;
    createdAt: Date;
}

export class Lead {
    public readonly id: string;
    public name: string;
    public email: string;
    public phone?: string;
    public readonly createdAt: Date;

    constructor(props: LeadProps) {
        if (!props.email || !props.email.includes('@')) {
            throw new Error("Lead must have a valid email.");
        }
        if (!props.name || props.name.trim().length < 2) {
            throw new Error("Lead name must be at least 2 characters long.");
        }

        this.id = props.id;
        this.name = props.name;
        this.email = props.email;
        this.phone = props.phone;
        this.createdAt = props.createdAt;
    }

    public updateName(newName: string): void {
        if (newName.trim().length < 2) {
            throw new Error("Name must be at least 2 characters long");
        }
        this.name = newName;
    }

    public static createFromDTO(dto: LeadDTO): Lead {
        return new Lead({
            ...dto,
            createdAt: new Date(dto.createdAt),
        });
    }
}
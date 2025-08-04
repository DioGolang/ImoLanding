import {Lead} from "@/application/features/lead-capture/types/lead.types";

export class LeadEntity {
    private lead: Lead;

    constructor(lead: Lead) {
        this.lead = lead;
    }

    get name() {
        return this.lead.name;
    }

    get email() {
        return this.lead.email;
    }

    get phone() {
        return this.lead.phone || '';
    }

    isValid() {
        return this.lead.name !== '' && this.lead.email.includes('@');
    }
}
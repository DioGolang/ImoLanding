import { create } from 'zustand';
import {Lead} from "@/features/lead-capture/types/lead.types";


type LeadStore = {
    leads: Lead[];
    addLead: (lead: Lead) => void;
};

export const useLeadStore = create<LeadStore>((set) => ({
    leads: [],
    addLead: (lead) => set((state) => ({ leads: [...state.leads, lead] })),
}));

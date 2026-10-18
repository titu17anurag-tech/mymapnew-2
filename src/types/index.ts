export interface FloorPlanItem {
  id: string;
  title: string;
  plotSize: string; // e.g. "30 x 40 ft"
  totalArea: string; // e.g. "1200 sq.ft"
  bhk: string; // e.g. "3 BHK Duplex"
  facing: 'North' | 'East' | 'South' | 'West';
  vastuCompliant: boolean;
  floors: string;
  image2D: string;
  image3D: string;
  imageElevation?: string;
  description: string;
  rooms: {
    name: string;
    dimensions: string;
    vastuDirection: string;
    details: string;
  }[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  deliveryTime: string;
  popular?: boolean;
  tagline: string;
  features: string[];
  ctaLabel: string;
}

export interface UserRequirement {
  plotLength: number;
  plotLengthInches: number;
  plotWidth: number;
  plotWidthInches: number;
  unit: 'ft' | 'meter';
  facing: 'North' | 'East' | 'West' | 'South';
  bhk: '1 BHK' | '2 BHK' | '3 BHK' | '4 BHK' | 'Duplex / Villa';
  floors: 'Ground Floor' | 'G+1 (Duplex)' | 'G+2' | 'G+3';
  vastuPriority: boolean;
  parkingNeeded: boolean;
  poojaRoomNeeded: boolean;
  additionalNotes: string;
  clientName: string;
  clientCity: string;
  clientPhone: string;
  style: 'All Styles' | 'Villa' | 'Modern' | 'Kerala Heritage' | 'Minimalist';
}

export type Dragon = {
  name: string;
  diameter: Diameter;
  first_flight: string;
  launch_payload_mass: PayloadMass;
};

export type Diameter = {
  feet: number;
};

export type PayloadMass = {
  lb: number;
};

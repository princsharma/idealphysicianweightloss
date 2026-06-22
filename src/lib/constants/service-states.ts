/** States available for scheduling via the header dropdown */
export const SERVICE_STATES = [
  "Louisiana",
  "Alabama",
  "California",
  "Georgia",
  "Colorado",
  "Ohio",
] as const;

export type ServiceState = (typeof SERVICE_STATES)[number];

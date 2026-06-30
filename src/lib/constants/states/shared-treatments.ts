export const STATE_TREATMENT_PRODUCTS = [
  {
    id: "ozempic",
    name: "Ozempic",
    image: "/ozempic.webp",
    description:
      "A once-weekly GLP-1 treatment that may be prescribed to support appetite regulation and weight management when clinically appropriate following your provider's assessment.",
    dosing: "Weekly Injection",
    color: "from-blue-500/20 to-indigo-500/10",
  },
  {
    id: "wegovy",
    name: "Wegovy",
    image: "/wegovy.webp",
    description:
      "An FDA-approved GLP-1 therapy for chronic weight management, prescribed to qualified individuals under the care of a licensed healthcare provider.",
    dosing: "Weekly Injection",
    color: "from-teal-500/20 to-cyan-500/10",
  },
  {
    id: "mounjaro",
    name: "Mounjaro",
    image: "/mounjaro.webp",
    description:
      "A dual GLP-1 and GIP receptor medication that may be prescribed off-label to assist with weight loss and metabolic support based on your clinical profile.",
    dosing: "Weekly Injection",
    color: "from-amber-500/20 to-orange-500/10",
  },
  {
    id: "zepbound",
    name: "Zepbound",
    image: "/zepbound.webp",
    description:
      "A GLP-1-based medication that may be prescribed to support ongoing weight management, depending on your provider's evaluation and health needs.",
    dosing: "Weekly Injection",
    color: "from-violet-500/20 to-purple-500/10",
  },
  {
    id: "rybelsus",
    name: "Rybelsus",
    image: "/rybluss.webp",
    description:
      "An oral GLP-1 option that may be prescribed as an alternative to injections for weight management when appropriate based on your medical assessment.",
    dosing: "Daily Tablet",
    color: "from-emerald-500/20 to-teal-500/10",
  },
  {
    id: "liraglutide",
    name: "Liraglutide",
    image: "/liraglutide.webp",
    description:
      "A daily GLP-1 medication that may be prescribed to help manage appetite and promote gradual weight loss under medical supervision.",
    dosing: "Daily Injection",
    color: "from-rose-500/20 to-pink-500/10",
  },
] as const;

export const STATE_TREATMENTS_DISCLAIMER =
  "Ozempic, Mounjaro, Rybelsus, and Victoza (liraglutide) are not FDA-approved for weight loss and may be prescribed off-label when clinically appropriate. Not all individuals will qualify, and all treatment decisions are based on a clinical evaluation.";

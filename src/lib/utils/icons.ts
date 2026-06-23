import {
  Activity,
  BadgeCheck,
  ClipboardList,
  Globe,
  Headphones,
  Package,
  Pill,
  Receipt,
  Shield,
  Stethoscope,
  TrendingUp,
  Truck,
  UserCheck,
  Users,
  Video,
  type LucideIcon,
} from "lucide-react";

const iconMap = {
  stethoscope: Stethoscope,
  "user-check": UserCheck,
  shield: Shield,
  "badge-check": BadgeCheck,
  truck: Truck,
  "clipboard-list": ClipboardList,
  video: Video,
  package: Package,
  "trending-up": TrendingUp,
  activity: Activity,
  users: Users,
  receipt: Receipt,
  pill: Pill,
  headphones: Headphones,
  globe: Globe,
} as const;

export type IconName = keyof typeof iconMap;

export function getIcon(name: IconName): LucideIcon {
  return iconMap[name];
}

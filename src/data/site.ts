export type SectionId =
  | "about"
  | "skills"
  | "languages"
  | "experience"
  | "projets"
  | "animations3D"
  | "contact";

export type NavItem = {
  id: SectionId;
  label: string;
};

/** Single source of truth for the navigation — used by the navbar and the footer. */
export const NAV_ITEMS: NavItem[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "languages", label: "Languages" },
  { id: "experience", label: "Experience" },
  { id: "projets", label: "Projects" },
  { id: "animations3D", label: "Animations 3D" },
  { id: "contact", label: "Contact" },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/hNnicolas",
  linkedin: "https://www.linkedin.com/in/huang-nicolas/",
  instagram: "https://www.instagram.com/hfnicolas_/",
  discord: "https://discord.com/channels/@me",
} as const;

export const CONTACT = {
  email: "huang.nicola@gmail.com",
  phone: "+33622414099",
  phoneDisplay: "+33 6 22 41 40 99",
} as const;

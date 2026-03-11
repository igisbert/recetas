export const CATEGORIES = [
  { id: 'verduras', name: 'Verduras' },
  { id: 'legumbres', name: 'Legumbres' },
  { id: 'arroces', name: 'Arroces' },
  { id: 'pasta', name: 'Pasta' },
  { id: 'carnes', name: 'Carnes' },
  { id: 'masas-panes', name: 'Masas y panes' },
  { id: 'postres', name: 'Postres' },
  { id: 'otros', name: 'Otros' },
] as const;

export type CategoryId = typeof CATEGORIES[number]['id'];

export const SITE_TITLE = 'Mis Recetas';

export const COLOR_CARBS = "#F4A836";
export const COLOR_PROTEIN = "#4FC3A1";
export const COLOR_FAT = "#E05C7A"; 
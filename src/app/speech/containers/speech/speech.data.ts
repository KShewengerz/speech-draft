export interface Tab {
  label: string;
  icon: string;
  url: string;
  active: boolean;
}

/* Tabs */
export const tabs: Tab[] = [
  { label: 'View Speeches', icon: 'eye', url: 'view-speech', active: false },
  { label: 'Submit a Speech', icon: 'edit', url: 'submit-speech', active: false },
  { label: 'Search Speeches', icon: 'search', url: 'search-speech', active: false },
];

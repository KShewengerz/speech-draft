export interface Tab {
  label: string;
  icon: string;
  url: string;
  active: boolean;
}

export const tabs: Tab[] = [
  { label: 'View Speeches', icon: 'eye', url: 'view-speech', active: true },
  { label: 'Submit a Speech', icon: 'edit', url: 'submit-speech', active: false },
  { label: 'Search Speeches', icon: 'search', url: 'search-speech', active: false },
];

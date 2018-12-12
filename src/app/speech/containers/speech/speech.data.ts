/**
 * An interface for Tab properties
 */
export interface Tab {
  id: number;
  label: string;
  icon: string;
  url: string;
}

/**
 * A variable that contains the tab data with its respective properties adapted from the Tab interface. This data will be used
 * to iterate on the speech template to same html format redundancy on creating tabs.
 *
 * @type {Tab[]}
 */
export const tabs: Tab[] = [
  { id: 1, label: 'View Speeches', icon: 'eye', url: 'view-speech' },
  { id: 2, label: 'Submit a Speech', icon: 'edit', url: 'submit-speech' },
  { id: 3, label: 'Search Speeches', icon: 'search', url: 'search-speech' },
];

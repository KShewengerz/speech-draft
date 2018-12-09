import { Speech } from '@app/speech/models/speech.interface';

export interface Tab {
  id: number;
  label: string;
  icon: string;
  url: string;
  active: boolean;
}

/* TABS */
export const tabs: Tab[] = [
  { id: 1, label: 'View Speeches', icon: 'eye', url: 'view-speech', active: false },
  { id: 2, label: 'Submit a Speech', icon: 'edit', url: 'submit-speech', active: false },
  { id: 3, label: 'Search Speeches', icon: 'search', url: 'search-speech', active: false },
];

/* SPEECHES */
export const speeches: Speech[] = [
  {
    id: 1,
    title: 'Speech 1',
    content: 'This is Speech 1',
    author: 'Mark Dave',
    keywords: 'romance, comedy',
    date: new Date('12/07/2018')
  },
  {
    id: 2,
    title: 'Speech 2',
    content: 'This is Speech 2',
    author: 'John Doe',
    keywords: 'politics',
    date: new Date('12/08/2018')
  },
  {
    id: 3,
    title: 'Speech 3',
    content: 'This is Speech 3',
    author: 'Todd Wheel',
    keywords: 'inspirational, motivation',
    date: new Date('12/08/2018')
  }
];

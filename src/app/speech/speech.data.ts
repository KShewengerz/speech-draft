import { Speech } from '@app/speech/models/speech.interface';


/**
 * A variable that contains a dummy Lorem Ipsum to be used as an initial content value for the speech's content.
 *
 * @type {string}
 */
const content: string = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur
`;

/**
 * A variable that contains a dummy list of speeches. This data will be used on iterating an initial speech list across the speech tabs
 *
 * @type {Speech[]}
 */
export const speeches: Speech[] = [
  {
    id: 1,
    title: 'Speech 1',
    content,
    author: 'Mark Dave',
    keywords: 'romance, comedy',
    date: new Date('12/07/2018')
  },
  {
    id: 2,
    title: 'Speech 2',
    content,
    author: 'John Doe',
    keywords: 'politics',
    date: new Date('12/08/2018')
  },
  {
    id: 3,
    title: 'Speech 3',
    content,
    author: 'Todd Wheel',
    keywords: 'inspirational, motivation',
    date: new Date('12/08/2018')
  }
];

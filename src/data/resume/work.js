/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Pandit Deendayal Energy University',
    position: 'Research Intern',
    // url: 'https://promptfoo.dev',
    startDate: '2024-06-01',
    endDate: '2024-08-02',
    summary: 'Handwritten Multilingual Script Identification',
    highlights: [
      'Conducted research on handwritten multilingual script identification using CNN and Haar wavelets,developed CNN models for feature extraction and classification, and achieving 90% accuracy.',
    ],
  },
];

export default work;

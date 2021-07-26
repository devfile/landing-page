import gettingStartedPage from '@components/starting/gettingStartedPage';
import etcPage from '@components/starting/etcPage';
import somethingPage from '@components/starting/somethingPage';
import devfilesPage from '@components/starting/devfilesPage';

function StartingNavList() {
  return [
    [
      'About devfiles',
      {
        'What is a devfile': devfilesPage,
        'etc.': etcPage,
      },
    ],
    [
      'Develop with devfiles',
      {
        'Getting started': gettingStartedPage,
        'Or something': somethingPage,
        'etc.': etcPage,
      },
    ],
    ['Customizing a devfile', { 'etc.': etcPage }],
    ['Setting up a registry', { 'etc.': etcPage }],
    ['Tools provider', { 'etc.': etcPage }],
  ];
}

export default StartingNavList;

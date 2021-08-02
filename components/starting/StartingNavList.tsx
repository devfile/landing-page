import appDevfilesPage from '@components/starting/appDevfilesPage';
import appStartingPage from '@components/starting/appStartingPage';
import techDevfilesPage from '@components/starting/techDevfilesPage';
import techStartingPage from '@components/starting/techStartingPage';
import enterpriseDevfilesPage from '@components/starting/enterpriseDevfilesPage';
import enterpriseStartingPage from '@components/starting/enterpriseStartingPage';
import registryDevfilesPage from '@components/starting/registryDevfilesPage';
import registryStartingPage from '@components/starting/registryStartingPage';

function StartingNavList() {
  return [
    [
      'Application Developer',
      {
        'Why devfiles': appDevfilesPage,
        'Getting started': appStartingPage,
      },
    ],
    [
      'Technology and Tools Builders',
      {
        'Why devfiles': techDevfilesPage,
        'Getting started': techStartingPage,
      },
    ],
    [
      'Enterprise Architect and Runtime Provider',
      {
        'Why devfiles': enterpriseDevfilesPage,
        'Getting started': enterpriseStartingPage,
      },
    ],
    [
      'Registry Administrator',
      {
        'Why devfiles': registryDevfilesPage,
        'Getting started': registryStartingPage,
      },
    ],
  ];
}

export default StartingNavList;

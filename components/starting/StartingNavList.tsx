import { PropsWithChildren } from 'react';

function StartingNavList(props: PropsWithChildren<{ [key: string]: any }>) {
  return [
    [
      'Application Developer',
      {
        'Why devfiles': props.appDevfiles,
        'Getting started': props.appStarting,
      },
    ],
    [
      'Technology and Tools Builders',
      {
        'Why devfiles': props.techDevfiles,
        'Getting started': props.techStarting,
      },
    ],
    [
      'Enterprise Architect and Runtime Provider',
      {
        'Why devfiles': props.enterpriseDevfiles,
        'Getting started': props.enterpriseStarting,
      },
    ],
    [
      'Registry Administrator',
      {
        'Why devfiles': props.registryDevfiles,
        'Getting started': props.registryStarting,
      },
    ],
  ];
}

export default StartingNavList;

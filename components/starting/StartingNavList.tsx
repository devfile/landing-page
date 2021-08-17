import { PropsWithChildren } from 'react';

const StartingNavList = (
  props: PropsWithChildren<{ [key: string]: string }>
): (string | { [key: string]: string })[][] => [
  [
    'Application Developer',
    {
      'Why devfiles': props.appDevfiles,
      'Getting started': props.appStarting
    }
  ],
  [
    'Technology and Tools Builders',
    {
      'Why devfiles': props.techDevfiles,
      'Getting started': props.techStarting
    }
  ],
  [
    'Enterprise Architect and Runtime Provider',
    {
      'Why devfiles': props.enterpriseDevfiles,
      'Getting started': props.enterpriseStarting
    }
  ],
  [
    'Registry Administrator',
    {
      'Why devfiles': props.registryDevfiles,
      'Getting started': props.registryStarting
    }
  ]
];

export default StartingNavList;

declare module 'custom-types' {
  export interface TitleDescriptionList {
    [key: string]: string;
  }

  export interface Link {
    name: string;
    link: string;
  }

  export type Color = 'lighter' | 'light' | 'dark' | 'darker';

  export interface ColorMap {
    name: Color;
    value: string;
  }

  export interface Transition {
    fill: Color;
    backgroundColor: Color;
    flipX?: boolean;
    flipY?: boolean;
  }

  export interface LayoutText {
    title: string;
    bannerTitle: string;
    bannerBody: string;
    headerLinks: Link[];
    footerLinks: Link[];
    contributorLinks: Link[];
  }

  export interface TextContainer {
    title: string;
    body: string;
  }

  export interface MainPageText {
    WhyDevfiles: TextContainer;
    ValuePropositions: {
      title?: string;
      body?: string;
      items: TextContainer[];
    };
    KeyFeatures: {
      title?: string;
      body?: string;
      items: TextContainer[];
    };
  }
}

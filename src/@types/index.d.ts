declare module 'custom-types' {
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
    image?: string;
  }

  export interface TextContainerArr {
    title?: string;
    body?: string;
    items: TextContainer[];
  }

  export interface MainPageText {
    WhyDevfiles: TextContainer;
    ValuePropositions: TextContainerArr;
    KeyFeatures: TextContainerArr;
  }

  export interface FolderTree {
    header: string;
    subHeaders: string[];
    folderTree: FolderTree[];
  }

  export interface MDFile {
    header: string;
    files: {
      subHeader: string;
      html: string;
    }[];
    directories: MDFile[];
  }

  export interface WindowDimensions {
    width: number | null;
    height: number | null;
  }

  export interface SelectedItem {
    groupId: string | number;
    itemId: string | number;
    to: string;
    event: React.FormEvent<HTMLInputElement>;
  }

  export interface PageElem {
    header: string;
    subHeader: string;
    html: string;
  }

  export interface PublicRuntimeConfig {
    analyticsWriteKey: string;
  }

  export interface CurrentPageAction {
    payload: Omit<PageElem, 'html'>;
  }

  export interface CurrentPageState {
    currentPage: PageElem;
    mdFiles: MDFile[];
  }
}

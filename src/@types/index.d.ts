declare module 'custom-types' {
  export interface DefaultProps {
    analytics?: import('@segment/analytics-next').Analytics;
  }

  export interface Link {
    name: string;
    link: string;
  }

  export type Color = 'lighter' | 'light' | 'dark' | 'darker';

  export interface ColorStyle {
    name: Color;
    value: string;
  }

  export interface Transition {
    fill: Color;
    backgroundColor: Color;
    flipX?: boolean;
    flipY?: boolean;
  }

  export interface HeaderAndFooterLinks {
    title: string;
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

  export interface FolderTreeChildBase {
    type: import('@src/enums').FSTypes;
    container: string | FolderTree;
  }

  export interface FTCFile extends FolderTreeChildBase {
    type: import('@src/enums').FSTypes.FILE;
    container: string;
  }

  export interface FTCDirectory extends FolderTreeChildBase {
    type: import('@src/enums').FSTypes.DIRECTORY;
    container: FolderTree;
  }

  export type FolderTreeChild = FTCFile | FTCDirectory;

  export interface FolderTree {
    header: string;
    children: FolderTreeChild[];
  }

  export interface HtmlContainer {
    subHeader: string;
    html: string;
  }
  export interface MarkupFileChildBase {
    type: import('@src/enums').FSTypes;
    container: HtmlContainer | MarkupFile;
  }

  export interface MFCFile extends MarkupFileChildBase {
    type: import('@src/enums').FSTypes.FILE;
    container: HtmlContainer;
  }

  export interface MFCDirectory extends MarkupFileChildBase {
    type: import('@src/enums').FSTypes.DIRECTORY;
    container: MarkupFile;
  }

  export type MarkupFileChild = MFCFile | MFCDirectory;

  export interface MarkupFile {
    header: string;
    children: MarkupFileChild[];
    html: string;
  }
  export interface WindowDimensions {
    width: number | undefined;
    height: number | undefined;
  }

  export interface SelectedItem {
    groupId: string | number;
    itemId: string | number;
    to: string;
    event: React.FormEvent<HTMLInputElement>;
  }

  export interface GetConfig {
    serverRuntimeConfig: unknown;
    publicRuntimeConfig: PublicRuntimeConfig;
  }

  export interface PublicRuntimeConfig {
    analyticsWriteKey: string;
    segmentClientId: string;
  }

  export interface HtmlActionBase {
    type: import('@src/enums').HtmlActionKind;
    payload: {
      headings?: Heading[];
      html?: string;
    };
  }

  export interface HAFindHtml {
    type: import('@src/enums').HtmlActionKind.FIND_HTML;
    payload: {
      headings: Heading[];
    };
  }

  export interface HASetHtml {
    type: import('@src/enums').HtmlActionKind.SET_HTML;
    payload: {
      html: string;
    };
  }

  export type HtmlAction = HAFindHtml | HASetHtml;

  export interface HtmlState {
    html: string;
    markupFiles: MarkupFile[];
  }

  export interface Heading {
    header: string;
    subHeader: string;
  }

  export type UseHtml = [HtmlState, React.Dispatch<HtmlAction>];
}

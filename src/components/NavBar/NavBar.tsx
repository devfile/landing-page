import { Disclosure } from '@headlessui/react';
import type { HtmlAction, MarkupFile, MarkupFileChild, Heading, DefaultProps } from 'custom-types';
import { HtmlActionKind, FSTypes } from '@src/enums';
import { createAnchor } from '@src/util/client';
import styles from './NavBar.module.css';

export interface NavBarHeaderProps extends DefaultProps {
  markupFiles: MarkupFile[];
  htmlDispatch: React.Dispatch<HtmlAction>;
  isHeader?: boolean;
}

export interface NavBarProps extends DefaultProps {
  markupFile: MarkupFile;
  htmlDispatch: React.Dispatch<HtmlAction>;
  headings?: Heading[];
}

export interface NavBarPanelProps extends DefaultProps {
  header: string;
  markupFileChild: MarkupFileChild;
  headings: Heading[];
  htmlDispatch: React.Dispatch<HtmlAction>;
}

export interface NavBarButtonProps extends DefaultProps {
  title: string;
  html: string;
  htmlDispatch: React.Dispatch<HtmlAction>;
  headings: Heading[];
}

export const NavBar: React.FC<NavBarHeaderProps> = (props: NavBarHeaderProps) => {
  const { markupFiles, htmlDispatch, isHeader } = props;

  const navBarStyle = isHeader ? styles.navBarHeader : styles.navBarMain;

  return (
    <div className={navBarStyle}>
      <div className={styles.navBar}>
        {markupFiles.map((markupFile) => (
          <div key={markupFile.header}>
            <NavBarInner markupFile={markupFile} htmlDispatch={htmlDispatch} />
          </div>
        ))}
      </div>
    </div>
  );
};
NavBar.displayName = 'NavBar';

export const NavBarInner: React.FC<NavBarProps> = (props: NavBarProps) => {
  const { markupFile, htmlDispatch, headings } = props;

  // We need to do a deep copy here, hence why we cant do headings ?? []
  const newHeadings = headings ? [...headings] : [];

  if (markupFile.children.length > 0) {
    return (
      <Disclosure>
        <Disclosure.Button className={styles.disclosureButton}>
          <span className={styles.navBarSpan}>{markupFile.header}</span>
        </Disclosure.Button>
        <Disclosure.Panel>
          <div className={styles.disclosurePanel}>
            {markupFile.html && (
              <NavBarButton
                title={markupFile.header}
                html={markupFile.html}
                htmlDispatch={htmlDispatch}
                headings={[...newHeadings, { header: markupFile.header, subHeader: '' }]}
              />
            )}
            {markupFile.children.map((markupFileChild, index) => (
              <NavBarPanel
                // No potential unique value
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                markupFileChild={markupFileChild}
                header={markupFile.header}
                htmlDispatch={htmlDispatch}
                headings={newHeadings}
              />
            ))}
          </div>
        </Disclosure.Panel>
      </Disclosure>
    );
  }

  return (
    <NavBarButton
      title={markupFile.header}
      html={markupFile.html}
      htmlDispatch={htmlDispatch}
      headings={[{ header: markupFile.header, subHeader: '' }]}
    />
  );
};
NavBarInner.displayName = 'NavBarInner';

export const NavBarPanel: React.FC<NavBarPanelProps> = (props: NavBarPanelProps) => {
  const { header, markupFileChild, htmlDispatch, headings } = props;

  // We need to do a deep copy here
  const newHeadings = [...headings];

  if (markupFileChild.type === FSTypes.FILE) {
    const { container } = markupFileChild;
    newHeadings.push({ header, subHeader: container.subHeader });

    return (
      <NavBarButton
        title={container.subHeader}
        html={container.html}
        htmlDispatch={htmlDispatch}
        headings={newHeadings}
      />
    );
  }

  if (markupFileChild.type === FSTypes.DIRECTORY) {
    const { container } = markupFileChild;

    newHeadings.push({
      header,
      subHeader: container.header,
    });

    return <NavBarInner markupFile={container} htmlDispatch={htmlDispatch} />;
  }

  // Required so the return type is non-null
  // In the future, return undefined because React will not render undefined components
  // We dont return null here because undefined is preferred over null
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <></>;
};
NavBarPanel.displayName = 'NavBarPanel';

export const NavBarButton: React.FC<NavBarButtonProps> = (props: NavBarButtonProps) => {
  const { title, html, htmlDispatch, headings } = props;

  const onClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    e.stopPropagation();
    htmlDispatch({ type: HtmlActionKind.SET_HTML, payload: { html } });
  };

  return (
    <a
      className={styles.navBarButton}
      href={createAnchor(headings)}
      onClick={(e): void => onClick(e)}
    >
      <span className={styles.navBarSpan}>{title}</span>
    </a>
  );
};
NavBarButton.displayName = 'NavBarButton';

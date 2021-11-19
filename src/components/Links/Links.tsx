import type { Link as LinkType, DefaultProps } from 'custom-types';
import { Text, TextContent } from '@patternfly/react-core';
import Link from 'next/link';
import { findStyle, mergeClassNames } from '@src/util/client';
import styles from './Links.module.css';

export type LinkStyles = 'default' | 'dark' | 'footer';

export interface LinksProps extends DefaultProps {
  links: LinkType[];
  linkStyle?: LinkStyles;
}

const linkStyles: Record<LinkStyles, string> = {
  default: styles.lightText,
  dark: styles.darkText,
  footer: styles.blueText,
};

export const Links: React.FC<LinksProps> = (props: LinksProps) => {
  const { links, linkStyle } = props;

  return (
    <>
      {links.map(({ name, link }) => (
        <div key={name}>
          {link.charAt(0) === '/' ? (
            <Link href={link}>
              <a
                className={mergeClassNames(
                  linkStyle === 'footer' ? styles.footerLink : styles.link,
                )}
              >
                <TextContent>
                  <Text className={findStyle(linkStyles, linkStyle, 'default')}>{name}</Text>
                </TextContent>
              </a>
            </Link>
          ) : (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className={mergeClassNames(linkStyle === 'footer' ? styles.footerLink : styles.link)}
            >
              <TextContent>
                <Text className={findStyle(linkStyles, linkStyle, 'default')}>{name}</Text>
              </TextContent>
            </a>
          )}
        </div>
      ))}
    </>
  );
};
Links.displayName = 'Links';

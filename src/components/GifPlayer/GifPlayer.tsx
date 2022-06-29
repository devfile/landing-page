import React from 'react';
import { Card } from '@patternfly/react-core';
import styles from './GifPlayer.module.css';

export interface GifPlayerProps
  extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  src: string;

  className?: string;

  alt?: string;
}

export const GifPlayer: React.FC<GifPlayerProps> = ({
  src,
  className = '',
  alt = 'loading...',
  ...props
}: GifPlayerProps) => (
  <Card className={styles.container}>
    <img {...props} className={className} src={src} alt={alt} />
  </Card>
);

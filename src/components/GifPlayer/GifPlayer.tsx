import * as React from 'react';

export interface GifPlayerProps
  extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  src?: string;

  className?: string;

  alt?: string;
}

export const GifPlayer: React.FC<GifPlayerProps> = ({
  className = '',
  src = '',
  alt = 'loading...',
  ...props
}: GifPlayerProps) => {
  return (
    <>
      <img {...props} className={className} src={src} alt={alt} />
    </>
  );
};

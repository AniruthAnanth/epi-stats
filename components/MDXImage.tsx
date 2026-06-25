import Image from 'next/image';

export default function MDXImage({ src, alt, ...props }: React.ComponentProps<'img'>) {
  const basePath = process.env.NODE_ENV === 'production' ? '/epit-stats' : '';
  const imageSrc = typeof src === 'string' && src.startsWith('/') ? `${basePath}${src}` : src;

  return (
    <img
      src={imageSrc}
      alt={alt || ''}
      {...props}
    />
  );
}

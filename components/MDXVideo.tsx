'use client';

import React from 'react';

export default function MDXVideo({ children, ...props }: React.ComponentProps<'video'>) {
  const basePath = process.env.NODE_ENV === 'production' ? '/epit-stats' : '';

  // Clone children (source elements) and update their src
  const updatedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === 'source') {
      const childProps = child.props as any;
      const src = childProps.src;
      const updatedSrc = typeof src === 'string' && src.startsWith('/') ? `${basePath}${src}` : src;
      return React.cloneElement(child as React.ReactElement<any>, { src: updatedSrc });
    }
    return child;
  });

  return <video {...props}>{updatedChildren}</video>;
}

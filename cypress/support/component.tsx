import './commands';
import * as ImageComponent from 'next/image';
import '@/styles/globals.css';

const OriginalImageComponent = ImageComponent.default;

Object.defineProperty(ImageComponent, 'default', {
  configurable: true,
  value: (props: any) => {
    return <OriginalImageComponent {...props} unoptimized />;
  },
});

import { LinkProps } from './link-props';

export type Icon =
  | '/book.svg'
  | '/facebook.svg'
  | '/instagram.svg'
  | '/linkedin.svg';

export interface IconProps {
  color: 'black' | 'white';
}

export type IconLinkProps = IconProps & LinkProps;

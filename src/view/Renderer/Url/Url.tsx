import { FunctionComponent } from 'react';

type Props = {
  hash: string;
}

export const Url: FunctionComponent<Props> = ({ hash }) => {
  window.location.hash = `|${hash}`;

  return null;
};

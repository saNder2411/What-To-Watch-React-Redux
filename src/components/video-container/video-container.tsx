import * as React from 'react';

type Props = {
  children: React.ReactNode;
}

const VideoContainer: React.FC<Props> = ({children}: Props) => {

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

export default VideoContainer;

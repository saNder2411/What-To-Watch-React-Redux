import * as React from 'react';
import {PreviewCardData, HandleWithEvt} from '../../types';


type Props = {
  previewCardData: PreviewCardData;
  previewCardHandlers: Array<HandleWithEvt>;
  mouseEnterCardId: number;
}

type State = {
  isPlaying: boolean;
}

const withPreviewCardState = (Component) => {

  class WithPreviewCardState extends React.PureComponent<Props, State> {

    constructor(props) {
      super(props);

      this.state = {isPlaying: false};

      this.handlePreviewCardMouseEnter = this.handlePreviewCardMouseEnter.bind(this);
      this.handlePreviewCardMouseLeave = this.handlePreviewCardMouseLeave.bind(this);
    }

    private handlePreviewCardMouseEnter() {

      this.setState({isPlaying: true});
    }

    private handlePreviewCardMouseLeave() {

      this.setState({isPlaying: false});
    }

    render() {
      const {previewCardData, previewCardHandlers} = this.props;
      const {isPlaying} = this.state;

      return (
        <Component
          isPlaying={isPlaying}
          previewCardData={previewCardData}
          previewCardHandlers={[...previewCardHandlers, this.handlePreviewCardMouseEnter, this.handlePreviewCardMouseLeave]}
        />
      );
    }
  }

  return WithPreviewCardState;
};

export default withPreviewCardState;

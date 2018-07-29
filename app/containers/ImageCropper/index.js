/**
 *
 * ImageCropper
 *
 */

 import React from 'react';
 import PropTypes from 'prop-types';
 import { connect } from 'react-redux';
 import { FormattedMessage } from 'react-intl';
 import { createStructuredSelector } from 'reselect';
 import { compose } from 'redux';
 import Cropper from 'react-cropper';
 import styled from 'styled-components';

 import 'cropperjs/dist/cropper.css';
 import './style.css';
 import injectSaga from 'utils/injectSaga';
 import injectReducer from 'utils/injectReducer';
 import makeSelectImageCropper from './selectors';
 import reducer from './reducer';
 import saga from './saga';
 import messages from './messages';

 const Button = styled.button`
 background: palevioletred;
 border-radius: 3px;
 border: none;
 color: white;
 `;
 const src = 'http://wallvie.com/wp-content/uploads/2017/02/free-fantasy-desktop-wallpaper-backgrounds-high-quality-on-laptop-.jpg';

 /* eslint-disable react/prefer-stateless-function */
 export class ImageCropper extends React.PureComponent {
     constructor(props) {
         super(props);
         this.state = {
             src,
             cropResult: null,
         };
         this.cropImage = this.cropImage.bind(this);
         this.onChange = this.onChange.bind(this);
         this.useDefaultImage = this.useDefaultImage.bind(this);
     }

     onChange(e) {
         e.preventDefault();
         let files;
         if (e.dataTransfer) {
             files = e.dataTransfer.files;
         } else if (e.target) {
             files = e.target.files;
         }
         const reader = new FileReader();
         reader.onload = () => {
             this.setState({ src: reader.result });
         };
         reader.readAsDataURL(files[0]);
     }

     cropImage() {
         if (typeof this.cropper.getCroppedCanvas() === 'undefined') {
             return;
         }
         this.setState({
             cropResult: this.cropper.getCroppedCanvas().toDataURL(),
         });
     }

     useDefaultImage() {
         this.setState({ src });
     }

     render() {
         return (
             <div>
             <div style={{ width: '100%' }}>
             <br />
             <input type="file" onChange={this.onChange} />
             <Button onClick={this.useDefaultImage}>Use default img</Button>
             <Button onClick={this.cropImage} style={{ float: 'right' }}>
             Crop Image
             </Button>
             <br />
             <br />
             <Cropper
             style={{ height: 400, width: '100%' }}
             preview=".img-preview"
             guides={true}
             src={this.state.src}
             ref={cropper => { this.cropper = cropper; }}
             />
             </div>
             <div style={{ height: '40%' }}>
             <div className="box" style={{ width: '50%', float: 'right' }}>
             <h1>Preview</h1>
             <div className="img-preview" style={{ width: '100%', float: 'left', height: 300 }} />
             </div>
             <div className="box" style={{ width: '50%', float: 'right' }}>
             <h1>
             <span>Crop</span>

             </h1>
             <img style={{ width: '100%' }} src={this.state.cropResult} alt="cropped image" />
             </div>
             </div>
             <br style={{ clear: 'both' }} />
             </div>
             );
     }
 }

 ImageCropper.propTypes = {
     dispatch: PropTypes.func.isRequired,
 };

 const mapStateToProps = createStructuredSelector({
     imagecropper: makeSelectImageCropper(),
 });

 function mapDispatchToProps(dispatch) {
     return {
         dispatch,
     };
 }

 const withConnect = connect(
     mapStateToProps,
     mapDispatchToProps,
     );

 const withReducer = injectReducer({ key: 'imageCropper', reducer });
 const withSaga = injectSaga({ key: 'imageCropper', saga });

 export default compose(
     withReducer,
     withSaga,
     withConnect,
     )(ImageCropper);

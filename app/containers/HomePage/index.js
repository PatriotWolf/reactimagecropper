/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Cropper from 'react-cropper';
import styled from 'styled-components';

import 'cropperjs/dist/cropper.css';
import './style.css';
import messages from './messages';

const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
`;
const src = "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg";
/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {

  render() {
    return (
      <div>
        this is just dummy page
      </div>
    );
  }
}

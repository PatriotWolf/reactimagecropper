import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the imageCropper state domain
 */

const selectImageCropperDomain = state =>
  state.get('imageCropper', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ImageCropper
 */

const makeSelectImageCropper = () =>
  createSelector(selectImageCropperDomain, substate => substate.toJS());

export default makeSelectImageCropper;
export { selectImageCropperDomain };

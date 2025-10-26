import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { codeAction } from '../store/code/codeSlice';
import { toastAction } from '../store/toast/toastSlice';

const allActions = {
  ...codeAction,
  ...toastAction,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};

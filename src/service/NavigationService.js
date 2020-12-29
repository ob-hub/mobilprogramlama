import * as React from 'react';
import { StackActions } from '@react-navigation/native';

export const navigationRef = React.createRef();

function navigate(name, params) {
   navigationRef.current?.navigate(name, params);
}

function push(name, params = {}) {
   const push = StackActions.push(name, { ...params });
   navigationRef.current?.dispatch(push);
}

function goBack() {
   navigationRef.current?.goBack();
}

export default {
   navigate,
   goBack,
   push
};

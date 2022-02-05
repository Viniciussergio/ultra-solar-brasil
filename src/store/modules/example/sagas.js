import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

const requisicao = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 600);
  });

function* exampleRequest() {
  try {
    yield call(requisicao);
    toast.success('Sucesso');
    yield put(actions.buttonClickedSuccess());
  } catch {
    toast.error('Erro');
    yield put(actions.buttonClickedFailure());
  }
}

export default all([takeLatest(types.BUTTON_CLICKED_REQUEST, exampleRequest)]);

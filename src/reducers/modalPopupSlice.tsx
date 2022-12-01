import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  showModalCreateColumn: false,
  showModalDeleteColumn: false,
  showModalCreateBoard: false,
  showModalUpdateBoard: false,
  showModalDeleteBoard: false,
};

const modalPopupSlice = createSlice({
  name: 'modalPopup',
  initialState,
  reducers: {
    setShowModalCreateColumn(
      state: { showModalCreateColumn: boolean },
      { payload }: PayloadAction<boolean>,
    ) {
      state.showModalCreateColumn = payload;
    },
    setShowModalDeleteColumn(
      state: { showModalDeleteColumn: boolean },
      { payload }: PayloadAction<boolean>,
    ) {
      state.showModalDeleteColumn = payload;
    },
    setShowModalCreateBoard(
      state: { showModalCreateBoard: boolean },
      { payload }: PayloadAction<boolean>,
    ) {
      state.showModalCreateBoard = payload;
    },
    setShowModalUpdateBoard(
      state: { showModalUpdateBoard: boolean },
      { payload }: PayloadAction<boolean>,
    ) {
      state.showModalUpdateBoard = payload;
    },
    setShowModalDeleteBoard(
      state: { showModalDeleteBoard: boolean },
      { payload }: PayloadAction<boolean>,
    ) {
      state.showModalDeleteBoard = payload;
    },
  },
});
export default modalPopupSlice.reducer;
export const {
  setShowModalCreateColumn,
  setShowModalDeleteColumn,
  setShowModalCreateBoard,
  setShowModalUpdateBoard,
  setShowModalDeleteBoard,
} = modalPopupSlice.actions;
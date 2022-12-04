export interface ColumnType {
  _id: string;
  title: string;
  order: number;
  boardId: string;
}

export interface ColumnState {
  columnsArr: ColumnType[];
  isLoading: boolean;
  hasError: boolean;
  currentColumnId: string;
  message: string;
}

export interface ModalPopupState {
  showModalCreateColumn: boolean;
  showModalDeleteColumn: boolean;
  showModalCreateBoard: boolean;
  showModalUpdateBoard: boolean;
  showModalDeleteBoard: boolean;
}

export interface BoardType {
  _id: string;
  title: string;
  description: string;
  owner: string;
  users: [string];
}

export interface BoardState {
  boardsArr: BoardType[];
  isLoading: boolean;
  hasError: boolean;
  message: string;
  currentBoardId: string;
  currentBoardTitle: string;
  currentBoardDescription: string;
}

export interface AuthState {
  isAuth: boolean;
  isLoading: boolean;
  hasError: boolean;
  message: string;
}

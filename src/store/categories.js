export const Types = {
  FECTH: "categories/FETCH",
  ADD: "categories/ADD",
  EDIT: "categories/EDIT",
  REMOVE: "categories/REMOVE"
};

const INITIAL_STATE = [];

export default function categories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.FETCH:
      return [...state, { id: 1, title: "New Category" }];
    case Types.ADD:
      return [...state, { id: 1, title: "New Category" }];
    case Types.EDIT:
      return [...state, { id: 1, title: "New Category" }];
    case Types.REMOVE:
      return [...state, { id: 1, title: "New Category" }];
    default:
      return state;
  }
}

export const Creators = {
  add: category => ({
    type: Types.ADD,
    payload: {}
  }),

  edit: id => ({
    type: Types.EDIT,
    payload: {}
  }),

  remove: category => ({
    type: Types.REMOVE,
    payload: {}
  }),

  fetch: () => ({
    type: Types.FETCH,
    payload: {}
  })
};

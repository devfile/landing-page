import type { HtmlState, HtmlAction } from 'custom-types';
import { findHtml } from '@src/util/client';
import { HtmlActionKind } from '@src/enums';

export const htmlReducer = (state: HtmlState, action: HtmlAction): HtmlState => {
  // You must create a new instance of HtmlState to trigger a rerender
  const newState: HtmlState = { ...state };

  switch (action.type) {
    case HtmlActionKind.FIND_HTML:
      newState.html = findHtml(action.payload.headings, state.markupFiles) || state.html;
      return newState;

    case HtmlActionKind.SET_HTML:
      newState.html = action.payload.html;
      return newState;

    default:
      return state;
  }
};

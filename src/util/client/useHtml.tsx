import type { HtmlState, HtmlAction, MarkupFile, UseHtml } from 'custom-types';
import { htmlReducer, findFirstHtml, copyCodeSnippet, parseAnchor } from '@src/util/client';
import { useReducer, useEffect } from 'react';
import { useRouter } from 'next/router';
import { HtmlActionKind } from '@src/enums';

export const useHtml = (markupFiles: MarkupFile[]): UseHtml => {
  const router = useRouter();
  const [htmlState, htmlDispatch] = useReducer<React.Reducer<HtmlState, HtmlAction>>(htmlReducer, {
    html: findFirstHtml(markupFiles),
    markupFiles,
  });

  useEffect(() => {
    copyCodeSnippet();
  }, [htmlState]);

  useEffect(() => {
    const headings = parseAnchor(router.asPath);

    if (headings.length > 0) {
      htmlDispatch({ type: HtmlActionKind.FIND_HTML, payload: { headings } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [htmlState, htmlDispatch];
};

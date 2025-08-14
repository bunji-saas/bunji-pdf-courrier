import { getDocument, PDFPageProxy } from 'pdfjs-dist/legacy/build/pdf.mjs';
import { TextItem } from 'pdfjs-dist/types/src/display/api';

// src: https://gitlab.com/autokent/pdf-parse/-/blob/726214b1f055c8cb6d9421faf16ede0402e3a1d7/lib/pdf-parse.js#L1
async function getTextPage(pageData: PDFPageProxy) {
  const textContent = await pageData.getTextContent();
  let lastY;
  let text = '';
  //https://github.com/mozilla/pdf.js/issues/8963
  //https://github.com/mozilla/pdf.js/issues/2140
  //https://gist.github.com/hubgit/600ec0c224481e910d2a0f883a7b98e3
  //https://gist.github.com/hubgit/600ec0c224481e910d2a0f883a7b98e3
  for (let item of textContent.items) {
    if (lastY == (item as TextItem).transform[5] || !lastY) {
      text += (item as TextItem).str;
    } else {
      text += '\n' + (item as TextItem).str;
    }
    lastY = (item as TextItem).transform[5];
  }
  return text;
}

export async function parsePDF(
  dataBuffer: ArrayBufferLike,
): Promise<{ numPages: number; text: string }> {
  let ret = {
    numPages: 0,
    text: '',
  };

  let doc = await getDocument({
    data: dataBuffer as ArrayBuffer,
    // to remove warning : Ensure that the `standardFontDataUrl` API parameter is provided.
    // src : https://github.com/mozilla/pdf.js/issues/4244#issuecomment-1479534301
    useSystemFonts: true,
  }).promise;
  ret.numPages = doc.numPages;
  ret.text = '';

  for (let i = 1; i <= doc.numPages; i++) {
    let pageText = await getTextPage(await doc.getPage(i));
    ret.text += `\n\n${pageText}`;
  }

  await doc.destroy();

  return ret;
}

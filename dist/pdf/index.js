import React from 'react';
import { Document, Font } from '@react-pdf/renderer';
import LetterPage from './LetterPage';
Font.register({
    family: 'Roboto',
    fonts: [
        { src: '/fonts/Roboto-Regular.ttf' },
        { src: '/fonts/Roboto-Bold.ttf', fontWeight: 'bold' },
    ],
});
const MemoDoc = React.memo(Document);
const Pdf = ({ pdfs, agency, advSetting }) => {
    console.log({ pdfs });
    return (React.createElement(MemoDoc, null, pdfs.map((pdf, index) => (React.createElement(React.Fragment, { key: index },
        React.createElement(LetterPage, { pdf: pdf, agency: agency, advSetting: advSetting }))))));
};
export default Pdf;

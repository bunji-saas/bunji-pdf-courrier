import React from 'react'
import { Document, Font } from '@react-pdf/renderer'

import LetterPage from './LetterPage'
// import TransactionPage from './TransactionPage'
import { PdfProps } from './type'

Font.register({
  family: 'Roboto',
  fonts: [
    { src: '/fonts/Roboto-Regular.ttf' },
    { src: '/fonts/Roboto-Bold.ttf', fontWeight: 'bold' },
  ],
})

interface Props {
  agency: Agency
  advSetting: AdvSetting | null
  pdfs: PdfProps[]
}

const MemoDoc = React.memo(Document)

const Pdf = ({ pdfs, agency, advSetting }: Props) => {
  console.log({ pdfs })
  return (
    <MemoDoc>
      {pdfs.map((pdf, index) => (
        <React.Fragment key={index}>
          <LetterPage pdf={pdf} agency={agency} advSetting={advSetting} />
          {/* <TransactionPage agency={agency} /> */}
        </React.Fragment>
      ))}
    </MemoDoc>
  )
}

export default Pdf

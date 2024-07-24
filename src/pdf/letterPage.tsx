import React, { useMemo } from "react";
import Html from "react-pdf-html";
import { Page, Text, View, StyleSheet } from "@react-pdf/renderer";

import Footer from "./footer";
import { remplaceVariables, cleanText } from "../utils/remplace-variables";
import { createFullName, grey } from "../utils/tool";

const LetterPage = ({
  pdf,
  agency,
  advSetting,
}: {
  pdf: PdfProps;
  agency: Agency;
  advSetting: AdvSetting | null;
}) => {
  const useStyles = () =>
    useMemo(
      () =>
        StyleSheet.create({
          col4: { width: "25%" },
          col8: { width: "75%" },
          col6: { width: "50%" },
          mb4: { marginBottom: 4 },
          mb8: { marginBottom: 8 },
          mb40: { marginBottom: 40 },
          h3: { fontSize: 16, fontWeight: 700 },
          h4: { fontSize: 13, fontWeight: 700 },
          body1: { fontSize: 10, zIndex: 1 },
          body2: { fontSize: 9 },
          subtitle1: { fontSize: 10, fontWeight: 700 },
          subtitle2: { fontSize: 9, fontWeight: 700 },
          alignRight: { textAlign: "right" },
          page: {
            fontSize: 9,
            lineHeight: 1.6,
            fontFamily: "Helvetica",
            backgroundColor: "#FFFFFF",
            padding: "40px 40px 120px 40px",
          },
          // https://www.mysendingbox.fr/guide/zones-decrasement/
          addressBox: {
            position: "absolute",
            top: 112,
            height: 102,
            width: 276,
            textAlign: "left",
            lineHeight: 1.6,
            right: 28,
            backgroundColor: grey[200],

            // ...(variant === 'preview' && { backgroundColor: grey[200] }),
            borderRadius: "8px",
            zIndex: 0,
          },
          address: {
            paddingTop: 11,
            paddingBottom: 12,
            paddingRight: 11,
            paddingLeft: 28,
            position: "absolute",
            bottom: 0,
            left: 0,
          },

          footer: {
            left: 0,
            right: 0,
            bottom: 0,
            paddingTop: 12,
            paddingBottom: 12,
            paddingLeft: 24,
            paddingRight: 24,
            margin: "auto",
            borderTopWidth: 1,
            borderStyle: "solid",
            position: "absolute",
            borderColor: "#DFE3E8",
          },
          gridContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
          },
        }),
      []
    );

  const styles = useStyles();

  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.addressBox}>
        <View style={styles.address}>
          <Text>
            {createFullName(pdf.toCivility, pdf.toFirstName, pdf.toLastName)}
          </Text>
          <Text>{pdf.toAddressLine1}</Text>
          <Text>{pdf.toAddressLine2}</Text>
          <Text>
            {pdf.toZipCode} {pdf.toCity}
          </Text>
          <Text>{pdf.toCountry}</Text>
        </View>
      </View>
      <Html
        style={styles.body1}
        stylesheet={{
          p: { margin: 0, fontWeight: 400 },
          strong: { fontWeight: "bold" },
          ul: { margin: 0, padding: 0 },
          li: { margin: 0, padding: 0 },
          ".ql-align-right": { textAlign: "right" },
        }}
      >
        {pdf.content
          ? cleanText(remplaceVariables(pdf.content, pdf, agency, advSetting))
          : ""}
      </Html>
      <Footer agency={agency} advSetting={null} />
    </Page>
  );
};

export default LetterPage;

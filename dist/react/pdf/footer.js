import { Image, StyleSheet, Text, View } from '@react-pdf/renderer';
import React, { useMemo } from 'react';
const Footer = ({ advSetting }) => {
    const useStyles = () => useMemo(() => StyleSheet.create({
        col4: { width: '25%' },
        col8: { width: '75%' },
        col6: { width: '50%' },
        mb4: { marginBottom: 4 },
        mb8: { marginBottom: 8 },
        mb40: { marginBottom: 40 },
        h3: { fontSize: 16, fontWeight: 700 },
        h4: { fontSize: 13, fontWeight: 700 },
        body1: { fontSize: 10 },
        body2: { fontSize: 9 },
        subtitle1: { fontSize: 10, fontWeight: 700 },
        subtitle2: { fontSize: 9, fontWeight: 700 },
        alignRight: { textAlign: 'right' },
        page: {
            fontSize: 9,
            lineHeight: 1.6,
            fontFamily: 'Helvetica',
            backgroundColor: '#FFFFFF',
            padding: '40px 40px 120px 40px',
        },
        footer: {
            left: 0,
            right: 0,
            bottom: 0,
            paddingTop: 12,
            paddingBottom: 12,
            paddingLeft: 24,
            paddingRight: 24,
            margin: 'auto',
            borderTopWidth: 1,
            borderStyle: 'solid',
            position: 'absolute',
            borderColor: '#DFE3E8',
        },
        gridContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
    }), []);
    const styles = useStyles();
    return (React.createElement(View, { style: [styles.gridContainer, styles.footer], fixed: true },
        React.createElement(View, null, advSetting?.agencyLogo && (React.createElement(Image, { source: advSetting.agencyLogo, style: { height: 40, objectFit: 'scale-down' } }))),
        React.createElement(View, { style: [styles.col4, styles.alignRight] },
            React.createElement(Text, { style: styles.subtitle2 }, advSetting.agencyName),
            React.createElement(Text, null, advSetting.agencyAddress),
            React.createElement(Text, null,
                advSetting.agencyZipCode,
                " ",
                advSetting.agencyCity))));
};
export default Footer;

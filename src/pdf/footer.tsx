import React, { useMemo } from 'react';
import { View, Text, Image, StyleSheet } from '@react-pdf/renderer';
import { Agency, AdvSetting } from '../types';

export const getAdvSettingInfo = (agency: Agency, advSetting: AdvSetting | null) => {
  return {
    agencyName: advSetting?.agencyName || agency.name,
    agencyAddress: advSetting?.agencyAddress || agency.address,
    agencyZipCode: advSetting?.agencyZipCode || agency.zipCode,
    agencyCity: advSetting?.agencyCity || agency.city,
    agencyWebsite: advSetting?.agencyWebsite || agency.website,
    agencyLogo: advSetting?.agencyLogo || agency.logo,
    agencyColour: advSetting?.agencyColour || agency.colour,
    customAdvStartPages: advSetting?.customAdvStartPages || null,
    customAdvEndPages: advSetting?.customAdvEndPages || null,
    estimateLowText: advSetting?.estimateLowText || 'Estimation Basse',
    estimateHighText: advSetting?.estimateHighText || 'Estimation Haute',
  };
};

type Props = {
  agency: Agency;
  advSetting: AdvSetting | null;
};

const Footer = ({ agency, advSetting }: Props) => {
  const advSettingInfo = getAdvSettingInfo(agency, advSetting);
  const useStyles = () =>
    useMemo(
      () =>
        StyleSheet.create({
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
        }),
      [],
    );

  const styles = useStyles();

  return (
    <View style={[styles.gridContainer, styles.footer]} fixed>
      <View>
        {advSettingInfo?.agencyLogo && (
          <Image
            source={advSettingInfo.agencyLogo}
            style={{ height: 40, objectFit: 'scale-down' }}
          />
        )}
      </View>
      <View style={[styles.col4, styles.alignRight]}>
        <Text style={styles.subtitle2}>{advSettingInfo.agencyName}</Text>
        <Text>{advSettingInfo.agencyAddress}</Text>
        <Text>
          {advSettingInfo.agencyZipCode} {advSettingInfo.agencyCity}
        </Text>
      </View>
    </View>
  );
};

export default Footer;

import React from 'react'
import { useMemo } from 'react'
import { Page, Font, StyleSheet, View, Text } from '@react-pdf/renderer'

import { fCurr, fSqm, fMeters } from '../utils/format-number'
import { fMonthYearShort } from '../utils/format-dates'

import Footer from './Footer'

Font.register({
  family: 'Roboto',
  fonts: [
    { src: '/fonts/Roboto-Regular.ttf' },
    { src: '/fonts/Roboto-Bold.ttf', fontWeight: 'bold' },
  ],
})

const useStyles = () =>
  useMemo(
    () =>
      StyleSheet.create({
        mb40: { marginBottom: 40 },
        h1: { fontSize: 24, fontWeight: 'bold' },
        body1: { fontSize: 10 },
        body2: { fontSize: 9 },
        subtitle1: { fontSize: 10, fontWeight: 700 },
        subtitle2: { fontSize: 9, fontWeight: 700 },
        alignRight: { textAlign: 'right' },
        bold: { fontWeight: 'bold' },
        page: {
          fontSize: 9,
          lineHeight: 1.6,
          fontFamily: 'Roboto',
          backgroundColor: '#FFFFFF',
          padding: '40px 40px 120px 40px',
        },
        table: {
          display: 'flex',
          width: 'auto',
        },
        tableHead: {
          backgroundColor: 'rgb(230, 234, 238)',
          fontWeight: 600,
          fontSize: '12px',
          paddingTop: '6px',
        },

        tableRow: {
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderStyle: 'solid',
          borderColor: '#DFE3E8',
          display: 'flex',
          justifyContent: 'center', // Center horizontally
          alignItems: 'center',
          margin: '0px',
          padding: 0,
        },
        tableCell: {
          margin: '0px',
          padding: '6px 5px',
          height: '35px',
          display: 'flex',
          justifyContent: 'center', // Center horizontally
          alignItems: 'center',
        },

        tableCellLast: {
          flexDirection: 'row',
          borderStyle: 'solid',
          borderColor: '#000000',
          borderRightWidth: 2,
          borderLeftWidth: 2,
        },
        noBorder: {
          paddingTop: 8,
          paddingBottom: 0,
          borderBottomWidth: 0,
        },
        tableCellRowId: {
          width: '5%',
          textAlign: 'center',
        },
        tableCellDate: {
          width: '15%',
          textAlign: 'center',
        },
        tableCellAddress: {
          width: '50%',
          paddingRight: 16,
        },
        tableCellNumberCol: {
          width: '15%',
          textAlign: 'center',
        },
      }),
    [],
  )

type Props = {
  agency: Agency
  advSetting: AdvSetting
}

const items = [
  {
    id: 1,
    date: '2021-09-01',
    address: '34 rue legendre',
    city: 'Paris',
    zipCode: '75017',
    distance: 100,
    rooms: 2,
    surface: 48,
    landSurface: 200,
    price: 500000,
    priceSqm: 12000,
  },
  {
    id: 2,

    date: '2021-09-01',
    address: '34 rue legendre',
    city: 'Paris',
    zipCode: '75017',
    distance: 100,
    rooms: 2,
    surface: 48,
    landSurface: 200,
    price: 500000,
    priceSqm: 12000,
  },
  {
    id: 3,

    date: '2021-09-01',
    address: '34 rue legendre',
    city: 'Paris',
    zipCode: '75017',
    distance: 100,
    rooms: 2,
    surface: 48,
    landSurface: 200,
    price: 500000,
    priceSqm: 12000,
  },
  {
    id: 4,

    date: '2021-09-01',
    address: '34 rue legendre',
    city: 'Paris',
    zipCode: '75017',
    distance: 100,
    rooms: 2,
    surface: 48,
    landSurface: 200,
    price: 500000,
    priceSqm: 12000,
  },
]

const TransactionPage = ({ agency, advSetting }: Props) => {
  const styles = useStyles()

  return (
    <Page size="A4" style={styles.page}>
      <Text style={[styles.h1, styles.mb40]}>Transactions à proximité</Text>

      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHead]}>
          <View style={[styles.tableCell, styles.tableCellRowId]}>
            <Text style={styles.subtitle2}>#</Text>
          </View>
          <View style={[styles.tableCell, styles.tableCellDate]}>
            <Text style={styles.subtitle2}>Date</Text>
          </View>

          <View style={[styles.tableCell, styles.tableCellAddress]}>
            <Text style={styles.subtitle2}>Adresse</Text>
          </View>

          <View style={[styles.tableCell, styles.tableCellNumberCol]}>
            <Text style={styles.subtitle2}>Distance</Text>
          </View>

          <View style={[styles.tableCell, styles.tableCellNumberCol]}>
            <Text style={styles.subtitle2}>Pièces</Text>
          </View>

          <View style={[styles.tableCell, styles.tableCellNumberCol]}>
            <Text style={styles.subtitle2}>Surface</Text>
          </View>

          <View style={[styles.tableCell, styles.tableCellNumberCol]}>
            <Text style={styles.subtitle2}>Terrain</Text>
          </View>

          <View style={[styles.tableCell, styles.tableCellNumberCol]}>
            <Text style={styles.subtitle2}>Prix</Text>
          </View>

          <View style={[styles.tableCell, styles.tableCellNumberCol]}>
            <Text style={styles.subtitle2}>Prix m²</Text>
          </View>
        </View>

        <View>
          {items.map((item, index) => (
            <View style={styles.tableRow} key={item.id}>
              <View style={[styles.tableCell, styles.tableCellRowId]}>
                <Text>{index + 1}</Text>
              </View>

              <View style={[styles.tableCell, styles.tableCellDate]}>
                <Text>{fMonthYearShort(item.date)}</Text>
              </View>

              <View style={[styles.tableCell, styles.tableCellAddress]}>
                <Text style={styles.subtitle2}>{item.address}</Text>
                <Text>
                  {item.city} ({item.zipCode})
                </Text>
              </View>

              <View style={[styles.tableCell, styles.tableCellNumberCol]}>
                <Text>{fMeters(item.distance)}</Text>
              </View>

              <View style={[styles.tableCell, styles.tableCellNumberCol]}>
                <Text>{item.rooms}</Text>
              </View>

              <View style={[styles.tableCell, styles.tableCellNumberCol]}>
                <Text>{fSqm(item.surface)}</Text>
              </View>

              <View style={[styles.tableCell, styles.tableCellNumberCol]}>
                <Text>{fSqm(item.landSurface)}</Text>
              </View>

              <View style={[styles.tableCell, styles.tableCellNumberCol]}>
                <Text>{fCurr(item.price)}</Text>
              </View>
              <View
                style={[
                  styles.tableCell,
                  styles.tableCellNumberCol,
                  styles.bold,
                  styles.tableCellLast,
                ]}
              >
                <Text>{fCurr(item.priceSqm)}</Text>
              </View>
            </View>
          ))}

          <View style={[styles.tableRow, styles.noBorder]}>
            <View style={[styles.tableCell, styles.tableCellRowId]} />
            <View style={[styles.tableCell, styles.tableCellDate]} />
            <View style={[styles.tableCell, styles.tableCellAddress]} />
            <View style={[styles.tableCell, styles.tableCellNumberCol]} />
            <View style={[styles.tableCell, styles.tableCellNumberCol]} />
            <View style={[styles.tableCell, styles.tableCellNumberCol]} />
            <View style={[styles.tableCell, styles.tableCellNumberCol]}>
              <Text>Total</Text>
            </View>
            <View style={[styles.tableCellNumberCol, styles.bold]}>
              <Text>{fCurr(12000)}</Text>
            </View>
          </View>
        </View>
      </View>

      <Footer agency={agency} advSetting={advSetting} />
    </Page>
  )
}

export default TransactionPage

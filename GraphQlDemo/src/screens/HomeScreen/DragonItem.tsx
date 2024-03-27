import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {memo} from 'react';
import {Dragon} from '../../types';
import {useTranslation} from 'react-i18next';

const DragonItem = ({item}: {item: Dragon}) => {
  const {t} = useTranslation();
  return (
    <View style={styles.listItemContainer}>
      <View style={[styles.itemRowContainer]}>
        <View style={styles.itemAlignStart}>
          <Text style={styles.titleTextStyle}>{t('dragon.name')}</Text>
          <Text style={styles.valueTextStyle}>{item.name}</Text>
        </View>
        <View style={styles.itemAlignEnd}>
          <Text style={styles.titleTextStyle}>{t('dragon.diameter')}</Text>
          <Text style={styles.valueTextStyle}>{item.diameter.feet}</Text>
        </View>
      </View>

      <View style={[styles.itemRowContainer, styles.topMargin]}>
        <View style={styles.itemAlignStart}>
          <Text style={styles.titleTextStyle}>{t('dragon.firstFlight')}</Text>
          <Text style={styles.valueTextStyle}>{item.first_flight}</Text>
        </View>
        <View style={styles.itemAlignEnd}>
          <Text style={styles.titleTextStyle}>{t('dragon.payloadMass')}</Text>
          <Text style={styles.valueTextStyle}>
            {item.launch_payload_mass.lb}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default memo(DragonItem);

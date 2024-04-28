import {View, Text} from 'react-native';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ParamsList} from '../../models/ScreenParamsList.models';

type Props = RouteProp<ParamsList, 'PAYMENT_SCREEN'>;

const PaymentScreen = () => {
  const route = useRoute<Props>();
  const {amount} = route.params;

  return (
    <View>
      <Text>PaymentScreen</Text>
    </View>
  );
};

export default PaymentScreen;

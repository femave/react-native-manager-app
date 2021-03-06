'use strict';

import React from 'react';
import { View } from 'react-native';
import styles from './style';

const CardSection = (props) => {
    return(
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    );
};

export { CardSection };

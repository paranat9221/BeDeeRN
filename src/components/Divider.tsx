import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, dimensions } from '../constants';

const Divider: React.FC = ({ }) => {
    return <View style={styles.divider} />
};

const styles = StyleSheet.create({
    divider: {
        height: 1,
        backgroundColor: colors.appBlue,
        marginVertical: dimensions.sectionPadding,
    }
});

export default Divider;
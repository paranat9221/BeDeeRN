import React from 'react';
import { Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { buttonStyles } from '../styles';
import { colors } from '../constants';
import shadowStyles from '../styles/shadowStyles';

interface CustomButtonProps {
    onPress: () => void;
    title: string;
    color?: string;
    textColor?: string;
    style?: ViewStyle;
    textStyle?: TextStyle;
    disabled?: boolean;
}

const Button: React.FC<CustomButtonProps> = ({ onPress, title, color, textColor, style, textStyle, disabled = false }) => {
    const buttonColor: string = disabled ? colors.appGray : color ?? buttonStyles.button.backgroundColor
    const textButtonColor: string = textColor ?? buttonStyles.buttonText.color

    return (
        <TouchableOpacity onPress={onPress} disabled={disabled}>
            <View style={[buttonStyles.button, style, { backgroundColor: buttonColor, ...(!disabled && shadowStyles.button) }]}>
                <Text style={[buttonStyles.buttonText, textStyle, { color: textButtonColor }]}>{title}</Text>
            </View>
        </TouchableOpacity >
    );
};

const TextButton: React.FC<CustomButtonProps> = ({ onPress, title, color, textColor, style, textStyle, disabled = false }) => {
    const textButtonColor: string = textColor ?? buttonStyles.textButtonText.color

    return (
        <TouchableOpacity onPress={onPress} disabled={disabled}>
            <View style={style}>
                <Text style={[buttonStyles.textButtonText, textStyle, { color: textButtonColor }]}>{title}</Text>
            </View>
        </TouchableOpacity >
    );
};

const OutlinedButton: React.FC<CustomButtonProps> = ({ onPress, title, color, textColor, style, textStyle, disabled = false }) => {
    const borderColor: string = color ?? buttonStyles.button.backgroundColor
    const textButtonColor: string = textColor ?? buttonStyles.button.backgroundColor

    return (
        <TouchableOpacity onPress={onPress} disabled={disabled}>
            <View style={[buttonStyles.outlinedButton, style, { borderColor }]}>
                <Text style={[buttonStyles.buttonText, textStyle, { color: textButtonColor }]}>{title}</Text>
            </View>
        </TouchableOpacity >
    );
};


export { Button, TextButton, OutlinedButton };
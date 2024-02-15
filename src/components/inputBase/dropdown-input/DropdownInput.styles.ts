import { StyleSheet } from "react-native";
import { NEUTRAL_300, TERTIARY_100, TERTIARY_70 } from "../../../styles/colors";

export const styles = StyleSheet.create({
    wrapper: {
        position: 'relative',
    },
    icon: {
        width: 24,
        height: 24,
    },
    iconOpen: {
        transform: [{ rotate: '180deg' }],
    },
    searchInput: {
        padding: 10,
        borderBottomWidth: 1,
        fontWeight: '500',
        borderColor: NEUTRAL_300,
    },
    dropdown: {
        position: 'absolute',
        width: '100%',
        backgroundColor: 'white',
        top: '100%',
        left: 0,
        marginTop: 6,
        padding: 6,
        zIndex: 1000,
        borderWidth: 1.5,
        borderColor: NEUTRAL_300,
        borderRadius: 8,
        gap: 8
    },
    option: {
        paddingHorizontal: 8,
        paddingVertical: 12,
    },
    selectedOption: {
        backgroundColor: TERTIARY_70,
        borderRadius: 8,
    },
    optionText: {
        fontSize: 14,
    },
    highlightedText: {
        fontWeight: 'bold',
    },
});

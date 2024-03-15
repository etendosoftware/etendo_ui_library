import { StyleSheet } from "react-native";
import { NEUTRAL_300, TERTIARY_70 } from "../../../styles/colors";
import { isWebPlatform } from "../../../helpers/functions_utils";

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
        padding: 8,
        borderBottomWidth: 1,
        fontWeight: '500',
        borderColor: NEUTRAL_300,
        width: "100%",
        paddingRight: !isWebPlatform() ? 20 : null,
        marginBottom: !(isWebPlatform()) ? 8 : null,
    },
    searchTextInput: {
        width: "100%",
        paddingRight: 8
    },
    dropdown: {
        marginTop: 6,
        padding: 6,
        borderWidth: 1.5,
        borderColor: NEUTRAL_300,
        borderRadius: 8,
        gap: 8,
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
    searchInputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        width: "100%",
        justifyContent: 'space-between',
    },
    cancelIcon: {
        width: 12,
        height: 12,
    },
    selectedOptionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "100%",
    },
    fullScreen: {
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: "red",
        zIndex: 2,
    },
    noResultsText: {
        textAlign: 'center',
        paddingVertical: 4,
        fontWeight: '600',
    },
});
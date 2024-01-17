import { StyleSheet } from "react-native";
import { INITIAL_100, NEUTRAL_0, NEUTRAL_800, PRIMARY_100, PRIMARY_20, TERTIARY_70 } from "../../styles/colors";

export const styles = StyleSheet.create({
    boldText: {
        fontWeight: 'bold',
    },
    italicText: {
        fontStyle: 'italic',
    },
    copyButton: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 5,
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
        backgroundColor: PRIMARY_20,
        gap: 5,
    },
    copyButtonText: {
        color: NEUTRAL_0,
        fontSize: 12,
    },
    linkText: {
        color: INITIAL_100,
        fontWeight: "600",
        textDecorationLine: 'underline',
    },
    inlineCode: {
        backgroundColor: TERTIARY_70,
        paddingHorizontal: 4,
        borderRadius: 4,
        color: PRIMARY_100,
        fontWeight: "700",
    },
    paragraph: {
        margin: 0,
        padding: 0,
        lineHeight: 20,
        color: NEUTRAL_800,
        fontWeight: "500",
    },
    listItem: {
        fontWeight: "700",
    },
});
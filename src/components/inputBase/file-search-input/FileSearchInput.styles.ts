import { StyleSheet, Platform } from 'react-native';
import { NEUTRAL_0, NEUTRAL_100, NEUTRAL_1000, NEUTRAL_300, NEUTRAL_400, SUCCESS_600 } from '../../../styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        flex: 1,
    },
    fileNameContainer: {
        alignItems: 'center',
        backgroundColor: NEUTRAL_0,
        borderColor: NEUTRAL_400,
        borderRadius: 8,
        borderWidth: 1,
        flexDirection: "row",
        gap: 4,
        height: "100%",
        justifyContent: "space-between",
        marginBottom: 4,
        paddingLeft: 8,
        paddingRight: 16,
        paddingVertical: Platform.OS === "web" ? 16 : 32,
        width: "100%",
    },
    fileNameLeftContainer: {
        flexDirection: "row",
        gap: 4,
        width: Platform.OS === "web" ? "97.5%" : "95%",
    },
    fileNameLeftContent: {
        flex: 1,
        height: 24,
    },
    fileNameLoadedLeftContainer: {
        alignItems: "center",
        flexDirection: "row",
        gap: 4,
        width: Platform.OS === "web" ? undefined : "85%",
    },
    checkCircleIcon: {
        height: 24,
        width: 24,
    },
    fileNameRightContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        width: Platform.OS === "web" ? undefined : "15%"
    },
    deleteIcon: {
        height: 20,
        width: 20,
    },
    loadingContainer: {
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 8,
        paddingVertical: 16,
        width: "100%",
    },
    loadingText: {
        fontSize: 14,
    },
    fileNameText: {
        color: NEUTRAL_1000,
        fontWeight: "500",
        fontSize: Platform.OS === "web" ? 14 : 16,
        height: "100%",
        paddingBottom: Platform.OS === "web" ? 4 : undefined,
    },
    fileIcon: {
        height: 36,
        width: 36,
    },
    progressBarBackground: {
        backgroundColor: NEUTRAL_300,
        borderRadius: 10,
        height: 8,
    },
    progressBarFill: {
        backgroundColor: NEUTRAL_100,
        borderRadius: 10,
        height: '100%',
    },
});
import { StyleSheet, Platform } from 'react-native';
import { NEUTRAL_100, NEUTRAL_1000, NEUTRAL_300, NEUTRAL_400, NEUTRAL_50 } from '../../../styles/colors';

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "10%",
    },
    inputContainer: {
        flex: 1,
    },
    fileNameContainer: {
        alignItems: 'center',
        backgroundColor: NEUTRAL_50,
        borderColor: NEUTRAL_400,
        borderRadius: 8,
        borderWidth: 1,
        flexDirection: "row",
        gap: 4,
        height: "100%",
        flex: 1,
        justifyContent: "space-between",
        marginBottom: 4,
        paddingHorizontal: 8,
        paddingVertical: Platform.OS === "web" ? 16 : 32,
    },
    fileNameLeftContainer: {
        flexDirection: "row",
        gap: 4,
    },
    fileNameRightContainer: {
        flexDirection: "row",
    },
    fileNameLeftContent: {
        height: 24,
        width: "80%",
    },
    fileNameLoadedLeftContainer: {
        alignItems: "center",
        flexDirection: "row",
        gap: 4,
        width: Platform.OS === "web" ? "75%" : "85%",
    },
    checkCircleIcon: {
        height: 24,
        width: 24,
        marginRight: 8,
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
        paddingBottom: Platform.OS === "web" ? 4 : undefined,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: "100%",
        flex: 1,
        marginLeft: Platform.OS === "web" ? undefined : 8,
    },

    fileIcon: {
        height: Platform.OS === "web" ? 40 : 36,
        width: Platform.OS === "web" ? 40 : 36,
    },
    progressBarFill: {
        backgroundColor: NEUTRAL_100,
        borderRadius: 10,
        height: '100%',
    },
    progressBarContainer: {
        backgroundColor: NEUTRAL_300,
        width: '100%',
        borderRadius: 16,
        marginLeft: Platform.OS === "web" ? undefined : 8,
    },
    progressBar: {
        height: '100%',
        backgroundColor: NEUTRAL_1000,
        borderRadius: 2,
    },
});
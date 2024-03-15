import { StyleSheet, Platform, Dimensions } from 'react-native';
import { NEUTRAL_100, NEUTRAL_1000, NEUTRAL_300, NEUTRAL_400, NEUTRAL_50 } from '../../../styles/colors';
import { isWebPlatform } from '../../../helpers/functions_utils';
const windowWidth = Dimensions.get('window').width;
export const mediaQueryWidths = {
    MOBILE: 480,
    TABLET: 768,
    DESKTOP: 1280,
};

export const styles = StyleSheet.create({
    container: {
        width: "100%",
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
        justifyContent: "space-between",
        marginBottom: 4,
        paddingHorizontal: 8,
        height: 64,
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
        width: "100%",
    },
    fileNameLoadedLeftContainer: {
        alignItems: "center",
        flexDirection: "row",
        gap: 4,
        width: windowWidth >= mediaQueryWidths.TABLET ? "95%" : "85%",
    },
    checkCircleIcon: {
        height: 24,
        width: 24,
        marginRight: 8,
    },
    errorIcon: {
        height: 20,
        width: 20,
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
    fileContent: {
        height: isWebPlatform() ? undefined : 28,
        width: windowWidth >= mediaQueryWidths.TABLET ? "97.25%" : "90%",
    },
    fileNameText: {
        color: NEUTRAL_1000,
        fontWeight: "500",
        fontSize: Platform.OS === "web" ? 14 : 16,
        paddingBottom: Platform.OS === "web" ? 4 : undefined,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: "100%",
        marginLeft: Platform.OS === "web" ? undefined : 8,
    },
    fileIcon: {
        height: 36,
        width: 36,
    },
    fileContainer: {
        height: Platform.OS === "web" ? undefined : 28,
        width: "100%",
    },
    progressBarFill: {
        backgroundColor: NEUTRAL_100,
        borderRadius: 10,
    },
    progressBarContainer: {
        backgroundColor: NEUTRAL_300,
        borderRadius: 16,
        marginLeft: Platform.OS === "web" ? undefined : 8,
        width: "100%",
    },
    progressBar: {
        backgroundColor: NEUTRAL_1000,
        borderRadius: 2,
    },
});
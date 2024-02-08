import { Platform } from "react-native";
import { AppPlatform } from "../../../helpers/utilsTypes";

// Constants
export const MODAL_CONTENT_WIDTH = 360;
export const MODAL_CONTENT_TOP_POSITION = 155;
export const MODAL_POSITION_TOP = 5;
export const ITEM_HEIGHT = 50;
export const CALENDAR_HEIGHT = Platform.OS === AppPlatform.web ? 292 : 360;
import { ReactNode } from "react";
import { IInputBase } from "../InputBase.types";

export interface IDropdownInput extends IInputBase {
    options: any[];
    onSelect?: (option: any) => void;
    selectedOption?: string;
    renderOption?: (option: any) => ReactNode;
    searchPlaceholder?: string;
    enableSearch?: boolean;
    displayKey: keyof any;
}
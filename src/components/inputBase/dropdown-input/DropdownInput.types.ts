import { IInputBase } from "../InputBase.types";

export interface IDropdownInput extends IInputBase {
    displayKey: keyof any;
    fetchData?: {
        normal: (page: number, size: number) => Promise<any[]>;
        search?: (searchQuery: string, page: number, size: number) => Promise<any[]>;
    };
    initialPage?: number;
    maxVisibleOptions?: number;
    noResultsText?: string;
    onSelect?: (option: any) => void;
    pageSize?: number;
    searchPlaceholder?: string;
    staticData?: any[];
}
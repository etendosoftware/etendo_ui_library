import { IInputBase } from "../InputBase.types";

export interface IDropdownInput extends IInputBase {
    displayKey: keyof any;
    fetchData?: (size: number, page: number) => Promise<any[]>;
    fetchDataBySearch?: (searchQuery: string) => void;
    initialPage?: number;
    maxVisibleOptions?: number;
    noResultsText?: string;
    onSelect?: (option: any) => void;
    pageSize?: number;
    searchPlaceholder?: string;
    staticData?: any[];
}
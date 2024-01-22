import { IInputBase } from "../InputBase.types";

interface IFile {
    name: string;
    size: number;
    type: string;
    uri: string;
}

export interface FileSearchInputProps extends IInputBase {
    value?: string;
    onSubmit?: (message: string, file?: IFile) => void;
    file: IFile | null;
    setFile: React.Dispatch<React.SetStateAction<IFile | null>>;
    loadingFile: boolean;
    setLoadingFile: React.Dispatch<React.SetStateAction<boolean>>;
    onLoadingFile: (file: IFile, callback?: () => void) => void;
}
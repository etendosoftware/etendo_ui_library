import { IInputBase } from "../inputBase.types";

interface IFile {
    name: string;
    size: number;
    type: string;
    uri: string;
}

export interface FileSearchInputProps extends IInputBase {
    onSubmit?: (message: string, file?: IFile) => void;
    file: IFile | null;
    setFile: React.Dispatch<React.SetStateAction<IFile | null>>;
    loadingFile: boolean;
    setLoadingFile: React.Dispatch<React.SetStateAction<boolean>>;
    onLoadingFile: (file: IFile, callback?: () => void) => void;
}
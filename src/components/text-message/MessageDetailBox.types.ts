export interface MessageDetailBoxProps {
    Icon: React.ComponentType<any>;
    files?: { name: string }[];
    multipleFilesText?: string;
    detailText?: string;
    type?: 'left-user' | 'right-user' | 'error';
}
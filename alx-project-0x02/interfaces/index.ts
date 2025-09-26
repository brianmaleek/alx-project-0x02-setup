export interface CardProps {
    title: string;
    content: string;
    className?: string;
}

export interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddPost: (title: string, content: string) => void;
}

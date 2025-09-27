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

export interface ButtonProps {
    label: string;
    size?: "small" | "medium" | "large";
    shape?: "rounded-sm" | "rounded-md" | "rounded-full";
    onClick?: () => void;
    className?: string;
}

export interface PostCardProps {
    title: string;
    content: string;
    author?: string;
    date?: string;
    className?: string;
}

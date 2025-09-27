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
    userId?: number;
    className?: string;
}

export interface PostProps {
    id: string;
    title: string;
    content: string;
    author?: string;
    date?: string;
    userId?: number;
}

export interface PostPageProps {
    posts: PostProps[];
}

export interface UserProps {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

export interface UsersPageProps {
    users: UserProps[];
}

import { HiUser } from "react-icons/hi";

interface UserMenuProps {
    name: string;
}

export default function UserMenu({ name }: UserMenuProps) {
    return <div><HiUser /> {name}</div>
}

const now: Date = new Date();
const currentYear: number = now.getFullYear();

export default function Footer() {
    return (
        <div className="flex flex-col items-center">
            <span>&copy;{currentYear}</span>
        </div>
    )
}
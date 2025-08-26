export default function Button({
    title,
    buttonClass,
    button__titleClass,
    onClick,
}) {
    return (
        <button className={buttonClass} onClick={onClick}>
            <span className={button__titleClass}>{title}</span>
        </button>
    )
}

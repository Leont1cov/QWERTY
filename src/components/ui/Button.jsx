export default function Button({ title, buttonClass, button__titleClass }) {
  return (
    <button className={buttonClass}>
      <span className={button__titleClass}>{title}</span>
    </button>
  )
}

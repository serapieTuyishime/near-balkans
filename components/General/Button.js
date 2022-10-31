export default function Button({ text = "No text", fill = false }) {
    return (
        <button
            className={`${fill && 'bg-dark text-white text-lg'}  text-dark focus:outline-none cursor-pointer leading-4 transition-250ms border-dark border-solid border rounded-full px-5 py-3 rounded-4xl max-w-max`}
        >
            {text}
        </button>
    );
}

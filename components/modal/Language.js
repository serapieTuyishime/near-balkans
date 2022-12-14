export default function Language({ text = "Croatian" }) {
    return (
        <div className="p-2 flex items-center w-full justify-between border border-dark rounded-xl">
            <label>{text}</label>
            <span className="lg:w-[36px] lg:h-[36px] w-[25px] h-[25px] rounded-full bg-gray-200  flex items-center">
                <svg
                    width="8"
                    height="14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-center mx-auto"
                >
                    <path
                        fill-rule="evenodd"
                        clipRule="evenodd"
                        d="M.646.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L6.293 7 .646 1.354a.5.5 0 0 1 0-.708Z"
                        fill="#3F4246"
                    ></path>
                </svg>
            </span>
        </div>
    );
}

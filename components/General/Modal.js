import Language from "../modal/Language";
import Button from "./Button";

function Modal({ open, close }) {
    if (!open) return null;
    return (
        <div className="absolute h-screen w-screen bg-dark bg-opacity-[0.4] flex items-end">
            <div className="w-1/3 mb-12 grid gap-4  mx-auto bg-white p-8 rounded-xl ">
                <p className="font-bold text-lg flex items-center justify-between">
                    Choose language
                    <svg
                        width="12"
                        height="12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="cursor-pointer"
                        onClick={close}
                    >
                        <path
                            d="M.244.41a.833.833 0 0 1 1.179 0l4.41 4.412L10.244.41a.833.833 0 1 1 1.179 1.178L7.012 6l4.41 4.41a.833.833 0 0 1-1.178 1.18l-4.41-4.411-4.411 4.41a.833.833 0 1 1-1.179-1.178L4.654 6 .245 1.588a.833.833 0 0 1 0-1.178Z"
                            fill="#676767"
                        ></path>
                    </svg>{" "}
                </p>
                <Language />
                <Language  text="Bulgarian"/>
                <Language  text="English"/>
            </div>
        </div>
    );
}
export default Modal;

import Image from "next/image";

export default function Module({ text = "First module", icon = "/icon1.png" }) {
    return (
        <label className="flex items-center flex-col lg:flex-row gap-2 text-dark">
            <Image
                src={icon}
                height={18}
                width={18}
                alt="Module icon"
                className="w-4 h-4 lg:w-8 lg:h-8 "
            />
            {text}
        </label>
    );
}

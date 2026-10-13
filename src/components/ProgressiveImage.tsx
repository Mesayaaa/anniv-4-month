import { ComponentProps } from "react"
import Image from "next/image"
import fs from "node:fs/promises"
import { getPlaiceholder } from "plaiceholder";
import { assetFilePath } from "@/lib/assetPath";

type Props = ComponentProps<typeof Image>

async function ProgressiveImage(props: Props) {
    if (typeof props.src !== "string") {
        throw new TypeError("ProgressiveImage requires a public string source");
    }

    const filePath = assetFilePath(props.src);
    const buffer = await fs.readFile(`./public/${filePath}`);
    const { base64 } = await getPlaiceholder(buffer);
    return (
        <Image
        {...props}
        alt={props.alt ?? ""}
        blurDataURL={base64 ?? ""}
        placeholder="blur"
        />
    )
}

export default ProgressiveImage
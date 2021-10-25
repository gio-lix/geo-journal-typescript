import React, {FC} from 'react';
import {ImagesProps} from "@/components/header/navigation/ApplyLink";
import Image from "next/image";

interface ImageLinkProps {
    image: ImagesProps
}

const ImageLink: FC<ImageLinkProps["image"]> = ({img, height, width}) => {
    return (
        <Image src={img} height={height} width={width} alt='img' />
    );
};

export default ImageLink;
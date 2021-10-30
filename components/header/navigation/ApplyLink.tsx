import React, {FC} from 'react';
import Link, {LinkProps} from "next/link";
import ImageLink from "@/components/header/navigation/ImageLink";

export interface ImagesProps {
    img: string,
    height: number,
    width: number
}

interface ApplyLinkProps {
    img: any,
    height: number,
    width: number,
    onClick: () => void
}

const ApplyLink: FC<ApplyLinkProps> = ({
                                           img,
                                           height,
                                           width,
                                           onClick,
                                       }) => {



    return (
        <button>
            <a onClick={onClick} className='flex items-center justify-center mr-2 md:mr-5 cursor-pointer'>
                <ImageLink img={img} height={height} width={width} />
            </a>
        </button>
    );
};

export default ApplyLink;
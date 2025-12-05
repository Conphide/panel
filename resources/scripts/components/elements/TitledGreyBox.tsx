import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import tw from 'twin.macro';
import isEqual from 'react-fast-compare';

interface Props {
    icon?: IconProp;
    title: string | React.ReactNode;
    className?: string;
    children: React.ReactNode;
}

const TitledGreyBox = ({ icon, title, children, className }: Props) => (
    <div css={tw`rounded-sm shadow-glass bg-neutral-900/80 border border-white/10`} className={className}>
        <div css={tw`bg-white/5 rounded-t-sm p-3 border-b border-white/10 backdrop-blur-sm`}>
            {typeof title === 'string' ? (
                <p css={tw`text-sm uppercase font-bold text-exodus-cyan tracking-wider font-header`}>
                    {icon && <FontAwesomeIcon icon={icon} css={tw`mr-2 text-exodus-cyan`} />}
                    {title}
                </p>
            ) : (
                title
            )}
        </div>
        <div css={tw`p-3`}>{children}</div>
    </div>
);

export default memo(TitledGreyBox, isEqual);

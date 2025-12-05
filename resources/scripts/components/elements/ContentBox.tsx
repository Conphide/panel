import React from 'react';
import FlashMessageRender from '@/components/FlashMessageRender';
import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
import tw from 'twin.macro';

type Props = Readonly<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
        title?: string;
        borderColor?: string;
        showFlashes?: string | boolean;
        showLoadingOverlay?: boolean;
    }
>;

const ContentBox = ({ title, borderColor, showFlashes, showLoadingOverlay, children, ...props }: Props) => (
    <div {...props}>
        {title && <h2 css={tw`text-exodus-cyan mb-4 px-4 text-2xl font-header tracking-wide uppercase`}>{title}</h2>}
        {showFlashes && (
            <FlashMessageRender byKey={typeof showFlashes === 'string' ? showFlashes : undefined} css={tw`mb-4`} />
        )}
        <div
            css={[
                tw`bg-neutral-900/80 p-4 rounded-sm shadow-glass relative border border-white/10`,
                !!borderColor ? tw`border-t-4` : tw`border-t border-t-white/10`,
            ]}
        >
            <div
                css={tw`absolute inset-0 bg-exodus-cyan/5 pointer-events-none rounded-sm`}
                style={{ mixBlendMode: 'overlay' }}
            />
            <SpinnerOverlay visible={showLoadingOverlay || false} />
            {children}
        </div>
    </div>
);

export default ContentBox;

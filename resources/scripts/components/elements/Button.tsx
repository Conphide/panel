import React from 'react';
import styled, { css } from 'styled-components/macro';
import tw from 'twin.macro';
import Spinner from '@/components/elements/Spinner';

interface Props {
    isLoading?: boolean;
    size?: 'xsmall' | 'small' | 'large' | 'xlarge';
    color?: 'green' | 'red' | 'primary' | 'grey';
    isSecondary?: boolean;
}

const ButtonStyle = styled.button<Omit<Props, 'isLoading'>>`
    ${tw`relative inline-block rounded-sm p-2 uppercase tracking-widest text-sm transition-all duration-250 border`};
    font-family: 'Rajdhani', sans-serif;
    font-weight: 600;

    /* Base Glassmorphism for all buttons */
    backdrop-filter: blur(4px);

    ${(props) =>
        ((!props.isSecondary && !props.color) || props.color === 'primary') &&
        css<Props>`
            ${(props) => !props.isSecondary && tw`bg-primary-500/80 border-primary-400 text-black`};
            box-shadow: 0 0 10px rgba(0, 243, 255, 0.2);

            &:hover:not(:disabled) {
                ${tw`bg-primary-400 border-primary-300 text-black`};
                box-shadow: 0 0 15px rgba(0, 243, 255, 0.6);
            }
        `};

    ${(props) =>
        props.color === 'grey' &&
        css`
            ${tw`border-neutral-600 bg-neutral-700/60 text-neutral-200`};

            &:hover:not(:disabled) {
                ${tw`bg-neutral-600 border-neutral-500 text-white`};
                box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
            }
        `};

    ${(props) =>
        props.color === 'green' &&
        css<Props>`
            ${tw`border-green-500 bg-green-500/80 text-black`};
            box-shadow: 0 0 10px rgba(10, 255, 10, 0.2);

            &:hover:not(:disabled) {
                ${tw`bg-green-400 border-green-300`};
                box-shadow: 0 0 15px rgba(10, 255, 10, 0.6);
            }

            ${(props) =>
                props.isSecondary &&
                css`
                    &:active:not(:disabled) {
                        ${tw`bg-green-600 border-green-700`};
                    }
                `};
        `};

    ${(props) =>
        props.color === 'red' &&
        css<Props>`
            ${tw`border-red-600 bg-red-600/80 text-white`};
            box-shadow: 0 0 10px rgba(220, 38, 38, 0.3);

            &:hover:not(:disabled) {
                ${tw`bg-red-500 border-red-500`};
                box-shadow: 0 0 20px rgba(220, 38, 38, 0.6);
            }

            ${(props) =>
                props.isSecondary &&
                css`
                    &:active:not(:disabled) {
                        ${tw`bg-red-600 border-red-700`};
                    }
                `};
        `};

    ${(props) => props.size === 'xsmall' && tw`px-3 py-1 text-xs`};
    ${(props) => (!props.size || props.size === 'small') && tw`px-6 py-2`};
    ${(props) => props.size === 'large' && tw`p-4 text-sm`};
    ${(props) => props.size === 'xlarge' && tw`p-4 w-full`};

    ${(props) =>
        props.isSecondary &&
        css<Props>`
            ${tw`border-primary-500/50 bg-transparent text-primary-400`};

            &:hover:not(:disabled) {
                ${tw`border-primary-400 text-primary-300 bg-primary-500/10`};
                box-shadow: inset 0 0 10px rgba(0, 243, 255, 0.1);
            }

            ${(props) =>
                props.color === 'red' &&
                tw`border-red-500/50 text-red-400 hover:text-red-300 hover:border-red-400 hover:bg-red-500/10`};
            ${(props) =>
                props.color === 'green' &&
                tw`border-green-500/50 text-green-400 hover:text-green-300 hover:border-green-400 hover:bg-green-500/10`};
            ${(props) =>
                props.color === 'grey' &&
                tw`border-neutral-500 text-neutral-400 hover:text-neutral-300 hover:border-neutral-400 hover:bg-neutral-500/10`};
        `};

    &:disabled {
        opacity: 0.55;
        cursor: not-allowed;
    }

    /* Clip corners for tech effect */
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%);
`;

type ComponentProps = Omit<JSX.IntrinsicElements['button'], 'ref' | keyof Props> & Props;

const Button: React.FC<ComponentProps> = ({ children, isLoading, ...props }) => (
    <ButtonStyle {...props}>
        {isLoading && (
            <div css={tw`flex absolute justify-center items-center w-full h-full left-0 top-0`}>
                <Spinner size={'small'} />
            </div>
        )}
        <span css={isLoading ? tw`text-transparent` : undefined}>{children}</span>
    </ButtonStyle>
);

type LinkProps = Omit<JSX.IntrinsicElements['a'], 'ref' | keyof Props> & Props;

const LinkButton: React.FC<LinkProps> = (props) => <ButtonStyle as={'a'} {...props} />;

export { LinkButton, ButtonStyle };
export default Button;

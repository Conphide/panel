import styled, { css } from 'styled-components/macro';
import tw from 'twin.macro';

export interface Props {
    isLight?: boolean;
    hasError?: boolean;
}

const light = css<Props>`
    ${tw`bg-white border-neutral-200 text-neutral-800`};
    &:focus {
        ${tw`border-primary-400`}
    }

    &:disabled {
        ${tw`bg-neutral-100 border-neutral-200`};
    }
`;

const checkboxStyle = css<Props>`
    ${tw`bg-neutral-800 cursor-pointer appearance-none inline-block align-middle select-none flex-shrink-0 w-4 h-4 text-primary-400 border border-neutral-500 rounded-sm`};
    color-adjust: exact;
    background-origin: border-box;
    transition: all 75ms linear, box-shadow 25ms linear;

    &:checked {
        ${tw`border-exodus-cyan bg-no-repeat bg-center`};
        background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%2300f3ff' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
        background-color: rgba(0, 243, 255, 0.1);
        box-shadow: 0 0 5px rgba(0, 243, 255, 0.5);
    }

    &:focus {
        ${tw`outline-none border-exodus-cyan`};
        box-shadow: 0 0 0 1px rgba(0, 243, 255, 0.25);
    }
`;

const inputStyle = css<Props>`
    // Reset to normal styling.
    resize: none;
    ${tw`appearance-none outline-none w-full min-w-0`};
    ${tw`p-3 border rounded-sm text-sm transition-all duration-150`};
    ${tw`bg-neutral-900/50 border-neutral-600 text-neutral-200 shadow-none focus:ring-0`};
    font-family: 'Rajdhani', sans-serif;
    letter-spacing: 0.05em;

    & + .input-help {
        ${tw`mt-1 text-xs`};
        ${(props) => (props.hasError ? tw`text-red-400` : tw`text-neutral-400`)};
    }

    &:required,
    &:invalid {
        ${tw`shadow-none`};
    }

    &:not(:disabled):not(:read-only):focus {
        ${tw`shadow-neon-cyan border-exodus-cyan ring-1 ring-exodus-cyan ring-opacity-50`};
        ${(props) => props.hasError && tw`border-red-400 ring-red-400 shadow-none`};
    }

    &:disabled {
        ${tw`opacity-60 cursor-not-allowed`};
    }

    ${(props) => props.isLight && light};
    ${(props) => props.hasError && tw`text-red-100 border-red-500 hover:border-red-400`};

    /* Placeholders */
    &::placeholder {
        ${tw`text-neutral-500 opacity-75`};
    }
`;

const Input = styled.input<Props>`
    &:not([type='checkbox']):not([type='radio']) {
        ${inputStyle};
    }

    &[type='checkbox'],
    &[type='radio'] {
        ${checkboxStyle};

        &[type='radio'] {
            ${tw`rounded-full`};
        }
    }
`;
const Textarea = styled.textarea<Props>`
    ${inputStyle}
`;

export { Textarea };
export default Input;

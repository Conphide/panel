import tw from 'twin.macro';
import { createGlobalStyle } from 'styled-components/macro';

export default createGlobalStyle`
    body {
        ${tw`font-sans bg-neutral-900 text-neutral-200`};
        letter-spacing: 0.05em;
        background-image: radial-gradient(circle at 50% 50%, #111825 0%, #0a0e14 100%);
    }

    h1, h2, h3, h4, h5, h6 {
        ${tw`font-bold tracking-wide font-header text-exodus-cyan uppercase`};
        text-shadow: 0 0 10px rgba(0, 243, 255, 0.3);
    }

    p {
        ${tw`text-neutral-300 leading-relaxed font-sans`};
    }

    form {
        ${tw`m-0`};
    }

    textarea, select, input, button, button:focus, button:focus-visible {
        ${tw`outline-none`};
    }

    input[type=number]::-webkit-outer-spin-button,
    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none !important;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield !important;
    }

    /* Selection Color */
    ::selection {
        ${tw`bg-exodus-cyan text-black`};
    }

    /* Scroll Bar Style */
    ::-webkit-scrollbar {
        background: none;
        width: 8px;
        height: 8px;
    }

    ::-webkit-scrollbar-thumb {
        ${tw`bg-exodus-cyan rounded-full`};
        box-shadow: 0 0 5px rgba(0, 243, 255, 0.5);
    }

    ::-webkit-scrollbar-track {
        ${tw`bg-neutral-800`};
    }

    ::-webkit-scrollbar-corner {
        background: transparent;
    }
`;

import { InlineContainer, Span } from "./customComponents";

export default function FormErrorAlert ({content}) {

    const addAlertIcon = (
        <svg className="alertIcon"
            viewBox="0 0 48 48" 
            fill="none" 
            width="13px" 
            height="13px" 
            color="#d32f2f">
                <path 
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    d="M4 24.5C4 13.1782 13.1782 4 24.5 4C35.8218 4 45 13.1782 45 24.5C45 35.8218 35.8218 45 24.5 45C13.1782 45 4 35.8218 4 24.5ZM24.7026 12.1135C25.8593 12.1135 26.797 13.0512 26.797 14.2079C26.797 14.2626 26.7948 14.3174 26.7905 14.372L25.8353 26.5233C25.7862 27.1488 25.2392 27.6161 24.6136 27.5669C24.0563 27.5231 23.6137 27.0805 23.5699 26.5233L22.6147 14.372C22.5241 13.2189 23.3854 12.2106 24.5385 12.12C24.5931 12.1157 24.6478 12.1135 24.7026 12.1135ZM24.2364 31C23.0013 31 22 32.0013 22 33.2364C22 34.4715 23.0013 35.4727 24.2364 35.4727H25.1407C26.3758 35.4727 27.377 34.4715 27.377 33.2364C27.377 32.0013 26.3758 31 25.1407 31H24.2364Z" 
                    fill="currentColor">
                </path>
        </svg>
    );

    return (
        <InlineContainer mb="10px">
            {addAlertIcon}
            <Span>{content}</Span>
        </InlineContainer>
    );
}
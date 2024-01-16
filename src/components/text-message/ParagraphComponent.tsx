import React, { useContext, useState } from "react";

export const ParagraphComponent = ({
    node,
    className,
    children,
    messageId,
    error,
    ...props
}: any) => {

    const renderHighlightedText = (text: string) => {
        const regex = /@([^@]+)@/g;
        const newText = text.replace(
            regex,
            "<span class='highlightedText'>$1</span>"
        );
        return newText;
    };

    const renderSplitText = (text: string) => {
        const splitText = text.split("## ");
        return {
            mainText: renderHighlightedText(splitText[0]),
            secondaryText: splitText[1],
        };
    };

    return React.Children.map(children, (child) => {
        if (typeof child === "string") {
            const { mainText, secondaryText } = renderSplitText(child);

            return (
                <div>
                    <p
                        className="px-5"
                        {...props}
                        dangerouslySetInnerHTML={{ __html: mainText }}
                    />
                    {/* render a div element that contains the smiley face and sad face icons, as well as the "Was this answer helpful?" text. */}
                    {!error && secondaryText && (
                        <div className="mt-3 flex items-center gap-3 border-t border-l-[-2rem] border-gray-500 px-5 pt-2 dark:border-black-800">
                            <p className="cursor-default text-sm text-gray-600 hover:text-blue-900 dark:hover:text-gray-800">
                                {secondaryText}
                            </p>
                        </div>
                    )}
                </div>
            );
        } else {
            return (
                <p className="px-5" {...props}>
                    {child}
                </p>
            );
        }
    });
};

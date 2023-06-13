import React, { CSSProperties, FC } from "react";

type PropsType = {
    // don't need title since does not submit
    props: {
        text: string
        isCenter?: boolean
    }
}

const QuestionParagraph: FC<PropsType> = ({ props }) => {
    const { text, isCenter } = props;
    const style: CSSProperties = {};
    style.whiteSpace = "pre-wrap";
    if (isCenter) style.textAlign = "center";

    return <p style={style}>{text}</p>;
}

export default QuestionParagraph;
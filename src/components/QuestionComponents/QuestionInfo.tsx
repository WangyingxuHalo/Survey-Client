import React, { FC } from "react";

type PropsType = {
    // don't need title since does not submit
    props: {
        title: string
        description?: string
    }
}

const QuestionInfo: FC<PropsType> = ({ props }) => {
    const { title, description = "" } = props;

    return <div style={{ textAlign: "center"}}>
        <h1>{title}</h1>
        <p>{description}</p>
    </div>;
}

export default QuestionInfo;
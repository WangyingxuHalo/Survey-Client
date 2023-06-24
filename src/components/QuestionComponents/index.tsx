import QuestionInput from "./QuestionInput";
import QuestionRadio from "./QuestionRadio";
import QuestionTitle from "./QuestionTitle";
import QuestionParagraph from "./QuestionParagraph";
import QuestionInfo from "./QuestionInfo";
import QuestionTextarea from "./QuestionTextarea";
import QuestionCheckbox from "./QuestionCheckbox";

type ComponentInfoType = {
    fe_id: string
    type: string
    title: string
    isHidden: boolean
    props: any
}

export const getComponent = (component: ComponentInfoType) => {

    const { fe_id, type, isHidden, props } = component;
    if (isHidden) {
        return null;
    }
    switch (type) {
        case "questionInput":
            return <QuestionInput fe_id={fe_id} props={props} />;
        case "questionRadio":
            return <QuestionRadio fe_id={fe_id} props={props} />;
        case "questionTitle":
            return <QuestionTitle props={props} />;
        case "questionParagraph":
            return <QuestionParagraph props={props} />;
        case "questionInfo":
            return <QuestionInfo props={props} />;
        case "questionTextarea":
            return <QuestionTextarea fe_id={fe_id} props={props} />;
        case "questionCheckbox":
            return <QuestionCheckbox fe_id={fe_id} props={props} />;
        
    }
}
import QuestionInput from '@/components/QuestionComponents/QuestionInput';
import QuestionRadio from '@/components/QuestionComponents/QuestionRadio';
import styles from "@/styles/question.module.scss";
import PageWrapper from '@/components/PageWrapper';
import { getQuestionById } from '@/services/question';
import { getComponent } from '@/components/QuestionComponents';

type PropsType = {
    errno: number
    data?: {
        id: string
        title: string
        desc?: string
        js?: string
        css?: string
        isPublished: boolean
        isDeleted: boolean
        componentList: Array<any>
    }
    msg?: string
}

// localhost:3000/question/12345
export default function Question(props: PropsType) {
    const { errno, data, msg = "" } = props;
    const { id, title = "", isDeleted, desc = "", isPublished, componentList = [] } = data || {};

    // 没有该问卷
    if (errno !== 0) {
        return <PageWrapper title='错误'>
            <h1>没有该问卷</h1>
            <p>{msg}</p>
        </PageWrapper>
    }

    // 问卷已经被删除
    if (isDeleted) {
        return <PageWrapper title={title} desc={desc}>
            <h1>{title}</h1>
            <p>该问卷已经被删除</p>
        </PageWrapper>
    }

    // 问卷还未发布
    if (!isPublished) {
        return <PageWrapper title={title} desc={desc}>
            <h1>{title}</h1>
            <p>该问卷还未发布</p>
        </PageWrapper>
    }

    const componentsElem = <>
        {componentList.map(component => {
            const eachComponentJSX = getComponent(component);
            return <div key={component.fe_id} className={styles["component-wrapper"]}>{eachComponentJSX}</div>;
        })}
    </>

    return <PageWrapper title={title} desc={desc}>
        <form method='POST' action="/api/answer">
            <input type='hidden' name='questionId' defaultValue={id} />
            {componentsElem}
            <div className={styles["submit-button-container"]}>
                <button type="submit">提交</button>
            </div>
        </form>
    </PageWrapper>;
}

export async function getServerSideProps(context: any) {
    const { id = "" } = context.params;
    const data = await getQuestionById(id);


    return {
        props: {
            ...data
        }

    }
}
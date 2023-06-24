import React, { FC, useEffect, useState } from "react";
import styles from "./QuestionCheckbox.module.scss";

type PropsType = {
    fe_id: string
    props: {
        title: string
        isVertical?: boolean
        list: Array<{ value: string; text: string; checked: boolean }>
    }
}

const QuestionCheckbox: FC<PropsType> = ({ fe_id, props }) => {
    const { title, isVertical, list } = props;
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    // When initializing, find default selected
    useEffect(() => {
        console.log("init, list: ", list);
        list.forEach(eachItem => {
            const { value, checked } = eachItem;
            if (checked) {
                setSelectedValues(selectedValues => selectedValues.concat(value));
            }
        })
    }, [list])

    function toggleChecked(val: string) {
        console.log("before toggler, list: ", selectedValues);
        if (selectedValues.includes(val)) {
            setSelectedValues(selectedValues => selectedValues.filter(value => value !== val));
        } else {
            setSelectedValues(selectedValues.concat(val));
        }
    }

    return <>
        <p>{title}</p>
        <input name={fe_id} type="hidden" value={selectedValues.toString()}/>
        <ul className={styles.list}>
            {list.map(c => {
                const { value, text } = c;
                let liClassName = "";
                if (isVertical) liClassName = styles.verticalItem;
                else liClassName = styles.horizontalItem;

                return <li key={value} className={liClassName}>
                    <label>
                        <input type="checkbox" checked={selectedValues.includes(text)} onChange={() => toggleChecked(text)} />
                        {text}
                    </label>
                </li>
            })}
        </ul>
    </>;
}

export default QuestionCheckbox;
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

type QuestionCardProps = {
    question: string;
    answer: string;
    default?: boolean;
}

export default function QuestionCard(props: QuestionCardProps) {
    const [selected, setSelected] = useState(false);
    useEffect(() => {
        if (props.default == true) {
            setSelected(true);
        }
    },[])
    return (
        <>
        <div className="md:w-[28rem] bg-muted rounded-xl text-foreground py-4 px-6 flex flex-row gap-4 items-center justify-between">
            <h4 className="text-foreground font-medium">{props.question}</h4>
            <h4 className="text-foreground " onClick={()=>{
                setSelected(!selected);
            }}>{selected == false? <ChevronDown size={32}/>: <ChevronUp size={32}/>}</h4>
        </div>
        <div className= {` md:w-[28rem] text-foreground pt-2 px-6 ${selected == false? "hidden" : "block"}`}>
            <p className=" text-primary">{props.answer}</p>
        </div>
        </>
    );
}
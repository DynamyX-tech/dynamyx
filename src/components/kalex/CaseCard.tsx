type CardProps = {
    title: string;
    description: string;
}

const CaseCard = (props: CardProps)=> {
    return (
        <div className=" h-48 md:w-80 bg-muted rounded-xl text-foreground pt-6 px-6 flex flex-col gap-4">
        <h1 className="font-bold text-xl">{props.title}</h1>
        <p>{props.description}</p>
        </div>
    );
}

export default CaseCard;
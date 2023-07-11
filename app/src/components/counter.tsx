import { ReactNode, useState, memo } from "react";

type CounterProps = {
    children: ReactNode;
  }
  
export const Counter = memo((props:CounterProps) => {
        const { children } = props;
        const [count, setCount] = useState(0);
        const onClickInc = () => {
            setCount(count + 1);
        };
        const onClickDec = () => {
            setCount(count - 1);
        };

        return (
        <>
            <p>{children}</p>
            <div className="counterContainer">
                <button className="counterButton" onClick={onClickInc} >
                    +
                </button>
                <button className="counterButton" onClick={onClickDec} >
                    -
                </button>
            </div>
            <p>{count}</p>
        </>
    );
})
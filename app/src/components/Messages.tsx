import React, { ReactNode, useState, useCallback, memo } from 'react';
import { SuggestionInput } from './molecules/SuggestionInput';

type MessagesProps = {
    children: ReactNode;
    addEvent: (arg: string)=>void;
}
  
export const Messages: React.FC<MessagesProps> = memo((props: MessagesProps) => {
    const {children, addEvent} = props;
    const [messageList, setMessageList] = useState<string[]>([]);

    const getNewMessage = useCallback((arg: string) => {
      if(arg !== '') {
        addEvent(arg)
        setMessageList([...messageList, arg]);
      }
    }, [addEvent, messageList]);


    return (
      <>
        <p>{children}</p>
        <SuggestionInput addEvent={getNewMessage}/>
        
        <ul>
          {messageList.map((message:String, index:number) => <li key={index}>{message}</li>)}
        </ul>
      </>
    )
})
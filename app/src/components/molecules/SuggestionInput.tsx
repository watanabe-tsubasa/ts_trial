import React, { useState, useEffect, memo, useMemo, ChangeEvent, KeyboardEvent } from 'react';
import { enToJa } from '../../utils/enToJa';
import { off } from 'process';


type SuggestionInputProps = {
  addEvent: (arg: string)=>void;
}

const SuggestionInput: React.FC<SuggestionInputProps> = memo((props) => {

  const { addEvent } = props;

  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [filteredLength, setfileteredLength] = useState(0);
  const [message, setMessage] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setMessage(value);
    if (value === '') {
      setSuggestions([]);
    } else {
      const displaySuggestions = generateSuggestions(value);
      setSuggestions(displaySuggestions);
    }
  };

  const suggestionsList = useMemo(() => {
    return Object.keys(enToJa)
  },[]);
  const MAX_SUGGESTIONS = 10;

  const generateSuggestions = (value: string) => {
    const filteredSuggestions = suggestionsList.filter((item) => (
      item.toLowerCase().includes(value.toLowerCase()))
    );
    setShowMenu(filteredSuggestions.length > 0); 
    setfileteredLength(filteredSuggestions.length)
    const limitedSuggestions = filteredSuggestions.slice(0, MAX_SUGGESTIONS);
    const remainingCount = filteredSuggestions.length - MAX_SUGGESTIONS;
    const displaySuggestions = remainingCount > 0 ? [...limitedSuggestions ,`${MAX_SUGGESTIONS}件以上 (${remainingCount}件)`] : limitedSuggestions;
    
    return displaySuggestions
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const offset = filteredLength > 11 ? 2 : 1  
    if (event.key === "ArrowUp") {
      // 上キーが押された場合
      event.preventDefault();
      setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : suggestions.length - offset));
    } else if (event.key === "ArrowDown") {
      // 下キーが押された場合
      event.preventDefault();
      setSelectedIndex((prevIndex) => (prevIndex < suggestions.length - offset ? prevIndex + 1 : 0));
    } else if (event.key === "Enter") {
      // エンターキーが押された場合
      console.log(selectedIndex);
      if (selectedIndex !== -1) {
        event.preventDefault();
        console.log(suggestions)
        addEvent(suggestions[selectedIndex])
        setMessage('')
        setShowMenu(false);
      }
    }
  };

  const upDateMessageList = () => {
    addEvent(message);
  }

  useEffect(() => {
    setSelectedIndex(-1)
  },[suggestions])

  return (
    <>
      <input 
        type='text'
        value={message}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {showMenu && (
        <ul style={{
          marginTop:0,
          backgroundColor: 'white',
          paddingLeft: '1.8rem',
          paddingRight: '1.8rem',
          minWidth: '7.4rem'
          }}
        >
          {suggestions.map((item, index) => (
            <li
            key={item}
            className={index === selectedIndex ? "selected" : ""}
            style={index === selectedIndex ? {color:"red"} : {color:"black"}}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
      <button onClick={upDateMessageList}>addText!</button>
    </>
  )
})

export { SuggestionInput };
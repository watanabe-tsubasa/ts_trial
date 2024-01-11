import { Component, For, createSignal } from "solid-js";

export const InputText: Component = () => {
  const [text, setText] = createSignal<string>('');
  const [textList, setTextList] = createSignal<string[]>([]);
  const onChangeText = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setText(target.value);
  }
  const onClick = () => {
    if (text().length === 0) { return };
    setTextList(current => [...current, text()]);
    setText('');
    console.log(textList());
  }
  return (
    <div>
      <input value={text()} onChange={onChangeText} />
      <button onClick={onClick}>add text</button>
      <ul>
        <For each={textList()} fallback={<li>please add text</li>}>
          {(item, index) => <li data-index={index()}>{item}</li>}
        </For>
      </ul>
    </div>
  )
}


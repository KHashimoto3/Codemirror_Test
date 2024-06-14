import { closeBrackets } from "@codemirror/closebrackets";
import { indentWithTab } from "@codemirror/commands";
import { highlightActiveLineGutter, lineNumbers } from "@codemirror/gutter";
import { EditorState } from "@codemirror/state";
import { EditorView, highlightActiveLine, keymap } from "@codemirror/view";
import { useEffect, useRef } from "react";

export const EditorOld = () => {
  const editorParentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (editorParentRef.current === null) {
      return;
    }

    const editorView = new EditorView({
      state: EditorState.create({
        doc: "Hello, World!",
      }),
      parent: editorParentRef.current,
      extensions: [
        closeBrackets(),
        lineNumbers(),
        highlightActiveLine(),
        highlightActiveLineGutter(),
        keymap.of([indentWithTab]),
      ],
    });

    return () => {
      editorView.destroy();
    };
  }, [editorParentRef]);

  return (
    <>
      <h1>エディタ</h1>
      <p>Codemirror 6</p>
      <div ref={editorParentRef} />
    </>
  );
};

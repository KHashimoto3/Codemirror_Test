import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { useEffect, useRef } from "react";

export const Editor = () => {
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

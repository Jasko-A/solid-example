import { onMount } from 'solid-js';
import 'quill/dist/quill.snow.css'; // Import Quill CSS

const QuillEditor = () => {
  let editorRef;

  onMount(async () => {
    try {
      const { default: Quill } = await import('quill'); // Use await to import Quill
      const quill = new Quill(editorRef, {
        theme: 'snow',
        placeholder: 'Start typing...',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link'],
          ],
        },
      });
      console.log('Quill editor initialized', quill); // Confirm that the editor has been initialized
    } catch (error) {
      console.error('Error loading Quill:', error); // Handle errors if Quill fails to load
    }
  });

  return <div ref={editorRef} style={{ height: '400px', width: '100%' }} />;
};

export default QuillEditor;

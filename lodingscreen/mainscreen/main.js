// Wait for the Monaco Editor scripts to be loaded
require.config({ paths: { 'vs': './node_modules/monaco-editor/min/vs' }});
require(['vs/editor/editor.main'], function() {
    // Get the editor container element
    const editorContainer = document.getElementById('editor-container');

    // Create the Monaco Editor instance
    const editor = monaco.editor.create(editorContainer, {
        value: [
            'function hello() {',
            '\tconsole.log("Namaste!");',
            '}'
        ].join('\n'),
        language: 'javascript',
        theme: 'vs-dark'
    });

    // You can access the editor instance and its content using the 'editor' variable
    // For example:
    // editor.setValue('Your code here...');
});

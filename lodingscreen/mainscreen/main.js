function goToHome() {
    window.location.href = "../../home.html";
}
require.config({ paths: { 'vs': './node_modules/monaco-editor/min/vs' }});
require(['vs/editor/editor.main'], function() {
    const editorContainer = document.getElementById('editor-container');

    const editor = monaco.editor.create(editorContainer, {
        value: [
            'function hello() {',
            '\tconsole.log("Namaste!");',
            '}'
        ].join('\n'),
        language: 'javascript',
        theme: 'vs-dark'
    });
});

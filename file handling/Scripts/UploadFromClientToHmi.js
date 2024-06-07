var TcHmi;
(function (TcHmi) {
    let Functions;
    (function (Functions) {
        let file_handling;
        (function (file_handling) {
            function UploadFromClientToHmi(ctx, Name, Accept) {
                const fileInput = document.createElement('input');
                const acc = Accept ? (Accept.startsWith('.') ? Accept : `.${Accept}`) : '';
                fileInput.type = 'file';
                if (acc)
                    fileInput.accept = acc;
                fileInput.multiple = false;
                fileInput.onchange = () => {
                    const file = fileInput.files[0]; // Get selected file
                    if (Name && Name instanceof TcHmi.Symbol)
                        Name.write(Accept && file.name.endsWith(Accept) ? file.name.substring(0, file.name.length - acc.length) : file.name);
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = (e) => ctx.success(e.target?.result);
                        reader.onerror = (e) => {
                            console.error(e.target?.error);
                            ctx.error(e.target?.error);
                        };
                        reader.readAsText(file);
                    }
                };
                fileInput.click(); // Open file dialog
            }
            file_handling.UploadFromClientToHmi = UploadFromClientToHmi;
        })(file_handling = Functions.file_handling || (Functions.file_handling = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi || (TcHmi = {}));
TcHmi.Functions.registerFunctionEx('UploadFromClientToHmi', 'TcHmi.Functions.file_handling', TcHmi.Functions.file_handling.UploadFromClientToHmi);
//# sourceMappingURL=UploadFromClientToHmi.js.map
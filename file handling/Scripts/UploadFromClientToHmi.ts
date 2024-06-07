module TcHmi {
	export module Functions {
		export module file_handling {
			export function UploadFromClientToHmi(ctx: any, Name: any, Accept: any) {
                const fileInput: any = document.createElement('input');
                const acc = Accept ? (Accept.startsWith('.') ? Accept : `.${Accept}`) : '';
                fileInput.type = 'file';
                if (acc)
                    fileInput.accept = acc;
                fileInput.multiple = false;

                fileInput.onchange = () => {
                    const file = fileInput.files[0];  // Get selected file
                    if (Name && Name instanceof TcHmi.Symbol)
                        (Name as TcHmi.Symbol).write(Accept && file.name.endsWith(Accept) ? file.name.substring(0, file.name.length - acc.length) : file.name);
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = (e: ProgressEvent<FileReader>) => ctx.success(e.target?.result);
                        reader.onerror = (e: ProgressEvent<FileReader>) => {
                            console.error(e.target?.error);
                            ctx.error(e.target?.error);
                        };
                        reader.readAsText(file);
                    }
                };
                fileInput.click();  // Open file dialog
            }
		}
	}
}
TcHmi.Functions.registerFunctionEx('UploadFromClientToHmi', 'TcHmi.Functions.file_handling', TcHmi.Functions.file_handling.UploadFromClientToHmi);

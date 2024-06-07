module TcHmi {
	export module Functions {
		export module file_handling {
			export function DownloadFromHmiToClient(Content: any, Name: any, Ext: any) {
                // Create a new Blob object using the content provided
                const blob = new Blob([Content], { type: 'text/plain' });

                // Create a link element
                const link = document.createElement('a');

                // Set the download attribute with the filename
                link.download = Ext ? `${Name}.${Ext}` : Name;

                // Create an object URL for the Blob
                link.href = URL.createObjectURL(blob);

                // Append the link to the body (it won't be visible)
                document.body.appendChild(link);

                // Programmatically click the link to trigger the download
                link.click();

                // Remove the link from the document
                document.body.removeChild(link);

                // Release the object URL to free up memory
                URL.revokeObjectURL(link.href);
            }
		}
	}
}
TcHmi.Functions.registerFunctionEx('DownloadFromHmiToClient', 'TcHmi.Functions.file_handling', TcHmi.Functions.file_handling.DownloadFromHmiToClient);

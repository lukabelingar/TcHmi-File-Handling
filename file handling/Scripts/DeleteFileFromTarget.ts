module TcHmi {
	export module Functions {
		export module file_handling {
			export function DeleteFileFromTarget(ctx: any, Name: any, Dir: any, Ext: any) {
				TcHmi.Server.writeSymbol('Delete', { 'fileName': BuildPath(Name, Dir, Ext) }, data => {
				//	if (data.error !== TcHmi.Errors.NONE ||
				//		data?.response?.error ||
				//		data?.response?.commands[0].error)
					//		console.error(data?.response?.commands[0].error)
					if (data.error == TcHmi.Errors.NONE)
						ctx.success(true);
					else {
						console.error(data.error);
						ctx.error(data.error);
                    }
				});
			}
		}
	}
}
TcHmi.Functions.registerFunctionEx('DeleteFileFromTarget', 'TcHmi.Functions.file_handling', TcHmi.Functions.file_handling.DeleteFileFromTarget);

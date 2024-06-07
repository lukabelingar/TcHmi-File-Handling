module TcHmi {
	export module Functions {
		export module file_handling {
            export function ListFilesFromTarget(ctx: any, Dir: any, Ext: any) {
                let ex = Ext ? Ext.startsWith('.') ? Ext : `.${Ext}` : '';
                TcHmi.Server.writeSymbol('ListFiles', `/${BuildPath(null, Dir, null)}` , data => {
                    let err = null;
                    if (data.error == TcHmi.Errors.NONE && data?.results) {
                        let d = data.results[0];
                        if (!d.error) {
                            let vals: any = d.value;
                            let da: Array<Object> = [];
                            for (let key in vals as any) {
                                if (!vals[key].fileFlags.includes("Directory") && (!ex || key.endsWith(ex)))
                                    da.push({'value': key, 'text': ex ? key.substring(0, key.length - ex.length) : key});
                            }
                            // d.value;
                            ctx.success(da);
                            return;
                        }
                        err = d;
                    }
                    else
                        err = data.error;
                    console.error(err);
                    ctx.error([]);
                });
			}
		}
	}
}
TcHmi.Functions.registerFunctionEx('ListFilesFromTarget', 'TcHmi.Functions.file_handling', TcHmi.Functions.file_handling.ListFilesFromTarget);

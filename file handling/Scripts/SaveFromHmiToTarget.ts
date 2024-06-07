module TcHmi {
	export module Functions {
        var fe: Controls.Beckhoff.TcHmiFileExplorerComponents.FileUploader;
        export module file_handling {
			export function SaveFromHmiToTarget(ctx: any, Content: any, Name: any, Dir: any, Ext: any) {
                if (!fe)
                    fe = new Controls.Beckhoff.TcHmiFileExplorerComponents.FileUploader();
                //const path = Ext ? `${Name}.${Ext}` : Name;
                var my_file: File = new File([Content], Name);
                fe.queue(BuildPath(Name, Dir, Ext), my_file, ok => ctx.success(true)).catch(err => { ctx.error(err); console.error(err); });
                //fe.queue(encodeURI(`/${Dir}/${path}`), my_file, ok => ctx.success(true)).catch(err => { ctx.error(err); console.error(err); });
            }
		}
	}
}
TcHmi.Functions.registerFunctionEx('SaveFromHmiToTarget', 'TcHmi.Functions.file_handling', TcHmi.Functions.file_handling.SaveFromHmiToTarget);

module TcHmi {
	export module Functions {
		export module file_handling {
			export function LoadFromTargetToHmi(ctx: any, Name: any, Dir: any, Ext: any) {
				$.get(`/${BuildPath(Name, Dir, Ext)}?${(new Date).getTime()}`, (result: string) => ctx.success(result)).catch(error => { ctx.error(error); console.error(error); });
			}
		}
	}
}
TcHmi.Functions.registerFunctionEx('LoadFromTargetToHmi', 'TcHmi.Functions.file_handling', TcHmi.Functions.file_handling.LoadFromTargetToHmi);

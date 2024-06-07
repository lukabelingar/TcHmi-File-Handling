module TcHmi {
	export module Functions {
		export module file_handling {
			export function BuildPath(Name: any, Dir: any, Ext: any) {
				const path = Name ? encodeURIComponent(Ext ? `${Name}.${Ext}` : Name) : '';
				const d = Dir ? Dir.replace(/^\/+|\/+$/g, '') : '';
				let x = encodeURI(`${d}/${path}`);
				return x;
			}
		}
	}
}
TcHmi.Functions.registerFunctionEx('BuildPath', 'TcHmi.Functions.file_handling', TcHmi.Functions.file_handling.BuildPath);

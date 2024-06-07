var TcHmi;
(function (TcHmi) {
    let Functions;
    (function (Functions) {
        let file_handling;
        (function (file_handling) {
            function BuildPath(Name, Dir, Ext) {
                const path = Name ? encodeURIComponent(Ext ? `${Name}.${Ext}` : Name) : '';
                const d = Dir ? Dir.replace(/^\/+|\/+$/g, '') : '';
                let x = encodeURI(`${d}/${path}`);
                return x;
            }
            file_handling.BuildPath = BuildPath;
        })(file_handling = Functions.file_handling || (Functions.file_handling = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi || (TcHmi = {}));
TcHmi.Functions.registerFunctionEx('BuildPath', 'TcHmi.Functions.file_handling', TcHmi.Functions.file_handling.BuildPath);
//# sourceMappingURL=BuildPath.js.map
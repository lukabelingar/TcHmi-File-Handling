var TcHmi;
(function (TcHmi) {
    let Functions;
    (function (Functions) {
        let file_handling;
        (function (file_handling) {
            function ListFilesFromTarget(ctx, Dir, Ext) {
                let ex = Ext ? Ext.startsWith('.') ? Ext : `.${Ext}` : '';
                TcHmi.Server.writeSymbol('ListFiles', `/${file_handling.BuildPath(null, Dir, null)}`, data => {
                    let err = null;
                    if (data.error == TcHmi.Errors.NONE && data?.results) {
                        let d = data.results[0];
                        if (!d.error) {
                            let vals = d.value;
                            let da = [];
                            for (let key in vals) {
                                if (!vals[key].fileFlags.includes("Directory") && (!ex || key.endsWith(ex)))
                                    da.push({ 'value': key, 'text': ex ? key.substring(0, key.length - ex.length) : key });
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
            file_handling.ListFilesFromTarget = ListFilesFromTarget;
        })(file_handling = Functions.file_handling || (Functions.file_handling = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi || (TcHmi = {}));
TcHmi.Functions.registerFunctionEx('ListFilesFromTarget', 'TcHmi.Functions.file_handling', TcHmi.Functions.file_handling.ListFilesFromTarget);
//# sourceMappingURL=ListFilesFromTarget.js.map
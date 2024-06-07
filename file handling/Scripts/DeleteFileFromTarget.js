var TcHmi;
(function (TcHmi) {
    let Functions;
    (function (Functions) {
        let file_handling;
        (function (file_handling) {
            function DeleteFileFromTarget(ctx, Name, Dir, Ext) {
                TcHmi.Server.writeSymbol('Delete', { 'fileName': file_handling.BuildPath(Name, Dir, Ext) }, data => {
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
            file_handling.DeleteFileFromTarget = DeleteFileFromTarget;
        })(file_handling = Functions.file_handling || (Functions.file_handling = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi || (TcHmi = {}));
TcHmi.Functions.registerFunctionEx('DeleteFileFromTarget', 'TcHmi.Functions.file_handling', TcHmi.Functions.file_handling.DeleteFileFromTarget);
//# sourceMappingURL=DeleteFileFromTarget.js.map